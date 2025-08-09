/**
 * Trainer profiles data for FitIndia gym
 * Contains information about all certified fitness trainers
 * Each trainer includes bio, specialties, experience, and certifications
 */

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
  certification: string;
  specialties: string[];
}

export const trainers: Trainer[] = [
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    specialty: "Strength & Conditioning Specialist",
    bio: "8+ years of experience in bodybuilding and strength training. Certified personal trainer who specializes in muscle building and athletic performance.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    experience: "8 Years",
    certification: "ACSM Certified",
    specialties: ["Strength Training", "Bodybuilding", "Athletic Performance", "Nutrition"]
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    specialty: "Yoga & Mindfulness Expert",
    bio: "Certified yoga instructor with expertise in Hatha, Vinyasa, and meditation. Passionate about mental wellness and holistic health approaches.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    experience: "6 Years",
    certification: "RYT-500 Certified",
    specialties: ["Hatha Yoga", "Vinyasa Flow", "Meditation", "Mindfulness", "Flexibility"]
  },
  {
    id: "mike-johnson",
    name: "Mike Johnson",
    specialty: "CrossFit & HIIT Coach",
    bio: "Former competitive athlete turned fitness coach. Specializes in high-intensity training and functional movement patterns for peak performance.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    experience: "10 Years",
    certification: "CrossFit L3",
    specialties: ["CrossFit", "HIIT", "Functional Movement", "Olympic Lifting", "Conditioning"]
  },
  {
    id: "anita-patel",
    name: "Anita Patel",
    specialty: "Zumba & Dance Fitness Instructor",
    bio: "Professional dancer and certified Zumba instructor bringing energy and fun to every class. Specializes in making fitness enjoyable for everyone.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    experience: "5 Years",
    certification: "Zumba Licensed",
    specialties: ["Zumba", "Dance Fitness", "Cardio", "Choreography", "Group Classes"]
  },
  {
    id: "david-lee",
    name: "David Lee",
    specialty: "Pilates & Rehabilitation Specialist",
    bio: "Physical therapist turned Pilates instructor. Focuses on injury prevention, rehabilitation, and building core strength through mindful movement.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    experience: "7 Years",
    certification: "PMA Certified",
    specialties: ["Pilates", "Rehabilitation", "Core Training", "Posture Correction", "Injury Prevention"]
  },
  {
    id: "sarah-wilson",
    name: "Sarah Wilson",
    specialty: "Nutritionist & Wellness Coach",
    bio: "Registered dietitian and wellness coach helping members achieve their goals through proper nutrition and lifestyle changes.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    experience: "9 Years",
    certification: "RD, CDE",
    specialties: ["Nutrition Planning", "Weight Management", "Sports Nutrition", "Wellness Coaching", "Lifestyle Medicine"]
  }
];
