import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import React-icons

function Footer() {
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socials = [
    { name: 'GitHub', url: 'IhantsaFana', icon: FaGithub },
    { name: 'LinkedIn', url: 'in/ihantsa-rakotondranaivo4693112b9', icon: FaLinkedin },
    { name: 'Facebook', url: 'ihantsarakotondranaivo', icon: FaFacebook },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-[#6DBE45]">OEKA</div>
            <p className="text-sm leading-relaxed text-white/70">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#6DBE45] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-[#6DBE45] transition-colors">
                <a href="mailto:ihantsarakotondranaivo@gmail.com">ihantsarakotondranaivo@gmail.com</a>
              </li>
              <li className="hover:text-[#6DBE45] transition-colors">
                <a href="tel:+261347822666">+261 38 47 025 32</a>
              </li>
              <li>Antananarivo, Madagascar</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com/${social.url}`}
                  className="text-white/70 hover:text-[#6DBE45] transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 text-sm text-center border-t border-white/10 text-white/50">
          © {new Date().getFullYear()} OEKA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
