import { useEffect, useState } from "react";

enum Theme {
  light = "light",
  dark = "dark",
  green = "green",
  purple = "purple",
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  useEffect(() => {
    document.documentElement.classList.remove(...Object.values(Theme));
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start space-y-5 p-24 text-example-text-color bg-example-background-color`}
    >
      <div>
        Dark/Light mode with class prefix and multiple color schemes (WIII)
      </div>
      <div className="space-x-2">
        {Object.values(Theme).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`bg-example-sky text-example-text-color px-5 py-2 rounded-md hover:opacity-80 ${
              theme === t ? "opacity-50" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </main>
  );
}
