import { useEffect, useState } from "react";
import "./Gallery.css";
import outdoorImage from "../../assets/images/outdoor-condenser.webp";
import atticImage from "../../assets/images/attic-hvac-installation.webp";
import ventilationImage from "../../assets/images/attic-ventilation-unit.webp";
import compressorImage from "../../assets/images/hvac-compressor-service.webp";
import ductImage from "../../assets/images/duct-ventilation-detail.webp";
import furnaceImage from "../../assets/images/indoor-furnace-installation.webp";
import serviceImage from "../../assets/images/attic-unit-service.webp";

const galleryImages = [
  { src: outdoorImage, alt: "Outdoor HVAC condenser installation beside a home" },
  { src: atticImage, alt: "HVAC air handler and ductwork installed in an attic" },
  { src: ventilationImage, alt: "Ventilation equipment visible through a service opening" },
  { src: compressorImage, alt: "HVAC compressor being serviced outdoors" },
  { src: ductImage, alt: "Ductwork and ventilation connection detail" },
  { src: furnaceImage, alt: "Indoor furnace and condensate equipment installation" },
  { src: serviceImage, alt: "Open HVAC unit showing internal service components" },
];

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    if (activeImage !== null) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    setActiveImage((current) => (current + 1) % galleryImages.length);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__heading">
          <div>
            <p className="section-kicker">Recent Work</p>
            <h2 className="section-title">HVAC work you can see up close.</h2>
          </div>
          <p className="section-copy">
            A look at installation, service, equipment, ductwork, and system components from Aerotemp Pro jobs.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <button
              className={`gallery__item gallery__item--${index + 1}`}
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>View</span>
            </button>
          ))}
        </div>
      </div>

      {activeImage !== null && (
        <div className="gallery__modal" role="dialog" aria-modal="true" aria-label="Project photo viewer">
          <button className="gallery__modal-backdrop" type="button" onClick={() => setActiveImage(null)} aria-label="Close gallery" />
          <div className="gallery__modal-card">
            <button className="gallery__modal-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close gallery">
              ×
            </button>
            <button className="gallery__modal-nav gallery__modal-nav--prev" type="button" onClick={showPrevious} aria-label="Previous image">
              ‹
            </button>
            <img src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} />
            <button className="gallery__modal-nav gallery__modal-nav--next" type="button" onClick={showNext} aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
