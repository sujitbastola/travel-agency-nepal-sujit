import { useParams } from "wouter";
import { useTour } from "@/hooks/use-tours";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Calendar, Check, Loader2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

export default function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const tourId = Number(id);
  
  const { data: tour, isLoading, error } = useTour(tourId);
  const createBooking = useCreateBooking();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      tourId: tourId,
      guests: 1,
      bookingDate: "",
      name: "",
      email: "",
      phone: ""
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-2xl font-bold text-secondary">Tour not found</h2>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  const onSubmit = (data: InsertBooking) => {
    // Ensure tourId is set correctly as form hidden input might lose type
    createBooking.mutate({ ...data, tourId });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[60vh]">
        <img 
          src={tour.imageUrl} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex gap-4 mb-4 text-sm font-medium tracking-wide uppercase">
              <span className="bg-primary px-3 py-1 rounded-full">{tour.location}</span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">{tour.duration}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl">
              {tour.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Highlights */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-secondary">Trip Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Experienced English-speaking Guide",
                  "All permits and park fees included",
                  "Airport transfers included",
                  "Authentic local accommodation",
                  "Small group sizes",
                  "Sustainable travel practices"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-secondary-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-secondary">Daily Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      {index !== tour.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-lg mb-2 text-secondary">Day {index + 1}</h4>
                      <p className="text-muted-foreground leading-relaxed">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-xl border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="mb-6 pb-6 border-b">
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display font-bold text-primary">${tour.price}</span>
                      <span className="text-muted-foreground">/ person</span>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 234 567 8900" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="bookingDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="guests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Guests</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  min={1} 
                                  {...field} 
                                  onChange={e => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-lg h-12 mt-4"
                        disabled={createBooking.isPending}
                      >
                        {createBooking.isPending ? "Submitting..." : "Book Adventure"}
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        *No payment required yet. We will contact you to confirm details.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">Need Customization?</h4>
                <p className="text-sm text-blue-800 mb-4">
                  We can tailor this trip to your specific needs, timeline, and budget.
                </p>
                <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100">
                  Contact an Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
