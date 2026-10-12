
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/Navigation.css'

const navLinks = [
  { label: 'Buy', href: '/buy' },
  { label: 'Sell Ready', href: '/sell' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
  { label: 'Listings', href: '/listings' },
  { label: 'About Jake', href: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isDarkHero = location.pathname === '/' && !scrolled && !menuOpen

  return (
    <>
      <nav
        className={`nav ${
          isDarkHero ? 'nav-dark-hero' : 'nav-light-surface'
        } ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="container nav-inner">
          <Link
            to="/"
            className="nav-logo"
            aria-label="Jake Maines Realty homepage"
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-logo-name">
              Jake Maines
            </span>

            <span className="nav-logo-realty">
              REALTY
            </span>

            <span className="nav-logo-location">
              VIRGINIA BEACH
            </span>
          </Link>

          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                 className={({ isActive }) =>
  `nav-link ${
    link.href === '/sell' ? 'nav-sell-ready' : ''
  } ${
    isActive ? 'nav-link-active' : ''
  }`
}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="/contact"
                className="nav-link nav-cta"
                id="nav-contact-cta"
              >
                Let's Connect
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            className={`nav-toggle ${
              menuOpen ? 'is-open' : ''
            }`}
            onClick={() => {
              setMenuOpen((open) => !open)
            }}
            aria-expanded={menuOpen}
            aria-controls="jake-mobile-menu"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="jake-mobile-menu"
        className={`nav-mobile ${
          menuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <ul className="nav-mobile-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="btn btn-primary"
          id="mobile-nav-contact-cta"
          onClick={() => setMenuOpen(false)}
        >
          Let's Connect
        </NavLink>
      </div>
    </>
  )
}
