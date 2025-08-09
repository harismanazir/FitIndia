/**
 * FITNESS PROGRAMS DATA FOR FITINDIA GYM
 * 
 * This file contains all the fitness program information displayed on the Programs page.
 * Each program represents a different type of workout or class offered by the gym.
 * 
 * Used by: Programs.tsx component to display program cards
 * 
 * Data Structure:
 * - Static data (no API calls needed)
 * - Images sourced from Unsplash for high-quality fitness photos
 * - Benefits listed to help users understand program value
 * - Badges highlight popular or special programs
 */

// TypeScript interface defining the structure of each program
export interface Program {
  id: string;           // Unique identifier (used for React keys and data-testid)
  name: string;         // Display name of the program
  description: string;  // Brief description of what the program offers
  image: string;        // URL to high-quality fitness image from Unsplash
  duration: string;     // How long each session lasts (e.g., "45 min")
  level: string;        // Difficulty level (All Levels, Beginner, Intermediate, Advanced)
  benefits: string[];   // Array of benefits users get from this program
  badge?: string;       // Optional badge text (POPULAR, INTENSE, FUN, etc.)
  badgeColor?: string;  // Optional Tailwind CSS class for badge color
}

export const programs: Program[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Build muscle, increase power, and transform your physique with our comprehensive strength training program.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "45 min",
    level: "All Levels",
    badge: "POPULAR",
    badgeColor: "bg-accent",
    benefits: [
      "Increased muscle mass and strength",
      "Improved bone density",
      "Enhanced metabolism",
      "Better functional movement",
      "Increased confidence"
    ]
  },
  {
    id: "yoga-meditation",
    name: "Yoga & Meditation",
    description: "Find balance, flexibility, and inner peace through our guided yoga and meditation sessions.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "60 min",
    level: "Beginner",
    benefits: [
      "Improved flexibility and balance",
      "Reduced stress and anxiety",
      "Better sleep quality",
      "Enhanced mindfulness",
      "Increased core strength"
    ]
  },
  {
    id: "crossfit",
    name: "CrossFit",
    description: "High-intensity functional movements that will challenge your limits and build total-body fitness.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "50 min",
    level: "Advanced",
    badge: "INTENSE",
    badgeColor: "bg-red-500",
    benefits: [
      "Improved cardiovascular fitness",
      "Increased functional strength",
      "Enhanced athletic performance",
      "Better coordination and agility",
      "Mental toughness development"
    ]
  },
  {
    id: "zumba-dance",
    name: "Zumba Dance",
    description: "Dance your way to fitness with high-energy Zumba classes that make working out feel like a party.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "45 min",
    level: "All Levels",
    badge: "FUN",
    badgeColor: "bg-green-500",
    benefits: [
      "Improved cardiovascular health",
      "Enhanced coordination and rhythm",
      "Stress relief through dance",
      "Social interaction and fun",
      "Increased energy levels"
    ]
  },
  {
    id: "hiit",
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular improvement.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "30 min",
    level: "Intermediate",
    benefits: [
      "Maximum calorie burn",
      "Improved cardiovascular fitness",
      "Time-efficient workouts",
      "Increased metabolism",
      "Enhanced endurance"
    ]
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Low-impact exercises focusing on core strength, flexibility, and body awareness.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "55 min",
    level: "All Levels",
    benefits: [
      "Improved core strength",
      "Better posture and alignment",
      "Enhanced flexibility",
      "Injury prevention",
      "Mind-body connection"
    ]
  },
  {
    id: "boxing",
    name: "Boxing Fitness",
    description: "Non-contact boxing training for cardiovascular fitness, strength, and stress relief.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "40 min",
    level: "Intermediate",
    benefits: [
      "Improved cardiovascular fitness",
      "Enhanced coordination",
      "Stress relief and confidence",
      "Full-body workout",
      "Mental focus and discipline"
    ]
  },
  {
    id: "swimming",
    name: "Aqua Fitness",
    description: "Low-impact water-based exercises perfect for all fitness levels and joint-friendly workouts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    duration: "45 min",
    level: "All Levels",
    benefits: [
      "Joint-friendly exercise",
      "Full-body muscle engagement",
      "Improved cardiovascular health",
      "Enhanced flexibility",
      "Therapeutic benefits"
    ]
  }
];
