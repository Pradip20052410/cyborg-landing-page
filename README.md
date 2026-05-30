# NEXUS//CYBORG — AI Cybersecurity Landing Page

![Version](https://img.shields.io/badge/version-1.0.0-00f5ff?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-7a00ff?style=for-the-badge)

> A futuristic **cyberpunk/cyborg-themed** landing page built with pure HTML, CSS, and Vanilla JavaScript. Designed for an AI Cybersecurity platform with neon glowing effects, glassmorphism UI, holographic animations, and a premium modern look.

---

## 📸 Preview

```
 ┌─────────────────────────────────────────────┐
 │  NEXUS//CYBORG  —  AI Cybersecurity Platform │
 │  ═══════════════════════════════════════════ │
 │  🌐 Neon Cyan · Purple · Dark Background     │
 │  ⚡ Particles · Typing Effect · Animations   │
 └─────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
TechProject 1 (IIT B)/
│
├── index.html        # Main HTML structure
├── style.css         # All styles, animations, responsive design
├── script.js         # JavaScript — particles, typing, scroll effects
└── README.md         # Project documentation
```

---

## ✨ Features

### 🎨 Design
- Dark futuristic background (`#0f172a`)
- Neon **cyan**, **purple**, and **green** glowing accents
- Glassmorphism cards with backdrop blur
- Cyberpunk atmosphere with scanline overlay
- Animated background grid

### 📄 Sections
| Section | Description |
|---|---|
| **Navbar** | Transparent glassmorphism navbar with scroll shrink effect |
| **Hero** | Typing effect headline, animated cyborg core, floating chips |
| **Features** | 4 glowing feature cards with cursor-following spotlight |
| **Technology** | Progress bars, live threat log stream, network topology canvas |
| **About** | Scroll-reveal two-column layout with circuit board visual |
| **CTA** | Pulsing gradient banner with breathing glow button |
| **Footer** | Social icons with neon hover, system status indicator |

### ⚙️ JavaScript Effects
- Custom neon cursor with smooth lag ring
- 90-particle canvas with connecting lines
- Typing / delete loop for hero headline
- Scroll-reveal animations via `IntersectionObserver`
- Animated progress bars triggered on scroll
- Live threat log stream (auto-updates every 1.8s)
- Animated network topology canvas
- Smooth scroll navigation
- Dynamic navbar on scroll
- Mobile hamburger menu toggle

---

## 🚀 Getting Started

### Prerequisites
No installations required. Just a modern web browser.

### Run Locally

**Option 1 — Direct open:**
```
Double-click index.html
```

**Option 2 — VS Code Live Server (recommended):**
```
1. Open folder in VS Code
2. Right-click index.html
3. Click "Open with Live Server"
```

**Option 3 — Terminal:**
```bash
# Python
python -m http.server 3000

# Node.js
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## 🎨 Color Palette

| Name | Hex | Usage |
|---|---|---|
| Cyan | `#00f5ff` | Primary accent, cursor, borders |
| Purple | `#7a00ff` | Secondary accent, gradients |
| Green | `#00ffcc` | Success states, highlights |
| Deep Dark | `#0f172a` | Main background |
| Dark | `#111827` | Card backgrounds |

---

## 🔤 Fonts Used

| Font | Weight | Usage |
|---|---|---|
| [Orbitron](https://fonts.google.com/specimen/Orbitron) | 400–900 | Headings, logo, titles |
| [Exo 2](https://fonts.google.com/specimen/Exo+2) | 300–600 | Body text, paragraphs |
| [Rajdhani](https://fonts.google.com/specimen/Rajdhani) | 300–700 | Labels, buttons, tags |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 900px` | Two-column grid (desktop) |
| `≤ 900px` | Single column, hamburger menu (tablet) |
| `≤ 600px` | Compact layout, smaller fonts (mobile) |

---

## 🛠️ Customization

### Change Cursor Style
In `style.css`, find `#cursor-dot` and update `width` / `height`:
```css
#cursor-dot { width: 14px; height: 14px; }  /* increase size */
```
Set `border-radius: 50%` for circle, `border-radius: 0` for square/diamond.

### Change Typing Phrases
In `script.js`, find the `phrases` array:
```js
const phrases = ['Cyber Defense', 'Quantum Security', 'Neural Intelligence', 'AI Fusion'];
```
Replace with your own text.

### Change Colors
In `style.css`, update the `:root` variables:
```css
:root {
  --cyan:   #00f5ff;   /* change primary color */
  --purple: #7a00ff;   /* change secondary color */
  --green:  #00ffcc;   /* change accent color */
}
```

### Change Particle Count
In `script.js`, find:
```js
for(let i=0; i<90; i++)   // increase or decrease particle count
```

---

## ⚠️ Known Issues & Fixes

| Issue | Fix |
|---|---|
| `<script src="script.js"/>` self-closing tag | Use `<script src="script.js"></script>` |
| Script in `<head>` breaks JS | Move `<script>` before `</body>` or add `defer` |
| Missing space in `<link rel="stylesheet"href=...>` | Add space before `href` |
| Typing text wraps to next line | Add `white-space: nowrap` to `.hero-title .line2` |
| Hero left side shifts left | Add `min-width: 0` to `.hero-left` and `.hero-inner` |
| Last letter getting clipped | Change `overflow: hidden` to `overflow: visible` |

---

## 🧱 Tech Stack

```
Frontend Only — No frameworks, no dependencies, no build tools
│
├── HTML5          — Semantic structure
├── CSS3           — Animations, glassmorphism, grid, flexbox
├── Vanilla JS     — Canvas, IntersectionObserver, DOM manipulation
└── Google Fonts   — Orbitron, Exo 2, Rajdhani (CDN)
```

---

## 📜 License

```
MIT License — Free to use, modify, and distribute.
```

---

## 👨‍💻 Author

**Built for IIT Bombay TechProject**

> *"Where Human Meets Machine · Secured by Quantum AI"*

---

<div align="center">

**NEXUS//CYBORG** · Built with ❤️ and `#00f5ff`

</div>
