import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'whyLong' | 'interactive' | 'token'>('home');
  const [clickCount, setClickCount] = useState(0);
  const [showFloatingTexts, setShowFloatingTexts] = useState(false);
  const [showShake, setShowShake] = useState(false);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [showHomeAnimation, setShowHomeAnimation] = useState(false);
  const [homeClickCount, setHomeClickCount] = useState(0);

  const memeReasons = [
    { 
      text: "中国股市怎么能看空！", 
      avatar: "🇨🇳",
      bgColor: "#D62300",
      description: "爱国情怀，不容置疑！"
    },
    { 
      text: "这次一定不一样！", 
      avatar: "🚀",
      bgColor: "#FFD400",
      description: "历史不会重演，这次真的不一样！"
    },
    { 
      text: "只要我不卖，它就不会跌", 
      avatar: "💎",
      bgColor: "#00D843",
      description: "钻石手，永不卖出！"
    },
    { 
      text: "我是做价值投资的", 
      avatar: "📈",
      bgColor: "#FF6B35",
      description: "巴菲特说过，价值投资永远有效！"
    },
    { 
      text: "我满仓茅台，站着死！", 
      avatar: "🍶",
      bgColor: "#8B4513",
      description: "国酒茅台，永不倒！"
    },
    { 
      text: "十年一遇的底部，又来了！", 
      avatar: "📉",
      bgColor: "#4A90E2",
      description: "抄底时机，千载难逢！"
    }
  ];

  const floatingTexts = [
    "中国股市怎么能看空！",
    "这次一定不一样！",
    "只要我不卖，它就不会跌",
    "我是做价值投资的",
    "我满仓茅台，站着死！",
    "十年一遇的底部，又来了！",
    "A股不涨没关系，我们自己造一个！",
    "冲！我们要自己干一波6900！",
    "梦想高点，一键助力！",
    "别再看上证指数了，看 A6900 就够了！"
  ];

  const homeAnimations = [
    "6124 → 6900",
    "A股不给 → 自己给",
    "现实不涨 → 梦想涨",
    "等待牛市 → 自造牛市"
  ];

  const handleBoostClick = () => {
    setClickCount(prev => prev + 1);
    setShowFloatingTexts(true);
    setShowShake(true);
    
    // 播放音效
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.volume = 0.3;
    audio.play().catch(() => {});
    
    setTimeout(() => {
      setShowFloatingTexts(false);
      setShowShake(false);
    }, 3000);
  };

  const handleHomeClick = () => {
    setHomeClickCount(prev => (prev + 1) % homeAnimations.length);
    setShowHomeAnimation(true);
    setTimeout(() => setShowHomeAnimation(false), 2000);
  };

  const handleMemeClick = (index: number) => {
    setCurrentMemeIndex(index);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('000000000000000000000000000').then(() => {
      // 可以添加一个提示，但这里保持简洁
    }).catch(() => {
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = '000000000000000000000000000';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  };

  useEffect(() => {
    if (currentPage === 'whyLong') {
      const interval = setInterval(() => {
        setCurrentMemeIndex(prev => (prev + 1) % memeReasons.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentPage]);

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
        <button 
          className={`nav-btn ${currentPage === 'token' ? 'active' : ''}`}
          onClick={() => setCurrentPage('token')}
        >
          $A6900
        </button>
        <a 
          href="#" 
          className="nav-btn twitter-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐦
        </a>
      </nav>

      {/* 主内容区 */}
      <main className="main-content">
        {currentPage === 'home' && (
          <div className="home-page">
            <h1 className="pixel-title">A6900</h1>
            <h2 className="pixel-subtitle">一个你等不来的高点，我们自己造一个</h2>
            
            {/* 交互式动画区域 */}
            <div className="home-interactive-area">
              <div className="animation-container">
                <div className="animation-text">
                  {homeAnimations[homeClickCount]}
                </div>
                <button className="animation-btn" onClick={handleHomeClick}>
                  点击切换叙事 ({homeClickCount + 1})
                </button>
              </div>
            </div>

            <div className="meme-slogan">
              <div className="slogan-item">现实不涨？那就梦想涨！</div>
              <div className="slogan-item">A股不给的，我们自己造一个！</div>
              <div className="slogan-item">别再看上证指数了，看 $A6900 就够了！</div>
            </div>
            
            <p className="pixel-description">
              6900 是 A 股股民心中永远的高点幻想<br />
              也是我们十几年等不到的牛市终点<br />
              所以我们决定不等了 —— <span className="highlight">$A6900 就在眼前</span>
            </p>
            
            <div className="home-stats">
              <div className="stat-item">
                <div className="stat-number">6124</div>
                <div className="stat-label">历史高点</div>
              </div>
              <div className="stat-arrow">→</div>
              <div className="stat-item">
                <div className="stat-number">6900</div>
                <div className="stat-label">梦想高点</div>
              </div>
            </div>

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
              A股给不了的梦想，我们自己实现！
            </p>
            
            {/* 主角展示区域 */}
            <div className="hero-section">
              <div className="hero-card">
                <div className="hero-avatar">{memeReasons[currentMemeIndex].avatar}</div>
                <div className="hero-text">{memeReasons[currentMemeIndex].text}</div>
                <div className="hero-description">{memeReasons[currentMemeIndex].description}</div>
                <div 
                  className="hero-bg"
                  style={{ backgroundColor: memeReasons[currentMemeIndex].bgColor }}
                ></div>
              </div>
            </div>

            {/* 角色选择区域 */}
            <div className="character-selector">
              <h3 className="selector-title">选择你的角色</h3>
              <div className="character-grid">
                {memeReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className={`character-item ${currentMemeIndex === index ? 'active' : ''}`}
                    onClick={() => handleMemeClick(index)}
                    style={{ borderColor: reason.bgColor }}
                  >
                    <div className="character-avatar">{reason.avatar}</div>
                    <div className="character-name">{reason.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 情绪指数 */}
            <div className="emotion-meter">
              <div className="meter-label">当前情绪指数</div>
              <div className="meter-bar">
                <div 
                  className="meter-fill"
                  style={{ 
                    width: `${Math.min(100, (currentMemeIndex + 1) * 16.67)}%`,
                    backgroundColor: memeReasons[currentMemeIndex].bgColor
                  }}
                ></div>
              </div>
              <div className="meter-value">{Math.min(100, (currentMemeIndex + 1) * 16.67)}%</div>
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
                梦想高点，一键助力！ ({clickCount})
              </button>
              
              <div className="click-counter">
                已助力: {clickCount} 次 | 距离6900还有: {Math.max(0, 6900 - clickCount)} 点
              </div>
            </div>
          </div>
        )}

        {currentPage === 'token' && (
          <div className="token-page">
            <h2 className="pixel-title">$A6900</h2>
            <p className="pixel-description">
              A股不给的，我们自己造一个！<br />
              6900点，就在眼前！
            </p>
            
            <div className="token-info">
              <div className="contract-address">
                <h3>合约地址</h3>
                                  <div className="address-box">
                    <code>CA: 000000000000000000000000000</code>
                    <button className="copy-btn" onClick={handleCopyAddress}>复制</button>
                  </div>
              </div>
              
              <div className="token-stats">
                <div className="stat-card">
                  <div className="stat-icon">📈</div>
                  <div className="stat-title">当前价格</div>
                  <div className="stat-value">$0.0006900</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">💰</div>
                  <div className="stat-title">市值</div>
                  <div className="stat-value">$6,900,000</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🔥</div>
                  <div className="stat-title">持有人数</div>
                  <div className="stat-value">69,000</div>
                </div>
              </div>
              
              <div className="buy-section">
                <button className="pixel-btn buy-btn disabled">
                  Buy $A6900
                </button>
                <p className="buy-note">暂时不可跳转</p>
              </div>
              
              <div className="token-features">
                <h3>为什么选择 $A6900？</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span>目标明确：6900点</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🚀</span>
                    <span>A股股民情绪共鸣</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💎</span>
                    <span>钻石手社区</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔥</span>
                    <span>燃烧机制</span>
                  </div>
                </div>
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

      {/* 首页动画 */}
      {showHomeAnimation && (
        <div className="home-animation-overlay">
                  <div className="home-animation-text">
          {homeAnimations[homeClickCount]}
        </div>
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