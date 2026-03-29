# College Event Planning - Project 2

## Overview
This is a **Node.js + Express** web application for managing college event planning data. It demonstrates full CRUD (Create, Read, Update, Delete) operations on two MongoDB collections: **Users** and **Clubs**.

## Features
✅ **Users Management** - Create, view, edit, and delete student users  
✅ **Clubs Management** - Create, view, edit, and delete club information  
✅ **Database Integration** - MongoDB for persistent data storage  
✅ **EJS Templating** - Dynamic server-side rendering of HTML views  
✅ **REST API Routes** - Proper HTTP methods for CRUD operations  
✅ **Navigation** - Easy switching between Users and Clubs sections  

## Project Structure
```
Proj_2/
├── server.js                    # Main Express application & routes
├── package.json                 # Dependencies & npm scripts
├── EXPRESS_SETUP.md            # Complete setup & running guide
├── DATABASE_SETUP_SHORT.md     # Database configuration reference
├── views/
│   ├── users/
│   │   ├── index.ejs           # Users list page
│   │   ├── new.ejs             # Create user form
│   │   └── edit.ejs            # Edit user form
│   └── clubs/
│       ├── index.ejs           # Clubs list page
│       ├── new.ejs             # Create club form
│       └── edit.ejs            # Edit club form
└── college_event_planning.clubs.json  # Sample data
```

## Database Collections

### Users Collection
- **name** (string) - Student's full name
- **email** (string) - Student's email address
- **major** (string) - Student's major/field of study

### Clubs Collection
- **name** (string) - Club name
- **category** (string) - Club category (e.g., Academic, Social, Sports)
- **description** (string) - Club description
- **member_count** (number) - Number of members

## Quick Start

### Prerequisites
- Node.js v14+ installed
- MongoDB running locally on port 27017
- npm package manager

### Installation & Running

1. **Clone/Download the repository**
   ```bash
   cd path/to/Proj_2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify MongoDB is running**
   ```bash
   mongosh
   ```
   (Exit with Ctrl+C if connected)

4. **Start the server**
   ```bash
   npm run dev
   ```
   Expected output: `Server on http://localhost:3000`

5. **Open in browser**
   ```
   http://localhost:3000/users
   ```

## Using the Application

### Users Page
- **View Users** - See all users on the main list
- **Create User** - Click "New User" to add a student
- **Edit User** - Click "Edit" next to any user
- **Delete User** - Click "Delete" to remove a user
- **Navigate to Clubs** - Click "View Clubs" link

### Clubs Page
- **View Clubs** - See all clubs on the main list
- **Create Club** - Click "New Club" to add a club
- **Edit Club** - Click "Edit" next to any club
- **Delete Club** - Click "Delete" to remove a club
- **Navigate to Users** - Click "View Users" link

## Troubleshooting

**"Cannot find module 'express'"**
```bash
npm install
```

**"Connected to MongoDB" doesn't appear**
- Check MongoDB is running: `brew services start mongodb-community` (Mac)

**Port 3000 already in use**
```bash
lsof -i :3000  # Find process
kill -9 PID    # Kill it
```

## Commands Reference
```bash
node --version              # Check Node.js version
npm --version              # Check npm version
npm install                # Install dependencies
npm run dev                # Start with nodemon (auto-reload)
npm start                  # Start server
mongosh                    # Connect to MongoDB
lsof -i :3000             # Find process on port 3000
```

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Template Engine:** EJS
- **Middleware:** body-parser, method-override
- **DevTools:** nodemon

## For Submission

### Recording Your Demo
1. Keep server running: `npm run dev`
2. Open: `http://localhost:3000/users`
3. Start screen recording (OBS, Loom, ScreenFlow, etc.)
4. Demonstrate:
   - Create a user
   - Edit the user
   - Delete the user
   - Navigate to Clubs
   - Create, edit, delete a club
   - Show navigation between pages
5. Stop recording and upload to YouTube (unlisted recommended)

### What's Included
✅ Full source code on GitHub  
✅ Comprehensive setup guide (EXPRESS_SETUP.md)  
✅ Database setup documentation  
✅ All EJS view templates  
✅ package.json with all dependencies  

For detailed setup instructions, see **EXPRESS_SETUP.md** in this repository.
