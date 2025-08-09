import { Link } from "wouter";

/**
 * Home page component featuring hero section with inspiring call-to-action
 * Showcases the main value proposition of FitIndia gym
 * Includes background image with overlay and scroll indicator
 */
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Transform Your <span className="text-accent">Body</span>
            <br />
            Transform Your <span className="text-accent">Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-muted max-w-2xl mx-auto" data-testid="hero-description">
            Join FitIndia and discover the strongest version of yourself with world-class equipment, expert trainers, and a community that motivates you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <button className="btn-primary text-lg px-8 py-4" data-testid="button-start-journey">
                Start Your Journey
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-secondary text-lg px-8 py-4" data-testid="button-watch-story">
                Watch Our Story
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll">
          <i className="fas fa-chevron-down text-white text-2xl" data-testid="scroll-indicator"></i>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent" data-testid="stat-members">5000+</div>
              <div className="text-text-muted">Happy Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent" data-testid="stat-trainers">25+</div>
              <div className="text-text-muted">Expert Trainers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent" data-testid="stat-programs">15+</div>
              <div className="text-text-muted">Fitness Programs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent" data-testid="stat-years">9+</div>
              <div className="text-text-muted">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="featured-programs-title">
            Featured <span className="text-accent">Programs</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-12" data-testid="featured-programs-description">
            Discover our most popular fitness programs designed to help you achieve your goals faster.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary rounded-xl p-6 hover-lift">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dumbbell text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="preview-strength-title">Strength Training</h3>
              <p className="text-text-muted text-sm" data-testid="preview-strength-description">
                Build muscle and increase power with our comprehensive strength training program.
              </p>
            </div>
            
            <div className="bg-secondary rounded-xl p-6 hover-lift">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="preview-yoga-title">Yoga & Meditation</h3>
              <p className="text-text-muted text-sm" data-testid="preview-yoga-description">
                Find balance and inner peace through our guided yoga and meditation sessions.
              </p>
            </div>
            
            <div className="bg-secondary rounded-xl p-6 hover-lift">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-fire text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="preview-crossfit-title">CrossFit</h3>
              <p className="text-text-muted text-sm" data-testid="preview-crossfit-description">
                High-intensity functional movements that challenge your limits and build total fitness.
              </p>
            </div>
          </div>
          
          <Link href="/programs">
            <button className="btn-primary" data-testid="button-view-all-programs">
              View All Programs
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
