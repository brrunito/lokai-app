'use client'

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-[#F2EDE0] border-b border-[#4A7F9F]/20 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto flex justify-between items-center">

                {/* Logo a la izquierda */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <MapPin className="h-7 w-7 text-[#4A7F9F] group-hover:text-[#23446B] transition-colors" />
                    <span className="text-3xl text-[#23446B] tracking-wide fuente-logo">
                        LOKAI
                    </span>
                </Link>

                {/* Links de Computadora (ocultos en móvil) */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="/#como-funciona" className="text-[#23446B] hover:text-[#4A7F9F] font-medium transition-colors">
                        ¿Cómo funciona?
                    </Link>
                    <Link href="/contacto" className="text-[#23446B] hover:text-[#4A7F9F] font-medium transition-colors">
                        Contacto
                    </Link>
                    <button className="flex items-center gap-2 bg-[#23446B] hover:bg-[#4A7F9F] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95">
                        <User className="h-4 w-4" />
                        <span>Soy un Local</span>
                    </button>
                </div>

                {/* Botón Hamburguesa de Celular */}
                <button
                    className="md:hidden text-[#23446B] hover:text-[#4A7F9F] transition-colors z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* Menú Desplegable (Solo Celular) */}
            {isOpen && (
                <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#F2EDE0] border-b border-[#4A7F9F]/20 shadow-xl flex flex-col items-center py-8 gap-6 animate-in slide-in-from-top-2 fade-in duration-200">
                    <Link href="/#como-funciona" onClick={() => setIsOpen(false)} className="text-xl text-[#23446B] font-bold">
                        ¿Cómo funciona?
                    </Link>
                    <Link href="/contacto" onClick={() => setIsOpen(false)} className="text-xl text-[#23446B] font-bold">
                        Contacto
                    </Link>
                    <button className="flex items-center justify-center gap-2 bg-[#23446B] text-white px-8 py-3.5 rounded-xl font-bold text-lg w-10/12 mt-4 active:scale-95 transition-transform">
                        <User className="h-5 w-5" />
                        <span>Soy un Local</span>
                    </button>
                </div>
            )}
        </nav>
    );
}