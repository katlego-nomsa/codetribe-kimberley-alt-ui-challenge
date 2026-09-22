import type { ReactNode } from "react";
import Button from "../Button/button";
import { ArrowRightIcon } from "../Icons/Icons";
import "./featureSection.css";

interface FeatureSectionProps {
  eyebrow: string;
  title: string;
  paragraph: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryIcon?: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const FeatureSection = ({
  eyebrow,
  title,
  paragraph,
  primaryLabel,
  secondaryLabel,
  secondaryIcon,
  image,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) => {
  return (
    <section className={`feature ${reverse ? "feature--reverse" : ""}`}>
      <div className="feature__grid">
        <div className="feature__text">
          <p className="feature__eyebrow">{eyebrow}</p>
          <h2 className="feature__title">{title}</h2>
          <p className="feature__paragraph">{paragraph}</p>

          <div className="feature__actions">
            <span className="feature__primary">
              <Button variant="primary" icon={<ArrowRightIcon size={14} />}>
                {primaryLabel}
              </Button>
            </span>
            <a href="#top" className="feature__secondary">
              <span className="feature__play">{secondaryIcon}</span>
              {secondaryLabel}
            </a>
          </div>
        </div>

        <div className="feature__media">
          <img src={image} alt={imageAlt} className="feature__img" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;