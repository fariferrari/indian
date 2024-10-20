document.getElementById("calculateButton").addEventListener("click", calculateDowryPrice);

function calculateDowryPrice() {
    let basePrice = 100;
    let education = parseFloat(document.getElementById("education").value);
    let netWorth = parseFloat(document.getElementById("netWorth").value);
    let casteBonus = parseInt(document.getElementById("caste").value);
    let skillsBonus = 0;
    if (document.getElementById("music").checked) skillsBonus += parseInt(document.getElementById("music").value);
    if (document.getElementById("cook").checked) skillsBonus += parseInt(document.getElementById("cook").value);
    if (document.getElementById("character").checked) skillsBonus += parseInt(document.getElementById("character").value);
    if (document.getElementById("sing").checked) skillsBonus += parseInt(document.getElementById("sing").value);
    let ageCoeff = 1;
    let ageOptions = document.getElementsByName("age");
    ageOptions.forEach((option) => {
        if (option.checked) ageCoeff = parseFloat(option.value);
    });
    let repCoeff = 1;
    if (document.getElementById("gossipParents").checked) repCoeff *= parseFloat(document.getElementById("gossipParents").value);
    if (document.getElementById("gossipCharacter").checked) repCoeff *= parseFloat(document.getElementById("gossipCharacter").value);
    if (document.getElementById("generalGossip").checked) basePrice += parseInt(document.getElementById("generalGossip").value);
    let totalPrice = basePrice * education * netWorth * ageCoeff * repCoeff + casteBonus + skillsBonus;
   
    document.getElementById("finalPrice").textContent = totalPrice.toFixed(2);
    document.getElementById("finalPrice").style.color = "green";
}
