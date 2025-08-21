# Overview

This is a full-stack portfolio website for Rey-Ann Rongavilla, an IT professional and system administrator. The application showcases professional experience, skills, projects, education, and certifications through a modern, responsive web interface. It includes a contact form that allows visitors to send messages, which are stored for potential admin review.

The project is built as a single-page application with a React frontend and Express.js backend, designed to present a comprehensive professional portfolio with interactive elements and smooth user experience.

## Recent Updates (August 2025)
- Added Technical Journey Gallery section featuring real photos of hands-on IT work
- Replaced mock projects with actual software development projects:
  - Online Learning Platform for Cabuyao ALS (HTML, CSS, JS, PHP, MySQL) - Capstone Project
  - Library Management System (Java, Java Swing, MySQL) - Academic Project  
  - Inventory Management System (C#, MySQL, Windows Forms) - Development Project
  - E-Commerce Platform (HTML, CSS, JS, PHP) - Web Development Project
- Added professional graduation photo to hero section
- Transformed to modern minimalist design with unique color palette:
  - Light gray and white backgrounds with accent green (#e53e3e -> #22c55e) 
  - Clean typography with lighter font weights
  - Rounded corners and subtle shadows throughout
  - Consistent "Fresh Graduate | Aspiring IT Support Specialist & Software Developer" branding
- Removed non-functional elements: QR code placeholder and non-clickable social icons
- Updated footer to match header branding consistency

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript running on Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui styling patterns
- **Animations**: Framer Motion for smooth transitions and scroll-based animations throughout the portfolio
- **Routing**: Wouter for lightweight client-side routing (currently single-page with 404 handling)
- **State Management**: TanStack React Query for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Framework**: Express.js with TypeScript in ESM module format
- **API Design**: RESTful endpoints for contact form submission and message retrieval
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **Database Ready**: Drizzle ORM configured for PostgreSQL with migration support
- **Validation**: Shared Zod schemas between frontend and backend for consistent data validation
- **Development**: Hot reload support with Vite middleware integration

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development/demo purposes
- **Production Ready**: Drizzle ORM with PostgreSQL database schema defined for users and contact messages
- **Database Provider**: Configured for Neon Database with connection pooling via @neondatabase/serverless
- **Migrations**: Drizzle Kit setup for database schema management and migrations

## Authentication and Authorization
- **Current State**: Basic user schema defined but no active authentication implementation
- **Prepared Infrastructure**: User table with username/password fields ready for future authentication system
- **Session Support**: Connect-pg-simple configured for PostgreSQL session storage when authentication is implemented

# External Dependencies

## Frontend Libraries
- **UI Framework**: React 18 with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for general icons, React Icons for brand-specific icons (Google, Python, LinkedIn)
- **Animations**: Framer Motion for advanced animation capabilities
- **Forms**: React Hook Form with Hookform Resolvers for Zod integration
- **HTTP Client**: TanStack React Query for data fetching and caching
- **Date Handling**: date-fns for date formatting and manipulation
- **Carousel**: Embla Carousel React for image/content carousels
- **Utilities**: clsx and tailwind-merge for conditional styling, class-variance-authority for component variants

## Backend Dependencies
- **Web Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon serverless driver
- **Validation**: Zod for runtime type checking and schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

## Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **TypeScript**: Configured with strict mode and modern module resolution
- **Code Quality**: ESLint configuration through Vite ecosystem
- **Development Server**: Vite dev server with HMR and proxy capabilities
- **Replit Integration**: Vite plugins for Replit-specific features and error handling

## External Services
- **Database**: Neon PostgreSQL for production data storage
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Images**: Unsplash for project showcase images and stock photography
- **Deployment**: Configured for Replit hosting with environment-specific optimizations