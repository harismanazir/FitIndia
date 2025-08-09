// Import necessary libraries and components
import { Switch, Route } from "wouter"; // Client-side routing library
import { queryClient } from "./lib/queryClient"; // React Query client for API state management
import { QueryClientProvider } from "@tanstack/react-query"; // Provider for React Query
import { Toaster } from "@/components/ui/toaster"; // Toast notifications component
import { TooltipProvider } from "@/components/ui/tooltip"; // Tooltip provider for UI tooltips

// Import layout component that wraps all pages
import Layout from "./components/Layout";

// Import all page components
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

/**
 * Router component that defines all application routes
 * Uses wouter for lightweight client-side routing
 * All routes are wrapped in the Layout component for consistent navigation/footer
 */
function Router() {
  return (
    <Layout>
      <Switch>
        {/* Home page route - displays hero section and quick overview */}
        <Route path="/" component={Home} />
        
        {/* About page route - company mission, vision, and facility info */}
        <Route path="/about" component={About} />
        
        {/* Programs page route - displays all fitness programs available */}
        <Route path="/programs" component={Programs} />
        
        {/* Trainers page route - showcases all gym trainers and their expertise */}
        <Route path="/trainers" component={Trainers} />
        
        {/* Membership page route - pricing plans and membership benefits */}
        <Route path="/membership" component={Membership} />
        
        {/* Contact page route - contact form and location information */}
        <Route path="/contact" component={Contact} />
        
        {/* Fallback route for 404 errors - any unmatched URL */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

/**
 * Main App component that sets up global providers and renders the router
 * Provides React Query for server state management and UI components
 */
function App() {
  return (
    // React Query provider enables data fetching and caching throughout the app
    <QueryClientProvider client={queryClient}>
      {/* Tooltip provider enables tooltips for UI components */}
      <TooltipProvider>
        {/* Toast notification system for user feedback */}
        <Toaster />
        {/* Main router component containing all application routes */}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
