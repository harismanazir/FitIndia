import { programs } from "../data/programs";

/**
 * Programs page component showcasing all available fitness programs
 * Displays detailed information about each program including duration, level, and benefits
 * Features responsive grid layout with hover effects
 */
export default function Programs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="programs-title">
            Our <span className="text-accent">Programs</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="programs-description">
            Discover our comprehensive range of fitness programs designed to meet every goal,
            fitness level, and preference. Led by certified trainers in world-class facilities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-secondary rounded-xl overflow-hidden group hover-lift hover-glow"
                data-testid={`program-card-${program.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    data-testid={`program-image-${program.id}`}
                  />
                  {program.badge && (
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${program.badgeColor}`}
                        data-testid={`program-badge-${program.id}`}
                      >
                        {program.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`program-name-${program.id}`}>
                    {program.name}
                  </h3>
                  <p className="text-text-muted mb-4 text-sm" data-testid={`program-description-${program.id}`}>
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent font-semibold" data-testid={`program-duration-${program.id}`}>
                      {program.duration}
                    </span>
                    <span className="text-text-muted text-sm" data-testid={`program-level-${program.id}`}>
                      {program.level}
                    </span>
                  </div>
                  
                  {/* Program Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Benefits:</h4>
                    <ul className="text-xs text-text-muted space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2" data-testid={`program-benefit-${program.id}-${index}`}>
                          <i className="fas fa-check text-accent text-xs"></i>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    className="w-full bg-accent hover:bg-accent-light text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                    data-testid={`button-join-program-${program.id}`}
                  >
                    Join Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-testid="why-choose-title">
              Why Choose Our <span className="text-accent">Programs?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="feature-expert-title">Expert Trainers</h3>
              <p className="text-text-muted" data-testid="feature-expert-description">
                All our programs are led by certified professionals with years of experience in their respective fields.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="feature-progress-title">Progress Tracking</h3>
              <p className="text-text-muted" data-testid="feature-progress-description">
                Monitor your progress with detailed assessments and personalized feedback to keep you motivated.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="feature-community-title">Supportive Community</h3>
              <p className="text-text-muted" data-testid="feature-community-description">
                Join a community of like-minded individuals who support and motivate each other to achieve goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
