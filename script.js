let slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value;
  } 

const syllabes = Array("ka", "ki", "ku", "ke", "ku", "ko", "ta", "ti", "tu", "te", "to", "sa", "si", "su", "se", "so", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo");
const end = Array("", "m", "n", "a", "e", "o");


function createName(array1, array2, number) {
    let field = document.getElementById("name-field")
    let name = "";
    for (let i=1; i <= number; i++) {
        const randomElement = array1[Math.floor(Math.random() * array1.length)];
        name += randomElement
    }
    const randomElement = array2[Math.floor(Math.random() * array2.length)];
    name += randomElement;
    console.log(name);
    field.innerHTML = name;
}

