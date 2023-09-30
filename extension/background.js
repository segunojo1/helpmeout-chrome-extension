//chrome

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === "complete" && /^http/.test(tab.url)){
                chrome.scripting.executeScript({
                        target: {tabId},
                        files: ["./conent.js"]
                }).then(()=> {
                        console.log('Injected');
                }).cache(err => console.log(err, "error in back"))
        }
})
console.log("back");

// chrome.action.onClicked

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

// })