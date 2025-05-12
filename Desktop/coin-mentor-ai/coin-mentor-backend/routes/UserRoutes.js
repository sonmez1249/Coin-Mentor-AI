const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Kullanıcı oluşturma (POST /api/users)
router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });
    await newUser.save();

    res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu.' });
  }
});

module.exports = router;
