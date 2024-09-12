 const changeColorButton = document.querySelector("#button1");
 const numberOfClicks = document.querySelector("#button2");
 const searchBarForm = document.querySelector("form");
 const pokemonImage = document.querySelector("img");
 const userInput = document.querySelector("#userInput");
 let buttonState = 0;
 const backgroundColors = ["white", "red", "orange", "yellow", "green", "blue"];
 let styleSetting;
 let numClicks = 0;

 changeColorButton.addEventListener("click", () => {
    const pageBody = document.querySelector("body");
    if (buttonState < 5) {
        buttonState++;
    } else {
        buttonState = 0;
    }
    console.log(buttonState);
    styleSetting = "background-color: " + backgroundColors[buttonState];
    pageBody.setAttribute("style", styleSetting);
    changeColorButton.innerText = backgroundColors[buttonState];
});

 console.log(changeColorButton);
 console.log(numberOfClicks);
 
 numberOfClicks.addEventListener("click", () => {
    numClicks++; 
    numberOfClicks.innerText = numClicks;
 }); 

 async function requestPokeAPI() {  
    const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + userInput.value;
    const data = await fetch(pokemonAPI);
    const parsedData = await data.json();
    console.log(parsedData);
    let pokeURL = parsedData.sprites.front_default;
    pokemonImage.setAttribute("src", pokeURL);
    return parsedData;
 }

 let pokemonObject = requestPokeAPI();
 

 searchBarForm.addEventListener("submit", (event) => {
   event.preventDefault();
   requestPokeAPI();
});
 

 