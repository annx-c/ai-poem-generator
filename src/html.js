function generatePoem(event) {
    event.preventDefault();
    
    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "Poema aqui";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);