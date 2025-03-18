import { useState } from "react";
import "./Profile.css";

const images = [
  "src/assets/woman.png",
  "src/assets/Man.png",
  "src/assets/Kids.png"
];

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Track slide direction

  const nextImage = () => {
    setDirection("next"); // Set class for animation
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => {
      setDirection(""); // Reset class AFTER animation completes (1s)
    },1000); // Delay should match CSS animation duration
  };

  const prevImage = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setDirection("");
    } , 1000);
  };

  return (
    <div className="slideshow-container">
      <button onClick={prevImage}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/152/152351.png"
          alt="left arrow"
          style={{ width: "30px" }}
        />
      </button>
      <div className={`image-wrapper ${direction}`}>
      <img src={images[currentIndex]} alt="Profile pic" />
      </div>
      <button onClick={nextImage}><img src="https://cdn-icons-png.flaticon.com/128/152/152352.png"  alt="right arrow"style={{ width: "30px" }}/>
      </button>
    </div>
  );
};

export default Profile;
