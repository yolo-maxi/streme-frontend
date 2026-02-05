# Streme.fun Brand Guidelines

## Overview

Streme.fun is a Farcaster-integrated DeFi platform for launching and trading tokens with streaming rewards on Base L2. These guidelines ensure visual consistency across all touchpoints.

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#7C65C1` | Main brand color, primary buttons, links, highlights |
| **Secondary** | DaisyUI secondary | Alternative actions, supporting elements |
| **Accent** | DaisyUI accent | Special highlights, tertiary actions |

### Status Colors

| Status | Usage |
|--------|-------|
| **Success** (Green) | Positive changes, gains, confirmations |
| **Warning** (Orange/Yellow) | Cautions, pending states |
| **Error** (Red) | Negative changes, losses, errors |
| **Info** (Blue) | Informational messages, verified badges |

### Background Colors

```
base-100  →  Primary background
base-200  →  Secondary background, cards
base-300  →  Tertiary background, borders
```

### Color Usage in Code

```tsx
// Buttons
<button className="btn btn-primary">Primary Action</button>
<button className="btn btn-secondary">Secondary Action</button>
<button className="btn btn-accent">Highlight</button>
<button className="btn btn-ghost">Minimal</button>

// Text
<span className="text-primary">Highlighted text</span>
<span className="text-green-500">+12.5%</span>
<span className="text-red-500">-3.2%</span>

// Backgrounds
<div className="bg-base-100">Primary container</div>
<div className="bg-base-200">Card background</div>
```

---

## Typography

### Font Families

| Font | Usage | Class |
|------|-------|-------|
| **Geist Sans** | General text, headings, UI elements | Default |
| **Geist Mono** | Numbers, prices, addresses, streaming values | `font-mono` |

### Font Sizes

| Size | Class | Usage |
|------|-------|-------|
| 4XL | `text-4xl` | Page titles, hero headings |
| 2XL | `text-2xl` | Section headers |
| XL | `text-xl` | Card titles, important labels |
| LG | `text-lg` | Subheadings |
| Base | `text-base` | Body text (default) |
| SM | `text-sm` | Secondary text, labels |
| XS | `text-xs` | Captions, timestamps |

### Font Weights

| Weight | Class | Usage |
|--------|-------|-------|
| Extra Bold | `font-extrabold` | Hero text |
| Bold | `font-bold` | Headings, emphasis |
| Semibold | `font-semibold` | Subheadings, important labels |
| Normal | Default | Body text |

### Typography in Practice

```tsx
// Page heading
<h1 className="text-4xl font-bold">Token Discovery</h1>

// Card title
<h2 className="text-xl font-semibold">STREME Token</h2>

// Price display (always monospace)
<span className="font-mono text-lg">$1,234.56</span>

// Streaming number
<span className="font-mono text-sm">0.0001 STREME/day</span>

// Wallet address
<span className="font-mono text-xs">0x1234...5678</span>
```

---

## Logo

### Logo Files

| File | Usage |
|------|-------|
| `/public/streme-text-white.svg` | Dark backgrounds |
| `/public/streme-text-black.svg` | Light backgrounds |
| `/public/icon.png` | App icon, favicon |
| `/public/icon-transparent.png` | Overlays, transparent backgrounds |

### Logo Component

The `Logo` component in `/src/components/Logo.tsx` renders an SVG with three colored sections:
- "Ape" in primary color
- "Stake" in secondary color
- "Earn" in accent color

### Clear Space

Maintain minimum clear space around the logo equal to the height of the "S" in Streme.

### Minimum Size

- Digital: 24px height minimum
- Print: 0.5 inch height minimum

---

## Components

### Buttons

#### Primary Styles

| Style | Class | Usage |
|-------|-------|-------|
| Primary | `btn btn-primary` | Main actions (Stake, Swap, Confirm) |
| Secondary | `btn btn-secondary` | Alternative actions |
| Accent | `btn btn-accent` | Highlighted actions |
| Ghost | `btn btn-ghost` | Minimal actions, navigation |
| Outline | `btn btn-outline` | Secondary emphasis |

#### Sizes

| Size | Class | Usage |
|------|-------|-------|
| Small | `btn-sm` | Inline actions, compact UI |
| Default | `btn` | Standard buttons |
| Large | `btn-lg` | Primary CTAs |

#### States

```tsx
// Disabled
<button className="btn btn-primary btn-disabled opacity-50">Disabled</button>

// Loading
<button className="btn btn-primary">
  <svg className="animate-spin h-5 w-5" />
  Processing...
</button>

// Full width
<button className="btn btn-primary w-full">Connect Wallet</button>
```

### Cards

```tsx
<div className="card bg-base-200 border border-base-300">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Modals

| Context | Style |
|---------|-------|
| Desktop | Centered, `rounded-xl`, backdrop blur |
| Mobile | Bottom sheet, `rounded-t-2xl`, slide up |

```tsx
// Modal container
<div className="fixed inset-0 z-[100] flex items-center justify-center">
  // Backdrop
  <div className="absolute inset-0 bg-black/50 md:bg-base-200/80 md:backdrop-blur-sm" />

  // Content
  <div className="bg-base-100 rounded-t-2xl md:rounded-xl w-full md:max-w-md">
    {/* Modal content */}
  </div>
</div>
```

### Forms

```tsx
<div className="form-control">
  <label className="label">
    <span className="label-text">Amount</span>
  </label>
  <input
    type="text"
    className="input input-bordered focus:input-primary w-full"
    placeholder="0.00"
  />
</div>
```

---

## Spacing

### Scale

Use Tailwind's spacing scale consistently:

| Space | Value | Usage |
|-------|-------|-------|
| 1 | 4px | Tight inline spacing |
| 2 | 8px | Small gaps, icon padding |
| 3 | 12px | Button padding |
| 4 | 16px | Standard padding, gaps |
| 6 | 24px | Section spacing |
| 8 | 32px | Large section spacing |

### Common Patterns

```tsx
// Card padding
<div className="p-4">

// Button content
<button className="px-4 py-2">

// Gap between items
<div className="flex gap-4">

// Section margin
<section className="mb-8">
```

---

## Border Radius

| Size | Class | Usage |
|------|-------|-------|
| Full | `rounded-full` | Avatars, circular buttons |
| 3XL | `rounded-3xl` | Hero cards |
| 2XL | `rounded-2xl` | Mobile modals (top) |
| XL | `rounded-xl` | Cards, desktop modals |
| LG | `rounded-lg` | Buttons, inputs |
| MD | `rounded-md` | Small elements |

---

## Shadows & Depth

| Class | Usage |
|-------|-------|
| `shadow-xl` | Modals, elevated cards |
| `shadow-lg` | Hover states |
| No shadow | Default cards (use borders instead) |

### Hover Effects

```tsx
<div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
```

---

## Animations

### Transitions

| Duration | Class | Usage |
|----------|-------|-------|
| 200ms | `duration-200` | Quick interactions |
| 300ms | `duration-300` | Standard transitions |
| 500ms | `duration-500` | Smooth, noticeable changes |

### Easing

| Easing | Class | Usage |
|--------|-------|-------|
| ease-out | `ease-out` | Elements appearing |
| ease-in-out | `ease-in-out` | State changes |

### Custom Animations

| Animation | Usage |
|-----------|-------|
| `animate-spin` | Loading spinners |
| `animate-shimmer` | New/highlight badges |
| `animate-glow` | Special effects |
| `animate-slide-up` | Toast notifications |

### Real-time Values

For streaming numbers and live updates:

```tsx
// Use monospace for stable alignment
<span className="font-mono">
  {formattedNumber}
</span>

// 4 decimal precision for STREME
{balance.toFixed(4)}
```

---

## Icons

### Sizing

| Size | Class | Usage |
|------|-------|-------|
| Small | `w-4 h-4` | Inline icons, badges |
| Medium | `w-5 h-5` | Buttons, navigation |
| Large | `w-6 h-6` | Feature icons |

### Styling

```tsx
// Outlined icon
<svg
  className="w-5 h-5"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
>

// Solid icon
<svg
  className="w-5 h-5"
  fill="currentColor"
>
```

### Color

Icons inherit text color via `currentColor`. Use Tailwind text utilities:

```tsx
<span className="text-primary">
  <Icon /> {/* Inherits primary color */}
</span>
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Prefix | Min Width |
|------------|--------|-----------|
| Mobile | (default) | 0px |
| Small | `sm:` | 640px |
| Medium | `md:` | 768px |
| Large | `lg:` | 1024px |

### Mobile-First Approach

Always design for mobile first, then enhance for larger screens:

```tsx
// Full width on mobile, auto on desktop
<button className="w-full md:w-auto">

// Stack on mobile, side-by-side on desktop
<div className="flex flex-col md:flex-row">

// Hide on mobile, show on desktop
<div className="hidden md:block">
```

### Container

```tsx
<div className="max-w-[1440px] mx-auto px-4">
```

---

## Dark Mode

### Implementation

Dark mode uses DaisyUI's theming system with `data-theme` attribute:

```html
<html data-theme="dark">
```

### Color Guidelines

- Use `base-100`, `base-200`, `base-300` instead of hardcoded grays
- These colors automatically adapt to the selected theme
- Primary, secondary, and accent colors also adapt

### Theme Switching

The `ThemeSwitcher` component handles theme persistence:

```tsx
// Toggle theme
const toggleTheme = () => {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
```

---

## Images

### Safe Loading

Always use the `SafeImage` component for user-generated or external images:

```tsx
<SafeImage
  src={imageUrl}
  alt="Description"
  fallback="/default-avatar.png"
  className="w-10 h-10 rounded-full"
/>
```

### Avatar Sizes

| Size | Class | Usage |
|------|-------|-------|
| XS | `w-6 h-6` | Inline mentions |
| SM | `w-8 h-8` | Lists, compact views |
| MD | `w-10 h-10` | Cards, navigation |
| LG | `w-12 h-12` | Profile headers |
| XL | `w-16 h-16` | Token pages |

---

## Accessibility

### Focus States

All interactive elements must have visible focus states:

```tsx
<button className="btn btn-primary focus:ring-2 focus:ring-primary/50">
```

### Color Contrast

- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Use opacity utilities carefully with text
- Test in both light and dark modes

### Semantic HTML

Use DaisyUI components which include proper semantic HTML:

- `button` for actions
- `a` for navigation
- Proper heading hierarchy
- `label` for form inputs

---

## Brand Voice

### Tone

- **Confident**: Direct, clear communication
- **Technical**: Accurate DeFi terminology
- **Approachable**: Friendly without being casual
- **Concise**: No unnecessary words

### Writing Examples

| Do | Don't |
|----|-------|
| "Stake STREME" | "Click here to stake your STREME tokens" |
| "Rewards streaming" | "Your rewards are currently being streamed to you" |
| "Connect wallet" | "Please connect your wallet to continue" |

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `TokenGrid.tsx` |
| Hooks | camelCase with `use` prefix | `useStremeBalance.ts` |
| Utilities | camelCase | `formatNumber.ts` |
| Pages | kebab-case folders | `/token/[address]/page.tsx` |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial brand guidelines |
