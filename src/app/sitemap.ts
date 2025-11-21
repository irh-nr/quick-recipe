import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

const DOMAIN = "https://quick-recipe-app.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Fetch dynamic recipe data
    const { data: recipes } = await supabase
        .from("recipes")
        .select("slug, updated_at");

    // Static routes
    const staticRoutes = ["", "/contact", "/recipe"];

    const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${DOMAIN}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
    }));

    // Dynamic recipe pages
    const recipePages: MetadataRoute.Sitemap =
        recipes?.map((r) => ({
            url: `${DOMAIN}/recipe/${r.slug}`,
            lastModified: r.updated_at ? new Date(r.updated_at) : new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        })) ?? [];

    return [...staticPages, ...recipePages];
}
