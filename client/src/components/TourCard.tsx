import { Link } from "wouter";
import { Clock, MapPin, ArrowRight, MessageCircle, Users } from "lucide-react";
import { type Tour } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface TourCardProps {
  tour: Tour & { bookingCount?: number };
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {tour.isFeatured && (
          <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{tour.location}</span>
          </div>
          {tour.bookingCount !== undefined && tour.bookingCount > 0 && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-primary" />
              <span>
                {tour.bookingCount}{" "}
                {tour.bookingCount === 1 ? "booking" : "bookings"}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 text-sm mb-6 flex-grow">
          {tour.description}
        </p>

        {/* social links removed */}

        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              From
            </span>
            <div className="text-lg font-bold text-primary">${tour.price}</div>
          </div>

          <div className="flex gap-2">
            <a
              href={`https://wa.me/9779745450737?text=Hi!%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title)}%20tour.%20Please%20provide%20more%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 shadow-sm hover:shadow-md"
              title="Contact via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <Link href={`/tours/${tour.id}`}>
              <Button
                variant="outline"
                className="group/btn hover:bg-primary hover:text-white hover:border-primary"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
