let slider_1 = document.getElementById("myRange_1");
let output_1 = document.getElementById("value_1");
output_1.innerHTML = slider_1.value; 

slider_1.oninput = function() {
    output_1.innerHTML = this.value;
    }

let slider_2 = document.getElementById("myRange_2");
let output_2 = document.getElementById("value_2");
output_2.innerHTML = slider_2.value; 

slider_2.oninput = function() {
    output_2.innerHTML = this.value;
    } 

const jap_syllabes = Array("a", "i", "u", "e", "o", "n", "ka", "ki", "ke", "ku", "ko", "ta", "chi", "tsu", "te", "to", "sa", "shi", "su", "se", "so", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "ga", "gi", "gu", "ge", "go", "za", "ji", "zu", "ze", "zo", "da", "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po");

const vowels = Array("a", "e", "i", "o", "u", "y");
const consonants = Array("q", "w", "r", "t", "z", "s", "p", "d", "f", "g", "h", "j", "k", "l", "m", "n", "x", "c", "v", "b", "n", "m");

function createJapName(array, number) {
    let field = document.getElementById("name-field-1");
    let name = "";
    for (let i=1; i <= number; i++) {
        const randomElement = array[Math.floor(Math.random() * array.length)];
        name += randomElement;
    }
    if (name.match(/([a-z])\1+/)) {
        while (true) {
            const randomElement = array[Math.floor(Math.random() * array.length)];
            name.replace(/([a-z])\1+/, randomElement);
            break;
        }
    } else {
        console.log(name);
        field.innerHTML = name;
    }
}

function createName(array1, array2, number) {
    let field = document.getElementById("name-field-2");
    let name = "";
    for (let i=1; i <= number; i++) {
        const randomElement1 = array1[Math.floor(Math.random() * array1.length)];
        const randomElement2 = array2[Math.floor(Math.random() * array2.length)];
        name += randomElement1 + randomElement2;
    }
    if (name.match(/([a-z])\1+/)) {
        while (true) {
            const randomElement1 = array1[Math.floor(Math.random() * array1.length)];
            const randomElement2 = array2[Math.floor(Math.random() * array2.length)];
            name.replace(/([a-z])\1+/, randomElement1 + randomElement2);
            break;
        }
    } else {
        console.log(name);
        field.innerHTML = name;
    }
}

