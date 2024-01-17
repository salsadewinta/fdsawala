// app.js
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/sawala', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Konfigurasi Passport
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
const indexRoutes = require('./source/index');
const authRoutes = require('./source/auth');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
