import { useEffect } from "react";

const Watchjs = () => {
  useEffect(() => {
    // Khởi tạo video player
    const video = document.getElementById("main-movie-player");
    const playPauseBtn = document.getElementById("main-play-pause");
    const rewindBtn = document.getElementById("rewind-btn");
    const forwardBtn = document.getElementById("forward-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressFill = document.getElementById("progress-fill");
    const currentTimeDisplay = document.getElementById("current-time");
    const totalTimeDisplay = document.getElementById("total-time");
    const volumeControl = document.getElementById("volume-control");
    const volumeSlider = document.getElementById("volume-slider");
    const volumeSpan = document.getElementById("volume-span");
    const fullscreenToggle = document.getElementById("fullscreen-toggle");
    const settingsBtn = document.getElementById("settings-btn");
    const closeSettings = document.getElementById("close-settings");
    const settingsModal = document.getElementById("settings-modal");
    const prevEpisodeBtn = document.getElementById("prev-episode");
    const nextEpisodeBtn = document.getElementById("next-episode");
    const episodeItems = document.querySelectorAll(".episode-item-full");
    const volumeWrapper = document.querySelector('.volume-wrapper');

    // Kiểm tra xem video có tồn tại không
    if (video) {
      // Xử lý play/pause
      if (playPauseBtn) {
        playPauseBtn.addEventListener("click", function () {
          if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
          } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
          }
        });

        // Cập nhật nút play/pause khi video tự động play/pause
        video.addEventListener("play", function() {
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });

        video.addEventListener("pause", function() {
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
      }

      // Xử lý tua lại 10 giây
      if (rewindBtn) {
        rewindBtn.addEventListener("click", function () {
          video.currentTime = Math.max(0, video.currentTime - 10);
        });
      }

      // Xử lý tua tới 10 giây
      if (forwardBtn) {
        forwardBtn.addEventListener("click", function () {
          video.currentTime = Math.min(video.duration, video.currentTime + 10);
        });
      }

      // Cập nhật thanh tiến trình
      video.addEventListener("timeupdate", function () {
        if (video.duration) {
          const progress = (video.currentTime / video.duration) * 100;
          if (progressFill) {
            progressFill.style.width = progress + "%";
            progressFill.classList.toggle("active", progress > 0);
          }

          // Cập nhật thời gian hiện tại
          if (currentTimeDisplay)
            currentTimeDisplay.textContent = formatTime(video.currentTime);
        }
      });

      // Cập nhật thời gian tổng khi video được tải
      video.addEventListener("loadedmetadata", function () {
        if (totalTimeDisplay)
          totalTimeDisplay.textContent = formatTime(video.duration);
      });

      // Xử lý nhấp vào thanh tiến trình
      if (progressBar) {
        progressBar.addEventListener("click", function (e) {
          const rect = progressBar.getBoundingClientRect();
          const pos = (e.clientX - rect.left) / rect.width;
          video.currentTime = pos * video.duration;
        });
      }
    }

    // Xử lý điều khiển âm lượng
    if (volumeControl && volumeSlider) {
      // Hiển thị volume box khi hover
      if (volumeWrapper) {
        volumeWrapper.addEventListener('mouseenter', function() {
          const volumeBox = this.querySelector('.volume-box');
          if (volumeBox) {
            volumeBox.style.opacity = '1';
            volumeBox.style.visibility = 'visible';
            volumeBox.style.transform = 'translateX(0)';
          }
        });

        volumeWrapper.addEventListener('mouseleave', function() {
          const volumeBox = this.querySelector('.volume-box');
          if (volumeBox) {
            volumeBox.style.opacity = '0';
            volumeBox.style.visibility = 'hidden';
            volumeBox.style.transform = 'translateX(10px)';
          }
        });
      }

      volumeSlider.addEventListener("input", function () {
        const volume = parseFloat(this.value);
        if (video) video.volume = volume;

        // Cập nhật phần trăm âm lượng
        if (volumeSpan) {
          volumeSpan.textContent = Math.round(volume * 100) + '%';
        }

        // Cập nhật biểu tượng âm lượng
        if (volume === 0) {
          volumeControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else if (volume < 0.5) {
          volumeControl.innerHTML = '<i class="fas fa-volume-down"></i>';
        } else {
          volumeControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
      });

      // Thiết lập âm lượng mặc định
      if (video) {
        video.volume = 1.0;
        if (volumeSpan) volumeSpan.textContent = '100%';
      }
    }

    // Xử lý chế độ toàn màn hình
    if (fullscreenToggle) {
      fullscreenToggle.addEventListener("click", function () {
        const videoContainer = document.querySelector(".video-container-full");

        if (!document.fullscreenElement) {
          if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
          } else if (videoContainer.mozRequestFullScreen) {
            videoContainer.mozRequestFullScreen();
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
          } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
          }
          fullscreenToggle.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
        }
      });

      // Cập nhật nút fullscreen khi thoát fullscreen bằng phím tắt
      document.addEventListener('fullscreenchange', updateFullscreenButton);
      document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
      document.addEventListener('mozfullscreenchange', updateFullscreenButton);
      
      function updateFullscreenButton() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement && 
            !document.mozFullScreenElement) {
          fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
        }
      }
    }

    // Xử lý settings modal
    if (settingsBtn && settingsModal && closeSettings) {
      settingsBtn.addEventListener("click", function () {
        settingsModal.classList.add("active");
      });

      closeSettings.addEventListener("click", function () {
        settingsModal.classList.remove("active");
      });

      settingsModal.addEventListener("click", function (e) {
        if (e.target === settingsModal) {
          settingsModal.classList.remove("active");
        }
      });

      // Xử lý thay đổi tốc độ phát
      const speedSelect = document.getElementById("speed-select");
      if (speedSelect && video) {
        speedSelect.addEventListener("change", function () {
          video.playbackRate = parseFloat(this.value);
        });
      }
    }

    // Xử lý chuyển tập phim
    episodeItems.forEach((item) => {
      item.addEventListener("click", function () {
        const episode = this.getAttribute("data-episode") || "1";

        // Xóa lớp active khỏi tất cả các tập
        episodeItems.forEach((ep) => {
          ep.classList.remove("active");
        });

        // Thêm lớp active cho tập được chọn
        this.classList.add("active");

        // Cập nhật thông tin tập hiện tại
        const episodeNumber = this.querySelector(".episode-num").textContent;
        const episodeTitle = this.querySelector(".episode-title").textContent;

        const currentEpisode = document.querySelector(".current-episode-full");
        if (currentEpisode) {
          const episodeNumberEl = currentEpisode.querySelector(".episode-number");
          const episodeTitleEl = currentEpisode.querySelector(".episode-title");

          if (episodeNumberEl) episodeNumberEl.textContent = episodeNumber;
          if (episodeTitleEl) episodeTitleEl.textContent = episodeTitle;
        }

        console.log("Đã chuyển sang: " + episodeNumber + " - " + episodeTitle);
        
        // Ở đây bạn có thể thêm logic để tải video mới
        // Ví dụ: video.src = 'new-video-src';
        // video.load();
        // video.play();
      });
    });

    // Xử lý nút tập trước
    if (prevEpisodeBtn) {
      prevEpisodeBtn.addEventListener("click", function () {
        const activeEpisode = document.querySelector(".episode-item-full.active");
        if (activeEpisode) {
          const prevEpisode = activeEpisode.previousElementSibling;

          if (prevEpisode && prevEpisode.classList.contains("episode-item-full")) {
            prevEpisode.click();
          } else {
            console.log("Đây là tập đầu tiên");
          }
        }
      });
    }

    // Xử lý nút tập sau
    if (nextEpisodeBtn) {
      nextEpisodeBtn.addEventListener("click", function () {
        const activeEpisode = document.querySelector(".episode-item-full.active");
        if (activeEpisode) {
          const nextEpisode = activeEpisode.nextElementSibling;

          if (nextEpisode && nextEpisode.classList.contains("episode-item-full")) {
            nextEpisode.click();
          } else {
            console.log("Đây là tập cuối cùng");
          }
        }
      });
    }

    // Xử lý star rating
    const stars = document.querySelectorAll(".star-rating i");
    let currentRating = 0;

    if (stars.length > 0) {
      stars.forEach((star) => {
        star.addEventListener("mouseenter", function () {
          const rating = this.getAttribute("data-rating");
          highlightStars(rating);
        });

        star.addEventListener("mouseleave", function () {
          resetStars();
        });

        star.addEventListener("click", function () {
          const rating = this.getAttribute("data-rating");
          setRating(rating);
        });
      });

      function highlightStars(rating) {
        stars.forEach((star) => {
          if (star.getAttribute("data-rating") <= rating) {
            star.classList.add("fas");
            star.classList.remove("far");
          } else {
            star.classList.add("far");
            star.classList.remove("fas");
          }
        });
      }

      function resetStars() {
        stars.forEach((star) => {
          if (star.getAttribute("data-rating") <= currentRating) {
            star.classList.add("fas");
            star.classList.remove("far");
          } else {
            star.classList.add("far");
            star.classList.remove("fas");
          }
        });
      }

      function setRating(rating) {
        currentRating = parseInt(rating);
        console.log("Đánh giá: " + rating + " sao");
      }
    }

    // Xử lý gửi bình luận
    const submitCommentBtn = document.querySelector(".submit-comment-btn");
    if (submitCommentBtn) {
      submitCommentBtn.addEventListener("click", function () {
        const commentInput = document.querySelector(".comment-input");
        if (commentInput) {
          const commentText = commentInput.value.trim();

          if (commentText && currentRating > 0) {
            console.log(
              "Đã gửi bình luận: " +
                commentText +
                " với đánh giá " +
                currentRating +
                " sao"
            );
            commentInput.value = "";
            if (stars.length > 0) resetStars();
            currentRating = 0;

            // Hiển thị thông báo thành công
            alert("Đã gửi đánh giá thành công!");
          } else {
            alert("Vui lòng nhập bình luận và chọn đánh giá sao!");
          }
        }
      });
    }

    // Hàm định dạng thời gian
    function formatTime(seconds) {
      if (isNaN(seconds)) return "00:00";
      
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }

    // Xử lý hiệu ứng hover cho các phần tử
    const cards = document.querySelectorAll(
      ".related-movie-card, .comment-item"
    );
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

    // Xử lý hiệu ứng click cho các button
    const buttons = document.querySelectorAll(
      ".episode-nav-btn, .submit-comment-btn, .control-btn-main"
    );
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      if (video) {
        video.pause();
      }
    };
  }, []);

  return null;
};

export default Watchjs;