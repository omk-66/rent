import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CardCarousel({ imges }: { imges: string[] }) {
    return (
        <div className="relative w-full max-w-xs">
            <Carousel
                className="w-full"
                opts={{ align: "start", loop: true, dragFree: true }}
            >
                <CarouselContent>
                    {imges.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className="p-0">
                                <Card className="border-none">
                                    <CardContent className="p-0">
                                        <div className="relative">
                                            {/* Image */}
                                            <img
                                                src={img}
                                                alt={`Image ${index + 1}`}
                                                className="h-48 w-full object-cover rounded-t-lg"
                                            />
                                            {/* Favorite Icon */}
                                            <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                                                <Heart className="h-5 w-5 text-gray-600" />
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Navigation Buttons inside the Carousel */}
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
                    <span className="text-gray-600">{"<"}</span>
                </CarouselPrevious>
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
                    <span className="text-gray-600">{">"}</span>
                </CarouselNext>
            </Carousel>
        </div>
    );
}
