// Import React type for children prop and component dependencies
import { ReactNode } from "react";
import Navigation from "./Navigation"; // Top navigation bar component
import Footer from "./Footer"; // Bottom footer component

// Define the props interface for the Layout component
interface LayoutProps {
  children: ReactNode; // Any React component/element to be rendered as page content
}

/**
 * Layout component that wraps all pages with consistent navigation and footer
 * This creates the overall structure for every page in the FitIndia website
 * 
 * Features:
 * - Full height layout (min-h-screen) to ensure footer stays at bottom
 * - Dark primary background with white text for the gym theme
 * - Consistent navigation bar at the top (sticky)
 * - Main content area that changes based on current page
 * - Footer at the bottom with company info and links
 * 
 * @param children - The page content to be displayed between nav and footer
 */
export default function Layout({ children }: LayoutProps) {
  return (
    // Main container with dark background and white text
    <div className="min-h-screen bg-primary text-white">
      {/* Sticky navigation bar at the top of every page */}
      <Navigation />
      
      {/* Main content area where individual page content is rendered */}
      <main>{children}</main>
      
      {/* Footer section with company info, links, and contact details */}
      <Footer />
    </div>
  );
}
