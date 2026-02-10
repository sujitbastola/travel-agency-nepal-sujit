import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTours } from "@/hooks/use-tours";
import { TourCard } from "@/components/TourCard";
import { Loader2 } from "lucide-react";

export default function Tours() {
  const { data: tours, isLoading } = useTours();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Tour Packages</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Choose from our carefully curated selection of adventures across the Himalayas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-grow">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : tours?.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-muted-foreground">No tours available right now.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours?.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
