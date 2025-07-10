
    document.addEventListener("DOMContentLoaded", function () {
      const feedbackForm = document.getElementById("feedbackForm");
      const feedbackResponse = document.getElementById("feedbackResponse");
      const submitBtn = document.getElementById("submitBtn");

      if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const topic = document.getElementById("topic").value;
          const message = document.getElementById("message").value.trim();

          if (!name || !email || !topic || !message) {
            feedbackResponse.style.color = "red";
            feedbackResponse.textContent = "Please fill in all fields.";
            return;
          }

          feedbackResponse.style.color = "green";
          feedbackResponse.textContent = `Thanks, ${name}! Your feedback on "${topic}" has been received.`;

          submitBtn.disabled = true;
          submitBtn.textContent = "Submitted";

          setTimeout(() => {
            feedbackForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Feedback";
            feedbackResponse.textContent = "";
          }, 4000);
        });
      }
    });

