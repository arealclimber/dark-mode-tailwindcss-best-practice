import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

enum Theme {
  light = "light",
  dark = "dark",
}

export default function Home() {
  const [theme, setTheme] = useState(Theme.light);

  const toggleTheme = () => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    setTheme((prev) => (prev === Theme.light ? Theme.dark : Theme.light));
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <main className={`min-h-screen`}>
      <div className="container mx-auto px-4 py-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={toggleTheme}
        >
          {theme === Theme.light
            ? "Switch to Dark Mode"
            : "Switch to Light Mode"}
        </button>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to My App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is a sample page with dark mode support.
        </p>
      </div>
    </main>
  );
}
