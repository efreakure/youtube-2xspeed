
function setPlaybackRate(video, rate) {
  video.playbackRate = rate;
}
function addScript(video) {
  
  button1X.addEventListener("click", () => {
    setPlaybackRate(video, 1);
  })

  button2X.addEventListener("click", () => {
    setPlaybackRate(video, 2);
  })
  
  
  const control = document.querySelector(".ytp-right-controls");
  control.prepend(button2X);
  control.prepend(button1X);


  document.addEventListener('keydown', (e) => {
    switch (e.key) {

      case 'a':
        setPlaybackRate(video, 1);
        break;

      case 's':
        setPlaybackRate(video, 2);
        break;

      case 'z':
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        break;
      case ' ' || 'Spacebar' || '32':
        e.preventDefault();
        break;
    }
  })


}

window.addEventListener('yt-navigate-finish', function() {
  const video = document.querySelector("video");
  addScript(video);
});