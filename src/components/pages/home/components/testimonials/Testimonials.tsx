import { memo } from "react";

import styles from "./style.module.css";

const ListTestimonial = [
  "“I lost my vision, after the things I have seen on this rave”",
  "“Craziest Night in my life”",
  "“Unforgettable experience with great music and atmosphere”",
  "“Awesome party, met so many cool people!”",
  "“The best event ever! Can't wait for the next one!”",
  "“Incredible energy, loved every moment of it!”",
  "“Lost track of time, it was that amazing!”",
  "“Mind-blowing night, exceeded all expectations!”",
  "“Danced until sunrise, such a vibrant atmosphere!”",
  "“Unreal party, will cherish these memories forever!”",
  "“Met new friends and had the time of my life!”",
  "“Pure euphoria, couldn't stop dancing!”",
  "“Absolutely epic, the highlight of my year!”",
  "“A night I'll never forget, thank you for the amazing vibes!”",
];

const Testimonials = memo(() => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {ListTestimonial.map((t, index) => (
          <div key={index + "-1"} className={styles.slide}>
            {t}
          </div>
        ))}
        {ListTestimonial.map((t, index) => (
          <div key={index + "-2"} className={styles.slide}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
