const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// Pricing Code
const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabButtons.forEach((tab, index) => {
  if (index === 0) {
    //
  } else {
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  if (!clickedTab) return;
  e.preventDefault();

  const activePanelId = clickedTab.getAttribute("href");
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });
  activePanel.removeAttribute("hidden", false);
});

// Pricing Buttons
const btnList = document.querySelectorAll(".pricing-button");

btnList.forEach((btnEl) => {
  btnEl.addEventListener("click", () => {
    document.querySelector(".selected")?.classList.remove("selected");
    btnEl.classList.add("selected");
  });
});

// Testimonials Scroller
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Select scroller
const scroller = document.querySelector(".scroller");
const scrollerInner = document.querySelector(".scroller__inner");

// Pause animation
function pauseAnimation() {
  scrollerInner.style.animationPlayState = "paused";
}

// Resume animation
function resumeAnimation() {
  scrollerInner.style.animationPlayState = "running";
}

// Event listener for mouse down
scrollerInner.addEventListener("mousedown", (event) => {
  // Check if the clicked element is a review_card
  if (event.target.closest(".review_card")) {
    pauseAnimation();
  }
});

// Event listener for mouse up (resume animation when released)
scrollerInner.addEventListener("mouseup", () => {
  resumeAnimation();
});

// Touch events for mobile devices
scrollerInner.addEventListener("touchstart", (event) => {
  if (event.target.closest(".review_card")) {
    pauseAnimation();
  }
});

scrollerInner.addEventListener("touchend", () => {
  resumeAnimation();
});

// Optional: If you want to also resume the animation when clicking outside of the `.scroller__inner`:
document.addEventListener("click", (event) => {
  if (!event.target.closest(".scroller__inner")) {
    resumeAnimation();
  }
});
