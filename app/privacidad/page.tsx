import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacidadPage() {
    const lastUpdated = "6 de Abril de 2026";

    return (
        <main className="flex-grow w-full max-w-3xl mx-auto px-6 pt-4 pb-12 md:pt-6">

            <div className="mb-6">
                <Link href="/" title="Volver al inicio">
                    <div className="flex items-center justify-center w-10 h-10 bg-white border-2 border-[#4A7F9F] rounded-full transition-all duration-300 text-[#4A7F9F] shadow-sm hover:bg-[#4A7F9F]/10 hover:text-[#23446B] hover:opacity-75">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                </Link>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-[#4A7F9F]/20 p-8 md:p-12 text-[#23446B]">

                <header className="border-b border-[#4A7F9F]/20 pb-8 mb-8">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight fuente-logo mb-4 uppercase">
                        Políticas de Privacidad
                    </h1>
                    <p className="text-[#23446B]/70 font-medium">
                        Última actualización: {lastUpdated}
                    </p>
                </header>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">1. Nuestra filosofía de privacidad</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            En Lokai creemos que la búsqueda local debe ser simple y segura. Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y cuidamos tu información cuando visitas nuestra plataforma.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">2. ¿Qué información recopilamos?</h2>
                        <ul className="list-disc list-inside space-y-2 text-[#23446B]/80 leading-relaxed ml-2">
                            <li><strong className="text-[#23446B]">Datos de Ubicación (GPS):</strong> Solo solicitamos acceso a tu ubicación en tiempo real cuando usas el buscador, exclusivamente para mostrarte los comercios más cercanos a ti.</li>
                            <li><strong className="text-[#23446B]">Datos de Contacto:</strong> Si eres dueño de un local o usuario y completas nuestro formulario de contacto, guardamos la información que nos proporcionas (nombre, email, nombre del comercio y mensaje).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">3. ¿Cómo usamos tu información?</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            La ubicación (GPS) se procesa en tiempo real para brindarte resultados precisos. Tu navegador recordará tus preferencias de permisos para agilizar futuras búsquedas. Si en el futuro decides crear una cuenta de usuario, podremos almacenar tus zonas de búsqueda favoritas para mejorar tu experiencia, pero no rastreamos tus movimientos en segundo plano. Los datos de contacto se utilizan únicamente para responder a tus solicitudes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">4. Protección de datos</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Lokai no vende, alquila ni comparte tu información personal con terceros para fines publicitarios. Utilizamos medidas de seguridad de estándar industrial para proteger tus datos contra accesos no autorizados.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">5. Contacto</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Si tienes preguntas sobre estas políticas, no dudes en escribirnos a través de nuestra{' '}
                            <Link href="/contacto" className="text-[#4A7F9F] font-bold hover:underline">
                                página de contacto
                            </Link>.
                        </p>
                    </div>
                </section>

            </div>

            {/* SEPARADOR INFALIBLE: Este bloque invisible obliga al footer a quedarse abajo */}
            <div className="h-20 md:h-28 w-full"></div>

        </main>
    );
}