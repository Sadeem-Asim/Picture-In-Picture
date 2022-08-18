const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  videoElement.srcObject = mediaStream;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };
}
// on load
selectMediaStream();
// on clicking button
button.addEventListener("click", async () => {
  button.disable = false;
  await videoElement.requestPictureInPicture();
  button.disable = true;
});
