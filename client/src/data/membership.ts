/**
 * Membership plans data for FitIndia gym
 * Contains pricing information and features for different membership tiers
 * Includes monthly, quarterly, and yearly options with varying benefits
 */

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
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
