import { useRef, useState } from "react";
import { Heart } from "lucide-react"; // Import Heart icon from Lucide or your preferred library
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"; // Ensure these are imported correctly from your carousel library
import { Card, CardContent } from "@/components/ui/card"; // Adjust based on your UI library

export function CardCarousel({ images }: { images: string[] }) {
    const likeRef = useRef(false)
    // State for individual likes
    const [likes, setLikes] = useState<boolean[]>(Array(images.length).fill(false));

    const toggleLike = (index: number) => {
        setLikes((prev) =>
            prev.map((like, i) => (i === index ? !like : like))
        );
    };

    return (
        <div className="relative w-full max-w-xs">
            <Carousel
                className="w-full"
                opts={{ align: "start", loop: true, dragFree: true }}
            >
                <CarouselContent>
                    {images.map((img, index) => (
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
                                            <button
                                            ref = {likeRef}
                                                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
                                                aria-label={
                                                    likes[index]
                                                        ? "Unlike this image"
                                                        : "Like this image"
                                                }
                                                onClick={() => toggleLike(index)}
                                            >
                                                {likes[index] ? (
                                                    <Heart color="#f41515" className="h-5 w-5" />
                                                ) : (
                                                    <Heart className="h-5 w-5 text-gray-600" />
                                                )}
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
