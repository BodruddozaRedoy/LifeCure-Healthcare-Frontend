'use client';

import * as React from 'react';
import { Search, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';

export function Hero() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('');
  const [location, setLocation] = React.useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Healthcare</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Find the Right Doctor with{' '}
              <span className="text-primary">AI Assistance</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Get personalized doctor recommendations, instant health consultations, and comprehensive medical care from the comfort of your home.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-foreground">
                How It Works
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="mb-1 text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Doctors</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Patients</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-border bg-card p-6 shadow-xl">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Find Your Doctor</h3>
                <p className="text-sm text-muted-foreground">AI-powered doctor recommendations based on your needs</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    What brings you here today?
                  </label>
                  <Input
                    placeholder="e.g., Chest pain, Fever, Headache..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-input bg-background text-foreground"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Specialty
                  </label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger className="border-input bg-background text-foreground">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="general">General Medicine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter your location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="border-input bg-background pl-10 text-foreground"
                    />
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Find Doctors
                </Button>

                <div className="rounded-lg bg-accent p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent-foreground" />
                    <span className="font-medium text-accent-foreground">AI Suggestion</span>
                  </div>
                  <p className="text-sm text-accent-foreground/80">
                    Based on your symptoms, we recommend consulting a General Physician or Cardiologist for a thorough evaluation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
    </section>
  );
}
