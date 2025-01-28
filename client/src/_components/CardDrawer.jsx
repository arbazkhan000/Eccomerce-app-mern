import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingCart } from "lucide-react";

const CardDrawer = () => {
    let cardItem = [
        {
            id: 1,
            name: "item 1",
            price: "100rs",
            quantity: "1",
        },
        {
            id: 2,
            name: "item 1",
            price: "100rs",
            quantity: "1",
        },
    ];

    const totalQuantity = 5;
    return (
        <div>
            <Drawer>
                <DrawerTrigger className=" border border-red-100">
                    <span className="text-center">
                        {totalQuantity > 0 && (
                            <Badge
                                className={`absolute top-3 left-7 px-0.5 py-0`}
                            >
                                {totalQuantity}
                            </Badge>
                        )}
                    </span>

                    <span>
                        {" "}
                        <ShoppingCart size={30} />
                    </span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Card Details</DrawerTitle>
                        <DrawerDescription>
                            Card Items : {totalQuantity}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Checkout</Button>
                        {/* <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default CardDrawer;
