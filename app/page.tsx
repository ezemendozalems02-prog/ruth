import { Hero } from '@/components/home/hero'
import { AboutPreview } from '@/components/home/about-preview'
import { ServicesStrip } from '@/components/home/services-strip'
import { FeaturedGallery } from '@/components/home/featured-gallery'
import { WorkshopsPreview } from '@/components/home/workshops-preview'
import { Testimonials } from '@/components/testimonials'
import { InstagramFeed } from '@/components/instagram-feed'
import { HomeCta } from '@/components/home/home-cta'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesStrip />
      <FeaturedGallery />
      <WorkshopsPreview />
      <Testimonials />
      <InstagramFeed />
      <HomeCta />
    </main>
  )
}
