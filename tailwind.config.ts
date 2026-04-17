const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./actions/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                lokai: {
                    ivory: "#FFFFF0", // Un blanco cálido y suave
                    indigo: "#4B0082", // Índigo profundo
                    "storm-blue": "#4F6272", // Un azul grisáceo / tormenta
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};

export default config;
