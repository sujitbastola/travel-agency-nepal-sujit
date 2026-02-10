import { sqliteTable, text, integer, blob } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tours = sqliteTable("tours", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // in USD
  duration: text("duration").notNull(), // e.g. "14 Days"
  location: text("location").notNull(), // e.g. "Everest Region"
  imageUrl: text("image_url").notNull(),
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false).notNull(),
    // social handles removed (instagram/facebook/tiktok)
    itinerary: blob("itinerary", { mode: "json" }).$type<string[]>().notNull(), // Array of daily activities
});

export const bookings = sqliteTable("bookings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  tourId: integer("tour_id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  bookingDate: text("booking_date").notNull(), // Using string for date picker simplicity
  guests: integer("guests").notNull(),
  status: text("status").default("pending").notNull(), // pending, confirmed
});

export const inquiries = sqliteTable("inquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
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
