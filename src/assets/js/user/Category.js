import { useEffect } from "react";

const Categoryjs = () => {
  useEffect(() => {
    const filterToggle = document.getElementById("filter-toggle");
    const closeFilters = document.getElementById("close-filters");
    const filtersSidebar = document.getElementById("filters-sidebar");

    if (filterToggle) {
      filterToggle.addEventListener("click", function () {
        filtersSidebar.classList.add("active");
      });
    }

    if (closeFilters) {
      closeFilters.addEventListener("click", function () {
        filtersSidebar.classList.remove("active");
      });
    }

    // View options
    const viewButtons = document.querySelectorAll(".view-btn");
    const moviesGrid = document.querySelector(".movie-grid");

    viewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        viewButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        // Change layout based on view
        if (this.dataset.view === "list") {
          moviesGrid.classList.add("list-view");
        } else {
          moviesGrid.classList.remove("list-view");
        }
      });
    });

    // Filter toggles
    const filterHeaders = document.querySelectorAll(".filter-header");

    filterHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector(".toggle-filter i");

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.classList.remove("fa-chevron-up");
          icon.classList.add("fa-chevron-down");
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.classList.remove("fa-chevron-down");
          icon.classList.add("fa-chevron-up");
        }
      });
    });

    // Year presets
    const yearPresets = document.querySelectorAll(".year-preset");
    const yearFrom = document.getElementById("year-from");
    const yearTo = document.getElementById("year-to");

    yearPresets.forEach((preset) => {
      preset.addEventListener("click", function () {
        const years = this.dataset.years.split("-");
        yearFrom.value = years[0];
        yearTo.value = years[1];
      });
    });

    // Remove filter tags
    const removeFilterButtons = document.querySelectorAll(".remove-filter");
    const clearAllFilters = document.querySelector(".clear-all-filters");
    const filterCount = document.querySelector(".filter-count");

    removeFilterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        this.parentElement.remove();
        updateFilterCount();
      });
    });

    if (clearAllFilters) {
      clearAllFilters.addEventListener("click", function () {
        const filterTags = document.querySelectorAll(".filter-tag");
        filterTags.forEach((tag) => tag.remove());
        updateFilterCount();
      });
    }

    function updateFilterCount() {
      const filterTags = document.querySelectorAll(".filter-tag");
      if (filterCount) {
        filterCount.textContent = filterTags.length;
      }
    }

    // Slide buttons functionality
    const slideLeft = document.querySelector(".slide-btn-left");
    const slideRight = document.querySelector(".slide-btn-right");
    const movieGrid = document.querySelector(".movie-grid");

    if (slideLeft && slideRight && movieGrid) {
      slideLeft.addEventListener("click", function () {
        movieGrid.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      });

      slideRight.addEventListener("click", function () {
        movieGrid.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      });
    }
  }, []);
};
export default Categoryjs;
