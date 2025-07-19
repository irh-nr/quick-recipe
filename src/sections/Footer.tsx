import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";
import Link from "next/link";
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
 } from "react-icons/fa";
 import { Separator } from "@/components/ui/separator";

 const socials = [
  { icon: FaFacebook, url: '',},
  { icon: FaInstagram, url: '' } ,
  { icon: FaTwitter, url: '' },
  { icon: FaYoutube, url: '' } 
 ];

export default function Footer() {
  return (
    <div className="flex flex-col items-center bg-primary w-full h-[100px]">
      <div className="flex flex-row gap-4 p-2 mt-4">
        {socials.map(({icon: Icon, url}, i) => (
          <div key={i}>
            <Link href={url}><Icon color="white" className="size-7"/></Link>
          </div>
        ))}
      </div>
        <div className="flex flex-row text-center text-sm text-secondary mt-2 gap-2 h-5">
            <span>
              Privacy Policy
            </span>
            <Separator orientation="vertical"/>
            <span>
              QuickRecipe!
            </span>
            <Separator orientation="vertical"/>
            <span>
              &copy; 2025 Irhamna Nr
            </span>
        </div>
    </div>
  )
}
