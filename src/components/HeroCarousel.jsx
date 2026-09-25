import { Carousel } from "react-bootstrap";

const destacados = [
  {
    imagen: "/assets/img/juego1.jpg",
    alt: "Portada del juego The Legend of Zelda: Breath of the Wild",
  },
  {
    imagen: "/assets/img/juego2.jpg",
    alt: "Portada del juego God of War Ragnarök",
  },
  {
    imagen: "/assets/img/juego4.jpg",
    alt: "Portada del juego The Witcher 3: Wild Hunt",
  },
];

export default function HeroCarousel() {
  return (
    <div className="container mb-4">
      <Carousel id="carruselDestacados" interval={3000}>
        {destacados.map((juego) => (
          <Carousel.Item key={juego.imagen}>
            <img src={juego.imagen} className="d-block w-100" alt={juego.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
