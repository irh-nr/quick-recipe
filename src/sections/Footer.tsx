import Link from "next/link";
import { socials } from "@/lib/socials";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="flex flex-col items-center bg-primary dark:bg-primary-foreground w-full h-[180px] p-4">
      <div className="flex flex-row gap-4 p-2 mt-4">
        {socials.map(({ icon: Icon, url }, i) => (
          <div key={i}>
            <Link href={url} target="blank">
              <Icon color="white" className="size-7" />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-row text-center text-sm text-white mt-2 gap-2 h-5">
        <span>
          <a href="">Privacy Policy</a>
        </span>
        <Separator orientation="vertical" />
        <span>QuickRecipe!</span>
        <Separator orientation="vertical" />
        <span>&copy; 2025 Irhamna Nr</span>
      </div>
    </div>
  );
}
