
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Pulse Robot - Verde-Água (Teal)
				pulse: {
					"50": "#e6f7f5",   // Lightest - backgrounds
					"100": "#b3ebe3",  // Very light
					"200": "#80dfd1",  // Light
					"300": "#4dd3bf",  // Medium light
					"400": "#26c4ad",  // Medium
					"500": "#1a9d8a",  // Base - Primary verde-água vibrante
					"600": "#157d6e",  // Medium dark
					"700": "#115d52",  // Dark
					"800": "#0d4439",  // Very dark
					"900": "#082b23",  // Darkest
					"950": "#041a15",  // Almost black with teal tint
				},
				// Letot Brand Green - Fluorescent Lime Green
				neon: {
					"50": "#fbffe6",
					"100": "#f3ffb3",
					"200": "#ebff80",
					"300": "#e3ff4d",
					"400": "#d4ff1a",
					"500": "#c6ff35",  // PRIMARY - LETOT BRAND COLOR
					"600": "#9ecc2a",
					"700": "#769920",
					"800": "#4f6615",
					"900": "#27330b",
				},
				// NEW: Dark Forest Green for backgrounds
				forest: {
					"50": "#e6f2e6",
					"100": "#c2e0c2",
					"200": "#9acd9a",
					"300": "#72ba72",
					"400": "#4aa74a",
					"500": "#2d8c2d",
					"600": "#1f6b1f",
					"700": "#154a15",  // Primary dark
					"800": "#0d2e0d",
					"900": "#061506",
					"950": "#030a03",  // Almost black
				},
				// Accent colors - Coral/Orange suave para CTAs
				coral: {
					"50": "#fef3f2",
					"100": "#fde4e1",
					"200": "#fbcdc7",
					"300": "#f8aba0",
					"400": "#f37d6a",  // Accent principal
					"500": "#ea5a3f",
					"600": "#d63d1f",
					"700": "#b33118",
					"800": "#942d18",
					"900": "#7b2a1a",
				},
				dark: {
					"900": "#121212", // Almost black
					"800": "#1e1e1e",
					"700": "#2d2d2d",
					"600": "#3d3d3d",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg,rgb(178, 226, 213),rgb(19, 110, 86)',
				'hero-gradient-2': 'linear-gradient(90deg,rgb(138, 240, 213),rgb(19, 131, 101)',
				'pulse-gradient': 'linear-gradient(180deg,rgb(18, 100, 155), rgba(13, 97, 192, 0) 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'display': ['Brockmann', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'brockmann': ['Brockmann', 'Inter', 'system-ui', 'sans-serif'],
				'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
