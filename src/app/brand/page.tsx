import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Streme — Brand Guidelines",
  description: "Brand guidelines and design system for Streme.fun",
};

export default function BrandPage() {
  return <BrandContent />;
}

function BrandContent() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Header */}
      <header className="bg-primary text-primary-content py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-3">Streme.fun</h1>
          <p className="text-xl opacity-80 max-w-2xl">Brand Guidelines & Design System</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-base-100/95 backdrop-blur border-b border-base-300 px-4">
        <div className="max-w-5xl mx-auto flex gap-1 overflow-x-auto py-2 text-sm">
          <a href="#about" className="btn btn-ghost btn-sm">About</a>
          <a href="#voice" className="btn btn-ghost btn-sm">Voice</a>
          <a href="#logo" className="btn btn-ghost btn-sm">Logo</a>
          <a href="#colors" className="btn btn-ghost btn-sm">Colors</a>
          <a href="#typography" className="btn btn-ghost btn-sm">Type</a>
          <a href="#components" className="btn btn-ghost btn-sm">Components</a>
          <a href="#loading" className="btn btn-ghost btn-sm">Loading</a>
          <a href="#toasts" className="btn btn-ghost btn-sm">Toasts</a>
          <a href="#z-index" className="btn btn-ghost btn-sm">Z-Index</a>
          <a href="#responsive" className="btn btn-ghost btn-sm">Responsive</a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">

        {/* ═══════════════════════════════════════ */}
        {/* SOFT / BRAND IDENTITY — TOP             */}
        {/* ═══════════════════════════════════════ */}

        {/* About */}
        <Section id="about" title="About Streme">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What is Streme?</h3>
              <p className="leading-relaxed">
                Streme.fun is a Farcaster-integrated DeFi platform for launching and trading tokens
                with streaming rewards on Base L2. Users can launch tokens, stake them, and receive
                continuous streaming rewards distributed via Superfluid&apos;s real-time finance protocol.
              </p>
              <h3 className="text-lg font-semibold mt-6">Platform Pillars</h3>
              <div className="space-y-2">
                <Pillar emoji="🚀" title="Launch" desc="Create tokens with built-in streaming economics" />
                <Pillar emoji="💎" title="Stake" desc="Lock tokens to earn continuous streaming rewards" />
                <Pillar emoji="💸" title="Stream" desc="Rewards flow to you in real-time, every second" />
                <Pillar emoji="🤝" title="Community" desc="Farcaster-native, built for the onchain social graph" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Brand Essence</h3>
              <div className="bg-base-200 rounded-xl p-6 space-y-3">
                <div>
                  <p className="text-sm font-semibold opacity-60">Tagline</p>
                  <p className="text-xl font-bold">Stream. Stake. Earn.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-60">Category</p>
                  <p>DeFi · Token Launchpad · Streaming Finance</p>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-60">Chain</p>
                  <p>Base L2 (Ethereum)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-60">Social Layer</p>
                  <p>Farcaster (Frames, Mini Apps)</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-4">Target Audience</h3>
              <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
                <li>Farcaster power users exploring DeFi</li>
                <li>Token launchers seeking streaming economics</li>
                <li>Yield seekers looking for real-time rewards</li>
                <li>Crypto-native communities on Base</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Brand Voice & Tone */}
        <Section id="voice" title="Brand Voice & Tone">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personality Traits</h3>
              <div className="space-y-3">
                <Trait
                  name="Confident"
                  desc="Direct, clear communication. We know what we do and we say it plainly."
                  meter={4}
                />
                <Trait
                  name="Technical"
                  desc="Accurate DeFi terminology. Don't dumb it down, but don't gatekeep either."
                  meter={3}
                />
                <Trait
                  name="Approachable"
                  desc="Friendly without being casual. Warm but not sloppy."
                  meter={3}
                />
                <Trait
                  name="Concise"
                  desc="No unnecessary words. Every label earns its space."
                  meter={5}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Writing Principles</h3>
              <div className="bg-base-200 rounded-xl p-5 space-y-4">
                <Principle
                  title="Lead with action"
                  example="'Stake STREME' not 'Click here to stake your STREME tokens'"
                />
                <Principle
                  title="Present tense, active voice"
                  example="'Rewards streaming' not 'Your rewards are currently being streamed to you'"
                />
                <Principle
                  title="No 'please' in CTAs"
                  example="'Connect wallet' not 'Please connect your wallet to continue'"
                />
                <Principle
                  title="Numbers speak"
                  example="'+12.5% APY' not 'Great returns on your investment'"
                />
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Do / Don&apos;t Examples</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-success">✓ Do</h4>
              <VoiceExample text="Stake STREME" />
              <VoiceExample text="Rewards streaming" />
              <VoiceExample text="Connect wallet" />
              <VoiceExample text="Launch a token in 30 seconds" />
              <VoiceExample text="24.5% APY · 1,234 stakers" />
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-error">✗ Don&apos;t</h4>
              <VoiceExample text="Click here to stake your STREME tokens" bad />
              <VoiceExample text="Your rewards are currently being streamed to you" bad />
              <VoiceExample text="Please connect your wallet to continue" bad />
              <VoiceExample text="Easily create your own token on our platform" bad />
              <VoiceExample text="Earn great yields with amazing returns!" bad />
            </div>
          </div>
        </Section>

        {/* Logo */}
        <Section id="logo" title="Logo">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-neutral rounded-xl p-10 flex items-center justify-center">
              <img src="/streme-text-white.svg" alt="Streme logo (white)" className="h-12" />
            </div>
            <div className="bg-base-100 border border-base-300 rounded-xl p-10 flex items-center justify-center">
              <img src="/streme-text-black.svg" alt="Streme logo (black)" className="h-12" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-base-200 rounded-xl p-6 text-center">
              <img src="/icon-transparent.png" alt="Streme icon" className="h-16 mx-auto mb-2" />
              <p className="text-sm opacity-60">App Icon</p>
            </div>
            <div className="bg-base-200 rounded-xl p-6">
              <p className="font-semibold mb-2">Clear Space</p>
              <p className="text-sm opacity-70">Minimum padding equal to the height of the &quot;S&quot; in Streme on all sides.</p>
            </div>
            <div className="bg-base-200 rounded-xl p-6">
              <p className="font-semibold mb-2">Minimum Size</p>
              <p className="text-sm opacity-70">Digital: 24px height<br />Print: 0.5 inch height</p>
            </div>
          </div>
          <div className="bg-error/10 border border-error/20 rounded-xl p-4">
            <p className="font-semibold text-error mb-1">✗ Don&apos;t</p>
            <ul className="text-sm opacity-80 list-disc list-inside space-y-1">
              <li>Stretch, rotate, or distort the logo</li>
              <li>Change logo colors outside of white/black variants</li>
              <li>Place on busy backgrounds without sufficient contrast</li>
              <li>Add effects (drop shadows, gradients, outlines)</li>
            </ul>
          </div>
        </Section>

        {/* ═══════════════════════════════════════ */}
        {/* VISUAL SYSTEM                           */}
        {/* ═══════════════════════════════════════ */}

        {/* Color Palette */}
        <Section id="colors" title="Color Palette">
          <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ColorSwatch name="Primary" className="bg-primary" textClass="text-primary-content" hex="#7C65C1" />
            <ColorSwatch name="Secondary" className="bg-secondary" textClass="text-secondary-content" />
            <ColorSwatch name="Accent" className="bg-accent" textClass="text-accent-content" />
            <ColorSwatch name="Neutral" className="bg-neutral" textClass="text-neutral-content" />
          </div>

          <h3 className="text-lg font-semibold mb-4">Status Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ColorSwatch name="Success" className="bg-success" textClass="text-success-content" usage="Gains, confirmations" />
            <ColorSwatch name="Warning" className="bg-warning" textClass="text-warning-content" usage="Cautions, pending" />
            <ColorSwatch name="Error" className="bg-error" textClass="text-error-content" usage="Losses, errors" />
            <ColorSwatch name="Info" className="bg-info" textClass="text-info-content" usage="Verified, info" />
          </div>

          <h3 className="text-lg font-semibold mb-4">Background Scale</h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-base-100 border border-base-300 rounded-xl p-6 text-center">
              <p className="font-semibold">base-100</p>
              <p className="text-sm opacity-60">Primary background</p>
            </div>
            <div className="bg-base-200 border border-base-300 rounded-xl p-6 text-center">
              <p className="font-semibold">base-200</p>
              <p className="text-sm opacity-60">Cards, secondary</p>
            </div>
            <div className="bg-base-300 rounded-xl p-6 text-center">
              <p className="font-semibold">base-300</p>
              <p className="text-sm opacity-60">Borders, tertiary</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Financial Data Colors</h3>
          <div className="bg-base-200 rounded-xl p-6">
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <span className="font-mono text-green-500 text-2xl font-bold">+12.5%</span>
                <p className="text-xs opacity-60 mt-1">text-green-500 · Gains</p>
              </div>
              <div>
                <span className="font-mono text-red-500 text-2xl font-bold">-3.2%</span>
                <p className="text-xs opacity-60 mt-1">text-red-500 · Losses</p>
              </div>
              <div>
                <span className="font-mono text-base-content/50 text-2xl font-bold">0.0%</span>
                <p className="text-xs opacity-60 mt-1">opacity-50 · Neutral</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section id="typography" title="Typography">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Geist Sans — UI & Headings</h3>
              <p className="text-4xl font-extrabold">Hero Heading — 4XL Extra Bold</p>
              <p className="text-2xl font-bold">Section Header — 2XL Bold</p>
              <p className="text-xl font-semibold">Card Title — XL Semibold</p>
              <p className="text-lg">Subheading — LG Normal</p>
              <p className="text-base">Body text — Base</p>
              <p className="text-sm opacity-70">Secondary text — SM</p>
              <p className="text-xs opacity-50">Caption / timestamp — XS</p>
            </div>

            <div className="divider"></div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Geist Mono — Numbers & Data</h3>
              <p className="text-sm opacity-70 mb-3">Always use monospace for financial data, addresses, and streaming values. This ensures stable alignment as numbers tick in real-time.</p>
              <p className="font-mono text-2xl">$1,234,567.89</p>
              <p className="font-mono text-lg">0.0001 STREME/day</p>
              <p className="font-mono text-sm">0x1a2B3c4D...5e6F7g8H</p>
              <div className="flex gap-6 mt-2">
                <span className="font-mono text-green-500 text-xl">+12.5%</span>
                <span className="font-mono text-red-500 text-xl">-3.2%</span>
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════ */}
        {/* COMPONENTS                              */}
        {/* ═══════════════════════════════════════ */}

        <Section id="components" title="Components">
          {/* Buttons */}
          <h3 className="text-lg font-semibold mb-4">Buttons</h3>
          <div className="space-y-6 mb-10">
            <div>
              <p className="text-sm font-semibold opacity-60 mb-3">Styles</p>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-outline">Outline</button>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold opacity-60 mb-3">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="btn btn-primary btn-lg">Large CTA</button>
                <button className="btn btn-primary">Default</button>
                <button className="btn btn-primary btn-sm">Small</button>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold opacity-60 mb-3">States</p>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary">Normal</button>
                <button className="btn btn-primary opacity-50 cursor-not-allowed">Disabled</button>
                <button className="btn btn-primary w-48">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Processing...
                </button>
                <button className="btn btn-primary w-full md:w-auto">Full Width (mobile)</button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <h3 className="text-lg font-semibold mb-4">Cards</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body">
                <h2 className="card-title">Token Card</h2>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-lg">$0.0234</span>
                  <span className="font-mono text-green-500">+24.5%</span>
                </div>
                <p className="text-sm opacity-70">Streaming rewards to 1,234 holders</p>
                <div className="card-actions justify-end mt-2">
                  <button className="btn btn-primary btn-sm">Stake</button>
                  <button className="btn btn-ghost btn-sm">Details</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 border border-base-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="card-body">
                <h2 className="card-title">Hover Effect</h2>
                <p>Cards lift on hover with shadow and translate.</p>
                <p className="text-xs font-mono opacity-50 mt-2">transition-all duration-300 hover:shadow-lg hover:-translate-y-1</p>
              </div>
            </div>
          </div>

          {/* Forms */}
          <h3 className="text-lg font-semibold mb-4">Form Elements</h3>
          <div className="max-w-md space-y-4 mb-10">
            <div className="form-control">
              <label className="label"><span className="label-text">Token Amount</span></label>
              <input type="text" className="input input-bordered focus:input-primary w-full" placeholder="0.00" defaultValue="1,000.00" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Wallet Address</span></label>
              <input type="text" className="input input-bordered w-full font-mono" placeholder="0x..." defaultValue="0x1a2B3c4D5e6F7g8H9i0J" />
            </div>
            <button className="btn btn-primary w-full">Connect Wallet</button>
          </div>

          {/* Modals */}
          <h3 className="text-lg font-semibold mb-4">Modal Patterns</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="border border-base-300 rounded-xl p-4">
              <p className="text-sm font-semibold mb-2">Desktop — Centered</p>
              <div className="bg-base-200/80 rounded-lg p-4 flex items-center justify-center min-h-[140px]">
                <div className="bg-base-100 rounded-xl shadow-xl p-4 w-48 text-center text-sm">
                  <p className="font-semibold mb-1">Confirm Stake</p>
                  <p className="text-xs opacity-60">rounded-xl · shadow-xl · backdrop-blur</p>
                </div>
              </div>
            </div>
            <div className="border border-base-300 rounded-xl p-4">
              <p className="text-sm font-semibold mb-2">Mobile — Bottom Sheet</p>
              <div className="bg-base-200/80 rounded-lg p-4 flex items-end min-h-[140px]">
                <div className="bg-base-100 rounded-t-2xl shadow-xl p-4 w-full text-center text-sm">
                  <div className="w-10 h-1 bg-base-300 rounded-full mx-auto mb-3"></div>
                  <p className="font-semibold mb-1">Confirm Stake</p>
                  <p className="text-xs opacity-60">rounded-t-2xl · slide up</p>
                </div>
              </div>
            </div>
          </div>

          {/* Border Radius */}
          <h3 className="text-lg font-semibold mb-4">Border Radius</h3>
          <div className="flex flex-wrap items-end gap-6 mb-10">
            <RadiusSample label="rounded-full" className="rounded-full w-16 h-16" />
            <RadiusSample label="rounded-3xl" className="rounded-3xl w-20 h-16" />
            <RadiusSample label="rounded-2xl" className="rounded-2xl w-20 h-16" />
            <RadiusSample label="rounded-xl" className="rounded-xl w-20 h-16" />
            <RadiusSample label="rounded-lg" className="rounded-lg w-20 h-16" />
            <RadiusSample label="rounded-md" className="rounded-md w-20 h-16" />
          </div>

          {/* Avatar Sizes */}
          <h3 className="text-lg font-semibold mb-4">Avatar Sizes</h3>
          <div className="flex items-end gap-6 mb-10">
            <AvatarSample size="w-6 h-6" label="XS (24px)" />
            <AvatarSample size="w-8 h-8" label="SM (32px)" />
            <AvatarSample size="w-10 h-10" label="MD (40px)" />
            <AvatarSample size="w-12 h-12" label="LG (48px)" />
            <AvatarSample size="w-16 h-16" label="XL (64px)" />
          </div>

          {/* Icon Sizes */}
          <h3 className="text-lg font-semibold mb-4">Icon Sizes</h3>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <svg className="w-4 h-4 mx-auto text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              <p className="text-xs mt-2 opacity-60">SM (16px)</p>
            </div>
            <div className="text-center">
              <svg className="w-5 h-5 mx-auto text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              <p className="text-xs mt-2 opacity-60">MD (20px)</p>
            </div>
            <div className="text-center">
              <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              <p className="text-xs mt-2 opacity-60">LG (24px)</p>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════ */}
        {/* MISSING SECTIONS (from review)          */}
        {/* ═══════════════════════════════════════ */}

        {/* Loading & Skeleton States */}
        <Section id="loading" title="Loading & Skeleton States">
          <p className="text-sm opacity-70 mb-6">DeFi apps are async-heavy. Every data-dependent UI should have a loading state. Never show empty space while fetching.</p>

          <h3 className="text-lg font-semibold mb-4">Skeleton Patterns</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Card skeleton */}
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-base-300 animate-pulse"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-base-300 rounded animate-pulse w-2/3"></div>
                    <div className="h-3 bg-base-300 rounded animate-pulse w-1/3"></div>
                  </div>
                </div>
                <div className="h-6 bg-base-300 rounded animate-pulse w-1/2"></div>
                <div className="h-3 bg-base-300 rounded animate-pulse w-full"></div>
                <div className="h-3 bg-base-300 rounded animate-pulse w-4/5"></div>
              </div>
            </div>

            {/* Actual card for comparison */}
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-semibold">STREME</p>
                    <p className="text-xs opacity-60">streme.fun</p>
                  </div>
                </div>
                <p className="font-mono text-lg">$0.0234</p>
                <p className="text-sm opacity-70">Streaming rewards to 1,234 holders</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Loading Indicators</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              </div>
              <p className="text-xs mt-2 opacity-60">Spinner</p>
              <p className="text-xs opacity-40">Full-page loads</p>
            </div>
            <div className="text-center">
              <div className="flex gap-1 justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0ms]"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:150ms]"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:300ms]"></div>
              </div>
              <p className="text-xs mt-2 opacity-60">Dots</p>
              <p className="text-xs opacity-40">Inline loading</p>
            </div>
            <div className="text-center">
              <div className="h-2 w-32 bg-base-300 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-primary rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs mt-2 opacity-60">Progress</p>
              <p className="text-xs opacity-40">Known duration</p>
            </div>
          </div>

          <div className="bg-base-200 rounded-xl p-4 mt-6">
            <p className="font-semibold text-sm mb-2">Guidelines</p>
            <ul className="text-sm opacity-70 list-disc list-inside space-y-1">
              <li>Use <span className="font-mono text-xs">animate-pulse</span> for skeleton blocks (matches DaisyUI convention)</li>
              <li>Skeletons should mirror the layout of the loaded state</li>
              <li>Spinner for actions (staking, swapping); skeletons for data fetching</li>
              <li>Show skeletons immediately — no delayed loading indicators</li>
              <li>4 decimal precision for token balances: <span className="font-mono">balance.toFixed(4)</span></li>
            </ul>
          </div>
        </Section>

        {/* Toast / Notification Patterns */}
        <Section id="toasts" title="Toast & Notification Patterns">
          <p className="text-sm opacity-70 mb-6">Toasts provide non-blocking feedback. They slide up from the bottom and auto-dismiss. Using Sonner.</p>

          <div className="space-y-4 max-w-md mb-8">
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-start gap-3 animate-slide-up">
              <span className="text-success text-lg">✓</span>
              <div>
                <p className="font-semibold text-sm">Stake Successful</p>
                <p className="text-xs opacity-70">1,000 STREME staked · Rewards streaming</p>
              </div>
            </div>
            <div className="bg-error/10 border border-error/20 rounded-lg p-4 flex items-start gap-3">
              <span className="text-error text-lg">✕</span>
              <div>
                <p className="font-semibold text-sm">Transaction Failed</p>
                <p className="text-xs opacity-70">Insufficient balance for gas fees</p>
              </div>
            </div>
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 flex items-start gap-3">
              <span className="text-warning text-lg">!</span>
              <div>
                <p className="font-semibold text-sm">Pending Confirmation</p>
                <p className="text-xs opacity-70">Waiting for block confirmation...</p>
              </div>
            </div>
            <div className="bg-info/10 border border-info/20 rounded-lg p-4 flex items-start gap-3">
              <span className="text-info text-lg">ℹ</span>
              <div>
                <p className="font-semibold text-sm">New Token Launched</p>
                <p className="text-xs opacity-70">BASED just launched with 5% streaming rewards</p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="font-semibold text-sm mb-2">Guidelines</p>
            <ul className="text-sm opacity-70 list-disc list-inside space-y-1">
              <li>Position: bottom-right (desktop), bottom-center (mobile)</li>
              <li>Auto-dismiss: 4s for success, 6s for errors, persistent for pending tx</li>
              <li>Animation: <span className="font-mono text-xs">animate-slide-up</span> (300ms ease-out)</li>
              <li>Max stack: 3 visible toasts</li>
              <li>Include transaction hash link for blockchain operations</li>
            </ul>
          </div>
        </Section>

        {/* Z-Index Scale */}
        <Section id="z-index" title="Z-Index Scale">
          <p className="text-sm opacity-70 mb-6">Strict z-index layering prevents overlap bugs. Always use these levels — never arbitrary values.</p>

          <div className="space-y-2 max-w-lg">
            <ZLayer z="z-[100]" label="Modals & Dialogs" desc="Confirm stake, token details" color="bg-error/20" />
            <ZLayer z="z-[90]" label="Modal Backdrop" desc="bg-black/50 overlay" color="bg-error/10" />
            <ZLayer z="z-[70]" label="Toasts & Notifications" desc="Sonner toast container" color="bg-warning/20" />
            <ZLayer z="z-50" label="Sticky Navigation" desc="Top navbar, sticky headers" color="bg-info/20" />
            <ZLayer z="z-40" label="Dropdowns & Popovers" desc="Token selectors, menus" color="bg-info/10" />
            <ZLayer z="z-30" label="Tooltips" desc="Hover info, help text" color="bg-success/20" />
            <ZLayer z="z-20" label="Floating Actions" desc="FABs, floating buttons" color="bg-success/10" />
            <ZLayer z="z-10" label="Elevated Cards" desc="Hover-lifted cards" color="bg-base-200" />
            <ZLayer z="z-0" label="Base Content" desc="Default page flow" color="bg-base-300" />
          </div>

          <div className="bg-base-200 rounded-xl p-4 mt-6">
            <p className="font-semibold text-sm mb-2">Rules</p>
            <ul className="text-sm opacity-70 list-disc list-inside space-y-1">
              <li>Never use arbitrary z-index values outside this scale</li>
              <li>Modals must trap focus and prevent scroll on body</li>
              <li>Toasts must appear above sticky nav but below modals</li>
              <li>Dropdowns close on outside click or Escape key</li>
            </ul>
          </div>
        </Section>

        {/* Responsive */}
        <Section id="responsive" title="Responsive Design">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Breakpoints</h3>
              <div className="space-y-2">
                <Breakpoint prefix="(default)" width="0px" label="Mobile" active />
                <Breakpoint prefix="sm:" width="640px" label="Small" />
                <Breakpoint prefix="md:" width="768px" label="Medium" />
                <Breakpoint prefix="lg:" width="1024px" label="Large" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Container</h3>
              <div className="bg-base-200 rounded-xl p-4">
                <p className="font-mono text-sm mb-2">max-w-[1440px] mx-auto px-4</p>
                <p className="text-sm opacity-70">All page content wraps in this container. 16px padding on mobile, centered on desktop.</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3">Mobile-First Patterns</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-1">Layout</p>
              <p className="font-mono text-xs opacity-70">flex flex-col md:flex-row</p>
              <p className="text-xs opacity-50 mt-1">Stack → side-by-side</p>
            </div>
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-1">Buttons</p>
              <p className="font-mono text-xs opacity-70">w-full md:w-auto</p>
              <p className="text-xs opacity-50 mt-1">Full-width → auto on desktop</p>
            </div>
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-1">Visibility</p>
              <p className="font-mono text-xs opacity-70">hidden md:block</p>
              <p className="text-xs opacity-50 mt-1">Hide on mobile, show on desktop</p>
            </div>
          </div>
        </Section>

        {/* Animations */}
        <Section id="animations" title="Animations & Transitions">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Timing</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-base-200 rounded-lg p-3">
                  <span className="text-sm">Quick interactions</span>
                  <span className="font-mono text-xs opacity-70">duration-200</span>
                </div>
                <div className="flex justify-between items-center bg-base-200 rounded-lg p-3">
                  <span className="text-sm">Standard transitions</span>
                  <span className="font-mono text-xs opacity-70">duration-300</span>
                </div>
                <div className="flex justify-between items-center bg-base-200 rounded-lg p-3">
                  <span className="text-sm">Smooth, noticeable</span>
                  <span className="font-mono text-xs opacity-70">duration-500</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Custom Animations</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  </div>
                  <p className="text-xs mt-2 opacity-60">spin</p>
                </div>
                <div className="text-center">
                  <span className="badge badge-primary animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-primary via-accent to-primary">NEW</span>
                  <p className="text-xs mt-2 opacity-60">shimmer</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary animate-pulse"></div>
                  <p className="text-xs mt-2 opacity-60">pulse</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary animate-bounce"></div>
                  <p className="text-xs mt-2 opacity-60">bounce</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* File Naming */}
        <Section id="naming" title="File Naming Conventions">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-2">Components</p>
              <p className="font-mono text-xs opacity-70">PascalCase → TokenGrid.tsx</p>
            </div>
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-2">Hooks</p>
              <p className="font-mono text-xs opacity-70">camelCase + use → useStremeBalance.ts</p>
            </div>
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-2">Utilities</p>
              <p className="font-mono text-xs opacity-70">camelCase → formatNumber.ts</p>
            </div>
            <div className="bg-base-200 rounded-xl p-4">
              <p className="font-semibold text-sm mb-2">Pages</p>
              <p className="font-mono text-xs opacity-70">kebab-case → /token/[address]/page.tsx</p>
            </div>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="bg-base-200 border-t border-base-300 py-8 px-4 text-center">
        <p className="text-sm opacity-60">Streme.fun Brand Guidelines v1.0</p>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════ */
/* Helper Components                       */
/* ═══════════════════════════════════════ */

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id}>
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-base-300">{title}</h2>
      {children}
    </section>
  );
}

function Pillar({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
      <span className="text-xl">{emoji}</span>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs opacity-70">{desc}</p>
      </div>
    </div>
  );
}

function Trait({ name, desc, meter }: { name: string; desc: string; meter: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-sm">{name}</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i <= meter ? "bg-primary" : "bg-base-300"}`}></div>
          ))}
        </div>
      </div>
      <p className="text-xs opacity-70">{desc}</p>
    </div>
  );
}

function Principle({ title, example }: { title: string; example: string }) {
  return (
    <div>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs opacity-60 italic">{example}</p>
    </div>
  );
}

function ColorSwatch({ name, className, textClass, hex, usage }: { name: string; className: string; textClass: string; hex?: string; usage?: string }) {
  return (
    <div className={`${className} rounded-xl p-6 ${textClass}`}>
      <p className="font-semibold">{name}</p>
      {hex && <p className="text-sm opacity-80 font-mono">{hex}</p>}
      {usage && <p className="text-xs opacity-70 mt-1">{usage}</p>}
    </div>
  );
}

function RadiusSample({ label, className }: { label: string; className: string }) {
  return (
    <div className="text-center">
      <div className={`${className} bg-primary`}></div>
      <p className="text-xs mt-2 opacity-60">{label}</p>
    </div>
  );
}

function AvatarSample({ size, label }: { size: string; label: string }) {
  return (
    <div className="text-center">
      <div className={`${size} rounded-full bg-primary mx-auto`}></div>
      <p className="text-xs mt-2 opacity-60">{label}</p>
    </div>
  );
}

function VoiceExample({ text, bad }: { text: string; bad?: boolean }) {
  return (
    <div className={`p-3 rounded-lg ${bad ? "bg-error/10 border border-error/20" : "bg-success/10 border border-success/20"}`}>
      <p className="text-sm">{text}</p>
    </div>
  );
}

function ZLayer({ z, label, desc, color }: { z: string; label: string; desc: string; color: string }) {
  return (
    <div className={`flex items-center gap-4 ${color} rounded-lg p-3`}>
      <span className="font-mono text-xs w-16 shrink-0 font-bold">{z}</span>
      <div>
        <p className="font-semibold text-sm">{label}</p>
        <p className="text-xs opacity-60">{desc}</p>
      </div>
    </div>
  );
}

function Breakpoint({ prefix, width, label, active }: { prefix: string; width: string; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-lg p-3 ${active ? "bg-primary/10 border border-primary/20" : "bg-base-200"}`}>
      <span className="font-mono text-xs font-bold w-20">{prefix}</span>
      <span className="font-mono text-xs opacity-60">{width}</span>
      <span className="text-sm ml-auto">{label}</span>
    </div>
  );
}
