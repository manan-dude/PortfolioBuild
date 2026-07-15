const cards=document.querySelectorAll(".tech-card");

const preview=document.querySelector(".tech-preview");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

const key=card.dataset.tech;

const tech=technologies[key];

preview.innerHTML=`

<h2>${tech.title}</h2>

<h4>${tech.role}</h4>

<p>${tech.description}</p>

<div class="preview-block">

<h5>Context</h5>

${tech.context.map(item=>`<span>${item}</span>`).join("")}

</div>

<div class="preview-block">

<h5>Featured Headlines</h5>

<ul>

${tech.projects.map(project=>`<li>${project}</li>`).join("")}

</ul>

</div>

<div class="preview-block">

<h5>Technology Stack</h5>

${tech.stack.map(item=>`<span>${item}</span>`).join("")}

</div>

`;

});

});