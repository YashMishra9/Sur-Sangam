# 📻 Sur Sangam Music House

> *Turn up the volume. The classics are playing.*

A nostalgic digital music player inspired by the cassette shops, FM radios, and Bollywood music of the 90s.

### ✨ Features

- 🎵 50+ classic Hindi songs
- 📼 Retro cassette & vinyl player
- 📻 90s-inspired radio interface
- 🔀 Random playback & listening history
- ▶️ YouTube-powered music playback
- 🕐 Live IST clock
- 📱 Responsive desktop & mobile design
- 🎞️ Retro backgrounds, film grain & broadcast ticker

### 🛠️ Built With

**Next.js · React · TypeScript · Tailwind CSS · YouTube IFrame API**

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- Git

### Installation

```bash
git clone https://github.com/YashMishra9/Sur-Sangam.git
cd Sur-Sangam
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:3000
```

---

## 🎼 Adding Songs

Songs are managed in:

```text
lib/playlists.ts
```

Add a track using:

```ts
{
  id: "t1",
  title: "Pal Pal Dil Ke Paas",
  artist: "Kishore Kumar",
  film: "Blackmail",
  year: 1973,
  duration: 240,
  videoId: "QwLQ4_gkvsE",
}
```

For a YouTube URL like:

```text
https://www.youtube.com/watch?v=QwLQ4_gkvsE
```

use only the **video ID**:

```text
QwLQ4_gkvsE
```

> Make sure the video plays and allows embedding before adding it.

---

## 🎨 Design

Sur Sangam takes inspiration from the golden era of Indian music:

**📼 Cassette shops → 📻 FM radios → 🎞️ Bollywood posters → 📺 CRT/VHS → 💿 Printed cassette labels**

The design uses warm, nostalgic tones rather than the typical modern streaming-app aesthetic.

---

## 📱 Responsive

Sur Sangam has dedicated desktop and mobile layouts rather than simply shrinking the same interface.

- 🖥️ Desktop — glass-pill player with vinyl, controls and track information
- 📱 Mobile — stacked touch-friendly player
- 🌄 Landscape & portrait background artwork
- 🛡️ Safe-area support for modern phones

---

## 🧠 Under the Hood

- **Single YouTube player** — one IFrame instance is reused across desktop and mobile.
- **Random playback** — Next selects a random song without immediately repeating the current one.
- **Listening history** — Previous follows actual listening history.
- **Auto-advance** — songs automatically continue when playback ends.
- **Error recovery** — unavailable or non-embeddable videos are automatically skipped.
- **Live progress** — playback time and duration stay synchronized with YouTube.

---

## 🔮 What's Next?

- 🎵 200+ songs
- 📋 Queue / track list
- 🔊 Volume control
- ⌨️ Keyboard shortcuts
- ❤️ Favorites
- 📼 Cassette-style album artwork
- 🎙️ Song requests
- 📺 More subtle CRT/VHS effects

---

## 🌐 Deployment

Sur Sangam is built to be deployed with **Vercel**.

Every push to the connected GitHub repository can automatically trigger a new production deployment.

---

## 👨‍💻 Author

**Yash Mishra**

[![GitHub](https://img.shields.io/badge/GitHub-YashMishra9-181717?style=flat&logo=github)](https://github.com/YashMishra9)

---

<p align="center">

**📻 Welcome to Sur Sangam Music House.**

*Turn up the volume. The classics are playing.*

</p>