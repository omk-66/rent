import ListingCard from "./listing-card";
import db from "@/data/listing-properties.json"

export interface Accommodation {
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

export default function ListingList() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {/* {Array.from({ length: 12 }).map((_, index) => (
                    <ListingCard key={index} />
                ))} */}
                {db.map((item: Accommodation) => (
                    <ListingCard data={item} key={item.id}/>
                ))}
            </div>
        </div>
    );
}
