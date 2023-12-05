const api = "https://splendid-duckanoo-33e6bf.netlify.app/my_college_degrees.json";

function getDegree() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const div = document.getElementById("college_degree_list");
            div.innerHTML = buildDegreeList(data);
        })
        .catch(error => console.log(error))
}

function buildDegreeList(degrees) {
    const projectList = degrees.map(degree => {
        return `<div class="item">
            <dt>
                <strong>${degree.school}</strong>
            </dt>
            <dd>
                ${degree.program_major}
            </dd>
            <dd
                ${degree.type}
            </dd>
            <dd
                ${degree.year_conferred}
            </dd>
        </div>
        `
    })
    return `
    <dl class="projects">
    ${projectList.join('')}
    </dl>
    `;
}

const reveal = document.getElementById("reveal")
reveal.addEventListener("click", getDegree);
window.onload = getDegree;

