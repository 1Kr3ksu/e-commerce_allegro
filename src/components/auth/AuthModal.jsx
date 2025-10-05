import { useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from '../forgot_password';

function AuthModal({ isOpen, onClose, mode, userType, onModeChange }) {
    // Zamykanie modal'a po naciśnięciu ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Blokuje scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const switchToLogin = () => {
        onModeChange('login');
    };

    const switchToRegister = (type = 'buyer') => {
        onModeChange('register', type);
    };

    const switchToForgotPassword = () => {
        onModeChange('forgot-password');
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {mode === 'login' && (
                    <Login
                        onClose={onClose}
                        switchToRegister={() => switchToRegister('buyer')}
                        switchToForgotPassword={switchToForgotPassword}
                    />
                )}
                {mode === 'register' && (
                    <Register
                        onClose={onClose}
                        switchToLogin={switchToLogin}
                        userType={userType}
                    />
                )}
                {mode === 'forgot-password' && (
                    <ForgotPassword
                        onClose={onClose}
                        onBackToLogin={switchToLogin}
                    />
                )}
            </div>
        </div>
    );
}

export default AuthModal;