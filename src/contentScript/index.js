/*global chrome*/

chrome.browserAction.onClicked.addListener(function(tab) {
  alert(window.getSelection().toString());
});

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
loadSelectedText();


// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function loadSelectedText() {
  console.log(window.getSelection().toString());
}
