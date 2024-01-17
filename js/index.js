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
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    let navbarHeight = document.querySelector(".nav").offsetHeight;
    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});
