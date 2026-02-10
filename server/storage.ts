import { db } from "./db";
import {
  tours, bookings, inquiries,
  type Tour, type InsertTour,
  type Booking, type InsertBooking,
  type Inquiry, type InsertInquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getTours(): Promise<Tour[]>;
  getTour(id: number): Promise<Tour | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  // For seeding
  createTour(tour: InsertTour): Promise<Tour>;
}

export class DatabaseStorage implements IStorage {
  async getTours(): Promise<Tour[]> {
    return await db.select().from(tours);
  }

  async getTour(id: number): Promise<Tour | undefined> {
    const [tour] = await db.select().from(tours).where(eq(tours.id, id));
    return tour;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db.insert(bookings).values(booking).returning();
    return newBooking;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async createTour(tour: InsertTour): Promise<Tour> {
    const [newTour] = await db.insert(tours).values(tour).returning();
    return newTour;
  }
}

export const storage = new DatabaseStorage();
