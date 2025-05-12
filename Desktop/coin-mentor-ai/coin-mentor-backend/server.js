const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

// 🌍 Ortam değişkenlerini yükle (.env'den)
dotenv.config();

// 🧠 Express uygulaması oluştur
const app = express();

// 📦 Middleware'ler
app.use(cors());              // CORS: diğer kaynaklardan gelen isteklere izin verir
app.use(express.json());      // 🔥 JSON formatındaki body'leri okuyabilmek için şart!

// 📡 Route'ları tanımla
app.use('/api/auth', authRoutes); // /api/auth/register, /api/auth/login, /api/auth/profile gibi

// 🧪 Basit test endpointi
app.get('/', (req, res) => {
  res.send('✅ Coin Mentor Backend API çalışıyor!');
});

// 🛢️ MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB bağlantısı başarılı');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Sunucu ${process.env.PORT} portunda çalışıyor`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB bağlantı hatası:', err);
  });
