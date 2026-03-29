const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

// CONFIG
const MONGO_URI = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'college_event_planning';
const PORT = 3000;

// MIDDLEWARE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// DB CONNECTION
let db;

MongoClient.connect(MONGO_URI)
  .then(client => {
    db = client.db(DB_NAME);
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));

// HOME
app.get('/', (req, res) => {
  res.redirect('/users');
});

/* USERS CRUD */

// INDEX users
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find().toArray();
    res.render('users/index', { users });
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});

// NEW user form
app.get('/users/new', (req, res) => {
  res.render('users/new');
});

// CREATE user
app.post('/users', async (req, res) => {
  try {
    const { name, email, major } = req.body;
    await db.collection('users').insertOne({ name, email, major });
    res.redirect('/users');
  } catch (err) {
    res.status(500).send('Error creating user');
  }
});

// EDIT user form
app.get('/users/:id/edit', async (req, res) => {
  try {
    const user = await db.collection('users').findOne({ _id: new ObjectId(req.params.id) });
    if (!user) return res.status(404).send('User not found');
    res.render('users/edit', { user });
  } catch (err) {
    res.status(500).send('Error loading user');
  }
});

// UPDATE user
app.put('/users/:id', async (req, res) => {
  try {
    const { name, email, major } = req.body;
    await db.collection('users').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { name, email, major } }
    );
    res.redirect('/users');
  } catch (err) {
    res.status(500).send('Error updating user');
  }
});

// DELETE user
app.delete('/users/:id', async (req, res) => {
  try {
    await db.collection('users').deleteOne({ _id: new ObjectId(req.params.id) });
    res.redirect('/users');
  } catch (err) {
    res.status(500).send('Error deleting user');
  }
});

/* CLUBS CRUD */

// INDEX clubs
app.get('/clubs', async (req, res) => {
  try {
    const clubs = await db.collection('clubs').find().toArray();
    res.render('clubs/index', { clubs });
  } catch (err) {
    res.status(500).send('Error fetching clubs');
  }
});

// NEW club form
app.get('/clubs/new', (req, res) => {
  res.render('clubs/new');
});

// CREATE club
app.post('/clubs', async (req, res) => {
  try {
    const { name, category, description, member_count } = req.body;
    await db.collection('clubs').insertOne({ name, category, description, member_count: parseInt(member_count) || 0 });
    res.redirect('/clubs');
  } catch (err) {
    res.status(500).send('Error creating club');
  }
});

// EDIT club form
app.get('/clubs/:id/edit', async (req, res) => {
  try {
    const club = await db.collection('clubs').findOne({ _id: new ObjectId(req.params.id) });
    if (!club) return res.status(404).send('Club not found');
    res.render('clubs/edit', { club });
  } catch (err) {
    res.status(500).send('Error loading club');
  }
});

// UPDATE club
app.put('/clubs/:id', async (req, res) => {
  try {
    const { name, category, description, member_count } = req.body;
    await db.collection('clubs').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { name, category, description, member_count: parseInt(member_count) || 0 } }
    );
    res.redirect('/clubs');
  } catch (err) {
    res.status(500).send('Error updating club');
  }
});

// DELETE club
app.delete('/clubs/:id', async (req, res) => {
  try {
    await db.collection('clubs').deleteOne({ _id: new ObjectId(req.params.id) });
    res.redirect('/clubs');
  } catch (err) {
    res.status(500).send('Error deleting club');
  }
});
  }
});
