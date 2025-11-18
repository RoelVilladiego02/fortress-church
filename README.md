# Fortress Church - Building Progress Website

A modern promotional website for Fortress Church, built with Vite + React + Tailwind CSS, focused on documenting the progress of a new church building.

## Features

- 🏗️ **Building Progress Tracking** - Document daily construction updates
- 📸 **Photo Gallery** - Showcase construction photos
- 📊 **Progress Visualization** - Visual progress bars and statistics
- 📱 **Responsive Design** - Works beautifully on all devices
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 📝 **No Database Required** - Simple JSON file-based content management

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Site navigation
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx        # Homepage hero section
│   └── BuildingProgress/
│       ├── ProgressCard.jsx      # Individual progress update card
│       ├── ProgressTimeline.jsx  # Timeline view of updates
│       └── ProgressGallery.jsx   # Gallery view of photos
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Progress.jsx    # Progress page (timeline & gallery)
│   └── About.jsx       # About page
├── data/               # JSON data files (no database needed!)
│   ├── progress-updates.json  # Daily construction updates
│   ├── church-info.json       # Church information
│   └── team.json              # Leadership team info
└── App.jsx             # Main app with routing
```

## Adding Daily Updates

### Method 1: Edit JSON File Directly

1. Open `src/data/progress-updates.json`
2. Add a new update object to the `updates` array:

```json
{
  "id": 4,
  "date": "2025-02-15",
  "title": "Framing Begins",
  "description": "The structural framing has started. Walls are going up!",
  "photos": ["framing-1.jpg", "framing-2.jpg"],
  "milestone": false,
  "progress_percentage": 25
}
```

3. Save the file - the site will automatically update

### Method 2: Using GitHub Web Interface

1. Navigate to `src/data/progress-updates.json` on GitHub
2. Click "Edit" (pencil icon)
3. Add your update following the same format
4. Commit the change
5. If using Vercel/Netlify, the site will auto-deploy

## Adding Photos

1. Place photos in `public/progress-photos/` directory
2. Organize by date if desired: `public/progress-photos/2025-02/framing-1.jpg`
3. Reference them in the JSON file: `"photos": ["2025-02/framing-1.jpg"]`

## Updating Church Information

Edit `src/data/church-info.json` to update:
- Church name and tagline
- Contact information
- Address
- Social media links
- Building project details

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is currently set to blue (`primary-600`, etc.).

### Styling

All components use Tailwind CSS utility classes. Modify components in `src/components/` to change styling.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy - it's automatic!

### Netlify

1. Push your code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

Any static hosting service will work. Just build the project and upload the `dist` folder.

## Daily Update Workflow

For non-technical staff to add updates:

1. **Take photos** during construction
2. **Upload photos** to `public/progress-photos/` (via GitHub web interface or file manager)
3. **Edit** `src/data/progress-updates.json` (via GitHub web interface)
4. **Add new entry** following the existing format
5. **Commit** the changes
6. Site **auto-updates** (if using auto-deploy)

## Tips

- Use descriptive titles for updates
- Mark important milestones with `"milestone": true`
- Update `progress_percentage` to reflect overall completion
- Keep photo file sizes reasonable (< 2MB recommended)
- Use consistent date format: `YYYY-MM-DD`

## License

This project is for Fortress Church use.
