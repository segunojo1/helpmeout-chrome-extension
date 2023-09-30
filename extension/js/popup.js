document.addEventListener("DOMContentLoaded", () => {
        const startRecord = document.querySelector(".btn")

        startRecord.addEventListener("click", () => {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                        chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"}, function(response){
                                if (!chrome.runtime.lastError) {
                                        console.log(response);
                                }else{
                                        console.log(chrome.runtime.lastError, "err line 10");
                                        console.log(response);
                                }
                        })
                })
        })
})
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener('click', () => {
        // Find the popup window and close it
        window.close(); 
});
console.log("popup");