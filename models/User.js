const mongoose = require('mongoose');

// User (Kullanıcı) şeması
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // isim zorunlu
  },
  email: {
    type: String,
    required: true, // email zorunlu
    unique: true,   // aynı email tekrar olamaz
  },
  createdAt: {
    type: Date,
    default: Date.now, // kullanıcı oluşturulma tarihi otomatik
  }
});

// Modeli oluştur ve export et
module.exports = mongoose.model('User', userSchema);
