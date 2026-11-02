import React from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { WaitlistForm } from '@/components/WaitlistForm';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-bone flex flex-col selection:bg-signal-lime selection:text-background">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WaitlistForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
