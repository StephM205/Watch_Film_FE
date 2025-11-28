import { useEffect } from "react";

const Homejs = () => {
  useEffect(() => {
      const iconLinks = document.querySelector(".icon-links");
      let timeoutId;
      let hoveris= false;
       iconLinks.addEventListener("mouseenter", () =>{
        hoveris = true;
       })
       iconLinks.addEventListener("mouseleave", () =>{
        hoveris = false;
       })

      window.addEventListener("scroll", () =>{
      if(hoveris) return;
       iconLinks.classList.add("show")
       clearTimeout(timeoutId);
       timeoutId = setTimeout(() =>{
         if(!hoveris){
           iconLinks.classList.remove("show")
         }
       },1000);
  });
      // ===== MOBILE MENU =====
      const menuToggle = document.getElementById("menu-toggle");
      const navMobile = document.getElementById("nav-mobile");
      const closeMenu = document.getElementById("close-menu");
      const overlay = document.getElementById("overlay");

      function openMobileMenu() {
        navMobile.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeMobileMenu() {
        navMobile.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }

      menuToggle.addEventListener("click", openMobileMenu);
      closeMenu.addEventListener("click", closeMobileMenu);
      overlay.addEventListener("click", closeMobileMenu);

      // ===== DROPDOWN MENU =====
      const genreBtn = document.getElementById("genre-btn"),
        dropdown = document.getElementById("dropdowncontent");
      genreBtn.onclick = (e) => {
        e.preventDefault();
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
        genreBtn.querySelector("i").classList.toggle("active");
      };

      // ===== MOBILE DROPDOWN MENU =====
      const mobileGenreBtn = document.getElementById("mobile-genre-btn");
      const mobileDropdown = document.getElementById("mobile-dropdowncontent");

      mobileGenreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        mobileDropdown.classList.toggle("active");
        mobileGenreBtn.querySelector("i").classList.toggle("active");
      });

      // ===== DESCRIPTION more-btn =====
      const groupBtns = document.querySelectorAll(".group-btn");
      groupBtns.forEach((groupBtn) => {
        const desc = groupBtn.querySelector(".description-dong");
        const moreBtn = groupBtn.querySelector(".more-btn");

        if (desc && moreBtn) {
          groupBtn.addEventListener("mouseenter", () => {
            desc.style.display = "block";
            moreBtn.style.transform = "rotate(180deg)";
            moreBtn.classList.add("active");
          });

          groupBtn.addEventListener("mouseleave", () => {
            desc.style.display = "none";
            moreBtn.style.transform = "rotate(0deg)";
            moreBtn.classList.remove("active");
          });
        }
      });

      // ===== SLIDER =====
      const slides = document.querySelectorAll(".slide");
      const thumbs = document.querySelectorAll(".thumb");
      const dots = document.querySelectorAll(".dot");
      const banner = document.querySelector(".banner");
      let index = 0;
      let interval;

      const showSlide = (i) => {
        index = i;
        slides.forEach((slide, idx) => {
          const video = slide.querySelector("video");
          const img = slide.querySelector("img");
          const volume = slide.querySelector(".volume");

          if (video) {
            video.volume = 0;
            video.muted = false;
            const updatevolumeicon = () => {
              if (!volume) return;
              if (video.muted || video.volume === 0) {
                volume.style.color = "#fff";
                volume.style.backgroundColor = "green";
                volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
              } else {
                volume.style.color = "#fff";
                volume.style.backgroundColor = "red";
                volume.innerHTML = '<i class="fas fa-volume-up"></i>';
              }
            };
            updatevolumeicon();
          }

          if (idx === i) {
            slide.classList.add("active");
            if (video) {
              setTimeout(() => {
                img.style.display = "none";
                video.style.display = "block";
                video.play().catch((e) => console.log("Lỗi phát video:", e));
              }, 1000);
            }
          } else {
            img.style.display = "block";
            video.style.display = "none";
            slide.classList.remove("active");
          }
        });

        // Cập nhật trạng thái active cho thumb và dot
        thumbs.forEach((thumb, idx) =>
          thumb.classList.toggle("active", idx === i)
        );
        dots.forEach((dot, idx) => dot.classList.toggle("active", idx === i));
      };

      const nextSlide = () => showSlide((index + 1) % slides.length);

      const startSlider = () => {
        stopSlider();
        interval = setInterval(nextSlide, 9000);
      };

      const stopSlider = () => clearInterval(interval);

      // Xử lý sự kiện click
      thumbs.forEach((thumb, i) =>
        thumb.addEventListener("click", () => {
          stopSlider();
          showSlide(i);
          startSlider();
        })
      );
      dots.forEach((dot, i) =>
        dot.addEventListener("click", () => {
          stopSlider();
          showSlide(i);
          startSlider();
        })
      );

      // Xử lý sự kiện hover
      banner.addEventListener("mouseenter", stopSlider);
      banner.addEventListener("mouseleave", startSlider);

      // Khởi động slider
      showSlide(0);
      startSlider();

      // ===== SEARCH =====
      const input = document.getElementById("search-input"),
        resultsBox = document.getElementById("search-results"),
        clearBtn = document.getElementById("clear-btn"),
        searchBtn = document.getElementById("search-btn"),
        spinner = searchBtn.querySelector(".fa-spinner"),
        icon = searchBtn.querySelector(".fa-search");

      let timer;
      const data = [
        "Tình Yêu Không Thể Nói Thành Lời",
        "Phim Hành Động Mới",
        "Phim Tình Cảm Lãng Mạn",
      ];

      const toggleDisplay = (el, show) =>
        (el.style.display = show ? "block" : "none");

      function search(keyword) {
        const filtered = data.filter((t) =>
          t.toLowerCase().includes(keyword.toLowerCase())
        );
        resultsBox.innerHTML = filtered
          .map((t) => `<div class="list-result"><span>${t}</span></div>`)
          .join("");
        toggleDisplay(resultsBox, filtered.length > 0);
        toggleDisplay(spinner, false);
        toggleDisplay(icon, true);
      }

      input.oninput = () => {
        clearTimeout(timer);
        const keyword = input.value.trim();
        if (!keyword) return toggleDisplay(resultsBox, false);

        toggleDisplay(spinner, true);
        toggleDisplay(icon, false);

        timer = setTimeout(() => search(keyword), 600);
      };

      clearBtn.onclick = () => {
        input.value = "";
        toggleDisplay(resultsBox, false);
        input.focus();
      };

      // ===== AUTO SCROLL =====
      const grid = document.querySelectorAll(".movie-grid");
      const btnLeft = document.querySelectorAll(".slide-btn-left");
      const btnRight = document.querySelectorAll(".slide-btn-right");

      const autoScroll = [];
      grid.forEach((item, i) => {
        autoScroll[i] = setInterval(() => {
          item.scrollLeft += 277;
          if (item.scrollLeft >= item.scrollWidth - item.clientWidth) {
            item.scrollLeft -= 277;
          }
        }, 4000);
      });

      btnLeft.forEach((item, i) => {
        item.addEventListener("click", () => {
          grid[i].scrollLeft -= 277;
          item.style.display = "none";
          btnRight[i].style.display = "block";
        });
      });

      btnRight.forEach((item, i) => {
        item.addEventListener("click", () => {
          grid[i].scrollLeft += 277;
          item.style.display = "none";
          btnLeft[i].style.display = "block";
        });
      });

      grid.forEach((item, i) => {
        item.addEventListener("mouseenter", () => clearInterval(autoScroll[i]));
        item.addEventListener(
          "mouseleave",
          () =>
            (autoScroll[i] = setInterval(() => {
              item.scrollLeft += 277;
              if (item.scrollLeft >= item.scrollWidth - item.clientWidth) {
                item.scrollLeft -= 277;
              }
            }, 4000))
        );
      });



  }, []);
};
export default Homejs;
