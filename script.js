const elementos = document.querySelectorAll(
    '.skill-card, .proyecto, .info-card, .intereses div'
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(30px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(elemento);

});