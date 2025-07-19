import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main>
      <div className="p-2 pl-0">
        <Skeleton className="w-30 h-10" />
      </div>
      <div className="p-4 shadow-sm rounded-xl max-w-screen justify-between">
        <div className="relative flex flex-col-reverse md:flex-row items-center w-full justify-center md:justify-between overflow-hidden">
          <div className="flex flex-col gap-4 pt-8 lg:pt-0">
            <div
              id="Title"
              className="flex flex-col gap-2 items-center text-center md:text-start md:items-start"
            >
              <Skeleton className="w-sm h-8 md:w-lg md:h-16" />
              <Skeleton className="w-xs h-3 md:w-sm md:h-6 mt-4" />
            </div>
            <div
              id="Ingredient"
              className="p-2 flex flex-col items-center md:items-start"
            >
              <Skeleton className="w-xs h-6 md:h-12 mb-2" />
              <ul>
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
              </ul>
            </div>
            <div
              id="Steps"
              className="p-2 pt-0 gap-2 flex flex-col items-center md:items-start"
            >
              <Skeleton className="w-xs h-6 md:h-12" />
              <ul>
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
              </ul>
              <div
                id="Note"
                className="p-2 pt-4 gap-2 flex flex-col items-center md:items-start"
              >
                <Skeleton className="w-xs h-6 md:h-12" />
                <Skeleton className="w-sm h-3 md:w-lg md:h-6 mt-4" />
              </div>
            </div>
          </div>
          <div
            id="Recipe-img"
            className="relative w-full max-w-screen h-screen md:max-w-sm rounded-2xl shadow-sm aspect-[4/3] md:aspect-[3/4]"
          >
            <Skeleton className="relative w-full h-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
