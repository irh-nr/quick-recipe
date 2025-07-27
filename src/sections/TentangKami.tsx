import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function TentangKami() {
  return (
    <div className="pt-5 pb-10 px-4">
      <h1 className="text-center typography-h1 p-5">Tentang Kami</h1>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-8 pt-10">
        <div className="flex flex-col max-w-md justify-between">
          <div>
            <h2 className="typography-h2 text-center md:text-left">
              Masak cepat, rasa nikmat.
            </h2>
            <p className="typography-p text-center md:text-left">
              Solusi resep simpel untuk hidup yang serba cepat. Quick Recipe
              hadir untuk kamu yang ingin masak praktis setiap hari—dengan bahan
              sederhana, langkah singkat, dan hasil yang memuaskan. Cocok untuk
              siapa saja, di mana saja.
            </p>
          </div>
        </div>
        <div className="hidden md:flex h-64">
          <Separator className="hidden md:flex" orientation="vertical" />
        </div>
        <div className="relative w-full max-w-md rounded-2xl shadow-md aspect-[1/1]">
          <Image
            src={"/img/chef.jpg"}
            alt="chef-img"
            style={{ objectFit: "cover" }}
            fill
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
