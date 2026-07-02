import { Menu, LayoutDashboard, ClipboardList, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

function MobileSidebar() {
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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 p-0">

        <div className="border-b p-6">
          <h2 className="text-2xl font-bold text-blue-600">
            TaskFlow
          </h2>
        </div>

        <nav className="p-4 space-y-2">

          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <Link
                key={menu.path}
                to={menu.path}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                  location.pathname === menu.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-muted"
                }`}
              >
                <Icon size={20} />
                {menu.name}
              </Link>
            );
          })}

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-muted"
          >
            <LogOut size={20} />
            Logout
          </button>

        </nav>

      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;