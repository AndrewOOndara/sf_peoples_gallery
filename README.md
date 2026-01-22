# SF People's Gallery

A beautiful static website ready to deploy on Vercel.

## Features

- Modern, responsive design
- Smooth scrolling navigation
- Interactive gallery section
- Contact form
- Mobile-friendly layout
- Optimized for performance

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or simply connect your GitHub repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it as a static site and deploy it

3. **That's it!** Your site will be live in seconds.

## Project Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # JavaScript functionality
├── vercel.json     # Vercel configuration
└── README.md       # This file
```

## Customization

- Edit `index.html` to change content
- Modify `styles.css` to update styling
- Update `script.js` to add functionality
- The gallery items can be customized in the `galleryItems` array in `script.js`

## License

MIT
