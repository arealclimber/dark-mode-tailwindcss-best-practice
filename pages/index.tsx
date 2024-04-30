import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

enum Theme {
  light = "light",
  dark = "dark",
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };
  useEffect(() => {
    if (theme === Theme.light) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start space-y-5 p-24 text-example-text-color bg-example-background-color`}
    >
      <div>Dark/Light mode with class prefix and custom variable (WIII)</div>
      <button
        onClick={toggleTheme}
        className="bg-example-sky text-example-text-color px-5 py-2 rounded-md hover:opacity-80"
      >
        {theme === Theme.light ? "☀️ Light" : "🌚 Dark"}
      </button>
    </main>
  );
}
