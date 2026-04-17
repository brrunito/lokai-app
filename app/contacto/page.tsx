'use client'
import { supabase } from '../../lib/supabase/client';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        asunto: 'Sumar mi local', // Valor por defecto
        nameOrShop: '',
        address: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('merchant_requests')
                .insert([
                    {
                        asunto: formData.asunto,
                        shop_name: formData.nameOrShop,
                        address: formData.asunto === 'Sumar mi local' ? formData.address : 'N/A', // Si no es local, no guardamos dirección
                        email: formData.email,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setSubmitStatus('success');
            setFormData({ asunto: 'Sumar mi local', nameOrShop: '', address: '', email: '', message: '' });

        } catch (error: any) {
            console.error("Error de Supabase:", error.message || error);
            alert("Hubo un error al enviar tu mensaje. Intenta de nuevo.");
            setSubmitStatus('idle');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[calc(100vh-76px)]">
            <header className="text-center mb-12 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#23446B] mb-4 fuente-logo">
                    Contacto
                </h1>
                <p className="text-lg md:text-xl font-medium text-[#23446B]/80">
                    Estamos para escucharte. Selecciona el motivo de tu mensaje y hablemos.
                </p>
            </header>

            <section className="w-full max-w-2xl">
                <div className="bg-white rounded-3xl shadow-sm border border-[#4A7F9F]/20 p-8 md:p-12 transition-all duration-300">
                    {submitStatus === 'success' ? (
                        <div className="text-center py-10 space-y-4">
                            <div className="w-16 h-16 bg-[#4A7F9F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-[#4A7F9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-[#23446B]">¡Mensaje Enviado!</h2>
                            <p className="text-[#23446B]/70">Gracias por escribirnos. Te responderemos lo antes posible.</p>
                            <button onClick={() => setSubmitStatus('idle')} className="mt-4 text-[#4A7F9F] font-bold hover:underline">Enviar otro mensaje</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">

                                {/* SELECTOR DE ASUNTO */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#23446B] ml-2" htmlFor="asunto">¿En qué te podemos ayudar?</label>
                                    <select
                                        id="asunto"
                                        value={formData.asunto}
                                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                                        className="w-full px-6 py-4 bg-[#F2EDE0]/30 border border-[#4A7F9F]/20 rounded-2xl focus:ring-2 focus:ring-[#4A7F9F]/20 focus:border-[#4A7F9F] outline-none transition-all text-[#23446B] font-medium appearance-none cursor-pointer"
                                    >
                                        <option value="Sumar mi local">Sumar mi local a Lokai</option>
                                        <option value="Sugerencia">Tengo una sugerencia o feedback</option>
                                        <option value="Problema Técnico">Reportar un problema técnico (Bugs)</option>
                                        <option value="Alianzas y Negocios">Alianzas y Negocios</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>

                                {/* NOMBRE (Cambia la etiqueta según el asunto) */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#23446B] ml-2" htmlFor="nameOrShop">
                                        {formData.asunto === 'Sumar mi local' ? 'Nombre del Comercio' : 'Tu Nombre / Empresa'}
                                    </label>
                                    <input
                                        type="text"
                                        id="nameOrShop"
                                        required
                                        value={formData.nameOrShop}
                                        onChange={(e) => setFormData({ ...formData, nameOrShop: e.target.value })}
                                        placeholder={formData.asunto === 'Sumar mi local' ? "Ej. Mister Bike" : "Ej. Juan Pérez"}
                                        className="w-full px-6 py-4 bg-[#F2EDE0]/30 border border-[#4A7F9F]/20 rounded-2xl focus:ring-2 focus:ring-[#4A7F9F]/20 focus:border-[#4A7F9F] outline-none transition-all text-[#23446B]"
                                    />
                                </div>

                                {/* DIRECCIÓN (Solo se muestra si quieren sumar un local) */}
                                {formData.asunto === 'Sumar mi local' && (
                                    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
                                        <label className="text-sm font-bold text-[#23446B] ml-2" htmlFor="address">Dirección Física</label>
                                        <input
                                            type="text"
                                            id="address"
                                            required={formData.asunto === 'Sumar mi local'}
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            placeholder="Ej. Bv. 25 de Mayo 1500"
                                            className="w-full px-6 py-4 bg-[#F2EDE0]/30 border border-[#4A7F9F]/20 rounded-2xl focus:ring-2 focus:ring-[#4A7F9F]/20 focus:border-[#4A7F9F] outline-none transition-all text-[#23446B]"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#23446B] ml-2" htmlFor="email">Email de Contacto</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="hola@ejemplo.com"
                                        className="w-full px-6 py-4 bg-[#F2EDE0]/30 border border-[#4A7F9F]/20 rounded-2xl focus:ring-2 focus:ring-[#4A7F9F]/20 focus:border-[#4A7F9F] outline-none transition-all text-[#23446B]"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#23446B] ml-2" htmlFor="message">
                                        {formData.asunto === 'Sumar mi local' ? 'Marcas que venden / Mensaje' : 'Tu Mensaje'}
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder={formData.asunto === 'Sumar mi local' ? "Cuéntanos sobre tu propuesta (ej. Shimano, Andes Cola)..." : "Escribe aquí tu mensaje..."}
                                        className="w-full px-6 py-4 bg-[#F2EDE0]/30 border border-[#4A7F9F]/20 rounded-2xl focus:ring-2 focus:ring-[#4A7F9F]/20 focus:border-[#4A7F9F] outline-none transition-all resize-none text-[#23446B]"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#4A7F9F] text-white font-bold py-5 rounded-2xl shadow-sm hover:bg-[#23446B] transition-all duration-300 disabled:bg-[#4A7F9F]/50 flex justify-center items-center gap-2"
                                >
                                    {isSubmitting ? <span className="animate-pulse">Enviando...</span> : "Enviar Mensaje"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
}