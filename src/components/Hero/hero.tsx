import Button from "../Button/button";
import { ArrowRightIcon } from "../Icons/Icons";
import "./hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      id="top"
      style={{ backgroundImage: "url(/hero-bg.png)" }}
    >
      <div className="hero__content">
        <p className="hero__eyebrow">Modern Spaces, Beautiful Living</p>
        <h1 className="hero__title">An office this took Move Is, Ijich</h1>
        <p className="hero__text">
          Transform your workspace into a haven of style and productivity.
          Our modern furniture and decor pieces are designed to inspire,
          bring comfort and create a space where great ideas happen.
        </p>
        <span className="hero__cta">
          <Button variant="primary" icon={<ArrowRightIcon size={14} />}>
            Discover Collection
          </Button>
        </span>
      </div>
    </section>
  );
};

export default Hero;