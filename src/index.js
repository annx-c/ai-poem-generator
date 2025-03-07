function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "b9of4f791t3095ebe30890c6aaeec246";
  let context = "User Instructions: You are an expert in romantic poems and you love writing short poems. Your mission is to generate a 4-line poem in basic HTML in <p> format and separate each line if or if with a break and adding this image /image/lavender.jpg at each separation in an <img> element except for the last space. Make sure to follow the user's instructions. Write the poem directly, do not say that it is in html format and do not include titles. Sign the poem with 'Annx_C AI' within an element<strong>at the end of the poem on a new line and NOT at the beginning." ;
  let prompt = `Generate a Spanish poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="clock generating"><img src="/image/reloj.gif" alt="reloj de arena" class="charging"> <span>Generating a Spanish poem about ${instructionsInput.value}</span></div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
