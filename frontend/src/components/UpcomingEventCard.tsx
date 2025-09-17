import { HeartIcon } from '@heroicons/react/24/outline';

interface UpcomingEventCardProps {
    badge: string;
    badgeColor: string; // e.g., 'bg-pink-100 text-pink-600'
    image: string;
    title: string;
    description: string;
    date: string;
    location: string;
    price: string;
    buttonText: string;
}

export default function UpcomingEventCard({
    badge,
    badgeColor,
    image,
    title,
    date,
    location,
    price,
    buttonText,
}: UpcomingEventCardProps) {
    return (
        <div className="bg-bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                <span className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
                    {badge}
                </span>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-text-dark-gray mb-1">{title}</h3>
                <p className="text-text-sub-gray text-sm mb-1">{date}</p>
                <p className="text-text-sub-gray text-sm mb-1">📍 {location}</p>
                <p className="text-text-sub-gray text-sm mb-2">{price}</p>
                <div className="flex justify-between items-center">
                    <HeartIcon className="h-5 w-5 text-text-sub-gray hover:text-primary-blue-mid cursor-pointer" />
                    <button className="bg-primary-blue-mid text-bg-white py-2 px-4 rounded-full text-sm font-semibold">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}