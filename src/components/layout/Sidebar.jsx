import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    ClipboardList,
    User,
    LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const menus = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Tasks",
            path: "/tasks",
            icon: ClipboardList,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: User,
        },
    ];
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        toast.success("Logged out successfully");

        navigate("/");
    };

    return (
        <aside className="hidden w-64 bg-slate-900 text-white lg:flex lg:flex-col">
            <div className="border-b border-slate-700 p-6">
                <h1 className="text-2xl font-bold text-blue-400">
                    TaskFlow
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <Link
                            key={menu.path}
                            to={menu.path}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${location.pathname === menu.path
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"
                                }`}
                        >
                            <Icon size={20} />
                            {menu.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-slate-700 p-4">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;