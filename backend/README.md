# Task Manager Backend

## Project Structure
```
backend/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/         # Utility functions
└── src/           # Source files
```

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
cd task-manager/backend
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in the backend folder
   - Get the environment variables from the team lead
   - Never commit this file to git
   - Required variables:
     - PORT
     - MONGODB_URI
     - JWT_SECRET
     - NODE_ENV

4. Switch to your development branch
```bash
git checkout [your-branch-name]
```

5. Start the development server
```bash
npm run dev
```

## Branch Strategy
- `main`: Production-ready code
- `test`: Integration testing branch
- Individual branches for each team member

## Development Workflow
1. Always work on your designated branch
2. Push changes to your branch
3. Create pull request to `test` branch
4. After testing and review, changes will be merged to `main`

## Components Distribution
1. Task Creation & Assignment (Member 1)
2. Notifications & Reminders (Member 2)
3. Team Collaboration & Reporting (Member 3)
4. User Roles & Permissions (Member 3)

## API Testing
- Base URL: `http://localhost:5000`
- Test endpoint: `GET /api/test-db` (verifies database connection)

## Important Notes
- Never commit `.env` file
- Always pull latest changes before starting work
- Run tests before creating pull requests 