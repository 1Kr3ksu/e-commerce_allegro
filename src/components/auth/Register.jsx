import { useState } from 'react';

function Register({ onClose, switchToLogin, userType = 'buyer' }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Hasła się nie zgadzają');
            return;
        }
        // Tu będzie logika rejestracji
        console.log('Rejestracja:', { ...formData, userType });
    };

    return (
        <div className="auth-form register-form">
            <div className="auth-header">
                <h2>
                    {userType === 'buyer' ? 'Rejestracja dla kupującego' : 'Rejestracja dla sprzedającego'}
                </h2>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">Imię</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Wpisz swoje imię"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Nazwisko</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Wpisz swoje nazwisko"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Adres e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Wpisz swój adres e-mail"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Wymyśl hasło"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Powtórz hasło</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Powtórz hasło"
                        required
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            required
                        />
                        <span>Akceptuję <a href="#">Regulamin</a> i <a href="#">Politykę Prywatności</a></span>
                    </label>
                </div>

                <button type="submit" className="auth-submit-btn">
                    Załóż konto
                </button>
            </form>

            <div className="auth-footer">
                <div className="switch-mode">
                    <span>Masz już konto? </span>
                    <button onClick={switchToLogin} className="switch-btn">
                        Zaloguj się
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;