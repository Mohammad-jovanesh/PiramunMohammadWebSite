particlesJS.load('Particles', './particles.json', function () {
    console.log('callback - particles.js config loaded');
});
$('.MySkill_Slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1500: {
            items: 3
        }
    }
})

const navBar = document.querySelector(".navBar")
window.addEventListener("scroll", () => {
    navBar.classList.toggle("NavActive", window.pageYOffset > 0)
})
const dropdown = document.querySelector(".dropdown")
const dropdown_ul = document.querySelectorAll(".dropdown ul")
const nav_Mobile = document.querySelector(".nav_Mobile")
let tl = gsap.timeline({
        paused: true,
        reversed: true
    })

    .to(dropdown, {
        duration: 0.3,
        height: 500,

    })
    .to(dropdown_ul, {
        duration: 0.3,
        opacity: 1,
        delay: 0.2
    })
nav_Mobile.addEventListener("click", () => {
    nav_Mobile.classList.toggle("active_mobile_nav")
    dropdown.classList.toggle("dropdown_Active")
    if (nav_Mobile.classList.contains("active_mobile_nav")) {
        tl.play();
    } else {
        tl.reverse();
    }
})
const Filter_links = document.querySelectorAll(".filter ul li")
const Btn_Filter = document.querySelector(".icon_filter")
Btn_Filter.addEventListener("click", () => {
    let delay = 0
    Filter_links.forEach((link) => {
        link.classList.toggle("open")
        link.style.transitionDelay = `${delay}s`
        delay += 0.1
    })
    Btn_Filter.classList.toggle("filter_active")
})
const Image = document.querySelector(".AboutMe_img_txt .image")
Image.addEventListener("mousemove", (e) => {
    let X = (window.innerWidth / 3 - e.pageX) / 20
    let Y = (window.innerHeight / 1 - e.pageY) / 20
    console.log(X, Y)
    Image.style.transform = `rotateX(${Y}deg) rotateY(${X}deg)`
})
Image.addEventListener("mouseenter", (e) => {

    Image.style.transition = "none"
})
Image.addEventListener("mouseleave", (e) => {
    Image.style.transition = `all 0.5s ease`
    console.log("kill")
    Image.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
})
// _____________________________________________
// ---------------------------------------------
// _____________________________________________
const Testimonials = document.querySelector(".gsap_Sexy")
const Client_Iamges = document.querySelectorAll(".Client_image img")
const Client_Text = document.querySelectorAll(".Client")
let index = 1;
var timer = setInterval(() => {

    Client_Iamges.forEach((image) => {
        gsap.to(image, {
            duration: 0.5,
            opacity: 0,
            x: 500,
            delay: 0.5
        })
        gsap.to(image, {
            rotateY: 0,
            rotateX: 0
        })
    })
    Client_Text.forEach(text => {
        gsap.to(text, {
            duration: 0.5,
            opacity: 0,
            x: -600,
            y: 0,
            delay: 0.5
        })
        gsap.to(text, {
            rotateY: 0,
            rotateX: 0
        })

    })

    let tl = gsap.timeline({})
    tl.to(Client_Iamges[index % Client_Iamges.length], {
        duration: 1,
        opacity: 1,
        x: 0,
        delay: 0.5
    })
    tl.to(Client_Iamges[index % Client_Iamges.length], {
        duration: 0.5,
        rotateY: -15,
        rotateX: 0
    })
    gsap.to(Client_Text[index % Client_Iamges.length], {
        duration: 0.5,
        opacity: 1,
        x: 0,
        y: 0,
        delay: 1
    })
    gsap.to(Client_Text[index % Client_Iamges.length], {
        duration: 0.5,
        rotateY: 15,
        rotateX: 0,
        delay: 1.5
    })
    console.log(index % Client_Iamges.length)


    // tl.fromTo(Client_Iamges[index%Client_Iamges.length],{opacity:0,x:500},{opacity:1,x:0})
    // .to(Client_Iamges[index%Client_Iamges.length],{rotateX:0,rotateY:-10})
    index++
}, 4000)

const Form = document.querySelector("#form");
const NameForm = document.getElementById("UserName")
const EmailForm = document.getElementById("Email")

Form.addEventListener("submit", (e) => {
    CheckIt()
    e.preventDefault();



})


function CheckIt() {
    let NameValue = NameForm.value;
    let EmailValue = EmailForm.value;
    // Check Name Input
    if (NameValue == "") {
        ErrorMessage(NameForm, "pleace insert your name !")
    } else {
        SuccessMessage(NameForm)

    }
    // Check Email Input
    if (EmailValue == "") {

        ErrorMessage(EmailForm, "pleace insert your Email !")
    } else {
        SuccessMessage(EmailForm)

    }
}

function SuccessMessage(input) {
    let Parent = input.parentElement;
    let ErrorIcon = Parent.querySelector(".Err_icon")
    let SuccesIcon = Parent.querySelector(".success_icon")

    ErrorIcon.style.visibility = "hidden"
    SuccesIcon.style.visibility = "visible"

}


function ErrorMessage(input, message) {

    let Parent = input.parentElement;
    let ErrorIcon = Parent.querySelector(".Err_icon")
    let SuccesIcon = Parent.querySelector(".success_icon")
    console.log(ErrorIcon)
    ErrorIcon.style.visibility = "visible"
    SuccesIcon.style.visibility = "hidden"


    setTimeout(() => {

        ErrorIcon.style.visibility = "hidden"
        SuccesIcon.style.visibility = "hidden"
    }, 1500)
}