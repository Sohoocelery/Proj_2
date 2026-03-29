# Express App Setup & Running Guide

## Prerequisites Check

### 1. Check if Node.js is Installed

Open your terminal and run:

```bash
node --version
npm --version
```

**Expected output example:**
```
v18.17.0
9.8.1
```

If you see version numbers, Node.js is installed. ✅
If you get "command not found", you need to install Node.js.

### 2. Install Node.js (If Needed)

Go to [nodejs.org](https://nodejs.org) and download the **LTS (Long Term Support)** version.
Follow the installer and restart your terminal.

Then verify again:
```bash
node --version
```

---

## Setup Steps

### Step 1: Navigate to Your Project

```bash
cd path/to/Proj_2
```

Replace `path/to` with your actual folder path.

### Step 2: Install Dependencies

```bash
npm install
```

This reads `package.json` and installs:
- express (web framework)
- mongodb (database driver)
- ejs (templating engine)
- body-parser (form data handling)
- method-override (PUT/DELETE support)

**Wait for it to complete** (1-2 minutes)

### Step 3: Verify MongoDB is Running

Your MongoDB should already be running locally. To verify:

```bash
mongosh
```

If this connects, you're good. Exit with `exit` or `Ctrl+C`.

If you get an error, start MongoDB:
- **Mac (Homebrew):** `brew services start mongodb-community`
- **Windows:** MongoDB should auto-start, or start from Services
- **Linux:** `sudo systemctl start mongod`

### Step 4: Start the Express Server

```bash
npm run dev
```

You should see:
```
Connected to MongoDB
Server on http://localhost:3000
```

✅ **Success!** The server is running.

---

## Using the App

### Open in Browser

1. Open your browser
2. Go to: `http://localhost:3000/users`

### Testing Users CRUD

**Create a User:**
- Click "New User"
- Fill in: Name, Email, Major
- Click "Create"
- You should see it added to the list

**View Users:**
- You're already on the Users page
- Each user shows: Name - Email - Major

**Edit a User:**
- Click "Edit" on any user
- Change any field
- Click "Update"
- Return to list and verify changes

**Delete a User:**
- Click "Delete" on any user
- Confirm deletion
- User disappears from list

### Testing Clubs CRUD

1. On Users page, click "View Clubs"
2. Repeat the same CRUD operations for clubs
   - Name, Category, Description, Member Count

### Navigate Between Sections

- **From Users:** Click "View Clubs" link
- **From Clubs:** Click "View Users" link

---

## Troubleshooting

### Error: "Connected to MongoDB" doesn't appear

**Issue:** MongoDB not running

**Solution:**
```bash
# Mac/Linux
sudo systemctl start mongod
# OR on Mac with Homebrew
brew services start mongodb-community
```

Then restart the server:
```bash
npm run dev
```

### Error: "Cannot find module 'express'"

**Issue:** Dependencies not installed

**Solution:**
```bash
npm install
```

Wait for completion, then:
```bash
npm run dev
```

### Port 3000 already in use

**Issue:** Another app is using port 3000

**Solution:**

**Option A:** Find and stop the other app
```bash
# Mac/Linux: Find process on port 3000
lsof -i :3000

# Then kill it (replace PID with actual number)
kill -9 PID
```

**Option B:** Use a different port

Edit `server.js`, change:
```javascript
const PORT = 3000;
```

To:
```javascript
const PORT = 3001;  // or any unused port
```

Then restart:
```bash
npm run dev
```

### Forms aren't submitting

**Issue:** Check browser console for errors

**Solution:**
1. Press `F12` to open Developer Tools
2. Go to Console tab
3. Look for red error messages
4. Restart server and try again

---

## Recording Your Demo

Once the app is working:

1. **Keep the server running** (don't close terminal)
2. **Open browser to http://localhost:3000/users**
3. **Start your screen recording** (OBS, Loom, ScreenFlow, etc.)
4. **Demo CRUD Operations:**
   - Create a user
   - Edit the user
   - Delete the user
   - Navigate to Clubs
   - Create, edit, delete a club
   - Show navigation between pages

5. **Stop recording**
6. **Upload to YouTube** (unlisted or public)

---

## Project Structure

```
Proj_2/
├── server.js                 # Main Express app
├── package.json              # Dependencies
├── views/
│   ├── users/
│   │   ├── index.ejs        # User list page
│   │   ├── new.ejs          # Create user form
│   │   └── edit.ejs         # Edit user form
│   └── clubs/
│       ├── index.ejs        # Club list page
│       ├── new.ejs          # Create club form
│       └── edit.ejs         # Edit club form
└── (other project files)
```

---

## Commands Reference

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Install dependencies
npm install

# Start development server
npm run dev

# Start regular server
npm start

# Connect to MongoDB
mongosh

# List all processes on port 3000 (Mac/Linux)
lsof -i :3000
```

---

## Still Having Issues?

**Check that:**
1. ✅ MongoDB is running locally
2. ✅ Node.js is installed (`node --version` returns a number)
3. ✅ You ran `npm install`
4. ✅ Port 3000 is not in use
5. ✅ No typos in terminal commands

**If still stuck:**
- Check `npm run dev` output for error messages
- Try restarting your terminal
- Try restarting MongoDB
- Try restarting your computer
