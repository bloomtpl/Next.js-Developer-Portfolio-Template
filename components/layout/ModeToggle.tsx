"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {resolvedTheme !== "light" && (
        <button
          className="p-2 hover:bg-gray-800 rounded cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </button>
      )}

      {resolvedTheme !== "dark" && (
        <button
          className="p-2 hover:bg-gray-200 rounded cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </button>
      )}
    </div>
  );
}
