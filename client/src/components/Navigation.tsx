// Import React hooks and routing utilities
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter"; // Routing components from wouter
import { useIsMobile } from "@/hooks/use-mobile"; // Custom hook to detect mobile devices

/**
 * Navigation component - Sticky header navigation for all pages
 * 
 * Key features:
 * - Sticky positioning (stays at top when scrolling)
 * - Responsive design with mobile hamburger menu
 * - Dynamic background opacity based on scroll position
 * - Active page highlighting in navigation links
 * - FitIndia logo with dumbbell icon
 * - Call-to-action "Join Now" button
 * 
 * Mobile behavior:
 * - Hamburger menu icon toggles mobile menu
 * - Mobile menu slides down with all navigation links
 * - Menu automatically closes when user navigates to new page
 */
export default function Navigation() {
  // Get current page location for active link highlighting
  const [location] = useLocation();
  
  // State to track if user has scrolled (for background change effect)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State to control mobile menu visibility (open/closed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook to determine if user is on mobile device
  const isMobile = useIsMobile();

  // Effect to handle scroll-based background change
  // Changes navbar opacity/background when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, consider it "scrolled"
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to close mobile menu when user navigates to different page
  // This ensures menu doesn't stay open after user clicks a link
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]); // Runs whenever the current page location changes

  // Navigation menu items configuration
  // Each item has a route path and display label
  const navItems = [
    { href: "/", label: "Home" },           // Landing page with hero section
    { href: "/about", label: "About" },     // Company info, mission, facilities
    { href: "/programs", label: "Programs" }, // All fitness programs available
    { href: "/trainers", label: "Trainers" }, // Trainer profiles and expertise
    { href: "/membership", label: "Membership" }, // Pricing and membership plans
    { href: "/contact", label: "Contact" }, // Contact form and location info
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-secondary transition-all duration-300 ${
        isScrolled ? "bg-primary" : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <i className="fas fa-dumbbell text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-white">FitIndia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 ${
                  location === item.href
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/membership">
              <button className="btn-primary" data-testid="button-join-now">
                Join Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-gray-600 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 transition-colors duration-300 ${
                    location === item.href
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Link href="/membership">
                  <button className="btn-primary w-full" data-testid="button-mobile-join-now">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
