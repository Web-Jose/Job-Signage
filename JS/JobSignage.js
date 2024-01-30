document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fresnostatehousing.org/wp-json/wp/v2/job-listing")
    .then((response) => response.json())
    .then((jobs) => {
      const container = document.querySelector(".JobContainer");

      jobs.slice(0, 4).forEach((job) => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("Job");
        jobDiv.innerHTML = `
                    <i class="fa-solid fa-folder-open"></i>
                    <span class="JobInfo">${job.title.rendered}</span>
                    <i class="fa-solid fa-clock"></i>
                    <span class="JobInfo">Due Date: ${job.application_due_date}</span>`;
        container.appendChild(jobDiv);
      });
    });
});
