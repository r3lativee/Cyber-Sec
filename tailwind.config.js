/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0A",
                foreground: "#EDEDED",
                muted: "#9A9A9A",
                accent: {
                    neon: "#4FD1FF",
                    secondary: "#7C7CFF",
                }
            },
            fontFamily: {
                heading: ["Outfit", "Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'subtle-float': 'subtleFloat 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                subtleFloat: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
