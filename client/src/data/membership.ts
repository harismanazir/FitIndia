/**
 * MEMBERSHIP PLANS DATA FOR FITINDIA GYM
 * 
 * This file defines all available membership options with pricing and features.
 * The data supports a tiered pricing strategy with increasing value and benefits.
 * 
 * Used by: Membership.tsx component to display pricing cards
 * 
 * Pricing Strategy:
 * - Monthly: Entry-level with basic features
 * - Quarterly: Most popular with added personal training (marked with badge)
 * - Yearly: Premium tier with maximum benefits and best value
 * 
 * Currency: Indian Rupees (₹) to match the Indian market focus
 */

// TypeScript interface defining the structure of each membership plan
export interface MembershipPlan {
  id: string;          // Unique identifier for the plan
  name: string;        // Display name (Monthly, Quarterly, Yearly)
  price: string;       // Price with currency symbol (₹2,999)
  period: string;      // Billing period (/month, /3 months, /year)
  description: string; // Brief explanation of who this plan is for
  features: string[];  // Array of included benefits and features
  popular?: boolean;   // Optional flag to highlight as "most popular" plan
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "₹2,999",
    period: "/month",
    description: "Perfect for trying out our facilities and getting started on your fitness journey.",
    features: [
      "Access to all gym equipment",
      "Group fitness classes",
      "Locker room access",
      "Fitness assessment",
      "Free Wi-Fi",
      "Basic nutrition guidance"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "₹7,999",
    period: "/3 months",
    description: "Best value for serious fitness enthusiasts with personal training sessions included.",
    popular: true,
    features: [
      "Everything in Monthly",
      "2 personal training sessions",
      "Nutrition consultation",
      "Progress tracking",
      "Guest passes (2/month)",
      "Priority class booking",
      "Complimentary body composition analysis"
    ]
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "₹24,999",
    period: "/year",
    description: "Ultimate fitness package with maximum savings and premium benefits.",
    features: [
      "Everything in Quarterly",
      "Monthly personal training",
      "Unlimited guest passes",
      "Priority class booking",
      "Complimentary merchandise",
      "Free gym freeze (up to 30 days)",
      "Wellness workshops access",
      "VIP locker assignment"
    ]
  }
];
