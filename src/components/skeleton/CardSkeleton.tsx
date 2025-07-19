import {  
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent, } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export function CardSkeleton() {
  return (
    <div>
       <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Skeleton className="w-12 h-12 rounded-full"/>
              <Skeleton className="h-6 flex-grow"/>
            </CardHeader>

            <CardContent>
              <Skeleton className="h-4 flex-grow mt-4"/>
              <Skeleton className="h-4 flex-grow mt-4"/>
              <Skeleton className="h-4 w-1/2 mt-4"/>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <Skeleton className="h-10 w-28"/>
              <Skeleton className="h-6 w-1/3"/>
            </CardFooter>
          </Card>
    </div>
  )
}
