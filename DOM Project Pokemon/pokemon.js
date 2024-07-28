const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector(".container");


for (let i = 1; i <= 151; i++) {
    const divElement = document.createElement("div");
    const label = document.createElement("span");
    label.textContent = `${i}`;
    divElement.classList.add("pokemon");
    const image = document.createElement("img");
    image.src = `${baseURL}${i}.png`;
    divElement.append(image);
    divElement.append(label);
    container.append(divElement);
}
