import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "./ThemeToggle";
import MobileSidebar from "./MobileSidebar";
import { useEffect, useState } from "react";

function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);
    return (
        <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
            <div className="flex items-center gap-3">
                <MobileSidebar />
                <h2 className="text-xl font-semibold text-blue-400">
                    TaskFlow
                </h2>
            </div>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Avatar>
                    <AvatarFallback>
                        {user?.name?.charAt(0)}
                    </AvatarFallback>
                </Avatar>


                {/* <div>
                    <p className="font-medium">
                        {user?.name}
                    </p>

                    <p className="text-sm text-gray-500">
                        {user?.role}
                    </p>
                </div> */}
            </div>
        </header>
    );
}

export default Navbar;