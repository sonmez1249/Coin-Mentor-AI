// Gerekli paketleri çağır
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Express uygulamasını başlat
const app = express();

// Middleware (JSON body okumak için)
app.use(express.json());

// MongoDB'ye bağlan
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB bağlantısı başarılı');

    // Bağlantı başarılıysa server başlasın
    app.listen(5000, () => {
      console.log('🚀 Server 5000 portunda çalışıyor.');
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB bağlantı hatası:', err);
  });

// Basit bir route
app.get('/', (req, res) => {
  res.send('Coin Mentor AI API çalışıyor!');
});

// Üstteki require'ların altına ekle
const userRoutes = require('./routes/userRoutes');

// Middleware olarak kullan
app.use('/api', userRoutes);
