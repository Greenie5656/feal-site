import Container from './Container';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-accent">FEAL Electrical Automotive Ltd</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialist supply & fit auto-electrical solutions for fleets and commercial vehicles.
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
                <a href="tel:07702071515" className="text-gray-300 hover:text-accent transition">
                  07702 071515
                </a>
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
                  <p>Monday - Friday: 8am - 5pm</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} FEAL Electrical Automotive Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}