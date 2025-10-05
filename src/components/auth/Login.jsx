import { useState } from 'react';

function Login({ onClose, switchToRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tu będzie logika logowania
        console.log('Logowanie:', { email, password });
    };

    return (
        <div className="auth-form">
            <div className="auth-header">
                <h2>Zaloguj się</h2>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Adres e-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Wpisz swój adres e-mail"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Wpisz swoje hasło"
                        required
                    />
                </div>

                <button type="submit" className="auth-submit-btn">
                    Zaloguj się
                </button>
            </form>

            <div className="auth-footer">
                <a href="#" className="forgot-password">Zapomniałeś hasła?</a>
                <div className="switch-mode">
                    <span>Nie masz konta? </span>
                    <button onClick={switchToRegister} className="switch-btn">
                        Zarejestruj się
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;