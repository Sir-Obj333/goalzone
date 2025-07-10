document.addEventListener("DOMContentLoaded", function () {
      const contactForm = document.getElementById("contactForm");
      const contactResponse = document.getElementById("contactResponse");
      const contactSubmitBtn = document.getElementById("contactSubmitBtn");

      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("fullname").value.trim();
          const email = document.getElementById("contactemail").value.trim();
          const message = document.getElementById("contactmessage").value.trim();

          if (!name || !email || !message) {
            contactResponse.style.color = "red";
            contactResponse.textContent = "Please fill in all fields.";
            return;
          }

          contactResponse.style.color = "green";
          contactResponse.textContent = `Thank you, ${name}! Your message has been sent.`;

          contactSubmitBtn.disabled = true;
          contactSubmitBtn.textContent = "Submitted";

          setTimeout(() => {
            contactForm.reset();
            contactSubmitBtn.disabled = false;
            contactSubmitBtn.textContent = "Send Message";
            contactResponse.textContent = "";
          }, 4000);
        });
      }
    });