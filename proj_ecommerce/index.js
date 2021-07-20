const express = require('express');
const cookieSession = require('cookie-session');
const usersRepo = require('./repos/users');

const app = express();
const PORT = 3001;

// Init Middleware (Provides access to req.body)
// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['r@ndom43dfd154jhkh54']
  })
);

app.get('/signup', (req, res) => {
  res.send(`
    <div>
    Your id is: ${req.session.userId}
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post('/signup', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body; // destructure

  const existingUser = await usersRepo.getOneBy({ email });

  if (existingUser) {
    return res.send('Email in use');
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords must match');
  }

  // Create a user in our user repo to represent this person
  const user = await usersRepo.create({ email, password });

  // Store the id of that user inside the users cookie
  // Set cookie with express , or 3rd party pkg 'cookie-session'
  req.session.userId = user.id;

  res.send('Account created!!!');
});

app.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out');
});

app.get('/signin', (req, res) => {
  res.send(`
  <div>
    <form method="POST">
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <button>Sign In</button>
    </form>
  </div>
  `);
});

app.post('/signin', async (req, res) => {
  // check there is existing user
  const { email, password } = req.body;

  const user = await usersRepo.getOneBy({ email: email });

  if (!user) {
    return res.send('Email not found');
  }

  // check password
  const validPassword = await usersRepo.comparePassword(
    user.password,
    password
  );
  if (!validPassword) {
    return res.send('Invalid password');
  }

  // sign in user
  req.session.userId = user.id;
  res.send('You are signed in!!!');
});

app.listen(PORT || 3001, () => {
  console.log(`listening on port: ${PORT}`);
});
