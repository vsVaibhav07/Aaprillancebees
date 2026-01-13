import AboutOurBees from "./components/home/aboutOurBees";
import FeaturedProducts from "./components/home/featuredProduct";
import HeroSection from "./components/home/hero";
import NewsletterSignup from "./components/home/NewsLetter";
import ReviewsSlider from "./components/home/reviewsSlider";
import WhyOurBees from "./components/home/whyOurBees";


export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <FeaturedProducts />
      <WhyOurBees />
       <AboutOurBees />
      <ReviewsSlider />
      <NewsletterSignup />
    </main>
  );
}
