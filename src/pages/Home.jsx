// src/pages/Home.jsx
import React, { useState } from 'react';

const Home = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh', 
      color: 'white' 
    }}>
      {/* Header Section */}
      <div style={{ 
        marginBottom: '40px', 
        textAlign: 'center', 
        borderBottom: '1px solid #333',
        paddingBottom: '20px'
      }}>
        <h1 style={{ 
          color: '#00ff88', 
          fontSize: '3em',
          marginBottom: '10px'
        }}>Coin Mentor AI</h1>
        <p style={{ 
          color: '#888', 
          fontSize: '1.2em' 
        }}>Yapay Zeka Destekli Kripto Para Analiz ve Tahmin Platformu</p>
      </div>

      {/* Analytics Summary */}
      <div style={{
        backgroundColor: '#252525',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '15px' }}>Piyasa Özeti</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div>
            <p style={{ color: '#888' }}>Toplam Piyasa Değeri</p>
            <h4>$2.85T</h4>
          </div>
          <div>
            <p style={{ color: '#888' }}>24s Hacim</p>
            <h4>$125.4B</h4>
          </div>
          <div>
            <p style={{ color: '#888' }}>BTC Dominansı</p>
            <h4>52.3%</h4>
          </div>
        </div>
      </div>

      {/* Time Selection and AI Confidence */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <select 
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          style={{ 
            padding: '10px 20px', 
            borderRadius: '8px',
            backgroundColor: '#252525',
            color: 'white',
            border: '1px solid #333',
            fontSize: '1em'
          }}
        >
          <option value="24h">24 Saat</option>
          <option value="7d">7 Gün</option>
          <option value="30d">30 Gün</option>
        </select>
        <div style={{ 
          backgroundColor: '#252525', 
          padding: '10px 20px', 
          borderRadius: '8px',
          color: '#00ff88'
        }}>
          AI Güven Skoru: 92%
        </div>
      </div>

      {/* Crypto Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '25px'
      }}>
        {/* Bitcoin Card */}
        <div style={{ 
          backgroundColor: '#252525', 
          borderRadius: '15px', 
          padding: '25px',
          border: '1px solid #333'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.5em' }}>Bitcoin</h3>
              <p style={{ margin: '5px 0 0 0', color: '#888' }}>BTC/USDT</p>
            </div>
            <span style={{ 
              marginLeft: 'auto', 
              color: '#00ff88',
              backgroundColor: 'rgba(0, 255, 136, 0.1)',
              padding: '5px 10px',
              borderRadius: '5px'
            }}>+2.5%</span>
          </div>
          <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '15px 0' }}>$67,000</p>
          
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '10px' 
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#00ff88' }}>AI Tahmin Analizi</h4>
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '10px' 
              }}>
                <span>Kısa Vadeli Trend:</span>
                <span style={{ color: '#00ff88' }}>Yükseliş</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '10px' 
              }}>
                <span>Hedef Fiyat:</span>
                <span style={{ color: '#00ff88' }}>$70,000</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between' 
              }}>
                <span>Destek Seviyesi:</span>
                <span style={{ color: '#888' }}>$65,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethereum Card */}
        <div style={{ 
          backgroundColor: '#252525', 
          borderRadius: '15px', 
          padding: '25px',
          border: '1px solid #333'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.5em' }}>Ethereum</h3>
              <p style={{ margin: '5px 0 0 0', color: '#888' }}>ETH/USDT</p>
            </div>
            <span style={{ 
              marginLeft: 'auto', 
              color: '#ff4444',
              backgroundColor: 'rgba(255, 68, 68, 0.1)',
              padding: '5px 10px',
              borderRadius: '5px'
            }}>-1.2%</span>
          </div>
          <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '15px 0' }}>$3,500</p>
          
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '10px' 
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#00ff88' }}>AI Tahmin Analizi</h4>
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '10px' 
              }}>
                <span>Kısa Vadeli Trend:</span>
                <span style={{ color: '#888' }}>Yatay</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '10px' 
              }}>
                <span>Direnç:</span>
                <span style={{ color: '#888' }}>$3,600</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between' 
              }}>
                <span>Destek:</span>
                <span style={{ color: '#888' }}>$3,400</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ 
        marginTop: '40px',
        padding: '30px',
        backgroundColor: '#252525',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '20px' }}>Neden Coin Mentor AI?</h3>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div>
            <h4>Yapay Zeka Analizi</h4>
            <p style={{ color: '#888' }}>Gelişmiş AI algoritmaları ile gerçek zamanlı fiyat tahminleri</p>
          </div>
          <div>
            <h4>Teknik Göstergeler</h4>
            <p style={{ color: '#888' }}>20+ teknik gösterge ile detaylı analiz</p>
          </div>
          <div>
            <h4>Portföy Takibi</h4>
            <p style={{ color: '#888' }}>Kişiselleştirilmiş portföy yönetimi ve analizi</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ 
        marginTop: '40px', 
        textAlign: 'center', 
        color: '#666', 
        fontSize: '0.9em',
        padding: '20px',
        borderTop: '1px solid #333'
      }}>
        <p>Bu platform tarafından sağlanan tahminler ve analizler sadece bilgilendirme amaçlıdır. Yatırım tavsiyesi niteliği taşımaz.</p>
      </div>
    </div>
  );
};

export default Home;
