import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ReviewCard = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 py-6">
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Reviews
            </h3>

            {/* Write Review */}
            <div className="rounded-lg py-4 bg-gray-50 shadow-sm">
                <h4 className="text-base md:text-lg font-medium mb-4">
                    Write a review
                </h4>
                <textarea
                    className="w-full px-4 py-3 border border-gray-300 outline-none rounded-lg text-sm md:text-base"
                    placeholder="Your review..."
                ></textarea>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4">
                    <Input
                        className="w-full md:w-1/4"
                        placeholder="Rating (0 - 5)"
                    />
                    <Button variant="outline" className="w-full md:w-auto">
                        Submit Review
                    </Button>
                </div>
            </div>

            {/* Review List */}
            <div className="mt-8">
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                    User Reviews
                </h4>
                <div className="space-y-6">
                    {/* Example Review */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300"></div>
                        <div className="flex-grow">
                            <h5 className="text-sm md:text-base font-medium">
                                John Doe
                            </h5>
                            <p className="text-sm text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer nec odio. Praesent
                                libero. Sed cursus ante dapibus diam.
                            </p>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-yellow-500">
                            ⭐⭐⭐⭐
                        </div>
                    </div>

                    {/* Add more reviews here */}
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
