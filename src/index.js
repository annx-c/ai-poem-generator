function displayPoem(response) {
  console.log("ea");
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
  let context =
   "User instructions: You are an expert in romantic poems and you love writing short poems. Your mission is to generate a 4-line poem in basic HTML in <p> format and separate each line by adding this image /image/lavender.jpg in each separation in one <img> element except in the last space. Make sure to follow the user instructions. Write the poem directly, do not say that it is in html format and do not include titles. Sign the poem with 'Annx_C AI' inside an element<strong>at the end of the poem on a new line and NOT at the beginning." ;
  let prompt = `Generate a Spanish poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Generando poem`);
  console.log(`Promp: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
