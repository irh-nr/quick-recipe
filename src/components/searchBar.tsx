import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm mx-auto items-center gap-2">
        <Input type="search" placeholder="Cari Sesuatu?"/>
        <Button variant="outline">
            <Search className="w-6 h-6"/>
        </Button>
    </div>
  )
}
