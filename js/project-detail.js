const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(id);

const projectContainer = document.querySelector(".project");

fetch("./work.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data;
    projects.work
      .filter((item) => item.id == id)
      .map((item) => {
        projectContainer.innerHTML += `
                 <div class="project-detail">
          <h1>${item.title}</h1>
          <div class="project-techs">
        ${item.techs
          .map((tech) => {
            return `<span>${tech}</span>`;
          })
          .join(" ")}
          
          </div>
          <p>
           ${item.description}
          </p>
          <h3 class="learned">What i've learned</h3>
          <p>
          ${item.learned}
          </p>
          <a href="${
            item.url
          }" target="_blank" rel="noreferrer"><button class="project-link"
            >Go to website<img
              src="https://uploads-ssl.webflow.com/622dbec40bef54e41bd8c025/624e1597a7e64a2fc7c3e40a_arrow__cta.svg"
              alt=""
          /></button>
        </div>

        <div class="project-img">
        ${
          Array.isArray(item.full_image)
            ? item.full_image
                .map((img) => {
                  return `<img src="${img}" alt="project image" />`;
                })
                .join(" ")
            : `<img src="${item.full_image}" alt="project image" />`
        }
         
         <a href="../index.html#work"><span class="project-link home"
            ><img
              src="https://uploads-ssl.webflow.com/622dbec40bef54e41bd8c025/624e1597a7e64a2fc7c3e40a_arrow__cta.svg"
              alt=""
            />Go Back To Home  </span
          ></a>
        </div>
        `;
      })
      .catch((error) => console.log(error));
  });
