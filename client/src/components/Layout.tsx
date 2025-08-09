import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component that wraps all pages with consistent navigation and footer
 * Provides the main structure for the FitIndia website
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
