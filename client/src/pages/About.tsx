/**
 * About page component showcasing FitIndia's mission, vision, and facilities
 * Features the company's history, values, and facility images
 * Highlights what makes FitIndia unique in the fitness industry
 */
export default function About() {
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Cardio Zone",
      description: "Latest treadmills & equipment",
    },
    {
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Strength Training",
      description: "Professional-grade weights",
    },
    {
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Group Classes",
      description: "Yoga, Zumba & more",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
            About <span className="text-accent">FitIndia</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="about-intro">
            Since 2015, FitIndia has been India's premier destination for fitness transformation,
            combining cutting-edge equipment with personalized training to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-bullseye text-white text-lg"></i>
                </div>
                <h2 className="text-2xl font-semibold" data-testid="mission-title">Our Mission</h2>
              </div>
              <p className="text-text-muted leading-relaxed" data-testid="mission-text">
                To empower individuals to achieve their fitness goals through innovative training methods,
                state-of-the-art facilities, and unwavering support. We believe fitness is not just about
                physical transformation—it's about building confidence, discipline, and a healthier lifestyle.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-eye text-white text-lg"></i>
                </div>
                <h2 className="text-2xl font-semibold" data-testid="vision-title">Our Vision</h2>
              </div>
              <p className="text-text-muted leading-relaxed" data-testid="vision-text">
                To become India's most trusted fitness brand, creating a community where everyone feels
                welcomed and motivated to pursue their health and wellness journey. We envision a future
                where fitness is accessible, enjoyable, and sustainable for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="story-title">Our Story</h2>
              <div className="space-y-4 text-text-muted">
                <p data-testid="story-paragraph-1">
                  FitIndia began as a dream to create a fitness space that goes beyond traditional gyms.
                  Founded in 2015 by fitness enthusiasts who believed that everyone deserves access to
                  quality fitness facilities and expert guidance.
                </p>
                <p data-testid="story-paragraph-2">
                  What started as a single location in Gurgaon has grown into a community of over 5,000
                  members who have transformed their lives through our comprehensive fitness programs.
                  Our success is measured not just in numbers, but in the countless success stories of
                  our members.
                </p>
                <p data-testid="story-paragraph-3">
                  Today, we continue to innovate and expand our offerings, always staying true to our
                  core values of excellence, community, and personal transformation. Every day, we're
                  inspired by our members' dedication and progress.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="FitIndia Gym Interior"
                className="rounded-xl shadow-lg"
                data-testid="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="facilities-title">
              Our <span className="text-accent">Facilities</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="facilities-description">
              State-of-the-art equipment and modern facilities designed to support every aspect of your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    data-testid={`facility-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold" data-testid={`facility-title-${index}`}>
                      {facility.title}
                    </h4>
                    <p className="text-sm" data-testid={`facility-description-${index}`}>
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-testid="values-title">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="value-community-title">Community</h3>
              <p className="text-text-muted" data-testid="value-community-description">
                Building a supportive community where everyone motivates and inspires each other to reach their goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-medal text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="value-excellence-title">Excellence</h3>
              <p className="text-text-muted" data-testid="value-excellence-description">
                Striving for excellence in everything we do, from our equipment to our training programs and customer service.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="value-wellness-title">Wellness</h3>
              <p className="text-text-muted" data-testid="value-wellness-description">
                Promoting holistic wellness that encompasses physical, mental, and emotional health for a balanced lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
