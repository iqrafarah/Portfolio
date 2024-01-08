// function to copy email to clipboard
function copyToClipboard(email) {
  const dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.value = email;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  const alertBox = document.getElementById("alert");
  alertBox.style.display = "block";
  setTimeout(() => (alertBox.style.display = "none"), 2000);
}

const workItems = document.querySelector(".work-items");

fetch("./work.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data;
    projects.work
      .map((item) => {
        workItems.innerHTML += `
        <a href="project-detail.html?id=${item.id}"><div class="work-item">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}" />
          </div>
      `;
      })
      .catch((error) => console.log(error));
  });

const elements = document.querySelectorAll(
  ".about-container, .work-container, .contact-container, .header-titles"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fade-down 2s forwards";
    } else {
      entry.target.style.animation = "fade-up 2s forwards";
    }
  });
});

elements.forEach((element) => observer.observe(element));

function goToTop(event) {
  event.preventDefault(); // Prevent the default action
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
}
