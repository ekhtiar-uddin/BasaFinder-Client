# BasaFinder - Property Rental Management Platform

<div align="center">

![BasaFinder Logo](public/logo.svg)

**A modern, full-stack property rental management platform built with Next.js, TypeScript, and Tailwind CSS**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.6.1-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)

[Live Demo](https://basa-finder-client-two.vercel.app/) • [Report Bug](https://github.com/your-username/basafinder-client/issues) • [Request Feature](https://github.com/your-username/basafinder-client/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🏠 Overview

BasaFinder is a comprehensive property rental management platform that connects landlords, tenants, and administrators through a modern web application. The platform features a multi-role user system with role-based access control, interactive property search with map integration, and a complete property management workflow.

### Key Highlights

- **Multi-Role System**: Admin, Landlord, and Tenant roles with specific permissions
- **Interactive Property Search**: Advanced filtering with map integration
- **Real-time Applications**: Property application system with status tracking
- **Modern UI/UX**: Built with Tailwind CSS and Radix UI components
- **Responsive Design**: Mobile-first approach with modern design patterns
- **State Management**: Redux Toolkit with persistence
- **Type Safety**: Full TypeScript implementation

---

## ✨ Features

### 🔐 Authentication & Authorization

- JWT-based authentication with refresh tokens
- Role-based access control (Admin, Landlord, Tenant)
- Secure password hashing with bcrypt
- Google reCAPTCHA integration
- Protected routes with middleware

### 🏘️ Property Management

- **Landlords**: Create, edit, delete property listings
- **Tenants**: Browse, search, and apply to properties
- **Admins**: Oversee all listings and user management
- Image upload with FilePond integration
- Property details with amenities and location data

### 🔍 Advanced Search & Discovery

- Interactive map integration (Mapbox/MapLibre)
- Advanced filtering (price, location, bedrooms, amenities)
- Real-time search results
- Property comparison tools
- Location-based property discovery

### 📱 User Dashboards

- **Landlord Dashboard**: Property management, application handling
- **Tenant Dashboard**: Application tracking, payment management
- **Admin Dashboard**: User management, platform oversight
- Real-time notifications and status updates

### 💳 Payment Integration

- Payment processing for property applications
- Secure payment gateway integration
- Transaction history and receipts
- Payment status tracking

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 15.2.1](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **UI Library**: [React 19.0.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) with custom design system
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + [FontAwesome](https://fontawesome.com/)

### State Management

- **Global State**: [Redux Toolkit](https://redux-toolkit.js.org/) with persistence
- **Form Management**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Data Fetching**: Axios with custom service layer

### Maps & Visualization

- **Maps**: [Mapbox GL](https://www.mapbox.com/mapbox-gl-js) + [MapLibre GL](https://maplibre.org/)
- **Charts**: [Recharts](https://recharts.org/) for dashboard analytics
- **Progress**: [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar)

### Development Tools

- **Package Manager**: npm/yarn
- **Linting**: ESLint with Next.js config
- **Build Tool**: Turbopack (Next.js 15)
- **Deployment**: Vercel

### Additional Libraries

- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **File Upload**: [FilePond](https://pqina.nl/filepond/)
- **Tables**: [TanStack Table](https://tanstack.com/table)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Date/Time**: Built-in JavaScript Date API

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

### Recommended Development Environment

- **VS Code** with TypeScript extensions
- **Chrome DevTools** for debugging
- **Postman** or **Insomnia** for API testing

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/basafinder-client.git
cd basafinder-client
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Copy the example environment file
cp .env.example .env.local
```

### 4. Start Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# API Configuration
NEXT_PUBLIC_BASE_API=http://localhost:5000/api/v1

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY=your_recaptcha_client_key
NEXT_PUBLIC_RECAPTCHA_SERVER_KEY=your_recaptcha_server_key

# Geocoding API (OpenCage or Google Maps)
NEXT_PUBLIC_GEOCODING_API_KEY=your_geocoding_api_key

# Optional: Custom port
PORT=3000
```

### Environment Variables Explained

| Variable                           | Description                 | Required |
| ---------------------------------- | --------------------------- | -------- |
| `NEXT_PUBLIC_BASE_API`             | Backend API base URL        | ✅       |
| `NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY` | Google reCAPTCHA client key | ✅       |
| `NEXT_PUBLIC_RECAPTCHA_SERVER_KEY` | Google reCAPTCHA server key | ✅       |
| `NEXT_PUBLIC_GEOCODING_API_KEY`    | Geocoding service API key   | ✅       |
| `PORT`                             | Custom port for development | ❌       |

---

## 📖 Usage

### 🏠 Public Access

1. **Homepage**: Browse featured properties and platform information
2. **Property Search**: Use advanced filters to find properties
3. **Property Details**: View comprehensive property information
4. **Registration**: Create account as Tenant or Landlord

### 👤 Tenant Features

1. **Browse Properties**: Search and filter available rentals
2. **Apply to Properties**: Submit rental applications
3. **Track Applications**: Monitor application status
4. **Make Payments**: Complete payments for approved applications
5. **View Contact Info**: Access landlord contact after approval

### 🏢 Landlord Features

1. **Create Listings**: Add new property listings with details
2. **Manage Properties**: Edit and delete existing listings
3. **Review Applications**: View and respond to tenant applications
4. **Approve/Reject**: Manage application status
5. **Share Contact**: Provide contact information after approval

### 👨‍💼 Admin Features

1. **User Management**: View and manage all users
2. **Property Oversight**: Monitor all property listings
3. **Platform Management**: Ensure compliance and quality
4. **Analytics**: View platform statistics and reports

### 🔐 Authentication

#### Default Admin Credentials

- **Email**: `admin@gmail.com`
- **Password**: `12345678`

> ⚠️ **Security Note**: Change default admin credentials in production

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (WithCommonLayout)/       # Public pages layout
│   ├── (WithDashboardLayout)/    # Dashboard pages layout
│   ├── search/                   # Property search functionality
│   ├── login/                    # Authentication pages
│   └── layout.tsx               # Root layout
├── components/                   # Reusable components
│   ├── modules/                 # Feature-specific components
│   ├── ui/                      # UI component library
│   └── shared/                  # Shared components
├── services/                     # API service layer
│   ├── AuthService/             # Authentication services
│   ├── Product/                 # Property management
│   └── Application/             # Application handling
├── redux/                       # State management
│   ├── features/               # Redux slices
│   └── store.ts                # Store configuration
├── types/                       # TypeScript type definitions
├── lib/                         # Utility functions
├── constants/                   # Application constants
└── providers/                   # React context providers
```

### Key Directories

- **`src/app/`**: Next.js App Router pages and layouts
- **`src/components/`**: Reusable React components
- **`src/services/`**: API integration and data fetching
- **`src/redux/`**: Global state management
- **`src/types/`**: TypeScript type definitions
- **`public/`**: Static assets and images

---

## 🔌 API Integration

The application integrates with a backend API for data management. Key API endpoints include:

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User authentication
- `POST /auth/refresh-token` - Token refresh
- `POST /auth/change-password` - Password change

### Properties

- `GET /product` - List properties with filters
- `POST /product` - Create new property
- `PUT /product/:id` - Update property
- `DELETE /product/:id` - Delete property

### Applications

- `POST /application/create-application` - Submit application
- `GET /application` - List applications
- `PUT /application/:id` - Update application status

### Users

- `GET /user` - Get user profile
- `PUT /user/edit-profile` - Update profile
- `PUT /user/:id/status` - Update user status

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment**: Add environment variables in Vercel dashboard
3. **Deploy**: Automatic deployment on push to main branch

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables for Production

Ensure all required environment variables are set in your deployment platform:

- `NEXT_PUBLIC_BASE_API`
- `NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY`
- `NEXT_PUBLIC_RECAPTCHA_SERVER_KEY`
- `NEXT_PUBLIC_GEOCODING_API_KEY`

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository

```bash
git clone https://github.com/your-username/basafinder-client.git
cd basafinder-client
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

- Follow the existing code style
- Add TypeScript types for new features
- Update documentation as needed
- Test your changes thoroughly

### 4. Commit and Push

```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### 5. Create a Pull Request

- Provide a clear description of your changes
- Include screenshots for UI changes
- Reference any related issues

### Development Guidelines

- **Code Style**: Follow ESLint configuration
- **TypeScript**: Use strict type checking
- **Components**: Use functional components with hooks
- **State Management**: Use Redux Toolkit for global state
- **Testing**: Add tests for new features

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Git operations (custom script)
npm run commit       # Add, commit, and push changes
```

---

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**

   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Environment Variables Not Loading**

   - Ensure `.env.local` file exists in root directory
   - Restart development server after adding variables

3. **TypeScript Errors**

   ```bash
   # Clear TypeScript cache
   rm -rf .next
   npm run dev
   ```

4. **Dependencies Issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Vercel](https://vercel.com/) for seamless deployment

---

## 📞 Support

- **Live Demo**: [https://basa-finder-client-two.vercel.app/](https://basa-finder-client-two.vercel.app/)
- **Issues**: [GitHub Issues](https://github.com/your-username/basafinder-client/issues)
- **Documentation**: [Project Wiki](https://github.com/your-username/basafinder-client/wiki)

---

<div align="center">

**Made with ❤️ by the BasaFinder Team**

[![GitHub stars](https://img.shields.io/github/stars/your-username/basafinder-client?style=social)](https://github.com/your-username/basafinder-client)
[![GitHub forks](https://img.shields.io/github/forks/your-username/basafinder-client?style=social)](https://github.com/your-username/basafinder-client)
[![GitHub issues](https://img.shields.io/github/issues/your-username/basafinder-client)](https://github.com/your-username/basafinder-client/issues)

</div>
