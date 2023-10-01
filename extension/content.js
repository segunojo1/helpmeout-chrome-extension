let recording_url;

console.log("INJECTED CONTENT");
const convertBlobToBase64 = (blob) => {
        return new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                        const base64data = reader.result;
                        
                        resolve(base64data);
                };
        });
};

var recorder = null;
let chunks = [];
const baseURL = "https://helpmeout-4ejz.onrender.com"; 

function onAccessApproved(stream) {
        overlay.style.display = "block";
        recorder = new MediaRecorder(stream);
        
        recorder.onstop = function () {
                clearInterval(intt);
                overlay.style.display = "none";
                stream.getTracks().forEach((track) => {
                        if (track.readyState === "live") {
                                track.stop();
                                clearInterval(intt);
                                overlay.style.display = "none";
                        }
                });
        };
        
        recorder.ondataavailable = function (event) {
                if (event.data.size > 0) {
      // Push the blob data to the chunks array
      chunks.push(event.data);
      console.log("Data available");
}
};

recorder.start(1000);

const sendChunkToBackend = async () => {
        if (chunks.length > 0) {
                const blobFile = new Blob(chunks, { type: "video/webm" });
                const base64 = await convertBlobToBase64(blobFile);
                const formData = new FormData();
                formData.append('videoFile', blobFile, 'screen-recording.webm');
                console.log("Sending chunk:", base64);

                // Send the base64 data to the backend using fetch or another method
               fetch(recording_url, {
                        method: "POST",
                        body: JSON.stringify({video: base64}),
                        headers: {
                          "Content-Type": "application/json",
                        },
                }).then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error("err sending chunk", err))
                
                // Clear the chunks array
                chunks = [];
        }
};
const intt = setInterval(sendChunkToBackend, 1000);

}

function sendToBackend(data) {
        console.log("sent to back");
  // Implement logic to send data to the backend using fetch or another method
//   fetch(`${backendEndpoint}/api/recording`, {
//         method: "POST",
//         body: JSON.stringify({ data }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//     .then((response) => {
//       if (response.ok) {
//         console.log("Chunk sent successfully");
//         console.log(response);
//       } else {
//         console.error("Error sending chunk");
//       }
//     })
//     .catch((error) => {
//       console.error("Error sending chunk:", error);
//     });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse("processed");

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 99999999,
          height: 99999999,
        },
      })
      .then((stream) => {
                fetch(`${baseURL}/api/recording`, {
                        method: "POST",
                        body: JSON.stringify({ user_id: "testid" }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      })
                    .then((response) => {
                //       if (response.ok) {
                //         console.log("Chunk sent successfully");
                //         console.log(response);
                //       } else {
                //         console.error("Error sending chunk");
                //       }
                return response.json();
                    })
                    .then((data) => {
                        console.log("Chunk sent successfully");
                        console.log(data);
                        recording_url = data.recording_url;
                        console.log(recording_url);
                    })
                    .catch((error) => {
                      console.error("Error sending chunk:", error);
                    });
        onAccessApproved(stream);
      });
  }
});

const overlay = document.createElement("div");
overlay.id = "overlay";
const image = document.createElement('img');
image.src = './assets/monitor.svg'; 
overlay.innerHTML = `
<div id="recording-time">00:00:00</div>
<button id="pause-record">Pause</button>
<button id="stop-record">Stop</button>
`;

overlay.appendChild(image);
// Style the overlay using CSS
const overlayStyle = `
  position: fixed;
  bottom: 10px;
  left: 10px;
  background-color: #141414;
  color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 99;
`;

overlay.style.cssText = overlayStyle;

// Append the overlay to the document body
document.body.appendChild(overlay);

const startRecord = document.querySelector(".btn");
overlay.style.display = "block";