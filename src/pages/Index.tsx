import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import RatingsSection from "@/components/RatingsSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <RatingsSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default Index;
