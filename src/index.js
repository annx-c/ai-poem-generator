function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Hello World, welcome to my page!",
        autoStart: true,
        cursor: "",
        delay: 1,
      });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);