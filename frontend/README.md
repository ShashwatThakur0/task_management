# Task Manager Frontend

## Project Structure
```
frontend/
├── public/         # Static files
├── src/
│   ├── components/ # React components
│   ├── pages/      # Page components
│   ├── context/    # React context
│   ├── hooks/      # Custom hooks
│   ├── services/   # API services
│   ├── styles/     # CSS/SCSS files
│   └── utils/      # Utility functions
```

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
cd task-manager/frontend
```

2. Install dependencies
```bash
npm install
```

3. Switch to your development branch
```bash
git checkout [your-branch-name]
```

4. Start the development server
```bash
npm start
```

## Component Distribution

### Member 1: Task Creation & Assignment
- Task creation form
- Task assignment interface
- Priority setting
- Subtask management
- Category management
- File attachments
- User tagging
- Search & filter interface
- Task completion
- Edit/Delete functionality

### Member 2: Notifications & Reminders
- Reminder settings
- Email notification interface
- Push notification setup
- SMS reminder interface
- Daily summary view
- Weekly progress view
- Auto-reminder settings
- Notification preferences
- Snooze functionality
- Notification history

### Member 3: Team Collaboration & User Roles
- Chat interface
- Comment system
- Task status board
- Activity dashboard
- Role management interface
- Project dashboard
- Report generation
- Calendar integration
- Theme switcher
- Task dependency manager
- User roles & permissions

## Development Guidelines
1. Use consistent naming conventions
2. Write reusable components
3. Implement responsive design
4. Follow accessibility guidelines
5. Document component props
6. Use TypeScript for type safety
7. Write unit tests for components

## Branch Strategy
Same as backend:
- `main`: Production-ready code
- `test`: Integration testing branch
- Individual branches for each team member

## Important Notes
- Keep components modular
- Use proper state management
- Follow UI/UX guidelines
- Maintain code consistency
- Document any third-party dependencies
- Test cross-browser compatibility
