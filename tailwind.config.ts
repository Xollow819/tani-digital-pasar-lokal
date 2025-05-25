import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"], // Pastikan ini 'class'
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
				// Variabel warna spesifik aplikasi Anda
				tani: {
					'green': '#4CAF50',
					'brown': '#8D6E63',
					'yellow': '#FFC107',
					'blue': '#03A9F4',
					'light-green': '#A5D6A7',
					'light-brown': '#D7CCC8',
					'light-yellow': '#FFECB3',
					'light-blue': '#B3E5FC'
				}
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IPINI - Tani Digital Pasar Lokal</title>
    <meta name="description" content="Platform digitalisasi pertanian yang menghubungkan petani dengan pembeli dan menyediakan edukasi pertanian modern." />
    <meta name="author" content="Tim IPINI" />

    <meta property="og:title" content="IPINI - Tani Digital Pasar Lokal" />
    <meta property="og:description" content="Platform digitalisasi pertanian untuk masa depan pertanian Indonesia yang lebih baik." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="[https://lovable.dev/opengraph-image-p98pqg.png](https://lovable.dev/opengraph-image-p98pqg.png)" /> 

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@nama_twitter_anda" /> <meta name="twitter:image" content="[https://lovable.dev/opengraph-image-p98pqg.png](https://lovable.dev/opengraph-image-p98pqg.png)" />
    <script>
      // Skrip untuk menerapkan tema awal dari localStorage untuk menghindari kedipan
      (function() {
        const theme = localStorage.getItem('theme');
        // Jika tema tersimpan adalah 'dark' ATAU (tidak ada tema tersimpan DAN preferensi sistem adalah dark)
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          // Selain itu, pastikan kelas 'dark' dihapus (mode terang)
          document.documentElement.classList.remove('dark');
        }
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```tsx
