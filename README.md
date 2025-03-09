# Task Manager Application

A modern task management application built with React, Vite, and Tailwind CSS. Features a beautiful UI with dark/light mode support.

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task_management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:5173` (or another port if 5173 is in use)

## 🛠️ Tech Stack

- **React** (v18.2.0) - Frontend library
- **Vite** (v5.0.8) - Build tool and development server
- **Tailwind CSS** (v3.4.0) - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
task_management/
├── src/
│   ├── components/     # Reusable components
│   ├── assets/        # Static assets
│   ├── App.jsx        # Main application component
│   ├── main.jsx      # Application entry point
│   └── index.css     # Global styles
├── public/           # Public assets
├── package.json      # Project dependencies and scripts
└── README.md        # Project documentation
```

## 🔥 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## 🎨 Features

- Modern, responsive design
- Dark/Light mode with system preference detection
- Task management interface
- Persistent theme preferences
- Mobile-friendly layout

## 👥 Contributing

1. Pull the latest changes from the main branch
   ```bash
   git pull origin main
   ```

2. Create a new branch for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them
   ```bash
   git add .
   git commit -m "Add your meaningful commit message"
   ```

4. Push your changes
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request on GitHub

## 🐛 Troubleshooting

If you encounter any issues:

1. **Port already in use**
   - The development server will automatically try another port
   - Default port is 5173, but it may use 5174, 5175, etc.

2. **Dependencies issues**
   - Try removing node_modules and package-lock.json
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Tailwind CSS not working**
   - Make sure PostCSS is properly configured
   - Check if Tailwind directives are properly imported in index.css

## 📝 License

- feel free to use this project for your own purposes.

## 🤝 Contributors

- [Sayuj]
- [Ravneet]
- [Shashwat]

---
Made with ❤️ by the Task Manager Team
