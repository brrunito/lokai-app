'use client'

import { useState } from 'react';
import { getNearbyStores, type SearchResult } from '../actions/search';
import { Search, MapPin, Tag, Package, Navigation } from 'lucide-react';
import { Paytone_One } from 'next/font/google';
const paytone = Paytone_One({ weight: '400', subsets: ['latin'] });

export default function LokaiSearch() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingGps, setLoadingGps] = useState(false);

    const getUserLocation = (): Promise<{ lat: number, lon: number }> => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Tu navegador no soporta geolocalización."));
            }
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                (error) => {
                    reject(new Error("Necesitamos tu ubicación para mostrarte lo más cercano. ¡Acepta los permisos del navegador!"));
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        });
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!term.trim()) return;

        setLoading(true);
        setError('');
        setResults([]);

        try {
            setLoadingGps(true);
            const { lat, lon } = await getUserLocation();
            setLoadingGps(false);

            const { data, error: fetchError } = await getNearbyStores({
                userLat: lat,
                userLon: lon,
                searchTerm: term
            });

            if (fetchError) setError(fetchError);
            if (data) setResults(data);

        } catch (err: any) {
            setError(err.message || "Ocurrió un error inesperado.");
            setLoadingGps(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="text-[#23446B] selection:bg-[#4A7F9F] selection:text-white font-sans">

            {/* --- SECCIÓN 1: BUSCADOR (Fondo Ivory, ocupa la pantalla entera, el min-h-screen asegura que empuje lo de abajo) --- */}
            <section className="bg-[#F2EDE0] w-full min-h-screen flex flex-col justify-center py-10">
                <div className="max-w-3xl mx-auto px-6 w-full mt-10">
                    <div className="text-center mb-12 space-y-4">
                        <h1 className="text-6xl md:text-7xl font-black tracking-wide text-[#23446B] fuente-logo">
                            LOKAI
                        </h1>
                        <p className="text-lg md:text-xl text-[#4A7F9F] font-medium">
                            Encuentra lo que buscas, sin vueltas.
                        </p>
                    </div>

                    <form onSubmit={handleSearch} className="relative group mx-auto max-w-2xl w-full">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-[#4A7F9F] group-focus-within:text-[#23446B] transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            placeholder="Marcas (ej. Andes Cola)..."
                            className="w-full py-5 pl-14 pr-16 md:pr-32 rounded-3xl border-2 border-[#4A7F9F]/20 focus:border-[#23446B] focus:ring-4 focus:ring-[#23446B]/10 text-lg text-[#23446B] placeholder-[#23446B]/40 transition-all bg-white shadow-sm outline-none"
                        />
                        <button
                            type="submit"
                            disabled={loading || !term.trim()}
                            className="absolute inset-y-2 right-2 px-4 md:px-6 bg-[#4A7F9F] hover:bg-[#23446B] disabled:bg-[#4A7F9F]/50 text-white font-semibold rounded-2xl transition-all shadow-sm active:scale-95 disabled:active:scale-100 flex items-center justify-center gap-2 min-w-[50px] md:min-w-[140px]"
                        >
                            {loadingGps ? (
                                <span className="flex items-center justify-center animate-pulse">
                                    <Navigation className="w-5 h-5 animate-spin" />
                                    <span className="hidden md:inline ml-2">GPS...</span>
                                </span>
                            ) : loading ? (
                                <span className="flex items-center justify-center animate-pulse">
                                    <Search className="w-5 h-5" />
                                </span>
                            ) : (
                                <>
                                    {/* En celular mostramos solo la Lupa, en PC mostramos Lupa + Texto */}
                                    <Search className="w-5 h-5 md:w-4 md:h-4" />
                                    <span className="hidden md:inline">Buscar</span>
                                </>
                            )}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-8 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-center animate-in fade-in zoom-in duration-300 w-full max-w-2xl mx-auto">
                            {error}
                        </div>
                    )}

                    <div className="mt-12 space-y-4 w-full">
                        {results.length === 0 && !loading && !error && (
                            <div className="text-center text-[#23446B]/50 mt-8 font-medium">
                                Realiza una búsqueda para encontrar tiendas cercanas a tu ubicación real.
                            </div>
                        )}

                        {results.map((item, id) => (
                            <div
                                key={id}
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#23446B]/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all hover:shadow-md hover:border-[#4A7F9F]/20 group animate-in slide-in-from-bottom-2 fade-in duration-300"
                                style={{ animationDelay: `${id * 50}ms`, animationFillMode: 'both' }}
                            >
                                <div className="space-y-3 flex-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#23446B] group-hover:text-[#4A7F9F] transition-colors">
                                            {item.store_name}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-[#23446B]/60 mt-1">
                                            <MapPin className="h-4 w-4" />
                                            <span className="text-sm font-medium">{item.address}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <span className="flex items-center gap-1 bg-[#4A7F9F]/10 text-[#4A7F9F] px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide uppercase">
                                            <Tag className="h-3 w-3" />
                                            {item.brand}
                                        </span>
                                        <span className="flex items-center gap-1 bg-[#23446B]/5 text-[#23446B]/70 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide uppercase">
                                            <Package className="h-3 w-3" />
                                            {item.product_type}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto mt-4 md:mt-0 p-4 md:p-0 bg-[#F2EDE0] md:bg-transparent rounded-2xl shrink-0">
                                    <span className="text-3xl font-black text-[#23446B] tracking-tight">
                                        {item.distancia_visible}
                                    </span>

                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lon}&travelmode=walking`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-[#23446B] text-white px-5 py-2.5 rounded-2xl font-bold text-sm hover:bg-[#4A7F9F] transition-all active:scale-95 shadow-sm w-full md:w-auto"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Cómo llegar
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 2: CÓMO FUNCIONA (Fondo Blanco, alto de la pantalla centrado) --- */}
            <section id="como-funciona" className="bg-white w-full min-h-screen flex flex-col justify-center py-20 border-t border-[#4A7F9F]/10">
                <div className="max-w-5xl mx-auto px-6 w-full">
                    <h2 className="text-4xl md:text-5xl font-black text-center text-[#23446B] mb-16">
                        Encuentra lo que buscas en <span className="text-[#4A7F9F]">3 pasos</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4 group">
                            <div className="bg-[#F2EDE0] w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <Search className="w-10 h-10 text-[#4A7F9F]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#23446B]">1. Buscá</h3>
                            <p className="text-[#23446B]/70 font-medium leading-relaxed">
                                Escribí la marca o el producto que necesitás. Desde una Andes Cola hasta cámaras y repuestos para tu bici.
                            </p>
                        </div>

                        <div className="space-y-4 group">
                            <div className="bg-[#F2EDE0] w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <MapPin className="w-10 h-10 text-[#4A7F9F]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#23446B]">2. Localizá</h3>
                            <p className="text-[#23446B]/70 font-medium leading-relaxed">
                                Nuestro sistema usa el GPS de tu celular para mostrarte exactamente qué comercios cercanos lo tienen en stock.
                            </p>
                        </div>

                        <div className="space-y-4 group">
                            <div className="bg-[#F2EDE0] w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                <Package className="w-10 h-10 text-[#4A7F9F]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#23446B]">3. Comprá</h3>
                            <p className="text-[#23446B]/70 font-medium leading-relaxed">
                                Tocá el botón "Cómo llegar" para abrir Google Maps y caminá directo al local. Sin vueltas ni tiempo perdido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}