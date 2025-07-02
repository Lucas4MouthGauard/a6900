import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>欢迎使用 A6900 项目</h1>
        <p>这是一个现代化的Web应用框架</p>
        <div className="features">
          <div className="feature">
            <h3>🚀 快速开发</h3>
            <p>使用最新的技术栈，提供快速的开发体验</p>
          </div>
          <div className="feature">
            <h3>📱 响应式设计</h3>
            <p>支持各种设备尺寸，提供最佳的用户体验</p>
          </div>
          <div className="feature">
            <h3>🔧 易于维护</h3>
            <p>清晰的代码结构和完善的工具链</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App 