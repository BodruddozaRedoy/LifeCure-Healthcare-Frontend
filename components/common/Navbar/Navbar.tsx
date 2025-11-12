'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-foreground">LifeCure</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/consultation" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Consultation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/health-plans" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Health Plans
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/medicine" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Medicine
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/diagnostics" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Diagnostics
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/ngos" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      NGOs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="outline" className="text-foreground">
                  Login
                </Button>
              </Link>
              <Link href="/book">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          <button
            className="md:hidden rounded-md p-2 text-foreground hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-2">
              <Link href="/consultation" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
                Consultation
              </Link>
              <Link href="/health-plans" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
                Health Plans
              </Link>
              <Link href="/medicine" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
                Medicine
              </Link>
              <Link href="/diagnostics" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
                Diagnostics
              </Link>
              <Link href="/ngos" className="rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
                NGOs
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/login">
                  <Button variant="outline" className="w-full text-foreground">
                    Login
                  </Button>
                </Link>
                <Link href="/book">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
