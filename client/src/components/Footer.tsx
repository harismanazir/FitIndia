import { Link } from "wouter";

/**
 * Site-wide footer component for the FitIndia website
 * Contains brand information, quick links, programs, and contact details
 * Includes social media links and copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/trainers", label: "Trainers" },
    { href: "/membership", label: "Membership" },
    { href: "/contact", label: "Contact" },
  ];

  const programs = [
    { href: "/programs", label: "Strength Training" },
    { href: "/programs", label: "Yoga & Meditation" },
    { href: "/programs", label: "CrossFit" },
    { href: "/programs", label: "Zumba Dance" },
    { href: "/programs", label: "Personal Training" },
    { href: "/programs", label: "Nutrition Coaching" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary border-t border-secondary py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <i className="fas fa-dumbbell text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-white">FitIndia</span>
            </div>
            <p className="text-text-muted text-sm">
              Transform your life through fitness. Join India's premier fitness community and achieve your health goals with expert guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-text-muted hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors duration-300"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
                    className="text-text-muted hover:text-accent transition-colors duration-300"
                    data-testid={`footer-program-${program.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-accent"></i>
                <span className="text-text-muted" data-testid="contact-address">123 Fitness Street, Gurgaon</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-accent"></i>
                <span className="text-text-muted" data-testid="contact-phone">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-accent"></i>
                <span className="text-text-muted" data-testid="contact-email">info@fitindia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-accent"></i>
                <span className="text-text-muted" data-testid="contact-hours">Mon-Sun: 5AM - 11PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm" data-testid="copyright">
            © {currentYear} FitIndia. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <p className="text-text-muted text-sm mt-4 md:mt-0" data-testid="tagline">
            Designed with ❤️ for a healthier India by Haris
          </p>
        </div>
      </div>
    </footer>
  );
}
