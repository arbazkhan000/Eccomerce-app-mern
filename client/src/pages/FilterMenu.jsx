import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { useState } from "react";

const FilterMenu = () => {
    const [selectPriceRange] = useState(["1000", "5000", "600"]);
    const [selectCategory] = useState(["mouse", "keyboard", "adapter"]);

    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start w-full gap-4 p-4 bg-gray-50 rounded-lg shadow-md">
            {/* Select Category */}
            <div className="w-full sm:w-auto">
                <Select>
                    <SelectTrigger className="w-full sm:w-[250px] border rounded-md shadow-sm">
                        <SelectValue placeholder="Select Your Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {selectCategory.map((elem, index) => (
                                <SelectItem key={index} value={elem}>
                                    {elem}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Select Range */}
            <div className="w-full sm:w-auto">
                <Select>
                    <SelectTrigger className="w-full sm:w-[250px] border rounded-md shadow-sm">
                        <SelectValue placeholder="Select Your Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {selectPriceRange.map((elem, index) => (
                                <SelectItem key={index} value={elem}>
                                    {elem}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Input Search */}
            <div className="w-full">
                <Input
                    placeholder="Search Here..."
                    className="w-full border rounded-md shadow-sm"
                />
            </div>
        </div>
    );
};

export default FilterMenu;
