// Import React hooks for state management and UI feedback
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"; // Toast notifications for user feedback

/**
 * Contact page component - Allows visitors to get in touch with FitIndia
 * 
 * This page provides multiple ways for potential members to contact the gym:
 * - Contact form with validation for inquiries and program interest
 * - Complete contact information (address, phone, email, hours)
 * - Map placeholder for location display
 * - Information about free services (gym tour, consultation, Q&A)
 * 
 * Form features:
 * - Client-side validation for required fields
 * - Toast notifications for success/error feedback
 * - Dropdown for program interest selection
 * - Responsive design for all devices
 */
export default function Contact() {
  // Hook for displaying toast notifications to user
  const { toast } = useToast();
  
  // State to manage all form input data
  // Using controlled components pattern for form handling
  const [formData, setFormData] = useState({
    firstName: "",    // Required field for personal greeting
    lastName: "",     // Required field for full name
    email: "",        // Required field for response contact
    phone: "",        // Optional field for phone contact preference
    interest: "",     // Optional dropdown for specific program interest
    message: "",      // Required field for inquiry details
  });

  /**
   * Handles input changes for all form fields
   * Updates the formData state whenever user types in any input field
   * Uses the 'name' attribute to identify which field to update
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target; // Get field name and current value
    
    // Update only the specific field that changed, keeping other fields unchanged
    setFormData((prev) => ({
      ...prev,        // Keep existing form data
      [name]: value,  // Update only the field that changed
    }));
  };

  /**
   * Handles form submission when user clicks "Send Message"
   * Includes basic client-side validation and user feedback
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Basic validation - check if all required fields are filled
    // Required fields: firstName, lastName, email, message
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      // Show error toast if validation fails
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive", // Red error styling
      });
      return; // Stop execution if validation fails
    }

    // In a real application, this would send data to a server
    // For now, we simulate successful submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form to empty state after successful submission
    // This provides clear feedback that the form was submitted
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto" data-testid="contact-description">
            Ready to start your fitness journey? Contact us today for a free consultation and tour of our facilities.
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-secondary rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6" data-testid="form-title">Send us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-300"
                      placeholder="Enter your first name"
                      data-testid="input-first-name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-300"
                      placeholder="Enter your last name"
                      data-testid="input-last-name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-300"
                    placeholder="Enter your email address"
                    data-testid="input-email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-300"
                    placeholder="Enter your phone number"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="interest">
                    Interested Program
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-300"
                    data-testid="select-interest"
                  >
                    <option value="">Select a program</option>
                    <option value="strength">Strength Training</option>
                    <option value="yoga">Yoga & Meditation</option>
                    <option value="crossfit">CrossFit</option>
                    <option value="zumba">Zumba Dance</option>
                    <option value="personal">Personal Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your fitness goals and any questions you have"
                    data-testid="textarea-message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3"
                  data-testid="button-submit-form"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-secondary rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6" data-testid="visit-gym-title">Visit Our Gym</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-text-muted" data-testid="contact-full-address">
                        123 Fitness Street, Sector 15<br />
                        Gurgaon, Haryana 122001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-text-muted" data-testid="contact-full-phone">
                        +91 98765 43210<br />
                        +91 98765 43211
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-text-muted" data-testid="contact-full-email">
                        info@fitindia.com<br />
                        support@fitindia.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hours</h4>
                      <p className="text-text-muted" data-testid="contact-full-hours">
                        Mon-Fri: 5:00 AM - 11:00 PM<br />
                        Sat-Sun: 6:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6" data-testid="location-title">Location</h3>
                <div className="bg-primary rounded-lg h-64 flex items-center justify-center" data-testid="map-placeholder">
                  <div className="text-center">
                    <i className="fas fa-map text-accent text-3xl mb-4"></i>
                    <p className="text-text-muted">Interactive Google Maps will be embedded here</p>
                    <p className="text-text-muted text-sm mt-2">
                      123 Fitness Street, Sector 15, Gurgaon, Haryana 122001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" data-testid="additional-info-title">
              Need More <span className="text-accent">Information?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-calendar-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="info-tour-title">Free Gym Tour</h3>
              <p className="text-text-muted" data-testid="info-tour-description">
                Schedule a free tour of our facilities and meet our trainers. See what makes FitIndia special.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-clipboard-list text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="info-consultation-title">Free Consultation</h3>
              <p className="text-text-muted" data-testid="info-consultation-description">
                Get a personalized fitness assessment and program recommendation from our expert trainers.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-question-circle text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold" data-testid="info-questions-title">Questions & Answers</h3>
              <p className="text-text-muted" data-testid="info-questions-description">
                Have questions about our programs or memberships? We're here to help you find the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
