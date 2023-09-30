console.log("INJECTED CONTENT");
const fetchBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const base64 = await convertBlobToBase64(blob);
      
        return base64;
      };
      
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

      
var recorder = null
function onAccessApproved(stream) {
        recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.start();

        recorder.onstop = function(){

                stream.getTracks().forEach((track)=> {
                        if(track.readyState === "live"){
                                track.stop()
                        }
                })
        }
        
        recorder.ondataavailable = async function(event) {
                // chunks.push(event.data);
                if (event.data.size > 0) {
                        const blobFile = new Blob(event.data, { type: "video/webm" });
                        const base64 = await fetchBlob(URL.createObjectURL(blobFile));
        
                        sendChunkToBackend(base64);
                }
                // let recordedBlob = chunks;
                // let url = URL.createObjectURL(blobFile);

                // let a = document.createElement("a");
                // a.style.display = "none";
                // a.href = url;
                // a.download = "screen-recording.webm"

                // document.body.appendChild(a);
                // a.click();

                // document.body.removeChild(a);
                // URL.revokeObjectURL(url);
        }
        const sendChunkToBackend = (chunkData) => {
                const backendEndpoint = ""; 

  fetch(backendEndpoint, {
    method: "POST",
    body: JSON.stringify({ chunkData }), // Send the chunk data in the request body
    headers: {
      "Content-Type": "application/json", // Adjust the content type as needed
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response if it's JSON
    })
    .then((data) => {
      // Handle the response from the backend as needed
      console.log("Backend Response:", data);
    })
    .catch((error) => {
      console.error("Error sending chunk to the backend:", error);
    });
        }
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if(message.action === "request_recording"){
                console.log("requesting recording");

                sendResponse("processed");

                navigator.mediaDevices.getDisplayMedia({
                        audio: true,
                        video: {
                                width: 99999999,
                                height:99999999
                        }
                }).then((stream) => {
                        onAccessApproved(stream)
                })
        }
})