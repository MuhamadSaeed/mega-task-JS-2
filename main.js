const qoutes = [
    {
        qoute: "Be the change that you wish to see in the world",
        by: "Mahatma Gandhi"
    },
    {
        qoute: "A room without books is like a body without a soul",
        by: "Marcus Tullius Cicero"
    },
    {
        qoute: "So many books, so little time",
        by: "Frank Zappa"
    }
];


let btn = document.querySelector(".btnQoute");
let qoutePara = document.querySelector(".qoute-cont q");
let writer = document.querySelector(".qoute-writer");
let lastItem = -1;

btn.addEventListener("click", () => {

    let randomNumber = Math.floor(Math.random() * qoutes.length);

    console.log(randomNumber);
    
    while (randomNumber === lastItem) {
        randomNumber = Math.floor(Math.random() * qoutes.length);
        console.log("");
    }


    lastItem = randomNumber;

    let newQoute = qoutes[randomNumber].qoute;
    qoutePara.textContent = newQoute;

    let newWriter = qoutes[randomNumber].by;
    writer.textContent = newWriter;
});
