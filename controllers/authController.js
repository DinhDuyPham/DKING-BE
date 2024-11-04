const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id);
  res.json({ token });
};

module.exports = {
  register,
  login,
};
