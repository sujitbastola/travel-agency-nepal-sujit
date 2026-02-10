import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertBookingSchema, insertInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Tours
  app.get(api.tours.list.path, async (req, res) => {
    const tours = await storage.getTours();
    res.json(tours);
  });

  app.get(api.tours.get.path, async (req, res) => {
    const tour = await storage.getTour(Number(req.params.id));
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
  });

  // Bookings
  app.post(api.bookings.create.path, async (req, res) => {
    try {
      const input = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(input);
      res.status(201).json(booking);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  const existingTours = await storage.getTours();
  if (existingTours.length === 0) {
    console.log("Seeding database with Nepal tours...");
    
    await storage.createTour({
      title: "Everest Base Camp Trek",
      description: "Journey to the foot of the world's highest peak. Experience Sherpa culture, stunning monasteries, and breathtaking views of Everest, Lhotse, and Nuptse.",
      price: 1450,
      duration: "14 Days",
      location: "Everest Region",
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80",
      isFeatured: true,
      itinerary: [
        "Day 1: Arrival in Kathmandu",
        "Day 2: Flight to Lukla, Trek to Phakding",
        "Day 3: Trek to Namche Bazaar",
        "Day 4: Acclimatization in Namche",
        "Day 5: Trek to Tengboche",
        "Day 6: Trek to Dingboche",
        "Day 7: Acclimatization in Dingboche",
        "Day 8: Trek to Lobuche",
        "Day 9: Trek to Gorak Shep & EBC",
        "Day 10: Kalapatthar Hike & Pheriche",
        "Day 11: Trek to Namche Bazaar",
        "Day 12: Trek to Lukla",
        "Day 13: Flight back to Kathmandu",
        "Day 14: Final Departure"
      ]
    });

    await storage.createTour({
      title: "Annapurna Circuit Trek",
      description: "A classic trek circling the Annapurna massif. Diverse landscapes from subtropical forests to alpine peaks, crossing the Thorong La Pass.",
      price: 1200,
      duration: "16 Days",
      location: "Annapurna Region",
      imageUrl: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80",
      isFeatured: true,
      itinerary: [
        "Day 1: Drive to Besisahar",
        "Day 2: Trek to Bahundanda",
        "Day 3: Trek to Chamje",
        "Day 4: Trek to Bagarchhap",
        "Day 5: Trek to Chame",
        "Day 6: Trek to Pisang",
        "Day 7: Trek to Manang",
        "Day 8: Acclimatization in Manang",
        "Day 9: Trek to Yak Kharka",
        "Day 10: Trek to Thorong Phedi",
        "Day 11: Cross Thorong La Pass to Muktinath",
        "Day 12: Trek to Jomsom",
        "Day 13: Flight to Pokhara",
        "Day 14: Sightseeing in Pokhara",
        "Day 15: Drive to Kathmandu",
        "Day 16: Departure"
      ]
    });

    await storage.createTour({
      title: "Kathmandu Valley Cultural Tour",
      description: "Explore the 7 UNESCO World Heritage Sites of the Kathmandu Valley. Ancient temples, royal palaces, and vibrant local markets.",
      price: 600,
      duration: "5 Days",
      location: "Kathmandu Valley",
      imageUrl: "https://images.unsplash.com/photo-1572888195250-3037a59d3578?auto=format&fit=crop&q=80",
      isFeatured: false,
      itinerary: [
        "Day 1: Arrival & Welcome Dinner",
        "Day 2: Swayambhunath & Kathmandu Durbar Square",
        "Day 3: Patan Durbar Square & Pashupatinath",
        "Day 4: Bhaktapur Durbar Square & Changunarayan",
        "Day 5: Departure"
      ]
    });
    
    await storage.createTour({
      title: "Chitwan Jungle Safari",
      description: "Wildlife adventure in the heart of Nepal. Spot one-horned rhinos, Bengal tigers, and elephants in their natural habitat.",
      price: 450,
      duration: "3 Days",
      location: "Chitwan National Park",
      imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
      isFeatured: false,
      itinerary: [
        "Day 1: Drive to Chitwan & Village Walk",
        "Day 2: Jungle Safari, Canoe Ride & Elephant Breeding Center",
        "Day 3: Bird Watching & Drive back to Kathmandu"
      ]
    });
  }

  return httpServer;
}
