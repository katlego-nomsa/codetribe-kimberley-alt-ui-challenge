import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import FeatureSection from "./components/featureSection/featureSection";
import Banner from "./components/Banner/banner";
import Footer from "./components/footer/footer";
import { PlayIcon } from "./components/icons/icons";
import "./index.css";
/**
 
this is the main App component that serves as the entry point for the application. It renders the overall layout of the website, including the navigation bar, hero section, feature sections, banner, and footer. The component uses various child components to structure the content and provide a cohesive user experience.
 */
function App() {
  return (
    <div className="site-shell">
      <div className="site-card">
        <Navbar />
        <Hero />

        <FeatureSection
          eyebrow="Featured Collection"
          title="Get out arrows well shryler it pieces."
          paragraph="At leMaison, we believe that your space should be an extension of your personality. Our carefully curated collection of modern furniture, lighting and home decor brings together comfort, functionality and timeless style."
          primaryLabel="Shop Now"
          secondaryLabel="Explore Collection"
          secondaryIcon={<PlayIcon />}
          image="/featured-chair.png"
          imageAlt="Teal upholstered armchair on light background"
        />

        <FeatureSection
          eyebrow="New Arrivals"
          title="Peluct oend how"
          paragraph="Explore our latest collection of stylish and functional furniture, designed to bring comfort and elegance to your home. Each piece is crafted with quality materials and a focus on modern living."
          primaryLabel="Shop Pretty"
          secondaryLabel="View Details"
          secondaryIcon={<PlayIcon />}
          image="/new-arrivals.png"
          imageAlt="Stacked ceramic vases beside a decorative lamp"
          reverse
        />

        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default App;