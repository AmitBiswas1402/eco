import { Link, useResolvedPath } from "react-router";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  STORE
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            <ThemeSelector />

            {isHomePage && (
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors cursor-pointer">
                <div className="relative">
                  <ShoppingBagIcon className="size-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full px-2 py-0.5">
                    12
                  </span>
                </div>
                <span className="font-medium">Your Cart</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
