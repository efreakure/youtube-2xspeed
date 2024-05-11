

function isVideoFound() {

  const video = document.querySelector("video");
  if (video == null) {
    // console.log("video not found")
    // console.log(Date.now())
    return false;
  } else {
    // console.log("video found")
    return video;
  }

}
function addScript(video) {

  const control = document.querySelector(".ytp-right-controls");

  button2X.addEventListener("click", () => {
    video.playbackRate = 2;
  })
  control.prepend(button2X);


  button1X.addEventListener("click", () => {
    video.playbackRate = 1;
  })
  control.prepend(button1X);


  document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
      video.playbackRate = 1;
    } else if (e.key === 's') {
      video.playbackRate = 2;
    }
  })

}

const interval = 1000
maxTiral = 10

const findVideoInterval = setInterval(() => {
  if (maxTiral === 0) {
    clearInterval(findVideoInterval);
  }
  maxTiral--;
  console.log(maxTiral)

  const video = isVideoFound();
  if (video) {
    clearInterval(findVideoInterval);
    addScript(video);
  }
}, interval);
