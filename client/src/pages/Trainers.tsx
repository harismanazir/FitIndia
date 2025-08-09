import { trainers } from "../data/trainers";

/**
 * Trainers page component showcasing professional trainer profiles
 * Features detailed information about each trainer's expertise and experience
 * Includes social media links and certifications
 */
export default function Trainers() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="trainers-title">
            Meet Our <span className="text-accent">Trainers</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="trainers-description">
            Our certified fitness professionals are here to guide you on your journey.
            Each trainer brings years of experience and a passion for helping you succeed.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-secondary rounded-xl overflow-hidden group hover-lift hover-glow"
                data-testid={`trainer-card-${trainer.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.specialty}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    data-testid={`trainer-image-${trainer.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`trainer-name-${trainer.id}`}>
                    {trainer.name}
                  </h3>
                  <p className="text-accent font-medium mb-3" data-testid={`trainer-specialty-${trainer.id}`}>
                    {trainer.specialty}
                  </p>
                  <p className="text-text-muted text-sm mb-4" data-testid={`trainer-bio-${trainer.id}`}>
                    {trainer.bio}
                  </p>
                  
                  {/* Trainer Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-text-muted">Experience:</span>
                      <div className="font-semibold" data-testid={`trainer-experience-${trainer.id}`}>
                        {trainer.experience}
                      </div>
                    </div>
                    <div>
                      <span className="text-text-muted">Certification:</span>
                      <div className="font-semibold" data-testid={`trainer-certification-${trainer.id}`}>
                        {trainer.certification}
                      </div>
                    </div>
                  </div>
                  
                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-primary text-accent text-xs px-2 py-1 rounded-full"
                          data-testid={`trainer-specialty-tag-${trainer.id}-${index}`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <button
                      className="text-accent hover:text-accent-light transition-colors duration-300"
                      data-testid={`trainer-instagram-${trainer.id}`}
                    >
                      <i className="fab fa-instagram text-lg"></i>
                    </button>
                    <button
                      className="text-accent hover:text-accent-light transition-colors duration-300"
                      data-testid={`trainer-linkedin-${trainer.id}`}
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Are Special */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-testid="trainer-benefits-title">
              Why Our <span className="text-accent">Trainers</span> Are Special
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-certificate text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="trainer-feature-certified-title">Certified Professionals</h3>
              <p className="text-text-muted text-sm" data-testid="trainer-feature-certified-description">
                All our trainers hold recognized certifications from top fitness organizations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-user-friends text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="trainer-feature-personalized-title">Personalized Approach</h3>
              <p className="text-text-muted text-sm" data-testid="trainer-feature-personalized-description">
                Each trainer creates customized workout plans based on your individual goals and fitness level.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-trophy text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="trainer-feature-results-title">Proven Results</h3>
              <p className="text-text-muted text-sm" data-testid="trainer-feature-results-description">
                Our trainers have helped thousands of members achieve their fitness goals successfully.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="trainer-feature-supportive-title">Supportive & Motivating</h3>
              <p className="text-text-muted text-sm" data-testid="trainer-feature-supportive-description">
                Beyond expertise, our trainers provide the motivation and support you need to stay committed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
