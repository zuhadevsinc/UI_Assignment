AOS.init({
  duration: 1000,
  once: true,
});

const progressFill = document.getElementById("progress-fill");
const progressNumbers = document.querySelectorAll(".progress-number");
const sections = document.querySelectorAll(".section-card");

function updateProgress(activeSection) {
  progressNumbers.forEach((num) => num.classList.remove("active"));

  switch (activeSection) {
    case 1:
      progressFill.style.height = "33%";
      document.getElementById("progress-01").classList.add("active");
      break;
    case 2:
      progressFill.style.height = "66%";
      document.getElementById("progress-02").classList.add("active");
      break;
    case 3:
      progressFill.style.height = "100%";
      document.getElementById("progress-03").classList.add("active");
      break;
    default:
      progressFill.style.height = "0%";
  }
}

const observerOptions = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionNumber = parseInt(entry.target.dataset.section);
      updateProgress(sectionNumber);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

updateProgress(1);
