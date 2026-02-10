import { Mountain, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-white" />
              <span className="font-display font-bold text-xl">
                NepalTravels
              </span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Experience the majesty of the Himalayas with authentic,
              sustainable, and unforgettable journeys across Nepal.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="hover:text-white transition-colors"
                >
                  Our Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-white">
              Popular Destinations
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>Everest Base Camp</li>
              <li>Annapurna Circuit</li>
              <li>Pokhara Lakeside</li>
              <li>Chitwan Safari</li>
              <li>Kathmandu Valley</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+977 1-4200000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@nepaltravels.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} NepalTravels. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
