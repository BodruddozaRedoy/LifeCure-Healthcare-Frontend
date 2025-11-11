import { EasyStepsSection } from '@/components/modules/Home/EasySteps'
import { Hero } from '@/components/modules/Home/Hero'
import { OurSpecialists } from '@/components/modules/Home/OurSpecialists'
import { TopDoctorsSection } from '@/components/modules/Home/TopDoctors'
import React from 'react'

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>

      <section>
        <OurSpecialists />
      </section>

      <section>
        <TopDoctorsSection />
      </section>

      <section>
        <EasyStepsSection />
      </section>
    </>
  )
}
