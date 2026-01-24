# ⚡ HustleCode Starter Codex - Landing Page Template

A modern, responsive landing page template for the HustleCode Starter Codex project. This template provides a sleek, dark-themed website for distributing educational materials, faction cards, and hardware guides.

## 🎯 Overview

This repository contains a simple yet effective static website that serves as a distribution hub for HustleCode resources. The site features:

- **Eye-catching gradient header** with glowing text effects
- **Dark theme** optimized for readability
- **Download section** for PDFs and resource bundles
- **Social links** to Discord, YouTube, and donation platforms
- **Fully responsive** design that works on all devices

## 📁 Project Structure

```
template-hustlecodex-starter/
├── index.html                              # Main landing page
├── style.css                               # Styling and theme
├── docs/                                   # Resource files directory
│   ├── HustleCode_Starter_Codex_v3.pdf    # Main codex document
│   ├── HustleCode_Faction_Cards.pdf       # Faction cards
│   ├── HustleCode_Hardware_Quickstart.pdf # Hardware guide
│   ├── HustleCode_Pitch_Flyer.pdf         # Marketing flyer
│   ├── HustleCode_Starter_Bundle_v3.zip   # Full bundle
│   ├── banner.png                          # OG image for social sharing
│   └── *.md                                # Placeholder files
└── HustleCode_StarterCodex_AllInOne.zip   # Complete archive
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DubjamMusic/template-hustlecodex-starter.git
   cd template-hustlecodex-starter
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or use a local web server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

3. **View the site:**
   Navigate to `http://localhost:8000` in your browser

## 🎨 Customization

### Update Content

1. **Modify the text** in `index.html`:
   - Change the title and tagline in the `<header>` section
   - Update download links in the Downloads section
   - Edit social links in the "Join the Hustle" section

2. **Update styling** in `style.css`:
   - Change colors by modifying hex values
   - Adjust the gradient in the header background
   - Modify text shadows and glow effects
   - Update font sizes and spacing

### Add Resources

1. Place your PDF files and resources in the `docs/` directory
2. Update the download links in `index.html` to point to your files
3. Replace `docs/banner.png` with your own Open Graph image (1200x630px recommended)

### Update Social Links

Replace the placeholder links in the "Join the Hustle" section:
```html
<a href="https://discord.gg/yourdiscordlink" target="_blank">💬 Discord</a>
<a href="https://youtube.com/@HustleCodeX" target="_blank">▶ YouTube</a>
<a href="https://gofund.me/yourcampaign" target="_blank">❤️ Donate</a>
```

## 🌐 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the branch and folder to deploy from
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify

1. Push your code to GitHub
2. Sign up at [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Deploy with default settings

### Vercel

1. Push your code to GitHub
2. Sign up at [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

## 🎓 Use Cases

This template is perfect for:
- **Educational resource hubs** - Share codexes, guides, and tutorials
- **Digital product distribution** - Provide downloads for PDFs and bundles
- **Community building** - Link to Discord, YouTube, and other platforms
- **Campaign landing pages** - Promote projects and fundraising efforts
- **Quick start guides** - Distribute documentation and onboarding materials

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and effects
- **No JavaScript** - Pure HTML/CSS for maximum performance and simplicity
- **No build process** - Static files ready to deploy

## 📋 Features

- ✨ Gradient header with glowing text effects
- 🌙 Dark theme optimized for readability
- 📱 Fully responsive design
- 🚀 Fast loading (no dependencies)
- ♿ Semantic HTML for accessibility
- 🔗 Social media integration
- 📊 Open Graph meta tags for social sharing
- 🎯 Clean, minimalist design

## 🤝 Contributing

This is a template repository. Feel free to:
1. Fork this repository
2. Customize it for your needs
3. Share your improvements
4. Create issues for bugs or suggestions

## 📄 License

This template is provided as-is for use with the HustleCode project. Customize and use it for your own projects as needed.

## 💬 Support

- **Discord:** Join the community (update link in index.html)
- **YouTube:** Watch tutorials and updates
- **Issues:** Report bugs or request features on GitHub

## 🎯 About HustleCode

HustleCode Starter Codex is an educational initiative focused on helping people transition "From Survival → Digital Empire" through technology education, hardware guides, and community support.

---

**© 2025 HustleCode Collective — Built for the Empire**
