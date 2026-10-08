/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./**/*.html",
        "./src/**/*.js",
    ],

    theme: {
        extend: {          

            fontFamily: {
                sans: [
                    "Inter",
                    "system-ui",
                    "-apple-system",
                    "Roboto",
                    "sans-serif"
                ],
            },
            
        },
    },

    plugins: [],
};