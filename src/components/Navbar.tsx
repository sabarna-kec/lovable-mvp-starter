import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, BarChart3 } from "lucide-react";
import { companies } from "@/data/mockData";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const filtered = search.length > 0
    ? companies.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.symbol.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Stock<span className="text-primary">IT</span></span>
        </Link>

        <div className="relative hidden md:block w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for a company..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setShowResults(true); }}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            className="w-full rounded-md border border-border bg-secondary px-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {showResults && filtered.length > 0 && (
            <div className="absolute top-full mt-1 w-full rounded-md border border-border bg-card shadow-lg">
              {filtered.map((c) => (
                <Link
                  key={c.symbol}
                  to="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                  onClick={() => { setSearch(""); setShowResults(false); }}
                >
                  <span className="font-medium text-foreground">{c.name}</span>
                  <span className="ml-2 text-muted-foreground text-xs">{c.symbol}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center gap-6">
          {[
            { to: "/", label: "HOME" },
            { to: "/dashboard", label: "DASHBOARD" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-border bg-secondary px-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Link to="/" className="block text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>HOME</Link>
          <Link to="/dashboard" className="block text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>DASHBOARD</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
