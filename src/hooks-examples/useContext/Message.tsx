import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Button } from "@chakra-ui/react";

export default function Message() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{
            padding: '1rem',
            borderRadius: '1rem',
            color: theme === 'light' ? '#fff' : '#000',
            backgroundColor: theme === 'light' ? '#000' : '#fff',
        }}>
        <h3>Current theme: {theme}</h3>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
        </div>
    );
}