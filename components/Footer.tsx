import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#23446B] text-[#F2EDE0] pt-16 pb-8 border-t-4 border-[#4A7F9F]">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">

                {/* Columna 1: Logo y Slogan */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Si tenés el logo blanco podés usar la imagen, si no usamos la fuente INTRO que queda genial */}
                        <span className="text-4xl tracking-wide fuente-logo text-white group-hover:text-[#4A7F9F] transition-colors">
                            LOKAI
                        </span>
                    </Link>
                    <p className="text-[#F2EDE0]/70 text-sm font-medium text-center md:text-left max-w-xs leading-relaxed">
                        Encuentra lo que buscas, sin vueltas. Conectando comercios locales con tu ciudad de forma inteligente.
                    </p>
                </div>

                {/* Columna 2: Plataforma */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h4 className="font-bold text-white text-lg tracking-wide">Plataforma</h4>
                    <Link href="/#como-funciona" className="text-[#F2EDE0]/70 hover:text-white transition-colors text-sm font-medium">
                        ¿Cómo funciona?
                    </Link>
                    <Link href="/contacto" className="text-[#F2EDE0]/70 hover:text-white transition-colors text-sm font-medium">
                        Contacto y Soporte
                    </Link>
                    <Link href="/contacto" className="text-[#F2EDE0]/70 hover:text-white transition-colors text-sm font-medium">
                        Suma tu Local
                    </Link>
                </div>

                {/* Columna 3: Legal */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h4 className="font-bold text-white text-lg tracking-wide">Legal</h4>
                    <Link href="/privacidad" className="text-[#F2EDE0]/70 hover:text-white transition-colors text-sm font-medium">
                        Políticas de Privacidad
                    </Link>
                    <Link href="/terminos" className="text-[#F2EDE0]/70 hover:text-white transition-colors text-sm font-medium">
                        Términos de Servicio
                    </Link>
                </div>
            </div>

            {/* Línea divisoria y Copyright */}
            <div className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-[#F2EDE0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[#F2EDE0]/50 text-xs font-medium">
                    &copy; {currentYear} Lokai. Todos los derechos reservados.
                </p>
                <p className="text-[#F2EDE0]/50 text-xs font-medium flex items-center gap-1">
                    Desarrollado en Argentina
                </p>
            </div>
        </footer>
    );
}