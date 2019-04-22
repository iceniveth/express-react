const express = require('express');
const morgan = require('morgan');
const Bundler = require('parcel-bundler');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const passportJWT = require('passport-jwt');
const { JWTStrategy, ExtractJWT } = passportJWT;
const UserModel = require('./models/user');


const port = process.env.PORT || 8080
const app = express();

// passportJWT.use(new JWTStrategy({}, (jwt_payload, done) {
//   []
// }))

app.use(morgan('dev'));
app.use(express.static('dist'));

app.get('/users', async (req, res) => {
  try {
    const result = await UserModel.get();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
});

app.get("/message", (req, res) => {
  res.send("Hi to youasdasd!");
})

const bundler = new Bundler('index.html', {
  logLevel: 3,
  hmr: true
});
app.use(bundler.middleware());

app.listen(port, () => console.log(`Server running on port: ${port}`));
