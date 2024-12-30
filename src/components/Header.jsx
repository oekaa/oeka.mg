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
      icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
      oeka: 'IhantsaFana'
    },
    {
      name: 'LinkedIn',
      icon: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
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
