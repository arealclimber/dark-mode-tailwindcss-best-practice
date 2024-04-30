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
      className={`flex min-h-screen flex-col items-center justify-start space-y-5 p-24 text-black dark:text-white bg-white dark:bg-black`}
    >
      <div>Dark/Light mode with class prefix (WI)</div>
      <button
        onClick={toggleTheme}
        className="dark:bg-blue-300 dark:text-black bg-blue-900 text-white px-5 py-2 rounded-md hover:opacity-80"
      >
        {theme === Theme.light ? "☀️ Light" : "🌚 Dark"}
      </button>
    </main>
  );
}
