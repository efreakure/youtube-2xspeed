console.log("playback 2X run");

window.addEventListener('yt-navigate-finish', () => {
  if (isScriptAdded) return
  const video = document.querySelector("video");

  if (video) {
    console.log("event add")
    isScriptAdded = addScript(video);
  }

});


setTimeout(addScriptManually, interval);

