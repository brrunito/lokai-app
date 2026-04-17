import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TerminosPage() {
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
                        Términos de Servicio
                    </h1>
                    <p className="text-[#23446B]/70 font-medium">
                        Última actualización: {lastUpdated}
                    </p>
                </header>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">1. Aceptación de los términos</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Al acceder y utilizar Lokai, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, te pedimos que no utilices nuestra plataforma.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">2. Naturaleza del servicio</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Lokai funciona exclusivamente como un <strong>motor de búsqueda y directorio geolocalizado</strong>. No somos una tienda online, no procesamos pagos ni intervenimos en las transacciones entre los usuarios y los comercios listados en nuestra plataforma.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">3. Exactitud de la información</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Nos esforzamos por mantener la información de los comercios (marcas disponibles, direcciones y horarios) lo más actualizada posible. Sin embargo, esta información es proporcionada por los propios locales comerciales. Lokai no garantiza la disponibilidad de stock en tiempo real y no se hace responsable por discrepancias entre la información listada y la realidad del comercio.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">4. Responsabilidad de los comercios</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Los dueños de los locales que solicitan darse de alta en Lokai son responsables de proporcionar información veraz, legal y actualizada sobre sus negocios y los productos o marcas que comercializan. Lokai se reserva el derecho de rechazar o dar de baja cualquier perfil que considere engañoso, inapropiado o que infrinja normativas locales.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">5. Modificaciones del servicio</h2>
                        <p className="text-[#23446B]/80 leading-relaxed">
                            Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de la plataforma en cualquier momento, con o sin previo aviso, en pos de mejorar el servicio o por razones técnicas y operativas.
                        </p>
                    </div>
                </section>

            </div>

            {/* SEPARADOR INFALIBLE: Este bloque invisible obliga al footer a quedarse abajo */}
            <div className="h-20 md:h-28 w-full"></div>

        </main>
    );
}