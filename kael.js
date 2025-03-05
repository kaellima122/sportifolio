const projects = [
    {
        title: 'Projeto 1',
        description: 'Descrição do projeto 1...',
        image: 'assets/images/projeto1.jpg',
        link: 'file:///C:/Users/Usuario/Desktop/site%20anime/index.html'
    },
    {
        title: 'Projeto 2',
        description: 'Descrição do projeto 2...',
        image: 'assets/images/projeto2.jpg',
        link: 'file:///C:/Users/Usuario/Desktop/site%20anime/site%20gemini/kael.html'
    },
    // Adicione mais projetos aqui...
];

const projectsGrid = document.querySelector('.projects-grid');
const projectSearch = document.getElementById('project-search');

function renderProjects(projectsToRender) {
    projectsGrid.innerHTML = '';
    projectsToRender.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver Projeto</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

renderProjects(projects);

projectSearch.addEventListener('input', () => {
    const searchTerm = projectSearch.value.toLowerCase();
    const filteredProjects = projects.filter(project => {
        return project.title.toLowerCase().includes(searchTerm) || project.description.toLowerCase().includes(searchTerm);
    });
    renderProjects(filteredProjects);
});