const servants = document.querySelectorAll(".info_tab");
const servantName = document.querySelector("#servant-data-name");
const servantClass = document.querySelector("#servant-data-class");
const servantImage = document.querySelector("#servant-data-image");

let servantArrayClass = ["Saber","Archer","Lancer","Rider","Caster","Assassin","Berserker"];

let servantArrayName = ["Artoria","Emiya","Cu","Medusa","Medea","Sasaki Kojiro","Hercules"];

let servantArrayImage = [
    "/frontend/public/image/Temp/Saber1.png",
    "/frontend/public/image/Temp/Archer1.png",
    "/frontend/public/image/Temp/Lancer1.png",
    "/frontend/public/image/Temp/Rider1.png",
    "/frontend/public/image/Temp/Caster1.png",
    "/frontend/public/image/Temp/Assassin1.png",
    "/frontend/public/image/Temp/Berserker1.png"
];


servants.forEach((servant, index) => {
    servant.addEventListener('click', function() {
        servantName.innerText = servantArrayName[index];
        servantClass.innerText = servantArrayClass[index];
        servantImage.src = servantArrayImage[index];
    })
});