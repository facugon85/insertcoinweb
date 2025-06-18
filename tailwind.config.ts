
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Retro colors
				retro: {
					black: '#121212',
					darkgray: '#1a1a2e',
					blue: '#0ea5e9',
					cyan: '#22d3ee',
					purple: '#8b5cf6',
					pink: '#d946ef',
					yellow: '#fbbf24',
					green: '#10b981',
					red: '#ef4444',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				pixel: ['"Press Start 2P"', 'cursive'],
				mono: ['monospace', 'SFMono-Regular'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) drop-shadow(0 0 5px var(--glow-color))'
					},
					'50%': { 
						opacity: '0.7',
						filter: 'brightness(1.2) drop-shadow(0 0 10px var(--glow-color))'
					}
				},
				'scan-line': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'pixel-move': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '50px 50px' }
				},
				'glitch': {
					'0%, 100%': { clipPath: 'inset(0 0 0 0)' },
					'20%': { clipPath: 'inset(33% 0 66% 0)' },
					'40%': { clipPath: 'inset(66% 0 33% 0)' },
					'60%': { clipPath: 'inset(33% 0 66% 0)' },
					'80%': { clipPath: 'inset(66% 0 33% 0)' }
				},
				'page-transition-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'page-transition-out': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(-20px)', opacity: '0' }
				},
				'star-twinkle': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(0.7)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				},
				'horizontal-scroll': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'scan-line': 'scan-line 8s linear infinite',
				'pixel-move': 'pixel-move 2s linear infinite',
				'glitch': 'glitch 0.8s ease-in-out infinite alternate',
				'page-transition-in': 'page-transition-in 0.5s ease-out forwards',
				'page-transition-out': 'page-transition-out 0.5s ease-in forwards',
				'star-twinkle': 'star-twinkle 4s ease-in-out infinite',
				'horizontal-scroll': 'horizontal-scroll 30s linear infinite'
			},
			backgroundImage: {
				'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				'scanline': "linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.1) 50%, transparent 100%)",
				'pixel-stars': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Crect x='25' y='25' width='1' height='1'/%3E%3Crect x='75' y='55' width='1' height='1'/%3E%3Crect x='50' y='85' width='1' height='1'/%3E%3Crect x='15' y='65' width='1' height='1'/%3E%3Crect x='85' y='15' width='1' height='1'/%3E%3Crect x='10' y='95' width='1' height='1'/%3E%3Crect x='90' y='45' width='1' height='1'/%3E%3C/g%3E%3C/svg%3E\")",
			},
			dropShadow: {
				'neon-blue': '0 0 5px rgba(14, 165, 233, 0.7), 0 0 10px rgba(14, 165, 233, 0.5)',
				'neon-purple': '0 0 5px rgba(139, 92, 246, 0.7), 0 0 10px rgba(139, 92, 246, 0.5)',
				'neon-cyan': '0 0 5px rgba(34, 211, 238, 0.7), 0 0 10px rgba(34, 211, 238, 0.5)',
				'neon-yellow': '0 0 5px rgba(251, 191, 36, 0.7), 0 0 10px rgba(251, 191, 36, 0.5)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
