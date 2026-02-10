import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Passionate locals sharing the beauty of Nepal with the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Unsplash image: Sherpa / Trekking guide */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544253106-96ce1726a42a?q=80&w=2072&auto=format&fit=crop" 
              alt="Himalayan Guide" 
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="font-display text-3xl font-bold text-secondary mb-6">Our Story</h2>
            <p>
              NepalTravels began with a simple idea: to show visitors the real Nepal beyond the postcards. Founded by a group of former trekking guides and sherpas, we intimately understand the mountains, the trails, and the people that make this country so special.
            </p>
            <p>
              We believe that travel should be transformative. It's not just about reaching a destination; it's about the connections you make along the way—sharing tea in a local teahouse, spinning prayer wheels at an ancient monastery, or witnessing a sunrise over the Annapurna range that takes your breath away.
            </p>

            <h2 className="font-display text-3xl font-bold text-secondary mt-12 mb-6">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl border">
                <h3 className="font-bold text-xl text-primary mb-3">Sustainability First</h3>
                <p className="text-sm">We are committed to leaving no trace. Our treks are designed to minimize environmental impact and preserve the delicate Himalayan ecosystem for future generations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border">
                <h3 className="font-bold text-xl text-primary mb-3">Empowering Locals</h3>
                <p className="text-sm">We hire local guides and porters, ensuring fair wages and insurance. By staying in locally-owned lodges, we ensure tourism money goes directly to the communities.</p>
              </div>
            </div>

            <p>
              Whether you are an adrenaline junkie looking to summit a peak, a spiritual seeker wanting to explore Buddhist monasteries, or a family looking for a gentle cultural immersion, we have the expertise to craft the perfect itinerary for you.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
