import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    // Wartości: 'system', 'light', 'dark'
    const [themePreference, setThemePreference] = useState('system');
    const [currentTheme, setCurrentTheme] = useState('light');

    // Sprawdź preferencje systemowe
    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Załaduj preferencje z localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('allegro-theme-preference');
        if (savedTheme && ['system', 'light', 'dark'].includes(savedTheme)) {
            setThemePreference(savedTheme);
        }
    }, []);

    // Ustaw aktualny motyw na podstawie preferencji
    useEffect(() => {
        let theme;
        if (themePreference === 'system') {
            theme = getSystemTheme();
        } else {
            theme = themePreference;
        }

        setCurrentTheme(theme);

        // Dodaj/usuń klasę dark-theme do body
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [themePreference]);

    // Nasłuchuj zmian preferencji systemowych
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (themePreference === 'system') {
                const systemTheme = getSystemTheme();
                setCurrentTheme(systemTheme);
                if (systemTheme === 'dark') {
                    document.body.classList.add('dark-theme');
                } else {
                    document.body.classList.remove('dark-theme');
                }
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [themePreference]);

    const setTheme = (preference) => {
        setThemePreference(preference);
        localStorage.setItem('allegro-theme-preference', preference);
    };

    const value = {
        themePreference,
        currentTheme,
        setTheme,
        isDark: currentTheme === 'dark'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};