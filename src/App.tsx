import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'whyLong' | 'interactive'>('home');
  const [clickCount, setClickCount] = useState(0);
  const [showFloatingTexts, setShowFloatingTexts] = useState(false);

  const memeReasons = [
    { text: "我没得选，只能all in", avatar: "🤡" },
    { text: "你不懂，这次不一样", avatar: "🚀" },
    { text: "A股下跌只会影响上升速度", avatar: "📈" },
    { text: "只要我不卖，就不算亏", avatar: "💎" },
    { text: "我满仓科技，站着死", avatar: "⚡" }
  ];

  const floatingTexts = [
    "茅台喝不起，只能买股",
    "A股不行，但我不认输",
    "只要我不卖，就不算亏",
    "这次一定能到7000！",
    "我满仓科技，站着死",
    "打不过，就all in"
  ];

  const handleBoostClick = () => {
    setClickCount(prev => prev + 1);
    setShowFloatingTexts(true);
    setTimeout(() => setShowFloatingTexts(false), 3000);
  };

  return (
    <div className="App">
      {/* 像素风背景 */}
      <div className="pixel-background">
        <div className="grid-overlay"></div>
        <div className="candlestick-chart">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={`candlestick ${Math.random() > 0.5 ? 'green' : 'red'}`}
              style={{ 
                height: `${Math.random() * 60 + 20}px`,
                left: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
        <div className="glowing-6900">6900</div>
      </div>

      {/* 导航 */}
      <nav className="pixel-nav">
        <button 
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          首页
        </button>
        <button 
          className={`nav-btn ${currentPage === 'whyLong' ? 'active' : ''}`}
          onClick={() => setCurrentPage('whyLong')}
        >
          为什么做多
        </button>
        <button 
          className={`nav-btn ${currentPage === 'interactive' ? 'active' : ''}`}
          onClick={() => setCurrentPage('interactive')}
        >
          互动区
        </button>
      </nav>

      {/* 主内容区 */}
      <main className="main-content">
        {currentPage === 'home' && (
          <div className="home-page">
            <h1 className="pixel-title">A6900</h1>
            <h2 className="pixel-subtitle">散户最后的精神高地</h2>
            <p className="pixel-description">
              A6900，是A股永远无法触及的幻觉高点，也是所有股民的梦中情股。
              <br />
              今天，我们把它写进链上，让每一个加密人都能做多信仰，做空现实。
            </p>
            <button className="pixel-btn primary" onClick={() => setCurrentPage('whyLong')}>
              登录链上A股
            </button>
          </div>
        )}

        {currentPage === 'whyLong' && (
          <div className="why-long-page">
            <h2 className="pixel-title">为什么要做多6900</h2>
            <p className="pixel-description">
              做多A6900，不是因为理性，而是因为热血。
              <br />
              我们炒的不只是股，是一种情绪，是一种信仰，是一场告别内卷的运动。
            </p>
            
            <div className="meme-reasons">
              {memeReasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="meme-reason"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="avatar">{reason.avatar}</div>
                  <div className="reason-text">{reason.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'interactive' && (
          <div className="interactive-page">
            <h2 className="pixel-title">助力A6900</h2>
            <p className="pixel-description">
              点击按钮，释放你的A股信仰！
            </p>
            
            <div className="boost-section">
              <button 
                className="pixel-btn boost-btn"
                onClick={handleBoostClick}
              >
                助力A6900 ({clickCount})
              </button>
              
              <div className="click-counter">
                已助力: {clickCount} 次
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 飘字动画 */}
      {showFloatingTexts && (
        <div className="floating-texts-container">
          {floatingTexts.map((text, index) => (
            <div 
              key={index}
              className="floating-text"
              style={{
                left: `${Math.random() * 80}%`,
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {text}
            </div>
          ))}
        </div>
      )}

      {/* 粒子效果 */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App; 