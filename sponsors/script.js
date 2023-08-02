const sponsors = [
    {
        "tier": "bronze",
        "title": "<strong>Jennifer White Agency of Farmers Insurance</strong><br><em>San Luis Obispo, CA</em>",
        "description": "At the Jennifer White Agency, we know that the energy we bring into the office is the energy we pass along in all of the day's interactions; because of that, we try to bring joy and laughter into every day...",
        "image": "./images/jwhite.jpg",
        "link": "https://agents.farmers.com/ca/san-luis-obispo/jennifer-white"
    }
]

document.onselectstart = () => false;
document.ondragstart = () => false;
document.oncontextmenu = () => false;

function createSponsor(tier, title, description, image, link) {
    const sponsor = document.createElement("div");
    const container = document.createElement("div");

    sponsor.className = "sponsor";
    container.className = "container";

    sponsor.onclick = () => {
        window.open(link, "_blank");
    }

    const titleElement = document.createElement("div");
    const titleTextElement = document.createElement("p");

    const imageElement = document.createElement("img");
    const descriptionElement = document.createElement("div");

    titleElement.appendChild(titleTextElement);

    titleTextElement.innerHTML = title;
    titleTextElement.className = "sponsor-title";
    imageElement.src = image;
    descriptionElement.innerHTML = description;

    container.appendChild(titleElement);
    container.appendChild(imageElement);
    container.appendChild(descriptionElement);
    sponsor.appendChild(container);

    return sponsor;
}

document.body.appendChild(createSponsor(sponsors[0].tier, sponsors[0].title, sponsors[0].description, sponsors[0].image, sponsors[0].link));
