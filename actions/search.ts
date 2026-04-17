'use server'

import { supabase } from '../lib/supabase/client';

// Tipado estricto para predecir la respuesta en el componente
export interface SearchResult {
    store_name: string;
    address: string;
    brand: string;
    product_type: string;
    distancia_visible: string;
    distance_meters: number;
    lat: number;
    lon: number;
}

export interface SearchParams {
    userLat: number;
    userLon: number;
    searchTerm: string;
}

export async function getNearbyStores({
    userLat,
    userLon,
    searchTerm
}: SearchParams): Promise<{ data: SearchResult[] | null; error: string | null }> {
    try {
        if (!searchTerm || !searchTerm.trim()) {
            return { data: [], error: null };
        }

        const { data, error } = await supabase.rpc('search_lokai_stores', {
            user_lat: userLat,
            user_lon: userLon,
            search_term: searchTerm.trim()
        });

        if (error) {
            console.error('Supabase RPC Error:', error);
            return { data: null, error: 'Hubo un problema al buscar las tiendas cercanas.' };
        }

        return { data, error: null };

    } catch (err) {
        console.error('Unexpected Error:', err);
        return { data: null, error: 'Error de conexión interno.' };
    }
}