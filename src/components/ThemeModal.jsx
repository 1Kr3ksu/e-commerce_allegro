import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeModal = ({ isOpen, onClose }) => {
    const { themePreference, setTheme } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(themePreference);

    const handleSave = () => {
        setTheme(selectedTheme);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content theme-modal" onClick={(e) => e.stopPropagation()}>
                <div className="theme-modal-header">
                    <h2>Dostosuj ustawienia wyświetlania</h2>
                    <button className="close-btn" onClick={onClose} aria-label="Zamknij">×</button>
                </div>

                <div className="theme-modal-body">
                    <p className="theme-description">
                        Ustawienia dotyczą tylko tej przeglądarki
                    </p>

                    <div className="theme-options">
                        <label className="theme-option">
                            <input
                                type="radio"
                                name="theme"
                                value="system"
                                checked={selectedTheme === 'system'}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                            />
                            <div className="theme-option-content">
                                <span className="theme-option-title">Użyj preferencji systemowych</span>
                                <span className="theme-option-description">
                                    Automatycznie dostosujemy wygląd na podstawie ustawień systemowych Twojego urządzenia
                                </span>
                            </div>
                        </label>

                        <label className="theme-option">
                            <input
                                type="radio"
                                name="theme"
                                value="light"
                                checked={selectedTheme === 'light'}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                            />
                            <div className="theme-option-content">
                                <span className="theme-option-title">Motyw jasny</span>
                            </div>
                        </label>

                        <label className="theme-option">
                            <input
                                type="radio"
                                name="theme"
                                value="dark"
                                checked={selectedTheme === 'dark'}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                            />
                            <div className="theme-option-content">
                                <span className="theme-option-title">Motyw ciemny</span>
                            </div>
                        </label>
                    </div>

                    <button
                        className="theme-save-btn"
                        onClick={handleSave}
                    >
                        ZAPISZ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeModal;