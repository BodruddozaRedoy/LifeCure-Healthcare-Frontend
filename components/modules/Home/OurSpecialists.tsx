'use client';

import * as React from 'react';
import { Heart, Brain, Baby, Bone, Eye, Stethoscope, Activity, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const specialists = [
  {
    icon: Heart,
    name: 'Cardiology',
    description: 'Heart & cardiovascular care',
    count: '450+ Doctors',
  },
  {
    icon: Brain,
    name: 'Neurology',
    description: 'Brain & nervous system',
    count: '320+ Doctors',
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description: 'Child healthcare',
    count: '580+ Doctors',
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    description: 'Bone & joint care',
    count: '410+ Doctors',
  },
  {
    icon: Eye,
    name: 'Ophthalmology',
    description: 'Eye care specialists',
    count: '290+ Doctors',
  },
  {
    icon: Stethoscope,
    name: 'General Medicine',
    description: 'Primary healthcare',
    count: '920+ Doctors',
  },
  {
    icon: Activity,
    name: 'Dermatology',
    description: 'Skin care specialists',
    count: '350+ Doctors',
  },
  {
    icon: Users,
    name: 'Psychiatry',
    description: 'Mental health care',
    count: '280+ Doctors',
  },
];

export function OurSpecialists() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Specialists
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Connect with top medical professionals across various specialties
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-border bg-card transition-all hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <specialist.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {specialist.name}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {specialist.description}
                </p>
                <p className="text-sm font-medium text-primary">{specialist.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
