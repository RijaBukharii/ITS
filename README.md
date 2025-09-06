# In The Stix - Jekyll Website

A Jekyll-based static website for In The Stix retreat center.

## 🚀 Quick Start

### Prerequisites
- Ruby 2.6.0 or higher
- RubyGems
- Bundler

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd ITS-main
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Access your site:**
   - Open your browser and go to `http://localhost:4000`
   - The site will automatically reload when you make changes

## 📁 Project Structure

```
├── _config.yml          # Jekyll configuration
├── _data/               # Site data (YAML files)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates
├── _posts/              # Blog posts
├── _retreats/           # Retreat content
├── _stories/            # Story content
├── assets/              # Images, CSS, JS
├── style/               # Custom CSS files
└── *.markdown           # Page content files
```

## 🎨 Customization

### Content Management
- **Pages**: Edit `.markdown` files in the root directory
- **Layouts**: Modify HTML templates in `_layouts/`
- **Styling**: Update CSS files in `style/`
- **Data**: Edit YAML files in `_data/`

### Carousel System
The site uses a comprehensive carousel system with three types:
1. **Logo carousels** (Homepage) - Preserved as-is
2. **Two-column carousels** (Wellness, Events, Feasting) - Fixed frame sizing
3. **Stacked dome carousels** (The Grounds) - Larger frame sizing

## 🛠️ Development

### Build Commands
```bash
# Build the site
bundle exec jekyll build

# Serve with drafts
bundle exec jekyll serve --drafts

# Serve with incremental build
bundle exec jekyll serve --incremental
```

### Adding Content
1. **New Pages**: Create `.markdown` files in the root directory
2. **New Posts**: Add files to `_posts/` with date prefix
3. **New Images**: Add to `assets/images/` and reference in content

## 📝 Content Guidelines

### Image Optimization
- Use optimized images for web (JPEG for photos, PNG for graphics)
- Recommended max width: 1920px for hero images
- Use descriptive alt text for accessibility

### Carousel Images
- **Portrait images**: Will be fit to height, centered horizontally
- **Landscape images**: Will be fit to width, centered vertically  
- **Square images**: Will be fit to height, centered horizontally

## 🚀 Deployment

### GitHub Pages
1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)

### Manual Deployment
1. Build the site: `bundle exec jekyll build`
2. Upload `_site/` contents to your web server

## 📋 Requirements

- **Ruby**: 2.6.0+
- **Jekyll**: 4.3.4
- **Bundler**: Latest version

## 🔧 Troubleshooting

### Common Issues

**Build Errors:**
- Ensure Ruby and Bundler are properly installed
- Run `bundle install` to install dependencies
- Check for syntax errors in YAML front matter

**Carousel Issues:**
- Ensure images are properly referenced in content
- Check that carousel containers have correct CSS classes
- Verify JavaScript is loading properly

**Windows Development:**
- Install RubyInstaller DevKit for native extensions
- Use PowerShell or Command Prompt for commands

## 📞 Support

For technical issues or questions about the carousel system, refer to the comprehensive CSS and JavaScript implementation in:
- `style/style.css` - Carousel styling and responsive design
- `assets/main.js` - Two-column carousel initialization
- `assets/dome-carousel.js` - Dome carousel initialization

## 📄 License

This project is proprietary to In The Stix. All rights reserved.
