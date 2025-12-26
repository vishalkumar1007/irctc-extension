import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const faqs = [
    {
      question: "How does the IRCTC Auto Ticket Booking Extension work?",
      answer: "Our extension automates the ticket booking process on IRCTC. Once installed, it monitors train availability, fills in your booking details automatically, and completes the booking process when tickets become available, saving you time and effort."
    },
    {
      question: "Is the extension safe to use?",
      answer: "Yes, absolutely! Our extension only accesses IRCTC website data and doesn't store or transmit your personal information to any third parties. All data remains secure and local to your browser."
    },
    {
      question: "Do I need to keep the browser open for auto-booking?",
      answer: "Yes, you need to keep the browser tab with IRCTC open for the extension to work. The extension monitors the page and automatically books tickets when they become available."
    },
    {
      question: "Can I customize booking preferences?",
      answer: "Yes! The extension allows you to set preferences like train class, preferred berth, passenger details, and more. You can configure these settings in the extension popup."
    },
    {
      question: "Does it work on mobile browsers?",
      answer: "Currently, the extension is designed for desktop Chrome and Edge browsers. Mobile browser support may be available in future updates."
    },
    {
      question: "What if the booking fails?",
      answer: "If a booking attempt fails, the extension will automatically retry based on your settings. You'll also receive notifications about the booking status."
    },
    {
      question: "Is the extension free to use?",
      answer: "Yes, the extension is completely free and open-source. We believe in making train ticket booking accessible to everyone."
    },
    {
      question: "How do I report bugs or suggest features?",
      answer: "You can report bugs or suggest new features through our GitHub repository. We welcome contributions and feedback from the community!"
    }
  ];

  const contributors = [
    { name: "Vishal", role: "Lead Developer", github: "https://github.com" },
    { name: "Team Member 1", role: "UI/UX Designer", github: "https://github.com" },
    { name: "Team Member 2", role: "Backend Developer", github: "https://github.com" },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <svg viewBox="0 0 40 40" className="nav-logo-icon">
              <circle cx="20" cy="20" r="18" fill="url(#navGradient)"/>
              <rect x="10" y="15" width="20" height="10" rx="2" fill="white"/>
              <circle cx="14" cy="24" r="2" fill="var(--neon-purple)"/>
              <circle cx="26" cy="24" r="2" fill="var(--neon-purple)"/>
              <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2ff"/>
                  <stop offset="100%" stopColor="#7b2ff7"/>
                </linearGradient>
              </defs>
            </svg>
            <span>AutoBook</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#contributors">Team</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div className="extension-logo">
              <svg viewBox="0 0 120 120" className="logo-svg">
                {/* Outer glow ring */}
                <circle cx="60" cy="60" r="55" fill="none" stroke="url(#neonGlow)" strokeWidth="2" opacity="0.5"/>
                <circle cx="60" cy="60" r="50" fill="url(#logoGradient)" className="logo-circle"/>
                
                {/* Train icon in Ghibli style */}
                <g className="train-icon">
                  <rect x="35" y="45" width="50" height="28" rx="4" fill="white" opacity="0.95"/>
                  <rect x="38" y="48" width="20" height="15" rx="2" fill="#00f2ff" opacity="0.6"/>
                  <rect x="62" y="48" width="20" height="15" rx="2" fill="#00f2ff" opacity="0.6"/>
                  <circle cx="45" cy="70" r="3" fill="#7b2ff7"/>
                  <circle cx="75" cy="70" r="3" fill="#7b2ff7"/>
                  <path d="M40 45 L50 35 L70 35 L80 45" fill="white" opacity="0.95"/>
                  <circle cx="60" cy="40" r="2" fill="#ff006e"/>
                  {/* Speed lines */}
                  <line x1="25" y1="52" x2="32" y2="52" stroke="#00f2ff" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                  <line x1="23" y1="60" x2="32" y2="60" stroke="#7b2ff7" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                  <line x1="25" y1="68" x2="32" y2="68" stroke="#ff006e" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                </g>
                
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="50%" stopColor="#16213e" />
                    <stop offset="100%" stopColor="#0f3460" />
                  </linearGradient>
                  <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2ff" />
                    <stop offset="50%" stopColor="#7b2ff7" />
                    <stop offset="100%" stopColor="#ff006e" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <h1 className="hero-title">
            IRCTC Auto Ticket Booking
          </h1>
          <p className="hero-subtitle">
            Automate your train ticket booking process. Book tickets faster, smarter, and effortlessly.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://chrome.google.com/webstore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Add to Chrome
            </a>
            <a 
              href="/extension.zip" 
              download
              className="btn btn-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Locally
            </a>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="features" className="intro-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Extension?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" fill="url(#iconGrad1)" opacity="0.2"/>
                  <path d="M32 12 L36 24 L48 24 L38 32 L42 44 L32 36 L22 44 L26 32 L16 24 L28 24 Z" 
                        fill="url(#iconGrad1)" stroke="#00f2ff" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="iconGrad1">
                      <stop offset="0%" stopColor="#00f2ff"/>
                      <stop offset="100%" stopColor="#7b2ff7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Book tickets in milliseconds when they become available. No more manual clicking and waiting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" fill="url(#iconGrad2)" opacity="0.2"/>
                  <rect x="20" y="18" width="24" height="28" rx="2" fill="none" stroke="url(#iconGrad2)" strokeWidth="3"/>
                  <circle cx="32" cy="38" r="4" fill="#7b2ff7"/>
                  <line x1="32" y1="18" x2="32" y2="28" stroke="#ff006e" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="iconGrad2">
                      <stop offset="0%" stopColor="#7b2ff7"/>
                      <stop offset="100%" stopColor="#ff006e"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3>Secure & Private</h3>
              <p>Your data stays on your device. We don't collect or store any personal information.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" fill="url(#iconGrad3)" opacity="0.2"/>
                  <circle cx="32" cy="32" r="16" fill="none" stroke="url(#iconGrad3)" strokeWidth="3"/>
                  <circle cx="32" cy="32" r="4" fill="#ff006e"/>
                  <line x1="32" y1="8" x2="32" y2="18" stroke="#00f2ff" strokeWidth="2"/>
                  <line x1="32" y1="46" x2="32" y2="56" stroke="#00f2ff" strokeWidth="2"/>
                  <line x1="8" y1="32" x2="18" y2="32" stroke="#00f2ff" strokeWidth="2"/>
                  <line x1="46" y1="32" x2="56" y2="32" stroke="#00f2ff" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="iconGrad3">
                      <stop offset="0%" stopColor="#ff006e"/>
                      <stop offset="100%" stopColor="#00f2ff"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3>Smart Automation</h3>
              <p>Intelligent booking system that adapts to IRCTC's interface changes automatically.</p>
            </div>
        
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Install Extension</h3>
              <p>Add the extension to your Chrome browser with one click</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Configure Settings</h3>
              <p>Set your booking preferences and passenger details</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Start Monitoring</h3>
              <p>Open IRCTC and let the extension monitor availability</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Auto Book</h3>
              <p>Extension automatically books tickets when available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFAQ === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`faq-icon ${openFAQ === index ? 'rotated' : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section id="contributors" className="contributors-section">
        <div className="container">
          <h2 className="section-title">Our Amazing Contributors</h2>
          <p className="section-subtitle">Meet the talented people behind this project</p>
          <div className="contributors-grid">
            {contributors.map((contributor, index) => (
              <div key={index} className="contributor-card">
                <div className="contributor-avatar">
                  <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="url(#avatarGradient)"/>
                    <circle cx="50" cy="35" r="15" fill="white"/>
                    <ellipse cx="50" cy="75" rx="25" ry="20" fill="white"/>
                    <defs>
                      <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="contributor-name">{contributor.name}</h3>
                <p className="contributor-role">{contributor.role}</p>
                <a 
                  href={contributor.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contributor-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>IRCTC Auto Booking</h3>
              <p>Making train ticket booking effortless and automated.</p>
            </div>
            <div className="footer-section">
              <h4>License</h4>
              <p>This project is licensed under the <strong>MIT License</strong>.</p>
              
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <div className="footer-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">Chrome Web Store</a>
                <a href="#faq">FAQ</a>
                <a href="#contributors">Contributors</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} IRCTC Auto Booking Extension. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home