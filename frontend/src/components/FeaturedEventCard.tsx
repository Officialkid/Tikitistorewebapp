interface FeaturedEventCardProps {
    image: string;
    title: string;
    description: string;
}

export default function FeaturedEventCard({ image, title, description }: FeaturedEventCardProps) {
    return (
        <div className="bg-bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-text-dark-gray">{title}</h3>
                <p className="text-text-sub-gray">{description}</p>
            </div>
        </div>
    );
}