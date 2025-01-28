import { useState } from "react";
import { Star } from "lucide-react";

const StarGenerator = ({ totalStars = 5, onRatingChange }) => {
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleMouseEnter = (index) => {
        setHoveredStar(index);
    };

    const handleMouseLeave = () => {
        setHoveredStar(0);
    };

    const handleClick = (index) => {
        setRating(index);
        if (onRatingChange) {
            onRatingChange(index);
        }
    };

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: totalStars }, (_, index) => {
                const starIndex = index + 1;
                return (
                    <span
                        key={starIndex}
                        className={`cursor-pointer ${
                            starIndex <= (hoveredStar || rating)
                                ? "text-yellow-500"
                                : "text-gray-300"
                        }`}
                        onMouseEnter={() => handleMouseEnter(starIndex)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starIndex)}
                        aria-label={`Rate ${starIndex} out of ${totalStars}`}
                        role="button"
                    >
                        <Star
                            size={24}
                            fill={
                                starIndex <= (hoveredStar || rating)
                                    ? "currentColor"
                                    : "none"
                            }
                            stroke="currentColor"
                        />
                    </span>
                );
            })}
        </div>
    );
};

export default StarGenerator;
