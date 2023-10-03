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
        overlay.style.display = "flex";
        recorder = new MediaRecorder(stream);

        startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);

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
                window.location.replace("https://helpmeout-vid.netlify.app/id")
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
                        body: JSON.stringify(formData),
                        headers: {
                          "Content-Type": "application/json",
                        },
                }).then((response) => response.json())
                .then((data) => console.log(data))
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
                fetch(`${baseURL}/start-recording`, {
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
// const image = document.createElement('img');
// image.src = ''; 
overlay.innerHTML = `
<div style="height: 50px; width: 1px; background-color: #fff"></div>
<div class="pause" style="padding: 17px; border-radius: 100%; background-color: #fff">
<img src="https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166602/Icons/ae3ufl4s59dy7tvh0tsb.png" />
</div>
<div style="padding: 17px; border-radius: 100%; background-color: #fff">
<img src="https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166664/Icons/gj2gn1upqjimsgv2j8cz.png"/>
</div>
<div style="padding: 15px; border-radius: 100%; background-color: #fff">
<img src="https://i.ibb.co/3fMGKcc/microphone.png"/>
</div>


`;

// overlay.appendChild(image);
// Style the overlay using CSS
const overlayStyle = `
  position: fixed;
  bottom: 10px;
  left: 10px;
  background-color: #141414;
  color: white;
  padding: 13px;
  border-radius: 45px;
  z-index: 99;
  align-items: center;
  gap: 10px;
  border: 8px solid #6262622B;
`;

overlay.style.cssText = overlayStyle;

// Append the overlay to the document body
document.body.appendChild(overlay);

const startRecord = document.querySelector(".btn");
overlay.style.display = "none";

const timerElement = document.createElement('div');
timerElement.id = 'recording-time';
timerElement.innerText = '00:00:00'; // Initial timer value

let startTime = 0;
let timerInterval;

// Function to format time in HH:MM:SS format
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimer() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000);
  timerElement.innerText = formatTime(currentTime);
}

const deleteElem = document.createElement('div');
deleteElem.id = 'delete';
deleteElem.style = "padding: 17px; border-radius: 100%; background-color: #4B4B4B"

overlay.appendChild(deleteElem);
const imgg = document.createElement('img');
imgg.src = "https://i.ibb.co/FzRDG6V/Vector.png"
deleteElem.appendChild(imgg);
deleteElem.addEventListener("click", () => {
        recorder.s
})

overlay.insertBefore(timerElement, overlay.firstChild)