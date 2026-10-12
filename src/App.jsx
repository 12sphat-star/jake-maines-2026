import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PropertySearch from './components/PropertySearch'
import SellReadyTeaser from './components/SellReadyTeaser'
import BuyerExperience from './components/BuyerExperience'
import SellReady from './components/SellReady'
import FeaturedListings from './components/FeaturedListings'
import MeetJake from './components/MeetJake'
import JakeClientExperience from './components/JakeClientExperience'
import JakeNetworking from './components/JakeNetworking'
import Neighborhoods from './components/Neighborhoods'
import SuccessStories from './components/SuccessStories'
import AIConcierge from './components/AIConcierge'
import ContactFooter from './components/ContactFooter'

function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <SellReadyTeaser />
        <PropertySearch />
        <MeetJake />
      </main>
      <ContactFooter />
    </>
  )
}

function BuyPage() {
  return (
    <>
      <main id="main-content">
        <BuyerExperience />
      </main>
      <ContactFooter />
    </>
  )
}

function SellPage() {
  return (
    <>
      <main id="main-content">
        <SellReady />
        <SuccessStories />
      </main>
      <ContactFooter />
    </>
  )
}

function NeighborhoodsPage() {
  return (
    <>
      <main id="main-content">
        <Neighborhoods />
      </main>
      <ContactFooter />
    </>
  )
}

function ListingsPage() {
  return (
    <>
      <main id="main-content">
        <FeaturedListings />
      </main>
      <ContactFooter />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <main id="main-content">
        <MeetJake />
         <JakeClientExperience />
           <JakeNetworking />
      </main>
      <ContactFooter />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <main id="main-content">
        <ContactFooter />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <AIConcierge />
    </BrowserRouter>
  )
}
