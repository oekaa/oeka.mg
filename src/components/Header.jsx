import { useState } from 'react'

function Header() {
  // Control mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll to section and close mobile menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#6DBE45]/20">
      <nav className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Navigation wrapper */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center text-[#204E27] text-1xl font-bold tracking-tight cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/favicon.svg"
              alt="OEKA"
              className="object-cover w-7 h-5 mr-2"
              loading="lazy"
            />
            OEKA
          </div>


          {/* Desktop menu - hidden on mobile */}
          <div className="items-center hidden gap-8 md:flex">
            <NavLinks scrollToSection={scrollToSection} />
            <SocialIcons />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#204E27] hover:text-[#6DBE45] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu - shows when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#204E27]/10 mt-4">
            <NavLinks mobile scrollToSection={scrollToSection} />
            <SocialIcons mobile />
          </div>
        )}
      </nav>
    </header>
  )
}

// Navigation links component
function NavLinks({ mobile, scrollToSection }) {
  // List of navigation items
  const links = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ]

  const baseClasses = "text-[#204E27] hover:text-[#6DBE45] transition-colors font-medium cursor-pointer"

  return (
    <div className={mobile ? "flex flex-col space-y-4" : "flex items-center gap-6"}>
      {links.map(link => (
        <span
          key={link.name}
          onClick={() => scrollToSection(link.id)}
          className={baseClasses}
        >
          {link.name}
        </span>
      ))}
    </div>
  )
}

// Social media icons component
function SocialIcons({ mobile }) {
  // Social media links and icons
  const socials = [
    {
      name: 'GitHub',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      oeka: 'IhantsaFana'
    },
    {
      name: 'LinkedIn',
      icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
      oeka: 'in/ihantsa-rakotondranaivo4693112b9'
    }
  ]

  // Render icons with mobile-specific styling
  return (
    <div className={`flex ${mobile ? 'mt-4 justify-center' : ''} gap-4`}>
      {socials.map(social => (
        <a
          key={social.name}
          href={`https://${social.name.toLowerCase()}.com/${social.oeka}`}
          className="text-[#204E27] hover:text-[#6DBE45] transition-colors"
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d={social.icon} />
          </svg>
        </a>
      ))}
    </div>
  )
}

export default Header 