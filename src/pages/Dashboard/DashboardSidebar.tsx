import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { cn } from "@/lib/utils";
  import { MenuIcon } from "lucide-react";
  import { NavLink, To, useNavigate } from "react-router-dom";
  
  const DashboardSidebar = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path: To) => {
      navigate(path);
    };
  
    return (
      <div className="text-white">
        <Sheet>
          <SheetTrigger className="p-2">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="w-[250px]" side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col font-medium gap-4 text-black">
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-black py-1 px-1 rounded",
                      isActive && "text-white bg-purple-600"
                    )
                  }
                  to="/dashboard/manage-projects"
                  onClick={() => handleNavigation("/dashboard/manage-projects")}
                >
                  <SheetClose asChild>
                    <span>Manage Projects</span>
                  </SheetClose>
                </NavLink>
  
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-black py-1 px-1 rounded",
                      isActive && "text-white bg-purple-600"
                    )
                  }
                  to="/dashboard/add-projects"
                  onClick={() => handleNavigation("/dashboard/add-projects")}
                >
                  <SheetClose asChild>
                    <span>Add Project</span>
                  </SheetClose>
                </NavLink>
  
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-black py-1 px-1 rounded",
                      isActive && "text-white bg-purple-600"
                    )
                  }
                  to="/dashboard/update-projects"
                  onClick={() => handleNavigation("/dashboard/update-projects")}
                >
                  <SheetClose asChild>
                    <span>Update Projects</span>
                  </SheetClose>
                </NavLink>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
  };
  
  export default DashboardSidebar;
  