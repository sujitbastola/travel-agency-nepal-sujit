import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Compass, Mountain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTours } from "@/hooks/use-tours";
import { TourCard } from "@/components/TourCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { data: tours, isLoading } = useTours();
  
  const featuredTours = tours?.filter(t => t.isFeatured).slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Unsplash image: Mount Everest Himalayas */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wider mb-6">
              NAMASTE & WELCOME TO NEPAL
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Journey to the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Top of the World</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover the mystical Himalayas, ancient temples, and vibrant culture of Nepal. 
              Let us guide you through an adventure of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tours">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90">
                  Explore Tours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-transparent text-white border-white hover:bg-white hover:text-secondary">
                  Custom Plan
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Our sherpas and guides are born in the mountains, offering deep cultural insights and ensuring your safety.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Custom Itineraries</h3>
              <p className="text-muted-foreground">
                From leisurely cultural tours to extreme expeditions, we tailor every trip to your pace and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Sustainable Travel</h3>
              <p className="text-muted-foreground">
                We believe in responsible tourism that benefits local communities and preserves our pristine environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Featured Adventures</span>
              <h2 className="font-display text-4xl font-bold mt-2">Popular Packages</h2>
            </div>
            <Link href="/tours">
              <Button variant="ghost" className="group text-primary">
                View All Tours 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-[500px] bg-gray-200 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Unsplash image: Prayer flags Nepal */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1588263228807-6c84c2db485b?q=80&w=1974&auto=format&fit=crop" 
                  alt="Cultural Nepal" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full z-0 blur-3xl" />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full z-0 blur-3xl" />
            </div>
            
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">About Us</span>
              <h2 className="font-display text-4xl font-bold mt-2 mb-6">More Than Just Trekking</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                NepalTravels was founded by a group of passionate local guides who wanted to share the true spirit of Nepal with the world. We don't just show you the sights; we immerse you in the culture, history, and warmth of the Nepalese people.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether you dream of standing at Everest Base Camp, exploring the medieval streets of Bhaktapur, or spotting rhinos in Chitwan, we make it happen seamlessly.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
