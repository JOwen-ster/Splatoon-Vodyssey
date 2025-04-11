// <div class="video-wrapper">
//   <div class="video-loader" id="video-loader">🎬 Loading...</div>
//   <video id="myVideo" width="640" height="360" controls>
//     <source src="video.mp4" type="video/mp4">
//     Your browser does not support the video tag.
//   </video>
// </div>

// <style>
//   .video-wrapper {
//     position: relative;
//     display: inline-block;
//   }
//   .video-loader {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-size: 24px;
//     background: rgba(0,0,0,0.6);
//     color: white;
//     padding: 10px 20px;
//     border-radius: 10px;
//     z-index: 1;
//     pointer-events: none;
//   }
// </style>

// <script>
//   const video = document.getElementById('myVideo');
//   const loader = document.getElementById('video-loader');

//   video.addEventListener('canplay', () => {
//     loader.style.display = 'none';
//   });
// </script>
