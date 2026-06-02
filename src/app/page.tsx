import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import SignatureDishes from "@/components/SignatureDish";
import HorizontalGallery from "@/components/HorizontalGallery";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <SignatureDishes />
        <HorizontalGallery />
        <Reviews />
        <Reservation />
        <Location />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
