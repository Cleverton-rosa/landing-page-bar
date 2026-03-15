// ===============================
// Bar da Claudete - JS Enhancements
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BACK TO TOP
  ========================= */

  const backTopBtn = document.getElementById("backTop");

  if (backTopBtn) {

    const toggleBackTop = () => {
      if (window.scrollY > 300) {
        backTopBtn.classList.add("show");
      } else {
        backTopBtn.classList.remove("show");
      }
    };

    window.addEventListener("scroll", toggleBackTop);

    backTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  }


  /* =========================
     WHATSAPP TRACK
  ========================= */

  const waFloat = document.getElementById("whatsappFloat");

  if (waFloat) {

    waFloat.addEventListener("click", () => {

      if (typeof gtag !== "undefined") {
        gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: "whatsapp_float"
        });
      }

    });

  }


  /* =========================
     SMOOTH SCROLL
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* =========================
     FADE IN ON SCROLL
  ========================= */

  const elements = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window && elements.length > 0) {

    const observer = new IntersectionObserver((entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          obs.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

  }


});