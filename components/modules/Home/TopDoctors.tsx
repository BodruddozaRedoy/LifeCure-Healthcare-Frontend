'use client';

import * as React from 'react';
import { Star, MapPin, Clock, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const topDoctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 342,
    experience: '15 years',
    location: 'New York, NY',
    availability: 'Available Today',
    consultationFee: '$50',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.8,
    reviews: 289,
    experience: '12 years',
    location: 'Los Angeles, CA',
    availability: 'Available Tomorrow',
    consultationFee: '$60',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    rating: 5.0,
    reviews: 456,
    experience: '18 years',
    location: 'Chicago, IL',
    availability: 'Available Today',
    consultationFee: '$45',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Dr. James Anderson',
    specialty: 'Orthopedic',
    rating: 4.7,
    reviews: 198,
    experience: '20 years',
    location: 'Houston, TX',
    availability: 'Available Today',
    consultationFee: '$55',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export function TopDoctorsSection() {
  return (
    <section className="bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Top Doctors
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Consult with highly rated and experienced medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {topDoctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card transition-all hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                  <Badge className="absolute right-3 top-3 bg-secondary text-secondary-foreground">
                    {doctor.availability}
                  </Badge>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="mb-1 text-lg font-semibold text-foreground">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {doctor.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{doctor.experience} experience</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm text-muted-foreground">Consultation Fee</span>
                    <span className="text-lg font-bold text-primary">
                      {doctor.consultationFee}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-foreground">
                      View Profile
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Video className="mr-1 h-4 w-4" />
                      Book
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" className="text-foreground">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
