// The shortcut for tailwindcss
/**@type {import('tailwindcss').config} */
module.exports = {
    content: ["./src/**/*{html,js}"],
    theme: {
        extend : {
            fontFamily : {
                poppins : ['poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}