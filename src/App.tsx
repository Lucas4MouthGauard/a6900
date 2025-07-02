import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'whyLong' | 'interactive'>('home');
  const [clickCount, setClickCount] = useState(0);
  const [showFloatingTexts, setShowFloatingTexts] = useState(false);
  const [showShake, setShowShake] = useState(false);

  const memeReasons = [
    { text: "中国股市怎么能看空！", avatar: "🇨🇳" },
    { text: "这次一定不一样！", avatar: "🚀" },
    { text: "只要我不卖，它就不会跌", avatar: "💎" },
    { text: "我是做价值投资的", avatar: "📈" },
    { text: "我满仓茅台，站着死！", avatar: "🍶" },
    { text: "十年一遇的底部，又来了！", avatar: "📉" }
  ];

  const floatingTexts = [
    "中国股市怎么能看空！",
    "这次一定不一样！",
    "只要我不卖，它就不会跌",
    "我是做价值投资的",
    "我满仓茅台，站着死！",
    "十年一遇的底部，又来了！",
    "A股不涨没关系，链上我们让它涨！",
    "冲！我们要自己干一波6900！",
    "链上高点，一键 FOMO！",
    "别再看上证指数了，看 $A6900 就够了！"
  ];

  const handleBoostClick = () => {
    setClickCount(prev => prev + 1);
    setShowFloatingTexts(true);
    setShowShake(true);
    
    // 播放音效（如果有的话）
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // 忽略可能的错误
    
    setTimeout(() => {
      setShowFloatingTexts(false);
      setShowShake(false);
    }, 3000);
  };

  return (
    <div className={`App ${showShake ? 'screen-shake' : ''}`}>
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
        <div className="old-high">6124</div>
      </div>

      {/* 导航 */}
      <nav className="pixel-nav">
        <button 
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          为什么叫A6900
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
          点击助力
        </button>
      </nav>

      {/* 主内容区 */}
      <main className="main-content">
        {currentPage === 'home' && (
          <div className="home-page">
            <h1 className="pixel-title">A6900</h1>
            <h2 className="pixel-subtitle">一个你等不来的高点，我们链上自己冲</h2>
            <div className="meme-slogan">
              <div className="slogan-item">现实不涨？那就链上涨！</div>
              <div className="slogan-item">A股不给的，我们自己造一个！</div>
              <div className="slogan-item">别再看上证指数了，看 $A6900 就够了！</div>
            </div>
            <p className="pixel-description">
              6900 是 A 股股民心中永远的高点幻想<br />
              也是我们十几年等不到的牛市终点<br />
              所以我们决定不等了 —— <span className="highlight">链上自造！</span>
            </p>
            <button className="pixel-btn primary" onClick={() => setCurrentPage('whyLong')}>
              冲！我们要自己干一波6900！
            </button>
          </div>
        )}

        {currentPage === 'whyLong' && (
          <div className="why-long-page">
            <h2 className="pixel-title">为什么做多 A6900？</h2>
            <p className="pixel-description">
              做多 A6900，不是因为技术面<br />
              是因为我亏怕了，我想赢一次！<br />
              A股给不了的高潮，链上帮你达成！
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
            <h2 className="pixel-title">点击助力 A6900</h2>
            <p className="pixel-description">
              每点一下按钮，你就"助推"A6900离6900更近<br />
              同时全屏会飘出一句真实A股股民金句
            </p>
            
            <div className="boost-section">
              <button 
                className="pixel-btn boost-btn"
                onClick={handleBoostClick}
              >
                链上高点，一键 FOMO！ ({clickCount})
              </button>
              
              <div className="click-counter">
                已助力: {clickCount} 次 | 距离6900还有: {Math.max(0, 6900 - clickCount)} 点
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

      {/* 烟花效果 */}
      {showFloatingTexts && (
        <div className="fireworks">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App; 