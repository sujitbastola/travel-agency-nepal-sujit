import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tours = pgTable("tours", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // in USD
  duration: text("duration").notNull(), // e.g. "14 Days"
  location: text("location").notNull(), // e.g. "Everest Region"
  imageUrl: text("image_url").notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  itinerary: jsonb("itinerary").$type<string[]>().notNull(), // Array of daily activities
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  tourId: integer("tour_id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  bookingDate: text("booking_date").notNull(), // Using string for date picker simplicity
  guests: integer("guests").notNull(),
  status: text("status").default("pending").notNull(), // pending, confirmed
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertTourSchema = createInsertSchema(tours).omit({ id: true });
export const insertBookingSchema = createInsertSchema(bookings).omit({ id: true, status: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true });

export type Tour = typeof tours.$inferSelect;
export type InsertTour = z.infer<typeof insertTourSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
