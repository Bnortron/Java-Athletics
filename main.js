const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// Pricing Code
const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabButtons.forEach((tab, index) => {
    if(index === 0) {
        //
    } else {
        tabPanels[index].setAttribute("hidden","");
    }
});

tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a");
    if(!clickedTab) return;
    e.preventDefault();

    const activePanelId = clickedTab.getAttribute('href');
    const activePanel = tabsContainer.querySelector(activePanelId);

    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden", false);
});

// Pricing Buttons
const btnList = document.querySelectorAll('.pricing-button');

btnList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.selected')?.classList.remove('selected');
        btnEl.classList.add('selected');
    });
});