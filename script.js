const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media streem , pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        // Catch Errors
        console.log('whoops, error here:', e);
    }
};

buttonElement.addEventListener('click', async () => {
    buttonElement.disabled = true;
    await videoElement.requestPictureInPicture();
    buttonElement.disabled = false;
});
// On load

selectMediaStream();
