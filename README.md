<p align="center">
  <img src="public/logo.png" alt="IRCTC AutoBook Logo" width="120" height="120">
</p>

<h1 align="center">IRCTC AutoBook</h1>

<p align="center">
  <strong>Automate your Indian Railways ticket booking with ease</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#faq">FAQ</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/platform-Chrome%20%7C%20Edge-orange.svg" alt="Platform">
  <img src="https://img.shields.io/badge/status-active-success.svg" alt="Status">
</p>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
  - [Chrome Web Store](#chrome-web-store)
  - [Manual Installation](#manual-installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)
- [Disclaimer](#disclaimer)

---

## 🚀 About

**IRCTC AutoBook** is a browser extension that automates the train ticket booking process on the Indian Railways (IRCTC) website. It helps users book tickets faster by automatically filling in passenger details, selecting preferred options, and completing the booking process when tickets become available.

### Why IRCTC AutoBook?

- **Tatkal Booking Made Easy**: Book tatkal tickets in seconds when the booking window opens
- **No More Manual Entry**: Save passenger details and auto-fill forms instantly
- **Smart Automation**: Handles CAPTCHA assistance and form validation
- **Secure & Private**: All data stays on your device - we never collect your information

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Lightning Fast** | Book tickets in milliseconds when they become available |
| 🔒 **Secure & Private** | Your data stays on your device, no external servers |
| 🎯 **Smart Auto-Fill** | Automatically fills passenger details and preferences |
| 📋 **Passenger Profiles** | Save multiple passenger profiles for quick selection |
| 🔔 **Notifications** | Get alerts for booking status and ticket availability |
| ⚙️ **Customizable** | Configure train class, berth type, and more |
| 🔄 **Auto-Retry** | Automatically retries if booking fails |
| 📱 **User-Friendly** | Clean interface with easy-to-use controls |

---

## 📥 Installation

### Chrome Web Store

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore) *(link coming soon)*
2. Click **"Add to Chrome"**
3. Confirm by clicking **"Add extension"**
4. The extension icon will appear in your browser toolbar

### Manual Installation

For developers or users who prefer manual installation:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/irctc-autobook.git
   cd irctc-autobook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run build
   ```

4. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **"Developer mode"** (toggle in top-right corner)
   - Click **"Load unpacked"**
   - Select the `dist` folder from the project directory

5. **Load in Edge**
   - Open Edge and navigate to `edge://extensions/`
   - Enable **"Developer mode"**
   - Click **"Load unpacked"**
   - Select the `dist` folder

---

## 🎮 Usage

### Quick Start

1. **Open Extension**: Click the IRCTC AutoBook icon in your browser toolbar
2. **Add Passengers**: Enter and save passenger details in the extension popup
3. **Configure Preferences**: Set your preferred train class, berth type, etc.
4. **Visit IRCTC**: Go to [irctc.co.in](https://www.irctc.co.in) and log in
5. **Search Trains**: Search for your desired train and route
6. **Activate AutoBook**: Click the "Start AutoBook" button
7. **Relax**: The extension will handle the booking automatically

### For Tatkal Booking

1. Set up all passenger details beforehand
2. Log in to IRCTC before 10:00 AM (AC) or 11:00 AM (Non-AC)
3. Navigate to the booking page and select your train
4. Activate AutoBook just before the tatkal window opens
5. The extension will attempt booking as soon as tickets are available

---

## ⚙️ Configuration

Access configuration through the extension popup:

### Passenger Settings
- Add/Edit/Delete passenger profiles
- Set default passenger for quick booking
- Store multiple passengers for group bookings

### Booking Preferences
| Option | Description |
|--------|-------------|
| Train Class | Sleeper, 3AC, 2AC, 1AC, CC, EC |
| Berth Preference | Lower, Middle, Upper, Side Lower, Side Upper |
| Quota | General, Tatkal, Premium Tatkal, Ladies |
| Payment Method | Preferred payment gateway |
| Auto-Retry | Number of retry attempts on failure |

### Notification Settings
- Enable/Disable booking notifications
- Sound alerts for successful bookings
- Desktop notifications

---

## 📸 Screenshots

<p align="center">
  <img src="docs/screenshot-popup.png" alt="Extension Popup" width="300">
  <img src="docs/screenshot-settings.png" alt="Settings Page" width="300">
</p>

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) | UI Framework |
| ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite) | Build Tool |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript) | Programming Language |
| ![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3) | Styling |
| ![Chrome APIs](https://img.shields.io/badge/Chrome-Extensions%20API-4285F4?logo=googlechrome) | Browser Integration |

---

## ❓ FAQ

<details>
<summary><strong>Is IRCTC AutoBook safe to use?</strong></summary>

Yes! The extension runs entirely in your browser. We don't collect, store, or transmit any personal information to external servers. All your data stays on your device.
</details>

<details>
<summary><strong>Does it work for Tatkal booking?</strong></summary>

Yes, IRCTC AutoBook is optimized for Tatkal booking. Set up your preferences beforehand and activate the extension just before the booking window opens.
</details>

<details>
<summary><strong>Do I need to keep the browser open?</strong></summary>

Yes, the browser tab with IRCTC must remain open for the extension to work. The extension monitors the page and acts when tickets become available.
</details>

<details>
<summary><strong>Can I book tickets for multiple passengers?</strong></summary>

Yes, you can save multiple passenger profiles and select them during booking. The extension supports group bookings with different passenger details.
</details>

<details>
<summary><strong>What browsers are supported?</strong></summary>

Currently, IRCTC AutoBook supports:
- Google Chrome (v90+)
- Microsoft Edge (v90+)
- Other Chromium-based browsers

Firefox support is planned for future releases.
</details>

<details>
<summary><strong>Is the extension free?</strong></summary>

Yes, IRCTC AutoBook is completely free and open-source. We believe in making train ticket booking accessible to everyone.
</details>

<details>
<summary><strong>How do I report bugs?</strong></summary>

Please open an issue on our [GitHub Issues](https://github.com/yourusername/irctc-autobook/issues) page with:
- Browser version
- Extension version
- Steps to reproduce the bug
- Screenshots (if applicable)
</details>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository**
   ```bash
   git fork https://github.com/yourusername/irctc-autobook.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting) |
| `refactor` | Code refactoring |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

### Code Guidelines

- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for public APIs
- Test your changes thoroughly

---

## 👥 Contributors

Thanks to these wonderful people who have contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/yourusername">
        <img src="https://github.com/yourusername.png" width="80px;" alt="Vishal"/>
        <br />
        <sub><b>Vishal</b></sub>
      </a>
      <br />
      <sub>Lead Developer</sub>
    </td>
    <!-- Add more contributors here -->
  </tr>
</table>

Want to see your name here? [Start contributing!](#contributing)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 IRCTC AutoBook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## ⚠️ Disclaimer

- **IRCTC AutoBook** is an independent project and is **not affiliated** with Indian Railways or IRCTC.
- This extension is meant to assist users in the booking process and does not guarantee ticket confirmation.
- Users are responsible for ensuring compliance with IRCTC's terms of service.
- The developers are not responsible for any booking failures, financial losses, or other issues arising from the use of this extension.
- Use this tool responsibly and ethically.

---

<p align="center">
  Made with ❤️ for the Indian Railway travelers
</p>

<p align="center">
  <a href="https://github.com/yourusername/irctc-autobook">⭐ Star this project</a> •
  <a href="https://github.com/yourusername/irctc-autobook/issues">🐛 Report Bug</a> •
  <a href="https://github.com/yourusername/irctc-autobook/issues">💡 Request Feature</a>
</p>
