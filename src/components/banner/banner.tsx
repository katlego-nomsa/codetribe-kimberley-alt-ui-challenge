import Button from "../button/button";
import { ArrowRightIcon } from "../icons/icons";
import "./banner.css";

const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: "url(/banner-bg.png)" }}
    >
      <div className="banner__content">
        <p className="banner__eyebrow">Perfect For Every Space</p>
        <h2 className="banner__title">
          Interior pieces that turn houses into homes
        </h2>
        <p className="banner__subtext">Stylish. Comfortable. Timeless.</p>
        <span className="banner__cta">
          <Button variant="light" icon={<ArrowRightIcon size={14} />}>
            Shop Collection
          </Button>
        </span>
      </div>
    </section>
  );
};

export default Banner;