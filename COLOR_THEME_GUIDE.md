# 🎨 Color Theme & Customization Guide

## Current Theme

Your portfolio uses a **modern blue-based theme** optimized for developer portfolios.

### Light Mode (Default)
```
Background:    Off-white (#f7f9ff)
Text:          Dark navy (#1a1a2e)
Primary:       Professional blue (#4a5fc1)
Accent:        Vibrant blue (#8b5cf6)
Border:        Light gray (#e8eaf6)
```

### Dark Mode (Premium)
```
Background:    Deep navy (#1a1d2e)
Text:          Off-white (#f0f3ff)
Primary:       Bright white (#f0f3ff)
Accent:        Vibrant purple (#9f5cf6)
Border:        Dark gray (#3a3f4a)
```

---

## How to Change the Theme

### Option 1: Quick Color Swap (Easiest)

Edit `/app/globals.css` and modify these sections:

```css
:root {
  /* Light Mode */
  --primary: oklch(0.25 0.05 260);    /* Main brand color */
  --accent: oklch(0.55 0.15 260);     /* Accent highlights */
  --background: oklch(0.98 0.001 231); /* Light background */
  --foreground: oklch(0.15 0.01 230);  /* Dark text */
}

.dark {
  /* Dark Mode */
  --primary: oklch(0.95 0.01 230);    /* Light text for dark */
  --accent: oklch(0.65 0.18 260);     /* Bright accent */
  --background: oklch(0.11 0.01 230); /* Dark background */
  --foreground: oklch(0.95 0.01 230); /* Light text */
}
```

### Color System Explanation

The portfolio uses **oklch()** color format, which is:
- `oklch(lightness saturation hue)`
- **Lightness:** 0-1 (0 = black, 1 = white)
- **Saturation:** 0-0.4 (0 = grayscale, higher = more colorful)
- **Hue:** 0-360 degrees (0 = red, 120 = green, 240 = blue, 260 = violet)

---

## Popular Theme Combinations

### 🔷 Professional Blue (Current)
```css
--primary: oklch(0.25 0.05 260);    /* Deep blue */
--accent: oklch(0.55 0.15 260);     /* Bright blue */
```

### 🟠 Warm Orange
```css
--primary: oklch(0.25 0.08 45);     /* Deep orange */
--accent: oklch(0.60 0.20 45);      /* Bright orange */
```

### 🟢 Tech Green
```css
--primary: oklch(0.25 0.08 150);    /* Deep green */
--accent: oklch(0.60 0.20 150);     /* Bright green */
```

### 🔴 Modern Red
```css
--primary: oklch(0.25 0.10 10);     /* Deep red */
--accent: oklch(0.60 0.20 10);      /* Bright red */
```

### 💜 Purple (Designer-Friendly)
```css
--primary: oklch(0.25 0.08 280);    /* Deep purple */
--accent: oklch(0.55 0.18 280);     /* Bright purple */
```

---

## All Customizable Colors

| CSS Variable | Purpose | Default | Light Mode | Dark Mode |
|--------------|---------|---------|-----------|-----------|
| `--primary` | Main brand color | Blue | Deep blue | Bright white |
| `--accent` | Highlights & CTAs | Blue | Bright blue | Bright purple |
| `--background` | Page background | Light | Off-white | Deep navy |
| `--foreground` | Text color | Dark | Dark navy | Light text |
| `--secondary` | Secondary elements | Gray | Light gray | Darker gray |
| `--muted` | Muted text | Gray | Medium gray | Muted gray |
| `--border` | Borders & dividers | Gray | Light gray | Dark gray |
| `--card` | Card backgrounds | White | White | Slightly lighter dark |

---

## Using Colors in Components

### In JSX (Tailwind Classes)
```tsx
// Using primary color
<div className="bg-primary text-primary-foreground">
  Text on primary background
</div>

// Using accent color
<button className="bg-accent text-accent-foreground hover:bg-accent/90">
  Click me
</button>

// Using semantic colors
<div className="bg-background text-foreground border border-border">
  Content
</div>
```

### Gradient Text (Like Section Headers)
```tsx
<h1 className="gradient-text">
  Styled Text
</h1>
```

CSS used:
```css
.gradient-text {
  background: linear-gradient(to right, var(--primary), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

---

## Advanced: Custom Colors

If you want even more control, add custom colors to globals.css:

```css
:root {
  /* Your existing colors */
  --primary: oklch(0.25 0.05 260);
  --accent: oklch(0.55 0.15 260);
  
  /* Add custom colors */
  --success: oklch(0.60 0.15 142);   /* Green */
  --warning: oklch(0.70 0.15 70);    /* Yellow */
  --error: oklch(0.60 0.15 15);      /* Red */
}
```

Then in Tailwind config, add to theme:
```js
// tailwind.config.js
extend: {
  colors: {
    success: 'var(--success)',
    warning: 'var(--warning)',
    error: 'var(--error)',
  }
}
```

---

## Dark Mode Detection

The portfolio respects the user's system preference:
- **Light mode:** If system preference is light
- **Dark mode:** If system preference is dark

Users can also toggle manually using system settings.

### Force Dark Mode Only
If you want ONLY dark mode, edit `/app/layout.tsx`:
```tsx
<html lang="en" className="dark">
```

### Force Light Mode Only
```tsx
<html lang="en" className="light">
```

---

## Color Accessibility Tips

✅ **Do:**
- Keep contrast ratio ≥ 4.5:1 for text
- Test with color blindness simulators
- Use varied saturation levels

❌ **Don't:**
- Use only color to convey information
- Put low-contrast text on images
- Use pure red/green together (color-blind unfriendly)

---

## Testing Your Colors

1. **Locally:** `pnpm dev` and check both light/dark modes
2. **Chrome DevTools:** F12 → Rendering → Emulate CSS media feature prefers-color-scheme
3. **Color Contrast:** Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
4. **Color Blindness:** Use [Coblis simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)

---

## Extending with Shadcn/UI Colors

Your project includes shadcn/ui which uses:
- `--primary` - Primary action buttons
- `--secondary` - Secondary buttons
- `--accent` - Highlights
- `--destructive` - Delete/danger actions
- `--muted` - Disabled/secondary text

All inherited from your theme! Change once, affects everything.

---

## Quick Color Change Template

Copy this to `/app/globals.css` and modify:

```css
:root {
  /* Change these to customize light mode */
  --primary: oklch(0.25 0.05 260);      /* 🎨 Brand color */
  --accent: oklch(0.55 0.15 260);       /* ✨ Highlight color */
  --background: oklch(0.98 0.001 231);  /* 📄 Background */
  --foreground: oklch(0.15 0.01 230);   /* 📝 Text */
}

.dark {
  /* Change these to customize dark mode */
  --primary: oklch(0.95 0.01 230);      /* 🎨 Brand color (light) */
  --accent: oklch(0.65 0.18 260);       /* ✨ Highlight color (bright) */
  --background: oklch(0.11 0.01 230);   /* 📄 Background (dark) */
  --foreground: oklch(0.95 0.01 230);   /* 📝 Text (light) */
}
```

---

## Recommended Color Combinations for Developers

| Industry | Primary | Accent | Vibe |
|----------|---------|--------|------|
| **Frontend Dev** | Blue (#4a5fc1) | Purple (#8b5cf6) | Modern, sleek |
| **Data Science** | Teal (#14b8a6) | Orange (#f97316) | Technical, energetic |
| **Startup Tech** | Indigo (#6366f1) | Pink (#ec4899) | Bold, innovative |
| **DevOps/Infrastructure** | Red (#dc2626) | Orange (#ea580c) | Reliable, powerful |
| **Design + Dev** | Purple (#a855f7) | Cyan (#06b6d4) | Creative, modern |

---

**Pro Tip:** Test your color choice with real project images before deploying!
