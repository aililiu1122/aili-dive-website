// Get video and text elements
const video = document.getElementById("background-video");
const enterPage = document.getElementById("enter-page");
const mainPage = document.getElementById("main-page");

// Try to play with sound first
video.muted = false;

// Add error handling for video
video.addEventListener('error', function(e) {
  console.error('Error loading video:', e);
});

// Function to attempt playing video
async function attemptPlay() {
  try {
    // Try to play with sound
    await video.play();
    console.log('Playing with sound');
  } catch (err) {
    console.log('Autoplay with sound failed, falling back to muted');
    // If it fails, mute and try again
    video.muted = true;
    try {
      await video.play();
      console.log('Playing muted');
    } catch (err) {
      console.error('Both autoplay attempts failed:', err);
    }
  }
}

// Add loading check
video.addEventListener('loadeddata', function() {
  console.log('Video loaded successfully');
  attemptPlay();
});

// Force video load if needed
video.load();

// Add a click event listener to the Enter Page
enterPage.addEventListener("click", () => {
  // Hide the Enter Page
  enterPage.style.display = "none";
  // Show the Main Page
  mainPage.style.display = "flex";
});
