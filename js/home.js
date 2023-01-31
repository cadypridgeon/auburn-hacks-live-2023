// Credits: HackMIT 
// https://hackmit.org/

function open(question) {
    let flower = question.parentElement.firstElementChild;
    let answer = question.parentElement.nextElementSibling;

    flower.style.animation = "spin 0.5s linear";
    question.classList.add("clicked");
    answer.style.maxHeight = answer.scrollHeight + "px";
}

function close(question) {
    let flower = question.parentElement.firstElementChild;
    let answer = question.parentElement.nextElementSibling;

    flower.style.animation = "spin-back 0.5s linear";
    question.classList.remove("clicked");
    answer.style.maxHeight = "0";
}

let flowers = document.getElementsByClassName('question');

for (let i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            flowers[i].click();
        }
    });
    flowers[i].addEventListener("click", function (e) {
        if (!flowers[i].classList.contains("clicked")) {
            open(flowers[i]);

            for (let j = 0; j < flowers.length; j++) {
                if (i !== j && flowers[j].classList.contains("clicked")) {
                    close(flowers[j]);
                }
            }

        } else {
            close(flowers[i]);
        }
    })
}

function page() {
    var x = document.getElementsByClassName("page");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}