import { Link } from "react-router-dom";

export const LinkButton = ({ to, text = "ClickHere", className = "" }) => {
    return (
        <Link
            to={to}
            className={`h-9 px-4 py-2 w-full bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${className}`}
        >
            {text}
        </Link>
    );
};
// export default LinkButton;