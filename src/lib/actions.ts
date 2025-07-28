import { supabase } from "./supabase";

export async function getAllRecipes() {
    const { data, error } = await supabase
        .from('resep')
        .select('*')

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

export async function getFilteredRecipe(keyword: string) {
    const { data, error } = await supabase
        .from('resep')
        .select('*')
        .or(
            `title.ilike.%${keyword}%,description.ilike.%${keyword}%,time.ilike.%${keyword}%`
        )
    if (error) throw error
    return data
}

export async function getRandomRecipe() {
    const { data, error } = await supabase
        .rpc('get_random_recipes', { count: 7 })
    if (error) throw error
    return data ?? []
}

export async function SubmitContactForm({
    name,
    email,
    phoneNumber,
    message,
}: {
    name: string,
    email: string,
    phoneNumber?: string,
    message: string,
}) {
    const { error } = await supabase.from("contact_message").insert([
        {
            name,
            email,
            phoneNumber,
            message,
        }
    ])
    if (error) throw error
    return { success: true }
}