/* Shared interactions for the portfolio */
document.addEventListener("DOMContentLoaded", function () {
  // Keep the copyright year current.
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  // Accessible mobile navigation.
  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".site-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      navigation.classList.toggle("open", !expanded);
    });
    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form: validates in the browser and prepares an email draft.
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      var formData = new FormData(contactForm);
      var subject = encodeURIComponent("Portfolio enquiry from " + formData.get("name"));
      var body = encodeURIComponent(
        "Name: " + formData.get("name") + "\n" +
        "Email: " + formData.get("email") + "\n\n" +
        formData.get("message")
      );
      var mailto = "mailto:amin23105101058@diu.edu.bd?subject=" + subject + "&body=" + body;
      var status = document.getElementById("form-status");
      if (status) status.textContent = "Opening your email application with a prepared message…";
      window.location.href = mailto;
    });
  }

  // AJAX example: request the project data file when served over HTTP(S).
  // A local fallback is retained so the page still works if the JSON request is unavailable.
  var ajaxStatus = document.getElementById("ajax-status");
  if (ajaxStatus && window.fetch) {
    fetch("assets/data/projects.json")
      .then(function (response) {
        if (!response.ok) throw new Error("Project data request failed");
        return response.json();
      })
      .then(function (projects) {
        ajaxStatus.textContent = "AJAX loaded " + projects.length +
          " project records from assets/data/projects.json successfully.";
      })
      .catch(function () {
        ajaxStatus.textContent = "Project descriptions are displayed on this page. The optional AJAX data request is unavailable in this preview.";
      });
  }
});