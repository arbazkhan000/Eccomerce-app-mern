import { BiCategory } from "react-icons/bi";
import { FaRegCommentAlt, FaRegNewspaper, FaUserAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const preNav = [
    {
        id: 1,
        name: "Home",
        icon: <IoMdHome />,
    },
    {
        id: 2,
        name: "Categeroy",
        icon: <BiCategory />,
    },
    {
        id: 3,
        name: "Blogs",
        icon: <FaRegNewspaper />,
    },
    {
        id: 4,
        name: "Comments",
        icon: <FaRegCommentAlt />,
    },
    {
        id: 5,
        name: "User",
        icon: <FaUserAlt />,
    },
];

const navItem = [
    {
        id: 1,
        name: "Bussiness",
    },
    {
        id: 2,
        name: "Educations & Career",
    },
    { id: 3, name: "Entertainment" },
    {
        id: 4,
        name: "Fashion & Beauty",
    },
    {
        id: 6,
        name: "News & Poltic",
    },

    {
        id: 7,
        name: "Place & Travels",
    },
    {
        id: 8,
        name: "Sports",
    },
    {
        id: 9,
        name: "Technology",
    },
];

const AppSidebar = () => {
    return (
        <div className="w-1/6 border border-red-900 h-screen snap-mandatory snap-y ">
            {/*  pre-categeroy */}
            <ul>
                {preNav.map((item) => {
                    return (
                        <>
                            <li className="flex items-start">
                                <p className="px-4 flex items-center space-x-4  hover:bg-gray-200 hover:rounded-md cursor-pointer">
                                    <span className="text-xl">
                                        {item.icon}{" "}
                                    </span>

                                    <span className="text-[16px] font-medium text-2xl">
                                        {item.name}
                                    </span>
                                </p>
                            </li>
                        </>
                    );
                })}
            </ul>

            {/* 
            nav */}
            <div>
                <h1 className="text-2xl font-bold px-4 py-3">Categroy</h1>
                <ul>
                    {navItem.map((elem) => {
                        return (
                            <div key={elem.id} className=" flex items-start ">
                                <li className=" " key={elem.id}>
                                    <p className="px-4 flex items-center space-x-4 hover:bg-gray-200 hover:rounded-md cursor-pointer">
                                        <span className="text-xl">
                                            {elem.icon}
                                        </span>
                                        <span className="text-[16px] font-medium text-2xl">
                                            {elem.name}
                                        </span>
                                    </p>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AppSidebar;
