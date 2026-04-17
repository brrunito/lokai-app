import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from 'next/font/local';


// Ojo acá con .otf o .ttf según corresponda
const lokaiFont = localFont({
    src: '../public/fonts/Intro.otf',
    variable: '--font-lokai'
});

export const metadata: Metadata = {
    title: "Lokai - Encuentra lo que buscas",
    description: "Buscador de marcas y productos en tiendas cercanas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            {/* Volvemos a poner la fuente normal (sans) para toda la página, pero guardamos la variable lokai */}
            <body className={`${lokaiFont.variable} bg-[#F2EDE0] text-[#23446B] font-sans antialiased min-h-screen flex flex-col`}>
                <Navbar />
                {/* El div flex-grow empuja al footer hacia abajo si la página es corta */}
                <div className="flex-grow flex flex-col">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}