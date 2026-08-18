import { useState } from "react";
import "./Testimonials.css";
import { reviews } from "../../utils/constants.js";

function Testimonials() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];

  const previousReview = () => {
    setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setActiveReview((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="testimonials" id="reviews">
      <div className="container testimonials__layout">
        <div className="testimonials__heading">
          <p className="section-kicker">Customer Reviews</p>
          <h2 className="section-title">Service that people are happy to recommend.</h2>
          <div className="testimonials__controls" aria-label="Review controls">
            <button type="button" onClick={previousReview} aria-label="Previous review">←</button>
            <span>{String(activeReview + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
            <button type="button" onClick={nextReview} aria-label="Next review">→</button>
          </div>
        </div>

        <article className="testimonials__review" aria-live="polite">
          <div className="testimonials__stars" aria-label="5 star review">★★★★★</div>
          <blockquote>“{review.text}”</blockquote>
          <div className="testimonials__reviewer">
            <div className="testimonials__avatar" aria-hidden="true">{review.name.charAt(0)}</div>
            <div>
              <strong>{review.name}</strong>
              <a href={review.url} target="_blank" rel="noreferrer">View Google review</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
