import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCfG7nTcwEPuQKxa-9vMKCPUvq1z4rXfM",
  authDomain: "zallyy-18004.firebaseapp.com",
  projectId: "zallyy-18004",
  storageBucket: "zallyy-18004.appspot.com",
  messagingSenderId: "21424571188",
  appId: "1:21424571188:web:672d2c6f6a71bd38859b61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";

const keenSlider = new KeenSlider(
  "#keen-slider",
  {
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  },
  []
);

const keenSliderPrevious = document.getElementById("keen-slider-previous");
const keenSliderNext = document.getElementById("keen-slider-next");

const keenSliderPreviousDesktop = document.getElementById(
  "keen-slider-previous-desktop"
);
const keenSliderNextDesktop = document.getElementById(
  "keen-slider-next-desktop"
);

keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
keenSliderNext.addEventListener("click", () => keenSlider.next());

keenSliderPreviousDesktop.addEventListener("click", () => keenSlider.prev());
keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
