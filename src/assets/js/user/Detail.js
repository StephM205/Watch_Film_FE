import { useEffect } from "react";

const Detailjs = () => {
  useEffect(() => {
  const posterImg = document.querySelector('.poster-img');
            const video = document.getElementById('slide-video');
            
            posterImg.addEventListener('mouseenter', function() {
                video.style.opacity = '1';
                video.play();
            });
            
            posterImg.addEventListener('mouseleave', function() {
                video.style.opacity = '0';
                video.pause();
            });
            
       
  }, []);
};
export default Detailjs;
