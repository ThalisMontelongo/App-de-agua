
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
          DEFAULT: '#000000', // Preto puro
          foreground: '#FFFFFF',
          muted: '#2A2A2A'
        },
        secondary: {
          DEFAULT: '#56165E', // Roxo principal
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#342A9F', // Azul escuro
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#1E1E1E',
          foreground: '#AAAAAA'
        },
        code: {
          background: '#1E1E1E',
          foreground: '#882496' // Roxo mais claro para destaque
        },
        // Flatting the palette structure to work with gradient modifiers
        'palette-purple-light': '#882496',
        'palette-purple-DEFAULT': '#56165E',
        'palette-purple': '#56165E', // Default value without the -DEFAULT suffix
        'palette-purple-dark': '#342A9F'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0.95)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'code-typing': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-up': 'scale-up 0.3s ease-out',
        'slide': 'slide 40s linear infinite',
        'slide-slow': 'slide 60s linear infinite',
        'code-typing': 'code-typing 3s steps(50, end)',
        'float': 'float 6s ease-in-out infinite'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Mono', 'monospace']
      },
      backgroundImage: {
        'circuit-pattern': "url('/lovable-uploads/9f8f48f8-2dbf-46c4-98af-4d2c2253e8a6.png')",
        'grid-pattern': "radial-gradient(#ffffff10 1px, transparent 1px)",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
