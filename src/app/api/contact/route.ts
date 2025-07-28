import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message, phoneNumber } = body;

    const { error } = await supabase.from("contact_message").insert([
        {
            name,
            email,
            message,
            phoneNumber: phoneNumber ?? null,
        },
    ]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
