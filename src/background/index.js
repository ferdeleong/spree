/*global chrome*/

messageInBackground();

chrome.browserAction.onClicked.addListener(function(tab) {
  alert(window.getSelection().toString());
});

export function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}