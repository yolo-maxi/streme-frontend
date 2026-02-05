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
      <header className="bg-primary text-primary-content py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Streme.fun</h1>
          <p className="text-xl opacity-80">Brand Guidelines & Design System</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Color Palette */}
        <Section title="Color Palette">
          <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ColorSwatch name="Primary" className="bg-primary" textClass="text-primary-content" hex="#7C65C1" />
            <ColorSwatch name="Secondary" className="bg-secondary" textClass="text-secondary-content" />
            <ColorSwatch name="Accent" className="bg-accent" textClass="text-accent-content" />
            <ColorSwatch name="Neutral" className="bg-neutral" textClass="text-neutral-content" />
          </div>

          <h3 className="text-lg font-semibold mb-4">Status Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ColorSwatch name="Success" className="bg-success" textClass="text-success-content" />
            <ColorSwatch name="Warning" className="bg-warning" textClass="text-warning-content" />
            <ColorSwatch name="Error" className="bg-error" textClass="text-error-content" />
            <ColorSwatch name="Info" className="bg-info" textClass="text-info-content" />
          </div>

          <h3 className="text-lg font-semibold mb-4">Background Scale</h3>
          <div className="grid grid-cols-3 gap-4">
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
        </Section>

        {/* Typography */}
        <Section title="Typography">
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
              <p className="font-mono text-2xl">$1,234,567.89</p>
              <p className="font-mono text-lg">0.0001 STREME/day</p>
              <p className="font-mono text-sm">0x1a2B...9f4E</p>
              <div className="flex gap-6 mt-2">
                <span className="font-mono text-green-500 text-xl">+12.5%</span>
                <span className="font-mono text-red-500 text-xl">-3.2%</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons">
          <h3 className="text-lg font-semibold mb-4">Styles</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-outline">Outline</button>
          </div>

          <h3 className="text-lg font-semibold mb-4">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary btn-sm">Small</button>
          </div>

          <h3 className="text-lg font-semibold mb-4">States</h3>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary">Normal</button>
            <button className="btn btn-primary opacity-50 cursor-not-allowed">Disabled</button>
            <button className="btn btn-primary w-48">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Loading...
            </button>
          </div>
        </Section>

        {/* Cards */}
        <Section title="Cards">
          <div className="grid md:grid-cols-2 gap-6">
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
                <p className="text-sm opacity-70">transition-all duration-300 hover:shadow-lg hover:-translate-y-1</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Spacing & Radius */}
        <Section title="Border Radius">
          <div className="flex flex-wrap items-end gap-6">
            <RadiusSample label="rounded-full" className="rounded-full w-16 h-16" />
            <RadiusSample label="rounded-3xl" className="rounded-3xl w-20 h-16" />
            <RadiusSample label="rounded-2xl" className="rounded-2xl w-20 h-16" />
            <RadiusSample label="rounded-xl" className="rounded-xl w-20 h-16" />
            <RadiusSample label="rounded-lg" className="rounded-lg w-20 h-16" />
            <RadiusSample label="rounded-md" className="rounded-md w-20 h-16" />
          </div>
        </Section>

        {/* Avatars */}
        <Section title="Avatar Sizes">
          <div className="flex items-end gap-6">
            <AvatarSample size="w-6 h-6" label="XS (24px)" />
            <AvatarSample size="w-8 h-8" label="SM (32px)" />
            <AvatarSample size="w-10 h-10" label="MD (40px)" />
            <AvatarSample size="w-12 h-12" label="LG (48px)" />
            <AvatarSample size="w-16 h-16" label="XL (64px)" />
          </div>
        </Section>

        {/* Icons */}
        <Section title="Icon Sizes">
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

        {/* Forms */}
        <Section title="Form Elements">
          <div className="max-w-md space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Token Amount</span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:input-primary w-full"
                placeholder="0.00"
                defaultValue="1,000.00"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Wallet Address</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full font-mono"
                placeholder="0x..."
                defaultValue="0x1a2B3c4D5e6F7g8H9i0J"
              />
            </div>
            <button className="btn btn-primary w-full">Connect Wallet</button>
          </div>
        </Section>

        {/* Animations */}
        <Section title="Animations">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg className="animate-spin h-6 w-6 text-primary-content" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              </div>
              <p className="text-xs mt-2 opacity-60">Spinner</p>
            </div>
            <div className="text-center">
              <span className="badge badge-primary animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-primary via-accent to-primary">NEW</span>
              <p className="text-xs mt-2 opacity-60">Shimmer Badge</p>
            </div>
          </div>
        </Section>

        {/* Modals */}
        <Section title="Modal Patterns">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-base-300 rounded-xl p-4">
              <p className="text-sm font-semibold mb-2">Desktop — Centered</p>
              <div className="bg-base-200/80 rounded-lg p-4 flex items-center justify-center min-h-[120px]">
                <div className="bg-base-100 rounded-xl shadow-xl p-4 w-48 text-center text-sm">
                  rounded-xl + shadow-xl + backdrop blur
                </div>
              </div>
            </div>
            <div className="border border-base-300 rounded-xl p-4">
              <p className="text-sm font-semibold mb-2">Mobile — Bottom Sheet</p>
              <div className="bg-base-200/80 rounded-lg p-4 flex items-end min-h-[120px]">
                <div className="bg-base-100 rounded-t-2xl shadow-xl p-4 w-full text-center text-sm">
                  rounded-t-2xl + slide up
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Brand Voice */}
        <Section title="Brand Voice">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-success">✓ Do</h3>
              <div className="space-y-2">
                <VoiceExample text="Stake STREME" />
                <VoiceExample text="Rewards streaming" />
                <VoiceExample text="Connect wallet" />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-error">✗ Don&apos;t</h3>
              <div className="space-y-2">
                <VoiceExample text="Click here to stake your STREME tokens" bad />
                <VoiceExample text="Your rewards are currently being streamed to you" bad />
                <VoiceExample text="Please connect your wallet to continue" bad />
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-base-200 rounded-xl">
            <p className="font-semibold mb-1">Tone</p>
            <p className="text-sm opacity-70">Confident · Technical · Approachable · Concise</p>
          </div>
        </Section>

        {/* Logo */}
        <Section title="Logo">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-base-300 rounded-xl p-8 flex items-center justify-center">
              <img src="/streme-text-white.svg" alt="Streme logo (white)" className="h-10" />
            </div>
            <div className="bg-base-100 border border-base-300 rounded-xl p-8 flex items-center justify-center">
              <img src="/streme-text-black.svg" alt="Streme logo (black)" className="h-10" />
            </div>
          </div>
          <p className="text-sm opacity-60 mt-4">Minimum clear space: height of the &quot;S&quot; in Streme. Minimum digital size: 24px height.</p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-base-200 border-t border-base-300 py-8 px-4 text-center">
        <p className="text-sm opacity-60">Streme.fun Brand Guidelines v1.0</p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-base-300">{title}</h2>
      {children}
    </section>
  );
}

function ColorSwatch({ name, className, textClass, hex }: { name: string; className: string; textClass: string; hex?: string }) {
  return (
    <div className={`${className} rounded-xl p-6 ${textClass}`}>
      <p className="font-semibold">{name}</p>
      {hex && <p className="text-sm opacity-80 font-mono">{hex}</p>}
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
