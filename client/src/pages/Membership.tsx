import { membershipPlans } from "../data/membership";

/**
 * Membership page component displaying pricing plans and benefits
 * Features three-tier pricing structure with highlighted popular plan
 * Includes money-back guarantee and comparison features
 */
export default function Membership() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="membership-title">
            Membership <span className="text-accent">Plans</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="membership-description">
            Choose the perfect plan for your fitness journey. All memberships include access to our full range of equipment,
            group classes, and expert guidance from our certified trainers.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-secondary rounded-xl p-8 relative hover-lift hover-glow ${
                  plan.popular ? "border-2 border-accent" : ""
                }`}
                data-testid={`membership-plan-${plan.id}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent px-4 py-2 rounded-full text-sm font-semibold" data-testid={`plan-badge-${plan.id}`}>
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" data-testid={`plan-name-${plan.id}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent" data-testid={`plan-price-${plan.id}`}>
                      {plan.price}
                    </span>
                    <span className="text-text-muted" data-testid={`plan-period-${plan.id}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-text-muted mb-8" data-testid={`plan-description-${plan.id}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3" data-testid={`plan-feature-${plan.id}-${index}`}>
                      <i className="fas fa-check text-accent"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full bg-accent hover:bg-accent-light text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  data-testid={`button-select-plan-${plan.id}`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 bg-secondary px-6 py-4 rounded-lg">
              <i className="fas fa-shield-alt text-accent text-xl"></i>
              <span className="text-lg font-semibold" data-testid="guarantee-text">30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-testid="benefits-title">
              Membership <span className="text-accent">Benefits</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="benefits-description">
              Every FitIndia membership comes with these amazing benefits designed to support your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-dumbbell text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="benefit-equipment-title">Premium Equipment</h3>
              <p className="text-text-muted text-sm" data-testid="benefit-equipment-description">
                Access to the latest fitness equipment from top brands, maintained to the highest standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="benefit-classes-title">Group Classes</h3>
              <p className="text-text-muted text-sm" data-testid="benefit-classes-description">
                Unlimited access to all group fitness classes including yoga, Zumba, CrossFit, and more.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="benefit-guidance-title">Expert Guidance</h3>
              <p className="text-text-muted text-sm" data-testid="benefit-guidance-description">
                Free fitness assessments and guidance from our certified trainers to help you reach your goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold" data-testid="benefit-hours-title">Flexible Hours</h3>
              <p className="text-text-muted text-sm" data-testid="benefit-hours-description">
                Extended operating hours from 5 AM to 11 PM, 7 days a week to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-testid="faq-title">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold mb-3" data-testid="faq-question-1">Can I cancel my membership anytime?</h3>
              <p className="text-text-muted" data-testid="faq-answer-1">
                Yes, you can cancel your membership with 30 days notice. We also offer a 30-day money-back guarantee for new members.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold mb-3" data-testid="faq-question-2">Do you offer personal training sessions?</h3>
              <p className="text-text-muted" data-testid="faq-answer-2">
                Yes, personal training sessions are included in our Quarterly and Yearly plans. Monthly members can purchase additional sessions.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold mb-3" data-testid="faq-question-3">Can I bring guests to the gym?</h3>
              <p className="text-text-muted" data-testid="faq-answer-3">
                Quarterly members get 2 guest passes per month, and Yearly members get unlimited guest passes. Monthly members can purchase day passes for guests.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold mb-3" data-testid="faq-question-4">What if I'm traveling and can't use the gym?</h3>
              <p className="text-text-muted" data-testid="faq-answer-4">
                We offer membership freeze options for extended travel periods. Contact our member services team for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
