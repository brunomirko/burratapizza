const btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menu = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

btnMenuOpen.addEventListener("click", () => {
    menu.classList.add("active");
});

btnMenuClose.addEventListener("click", () => {
    menu.classList.remove("active");
});

enlaces.addEventListener("click", () => {
    menu.style.transitionDelay= ".5s"
    menu.classList.remove("active");
});

//Carrusel
const slider = document.querySelector(".carrusel"),
      btnLeft = document.getElementById("btnCarruselLeft"),
      btnRight = document.getElementById("btnCarruselRight");

btnRight.addEventListener("click", () => {
    slider.scrollTo({
        left: slider.scrollLeft + slider.offsetWidth,
        behavior: "smooth",
    });
});

btnLeft.addEventListener("click", () => {
    slider.scrollTo({
        left: slider.scrollLeft - slider.offsetWidth,
        behavior: "smooth",
    });
});

//Validación de formulario
const form = document.getElementById("formulario");

    function validar(e) {
        let inputName = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComment = document.getElementById("comentarios"),
            alertSucess = document.getElementById("alertSucess"),
            alertError = document.getElementById("alertError");

        if (inputName.value == 0 || inputEmail.value == 0 || inputComment.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide")
            alertError.classList.add("show")

            setTimeout(function (){
                alertError.classList.remove("show")
                alertError.classList.add("hide")
            }, 2000)
        }
        else {
            e.preventDefault();
            alertSucess.classList.remove("hide")
            alertSucess.classList.add("show")

            setTimeout(function (){
                alertSucess.classList.remove("show")
                alertSucess.classList.add("hide")
            }, 2000)
            inputComment.value = "";
            inputEmail.value = "";
            inputName.value = "";
        }
    }

form.addEventListener("submit", validar);

// Botón Scroll
const btnTop = document.getElementById("btn-top"),
      logo = document.getElementById("logo");

window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;

    if (scroll > 100) {
        btnTop.classList.remove("hide-btn");
    }
    else {
        btnTop.classList.add("hide-btn");
    }

    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scroll-footer")
    }
    else {
        btnTop.classList.remove("scroll-footer")
    }
})

btnTop.addEventListener("click", function() {
    window.scrollTo(0,0)
})

logo.addEventListener("click", function() {
    window.scrollTo(0,0)
})
