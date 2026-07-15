const departmentButtons = document.querySelectorAll(".department");

const title = document.querySelector(".department-title h3");
const subtitle = document.querySelector(".department-title span");

const grid = document.querySelector(".technology-grid");

const infoTitle = document.querySelector(".technology-info h3");
const infoText = document.querySelector(".technology-info p");
const badges = document.querySelector(".badges");

function renderDepartment(key){

    const dept = newsroomData[key];

    title.textContent = dept.title;
    subtitle.textContent = dept.subtitle;

    grid.innerHTML = "";

    dept.technologies.forEach(tech=>{

        grid.innerHTML += `
            <div class="technology">

                <img src="${tech.icon}" alt="${tech.name}">

                <h4>${tech.name}</h4>

            </div>
        `;

    });

    const first = dept.technologies[0];

    infoTitle.textContent = first.name;
    infoText.textContent = first.description;

    badges.innerHTML = "";

    first.badges.forEach(badge=>{

        badges.innerHTML += `<span>${badge}</span>`;

    });

}

departmentButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        departmentButtons.forEach(btn=>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        renderDepartment(button.dataset.target);

    });

});

renderDepartment("ai");