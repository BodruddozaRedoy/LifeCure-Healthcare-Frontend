'use client';

import * as React from 'react';
import { Search, Calendar, Video, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: Search,
    step: 'Step 1',
    title: 'Search for Doctors',
    description: 'Use our AI-powered search to find the right doctor based on your symptoms, location, and preferences.',
  },
  {
    icon: Calendar,
    step: 'Step 2',
    title: 'Book Appointment',
    description: 'Choose a convenient time slot and book your appointment instantly with just a few clicks.',
  },
  {
    icon: Video,
    step: 'Step 3',
    title: 'Attend Consultation',
    description: 'Join your video consultation at the scheduled time from anywhere using your device.',
  },
  {
    icon: FileCheck,
    step: 'Step 4',
    title: 'Get Prescription',
    description: 'Receive your digital prescription and health recommendations directly in your dashboard.',
  },
];

export function EasyStepsSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Easy Steps to Get Your Solution
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get started with your healthcare journey in just 4 simple steps
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col gap-8 lg:flex-row lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <Card className="border-border bg-card transition-all hover:shadow-lg">
                    <CardContent className="p-6 sm:p-8">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="mb-2 text-sm font-semibold text-primary">
                        {step.step}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
            {steps.map((_, index) => (
              <div
                key={index}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground"
                style={{ top: `${index * 25 + 12.5}%`, left: '-24px' }}
              >
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 text-center sm:p-12">
          <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Get Started?
          </h3>
          <p className="mb-6 text-lg text-muted-foreground">
            Join thousands of patients who trust us for their healthcare needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90">
              Book Appointment
            </button>
            <button className="rounded-lg border-2 border-border bg-background px-8 py-3 font-semibold text-foreground transition-all hover:bg-accent">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
