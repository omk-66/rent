import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';
import { Separator } from "./ui/separator";
import { CardCarousel } from "./card-img-carasul";
import {motion} from "motion/react"
interface Accommodation {
    id: number;
    title: string;
    description: string;
    pricePerNight: number;
    location: {
        city: string;
        country: string;
        lat: number;
        lng: number;
    };
    images: string[];
    amenities: string[];
    ratings: number;
    reviewsCount: number;
    maxGuests: number;
    rooms: {
        totalRooms: number;
        beds: number;
        bathrooms: number;
    };
}

interface ListingCardProps {
    data: Accommodation;
}
export default function ListingCard({ data }: ListingCardProps) {
    return (
        <motion.div whileHover={{scale: 1.02, transition:{duration:0.3}}}>
            <Card className="w-80 border shadow-md">
            <CardCarousel imges={data.images} />
            <CardHeader className="p-4">
                <CardTitle className="text-2xl font-semibold">{data.location.city}</CardTitle>
                <p className="text-sm text-gray-600">{data.location.city}, India</p>
            </CardHeader>
            <CardContent className="p-4 -mt-4">
                <p className="text-sm text-gray-800">Upto {data.maxGuests} Guests • {data.rooms.beds} Rooms • {data.rooms.bathrooms} Baths</p>
            </CardContent>
            {/* <hr className=""/> */}
            <Separator orientation="horizontal" className="bg-gray-500 w-[90%] mx-auto" />
            <CardFooter className="flex justify-between items-center p-4">
                <div className="flex flex-col">
                    <p className="font-semibold text-3xl">₹{data.pricePerNight}</p>
                    <p className="text-sm text-gray-600">For per Night + Taxes</p>
                </div>
                <Button size={"lg"} className="h-8 px-4 text-sm"><MoveRight /></Button>
            </CardFooter>
        </Card>
        </motion.div>
    );
}

