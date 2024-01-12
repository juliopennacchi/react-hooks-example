import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((theme) => {
            return theme === 'light' ? 'dark' : 'light';
        });
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}