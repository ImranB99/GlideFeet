export function getInitialTheme() {
  // localStorage চেক করো
  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  // নাহলে সিস্টেম প্রেফারেন্স চেক করো
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
