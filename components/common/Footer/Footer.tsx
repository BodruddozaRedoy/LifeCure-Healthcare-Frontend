'use client';

import * as React from 'react';
import Link from 'next/link';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-foreground">HealthAI</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Your trusted healthcare companion powered by AI. Get instant medical consultations and connect with top doctors.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/consultation" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/health-plans" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Health Plans
                </Link>
              </li>
              <li>
                <Link href="/medicine" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Medicine
                </Link>
              </li>
              <li>
                <Link href="/diagnostics" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/ngos" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  NGOs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:support@healthai.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  support@healthai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  123 Healthcare St, Medical District, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HealthAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
