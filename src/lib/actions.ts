import { supabase } from "./supabase";

export async function getAllRecipes() {
    const { data, error } = await supabase.from('resep').select('*')
    if (error) throw error
    return data
}


export async function getAllRecipesBySlug(slug: string) {
    const { data, error } = await supabase
        .from('resep')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) throw error
    return data
}