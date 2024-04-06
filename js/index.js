const workItems = document.querySelector(".work-items");

fetch("./work.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data;
    projects.work.map((item) => {
      workItems.innerHTML += `
                <div class="work-item">
              <div class="item-img">
                <img src="${item.image}" alt="${item.title}" />
              </div>
                <div class="item-content">
                  <h3>${item.small_title}</h3>
                  <h2>${item.title}</h2>
                  <div class="item-tech">
                   ${item.techs
                     .map((tech) => {
                       return `<span>${tech}</span>`;
                     })
                     .join(" ")}
                  </div>
                  <p>${item.small_description}</p>
                <a href="project-detail.html?id=${item.id}">
                <button class="btn">View Project <img
              src="https://uploads-ssl.webflow.com/622dbec40bef54e41bd8c025/624e1597a7e64a2fc7c3e40a_arrow__cta.svg"
              alt=""
          /></button></a> 
                </div>
            </div>
      `;
    });
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

function goToTop(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
