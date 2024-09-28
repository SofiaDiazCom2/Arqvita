document.addEventListener('DOMContentLoaded', () => {
    const texidImage = document.querySelector('.texid');
    const boton1 = document.querySelector('.boton-1 button');
    const fiona = document.querySelector('.fiona');
    const verMas = document.querySelector('.ver-mas');
    const telefono = document.querySelector('.telefono');
    const nombre = document.querySelector('.nombre');
    const flechaup = document.querySelector('.flecha-up');
    const flechadown = document.querySelector('.flecha-down');
    const flechaabajo = document.querySelector('.flecha-abajo');
    const filtro = document.querySelector('.filtro');
    const nav = document.querySelector('ul');

    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const submitBtn = document.getElementById('submit-btn');
    const input = document.getElementById('popup-input');

    // Inicialmente, el popup no debe estar visible
    popup.style.display = 'none';

    // Mostrar el pop-up al hacer clic en la imagen
    texidImage.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    boton1.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    fiona.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    verMas.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    telefono.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    nombre.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    flechaup.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    flechadown.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    filtro.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    flechaabajo.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    nav.addEventListener('click', () => {
        popup.style.display = 'flex'; // Muestra el pop-up
    });

    // Ocultar el pop-up al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'; // Oculta el pop-up
    });

    // Ocultar el pop-up al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none'; // Oculta el pop-up
        }
    });

    // Manejar el clic en el botón de enviar
    submitBtn.addEventListener('click', () => {
        const code = input.value.trim();
        if (code === 'L4NU3V4P13L') {
            window.location.href = 'Validación de código.html';
        } else {
            alert('Código incorrecto');
        }
    });
});


class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.currentIndex = 0;
        this.totalItems = this.carouselArray.length;
        this.updateCarousel(); // Inicializar el estado del carrusel

        // Selecciona los controles
        this.prevControl = document.querySelector('.carousel-control.previous');
        this.nextControl = document.querySelector('.carousel-control.next');

        // Añade los eventos a los controles
        this.prevControl.addEventListener('click', () => this.setCurrentState('previous'));
        this.nextControl.addEventListener('click', () => this.setCurrentState('next'));
    }

    updateCarousel() {
        this.carouselArray.forEach(el => el.classList.remove('carousel-item-1', 'carousel-item-2', 'carousel-item-3', 'carousel-item-4', 'carousel-item-5'));

        for (let i = 0; i < 5; i++) {
            const index = (this.currentIndex + i) % this.totalItems;
            if (this.carouselArray[index]) {
                this.carouselArray[index].classList.add(`carousel-item-${i + 1}`);
            }
        }
    }

    setCurrentState(direction) {
        if (direction === 'previous') {
            this.currentIndex = (this.currentIndex === 0) ? this.totalItems - 1 : this.currentIndex - 1;
        } else if (direction === 'next') {
            this.currentIndex = (this.currentIndex === this.totalItems - 1) ? 0 : this.currentIndex + 1;
        }
        this.updateCarousel();
    }
}

// Inicializa el carrusel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const exampleCarousel = new Carousel(carouselContainer, carouselItems);


