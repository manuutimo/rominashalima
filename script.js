const lines = [
    ["The sky is so blue", "The clouds are drifting by", "I watch them soar high"],
    ["The night is dark", "The stars are shining bright", "A moon so full and white"],
    ["Breeze blowing by", "Whispering secrets to the trees", "Tales of lands unseen"],
    ["I walk down the road", "With the earth beneath my feet", "And the wind as my friend"]
];

function generatePoem() {
    const randomIndex = Math.floor(Math.random() * lines.length);
    const selectedPoem = lines[randomIndex];
    
    const poemElement = document.getElementById("poem");
    poemElement.innerHTML = selectedPoem.join("<br>");
}
