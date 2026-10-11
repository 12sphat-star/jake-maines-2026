import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PropertySearch from './components/PropertySearch'
import BuyerExperience from './components/BuyerExperience'
import SellReady from './components/SellReady'
import FeaturedListings from './components/FeaturedListings'
import MeetJake from './components/MeetJake'
import Neighborhoods from './components/Neighborhoods'
import SuccessStories from './components/SuccessStories'
import AIConcierge from './components/AIConcierge'
import ContactFooter from './components/ContactFooter'

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <PropertySearch />
      <MeetJake />
      <ContactFooter />
    </main>
  )
}

function BuyPage() {
  return (
    <main id="main-content">
      <BuyerExperience />
      <ContactFooter />
    </main>
  )
}

function SellPage() {
  return (
    <main id="main-content">
      <SellReady />
      <SuccessStories />
      <ContactFooter />
    </main>
  )
}

function NeighborhoodsPage() {
  return (
    <main id="main-content">
      <Neighborhoods />
      <ContactFooter />
    </main>
  )
}

function ListingsPage() {
  return (
    <main id="main-content">
      <FeaturedListings />
      <ContactFooter />
    </main>
  )
}

function AboutPage() {
  return (
    <main id="main-content">
      <MeetJake />
      <ContactFooter />
    </main>
  )
}

function ContactPage() {
  return (
    <main id="main-content">
      <ContactFooter />
    </main>
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
