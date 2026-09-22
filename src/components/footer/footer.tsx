import { useState, type FormEvent } from "react";
import Button from "../Button/button";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../Icons/Icons";
import "./footer.css";

const quickLinks = ["Home", "Shop", "About", "Contact"];
const infoLinks = [
  "Shipping & Returns",
  "Privacy Policy",
  "Terms & Conditions",
  "FAQ",
];

const socials = [
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <PinterestIcon />, label: "Pinterest" },
  { icon: <TwitterIcon />, label: "Twitter" },
  { icon: <YoutubeIcon />, label: "YouTube" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__intro">
          <p className="footer__eyebrow">Stay Connected</p>
          <h2 className="footer__title">We to youcen diguhies!</h2>
          <ul className="footer__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href="#top" aria-label={s.label} className="footer__social-link">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#top" className="footer__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Information</h3>
          <ul className="footer__links">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#top" className="footer__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Newsletter</h3>
          <p className="footer__paragraph">
            Subscribe to our newsletter and get 10% off your first order.
          </p>
          <form className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__input"
              aria-label="Email address"
            />
            <Button type="submit" variant="primary" icon={<ArrowRightIcon size={14} />}>
              Subscribe
            </Button>
          </form>
          {submitted && (
            <p className="footer__success">Thanks — you're subscribed!</p>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <p>leMaison &copy; 2026. All rights reserved.</p>
        <div className="footer__bottom-socials">
          <span>Follow us</span>
          <ul className="footer__socials">
            {socials.map((s) => (
              <li key={`bottom-${s.label}`}>
                <a href="#top" aria-label={s.label} className="footer__social-link">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;