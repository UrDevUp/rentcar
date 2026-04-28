import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import "./animations.css";
import "./scrollAnimations.css";
import heroImage from "./assets/hero.png";
import heroImage1 from "./assets/hero2.png";
import heroImage2 from "./assets/hero3.png";
import heroImage3 from "./assets/hero4.png";
import BrandsCarousel from "./components/BrandsCarousel";
import CarsShowcase from "./components/CarsShowcase";
import AboutFaqSection from "./components/AboutFaqSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import QuestionnairePage from "./pages/QuestionnairePage";
import GalleryPage from "./pages/GalleryPage";
import { carsCatalog } from "./data/carsCatalog";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [pendingSectionId, setPendingSectionId] = useState("");

  const cars = [
    {
      id: 1,
      name: "BMW X5",
      image: heroImage1,
      specs: {
        doors: "4",
        distance: "620",
        gearBox: "Automatic",
        fuel: "Diesel",
      },
    },
    {
      id: 2,
      name: "Range Rover",
      image: heroImage,
      specs: {
        doors: "4",
        distance: "580",
        gearBox: "Automatic",
        fuel: "Petrol",
      },
    },
    {
      id: 3,
      name: "Audi RS3",
      image: heroImage2,
      specs: {
        doors: "4",
        distance: "520",
        gearBox: "Automatic",
        fuel: "Petrol",
      },
    },
    {
      id: 4,
      name: "Mercedes-AMG E 53",
      image: heroImage3,
      specs: {
        doors: "4",
        distance: "560",
        gearBox: "Automatic",
        fuel: "Hybrid",
      },
    },
  ];

  const activeCar = cars[activeSlide];

  const handleOpenQuestionnaire = (car) => {
    setSelectedCar(car);
    setActivePage("questionnaire");
  };

  const handleOpenGallery = () => {
    setActivePage("gallery");
  };

  const handleBackHome = () => {
    setActivePage("home");
  };

  const handleOpenAbout = () => {
    setActivePage("home");
    setPendingSectionId("about");
  };

  const handleOpenContact = () => {
    setActivePage("home");
    setPendingSectionId("contact");
  };

  useEffect(() => {
    if (activePage !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activePage]);

  useEffect(() => {
    if (activePage === "home" && pendingSectionId) {
      requestAnimationFrame(() => {
        const target = document.getElementById(pendingSectionId);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      setPendingSectionId("");
    }
  }, [activePage, pendingSectionId]);

  return (
    <div className="app">
      <Header
        onHome={handleBackHome}
        onGallery={handleOpenGallery}
        onAbout={handleOpenAbout}
        onContact={handleOpenContact}
      />
      {activePage === "home" ? (
        <>
          <Hero
            cars={cars}
            activeSlide={activeSlide}
            onSlideChange={setActiveSlide}
            activeCar={activeCar}
          />
          <BrandsCarousel onRentNow={handleOpenQuestionnaire} />
          <CarsShowcase onRentNow={handleOpenQuestionnaire} />
          <AboutFaqSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </>
      ) : activePage === "gallery" ? (
        <GalleryPage cars={carsCatalog} onRentNow={handleOpenQuestionnaire} />
      ) : (
        <QuestionnairePage car={selectedCar} onBack={handleBackHome} />
      )}
    </div>
  );
}

export default App;
