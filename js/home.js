// credit to HackMIT for FAQ functions!
// lines 5-45
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

let sections = document.querySelectorAll('#sections .section');
let links = document.querySelectorAll('#nav a');
let logo = document.getElementById('logo');
let bg = document.getElementById('bg');
let footer = document.getElementById('footer');
// var home = "0";
// localStorage.setItem("recent", home);
var recent = localStorage.getItem("recent") || "0";

for (let link of links) {
    window.addEventListener("load", function (e) {
        var num = parseInt(recent);
        console.log(recent);
        console.log(num);
        links[num].click();
    });

    logo.addEventListener('click', function (e) {
        links[0].click();
    });

    link.addEventListener('click', function (e) {
        let index = Array.from(links).indexOf(e.target);
        for (let section of sections) {
            section.style.display = 'none';
        }
        sections[index].style.display = 'flex';
        for (let i = 0; i < links.length; i++) {
            if (i == index) {
                links[i].classList.add('accent');
                links[i].classList.remove('primary-hover');
            }
            else {
                links[i].classList.remove('accent');
                links[i].classList.add('primary-hover');
            }
        }
        var str = index.toString();
        localStorage.setItem("recent", str);
        switch (index) {
            case 0:
                bg.style.background = 'radial-gradient(100% 197.75% at 100% 0%, #F4D9A8 0%, rgba(244, 217, 168, 0) 100%), #FAECD2';
                footer.src = "./assets/images/footer-yellow.svg";
                break;
            case 1:
                bg.style.background = '#E6F3F4';
                footer.src = "./assets/images/footer-teal.svg";
                break;
            case 2:
                bg.style.background = 'radial-gradient(100% 197.75% at 100% 0%, rgba(131, 169, 161, 0.5) 0%, rgba(215, 229, 218, 0) 100%), #EAF0EE';
                footer.src = "./assets/images/footer-green.svg";
                break;
            case 3:
                bg.style.background = 'radial-gradient(100% 197.75% at 100% 0%, rgba(236, 165, 110, 0.5) 0%, rgba(236, 165, 110, 0) 100%), #FBEDE2';
                footer.src = "./assets/images/footer-orange.svg";
                break;
            case 4:
                bg.style.background = 'radial-gradient(100% 197.75% at 100% 0%, rgba(51, 140, 154, 0.5) 0%, rgba(205, 230, 234, 0) 100%), #E6F3F4';
                footer.src = "./assets/images/footer-blue.svg";
                break;
            default:
                bg.style.background = 'radial-gradient(100% 197.75% at 100% 0%, #F4D9A8 0%, rgba(244, 217, 168, 0) 100%), #FAECD2';
                footer.src = "./assets/images/footer-yellow.svg";
        }


    });
}
