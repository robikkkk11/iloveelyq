const text = "Я ❤️ Элю";
const loveText = document.getElementById("love-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    const char = text[index];
    if (char === "❤️") {
      loveText.innerHTML += `<span class="heart">${char}</span>`;
    } else {
      loveText.innerHTML += char;
    }
    index++;
    setTimeout(typeWriter, 300); // скорость "печати"
  }
}

typeWriter();
