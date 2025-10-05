import React, { useState } from 'react';
import '../styles/Auth.css';

const ForgotPassword = ({ onBackToLogin, onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Walidacja email
        if (!email) {
            setError('Adres email jest wymagany');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Wprowadź poprawny adres email');
            return;
        }

        setIsLoading(true);

        try {
            // Symulacja wysłania emaila z linkiem resetującym
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            console.log('Reset password request for:', email);
        } catch (err) {
            setError('Wystąpił błąd. Spróbuj ponownie.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="auth-form">
                <div className="auth-header">
                    <h2>Email został wysłany</h2>
                    <button className="close-btn" onClick={onClose} aria-label="Zamknij">×</button>
                </div>

                <div className="success-message">
                    <div className="success-icon">✓</div>
                    <p>Sprawdź swoją skrzynkę email</p>
                    <p className="success-description">
                        Wysłaliśmy link do resetowania hasła na adres: <strong>{email}</strong>
                    </p>
                    <p className="success-note">
                        Jeśli nie widzisz emaila, sprawdź folder spam lub spróbuj ponownie.
                    </p>
                </div>

                <div className="auth-actions">
                    <button
                        className="auth-btn secondary"
                        onClick={onBackToLogin}
                    >
                        Powrót do logowania
                    </button>
                    <button
                        className="auth-btn primary"
                        onClick={() => setIsSubmitted(false)}
                    >
                        Wyślij ponownie
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-form">
            <div className="auth-header">
                <h2>Resetowanie hasła</h2>
                <button className="close-btn" onClick={onClose} aria-label="Zamknij">×</button>
            </div>

            <p className="auth-description">
                Podaj swój adres email, a wyślemy Ci link do resetowania hasła.
            </p>

            <form onSubmit={handleSubmit} className="auth-form-content">
                <div className="input-group">
                    <label htmlFor="reset-email">Adres email</label>
                    <input
                        type="email"
                        id="reset-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Wprowadź swój email"
                        disabled={isLoading}
                        autoComplete="email"
                        autoFocus
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button
                    type="submit"
                    className="auth-btn primary full-width"
                    disabled={isLoading}
                >
                    {isLoading ? 'Wysyłanie...' : 'Wyślij link resetujący'}
                </button>
            </form>

            <div className="auth-footer">
                <p>
                    Pamiętasz hasło?{' '}
                    <button className="link-btn" onClick={onBackToLogin}>
                        Zaloguj się
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
