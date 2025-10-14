import Container from './Container';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-accent">FEAL Electrical Automotive Ltd</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialist supply and fit solutions for fleets, commercial vehicles, specialist builds, motorhomes, campervans and caravans.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Unit 4 & 5, The Courtyard<br />
                  Haslingden, BB4 4QN
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:07702071515" className="text-gray-300 hover:text-accent transition">
                    07702 071515
                  </a>
                  <a href="tel:07850172376" className="text-gray-300 hover:text-accent transition">
                    07850 172376
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:fealelectricalautomotiveltd@gmail.com" 
                  className="text-gray-300 hover:text-accent transition break-all"
                >
                  fealelectricalautomotiveltd@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Monday - Friday: 8:00am - 4:30pm</p>
                  <p>Saturday & Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-4">
            <a href="/" className="hover:text-accent transition">Home</a>
            <span>|</span>
            <a href="/about" className="hover:text-accent transition">About</a>
            <span>|</span>
            <a href="/fleet" className="hover:text-accent transition">FEAL Fleet</a>
            <span>|</span>
            <a href="/off-grid" className="hover:text-accent transition">FEAL Off-Grid</a>
            <span>|</span>
            <a href="/trackers" className="hover:text-accent transition">FEAL Trackers</a>
            <span>|</span>
            <a href="/projects" className="hover:text-accent transition">Projects</a>
            <span>|</span>
            <a href="/contact" className="hover:text-accent transition">Contact</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm space-y-3">
          <p>© {new Date().getFullYear()} FEAL Electrical Automotive Ltd | Company No. 16512968</p>
          <p className="text-xs">All installations carried out to professional auto-electrical standards.</p>
          
          {/* Crafted by Lancashire Web Fixers */}
          <div className="pt-3">
            <a 
              href="https://www.lancashirewebfixers.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity group"
              aria-label="Website crafted by Lancashire Web Fixers"
            >
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition">
                Website by
              </span>
              <Image 
                src="/FullLogo_resized.png"
                alt="Lancashire Web Fixers - Professional Web Design & Development"
                width={180}
                height={40}
                className="object-contain opacity-80 group-hover:opacity-100 transition"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}