const interval = 1000
let maxTiral = 10
let isScriptAdded = false;


function setPlaybackRate(video, rate) {
  video.playbackRate = rate;
}

function resetButtonColor() {
  button1X.style.color = "#EEEEEE";
  button2X.style.color = "#EEEEEE";
}

function setButtonColor(button) {
  resetButtonColor();
  button.style.color = "#aaaaaa";
}

function setShortcut(video) {
  
  document.addEventListener('keydown', (e) => {
    switch (e.key) {

      case 'a':
        setPlaybackRate(video, 1);
        setButtonColor(button1X);
        console.log('video speed set to 1')
        break;

      case 's':
        setPlaybackRate(video, 1.5);
        resetButtonColor();
        console.log('video speed set to 1.5')
        break;

      case 'd':
        setPlaybackRate(video, 2);
        setButtonColor(button2X);
        console.log('video speed set to 2')
        break;

      case 'z':
        console.log('z')
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

function addScript(video) {
  if (video.classList.contains('2x-button')) return

  try {
    console.log("add script run");
    button1X.addEventListener("click", () => {
      setPlaybackRate(video, 1);
      setButtonColor(button1X)
    })
    
    button2X.addEventListener("click", () => {
      setPlaybackRate(video, 2);
      setButtonColor(button2X)
    })
    
    
    const control = document.querySelector(".ytp-right-controls");
    control.prepend(button2X);
    control.prepend(button1X);
    
    setShortcut(video);
    video.classList.add('2x-button')  
    return true

  } catch (error) {
    console.log('2x error')
    console.error(error);
    return false
  }



}

const addScriptManually = () => {
  if (isScriptAdded) return

  console.log("playback 2X interval run")

  const addScriptInterval = setInterval(() => {
    if (maxTiral === 0 || isScriptAdded) {
      if (!isScriptAdded) console.log("script not added")
      clearInterval(addScriptInterval);
    }
    maxTiral--;

  const video = document.querySelector("video");
  if (video) {
    clearInterval(addScriptInterval);
    console.log("interval add")
    isScriptAdded = addScript(video);
  }
  }, interval);
}