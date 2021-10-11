module.exports = {
    mode: "jit",
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                move: {
                    '50%': { transform: 'translateY(-50px)' },
                    '100%': { transform: 'translateY(-100px)' },
                },
                about: {
                    '10%': { transform: 'translateY(-50px)' },
                    '20%': { transform: 'translateY(-100px)' },
                    '30%': { transform: 'translateY(-150px)' },
                    '40%': { transform: 'translateY(-200px)' },
                    '50%': { transform: 'translateY(-250px)' },
                    '60%': { transform: 'translateY(-300px)' },
                    '70%': { transform: 'translateY(-350px)' },
                    '80%': { transform: 'translateY(-400px)' },
                    '90%': { transform: 'translateY(-450px)' },
                    '100%': { transform: 'translateY(-500px)' },
                }
            },
            animation: {
                move: 'move 5s ease-in-out infinite alternate',
                about: 'about 10s ease-in-out infinite alternate',
            },
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
