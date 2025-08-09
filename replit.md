# FitIndia - Premium Fitness Center Website

## Overview

FitIndia is a modern, responsive React.js website for a premium fitness center featuring a multi-page architecture with comprehensive fitness information. The application showcases gym facilities, programs, trainers, membership plans, and contact information through a professional dark-themed interface with orange accents. Built with modern web technologies, it provides an engaging user experience across mobile, tablet, and desktop devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side navigation between pages (Home, About, Programs, Trainers, Membership, Contact)
- **Component Structure**: Functional components using React hooks (useState, useEffect) with a clean separation of concerns
- **Layout Pattern**: Consistent layout wrapper with sticky navigation and footer across all pages

### Styling and Design System
- **CSS Framework**: Tailwind CSS with custom design system and CSS variables
- **UI Components**: shadcn/ui component library providing consistent, accessible components
- **Theme**: Dark color scheme (black/dark grey backgrounds) with orange (#FF4500) accent colors and white text
- **Typography**: Poppins font family for modern, readable text
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

### State Management and Data
- **State Management**: React hooks for local component state
- **Data Storage**: Static data arrays for content (trainers, programs, membership plans) stored in separate data files
- **Form Handling**: Controlled components with basic validation for contact forms
- **Query Management**: TanStack React Query for potential future API integration

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and runtime error overlay for improved developer experience
- **TypeScript**: Full TypeScript support with strict configuration for type safety
- **Code Organization**: Clean file structure with separate directories for components, pages, data, and utilities

### Backend Infrastructure
- **Server Framework**: Express.js server setup with middleware for JSON handling and logging
- **Database**: Drizzle ORM configured for PostgreSQL with schema definition
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Structure**: RESTful API foundation with route registration system

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **State Management**: TanStack React Query for server state management

### UI and Components
- **Component Library**: Radix UI primitives for accessible components
- **Icons**: Font Awesome for visual icons and symbols
- **Fonts**: Google Fonts (Poppins) for typography
- **Animations**: CSS transitions and transforms for hover effects and interactions

### Development Tools
- **Build System**: Vite with React plugin and runtime error modal
- **Database**: Drizzle ORM with PostgreSQL support via Neon Database serverless
- **Validation**: Zod for schema validation and type safety
- **Utilities**: Class variance authority, clsx, date-fns for utility functions

### Backend Dependencies
- **Server**: Express.js with session management
- **Database Client**: @neondatabase/serverless for PostgreSQL connections
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for server bundling

### External Services
- **Images**: Unsplash for high-quality fitness and gym photography
- **Maps**: Google Maps integration placeholder for location display
- **Session Management**: PostgreSQL-based session storage for user state