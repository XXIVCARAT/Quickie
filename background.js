// Create context menu item
chrome.contextMenus.create({
    id: "chatGPTContextMenu",
    title: "Ask ChatGPT",
    contexts: ["selection"],
  });
  
  // Handle context menu item click
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "chatGPTContextMenu") {
      // Retrieve selected text
      const selectedText = info.selectionText;
  
      // Open a new window with the chat interface
      chrome.windows.create({
        url: chrome.runtime.getURL("chat.html"),
        type: "popup",
        width: 400,
        height: 500,
      }, function (window) {
        // Send the selected text to the chat window
        chrome.tabs.sendMessage(window.tabs[0].id, { text: selectedText });
      });
    }
  });
  