import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function LihatResep() {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-80 items-center justify-between gap-8 py-10 px-4">
      <div>
        <h1 className="text-center md:text-left typography-h1">
          Kami menyediakan apa yang anda butuhkan disini.
        </h1>
      </div>
      <Separator className="hidden md:flex" orientation="vertical" />
      <div className="flex flex-col md:items-end">
        <h3 className="text-center md:text-right typography-h3">
          Dengan berbagai macam resep yang mudah diikuti, anda dapat memasak
          hidangan lezat dalam waktu singkat.
        </h3>
        <p className="text-center mt-2 md:text-right">
          Ayo mulai memasak sekarang!
        </p>
        <div className="pt-6 flex items-center justify-center md:justify-end">
          <Button asChild variant="default">
            <Link href={"/recipe"}>Lihat Semua Resep</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
