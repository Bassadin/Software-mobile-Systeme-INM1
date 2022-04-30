export function initThemeSwitcherButton(): void {
    // Toggle Themes
    let documentElement = document.documentElement;
    let themeButtonElement = document.querySelector("#theme-button");
    let localStorageThemeSelection = localStorage.getItem("theme");

    const altThemeName = "theme-less-color";

    if (localStorageThemeSelection == "dark") {
        documentElement.classList.add(altThemeName);
    }

    themeButtonElement!.addEventListener("click", function () {
        if (documentElement.classList.contains(altThemeName)) {
            documentElement.classList.remove(altThemeName);
            localStorage.removeItem("theme");
        } else {
            documentElement.classList.add(altThemeName);
            localStorage.setItem("theme", "dark");
        }
    });
}
