const api = "https://splendid-duckanoo-33e6bf.netlify.app/my_college_degrees.json";
var reveal = document.getElementById("reveal")
reveal.addEventListener("click", getDegree);

function getDegree() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const div = document.getElementById("college-degree-list");
            div.innerHTML = buildDegreeList(data);
        })
        .catch(error => console.log(error))
}

function buildDegreeList(degrees) {
    const college_degree_list = degrees.map(degree => {
        return `<div class="item">
            <dt>
                <strong>${degree.school}</strong>
            </dt>
            <dd>
                ${degree.program_major}
            </dd>
            <dd>
                ${degree.type}
            </dd>
            <dd>
                ${degree.year_conferred}
            </dd>
        </div>
        `
    })
    return `
    <dl class="degrees">
    ${college_degree_list.join('')}
    </dl>
    `;
}

