import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { login, register, isLoggedIn } from '../libs/api/api_utils';

const Auth = () => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await login(loginForm.email, loginForm.password);
      setLoading(false);
      if (res.access_token && isLoggedIn()) {
        setSuccess('Logged in successfully!');
        navigate('/dashboard');
      } else if (res.detail) {
        setError(res.detail);
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Login error');
      console.error(err);
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await register(registerForm.email, registerForm.password);
      setLoading(false);
      if (res.access_token) {
        setSuccess('Account created successfully! Please login.');
        setAuthMode('login');
      } else if (res.detail) {
        setError(res.detail);
      } else {
        setError('Registration failed');
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Registration error');
      console.error(err);
    }
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/background2.webp"
        alt="Auth background"
        style={{ pointerEvents: 'none' }}
      />
      <div
        className="border border-luxury-gold rounded-2xl shadow-xl p-8 w-full max-w-md text-center backdrop-blur-md relative z-10"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <h1 className="font-luxury text-3xl md:text-4xl text-luxury-gold mb-8">Welcome!</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        {loading && (
          <div className="flex justify-center my-4">
            <ClipLoader color="#FFD700" size={35} />
          </div>
        )}

        {!authMode && !loading && (
          <div className="flex flex-col gap-6">
            <button
              className="w-full px-6 py-4 rounded-lg bg-luxury-gold text-navy-blue cursor-pointer font-luxury text-lg font-semibold shadow-lg hover:bg-luxury-gold/90 transition-all duration-300"
              onClick={() => setAuthMode('login')}
            >
              Log In
            </button>
            <button
              className="w-full px-6 py-4 rounded-lg bg-white text-navy-blue font-luxury cursor-pointer text-lg font-semibold border border-luxury-gold shadow-lg hover:bg-luxury-gold/10 transition-all duration-300"
              onClick={() => setAuthMode('register')}
            >
              Create an Account
            </button>
            <button
              className="w-full px-6 py-2 rounded-lg bg-transparent text-luxury-gold font-luxury cursor-pointer text-base font-semibold border-none mt-2"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        )}

        {authMode === 'login' && !loading && (
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <h2 className="font-luxury text-2xl text-white mb-2 uppercase tracking-widest">LOG IN</h2>
            <input
              className="px-4 py-2 rounded border font-luxury text-navy-blue"
              type="email"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginChange}
              required
            />
            <input
              className="px-4 py-2 rounded border font-luxury text-navy-blue"
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
              required
            />
            <button
              className="px-6 py-3 rounded-lg bg-luxury-gold text-navy-blue font-luxury font-semibold cursor-pointer"
              type="submit"
            >
              LOG IN
            </button>
            <button
              type="button"
              className="text-sm underline font-luxury text-white mt-2 cursor-pointer"
              onClick={() => setAuthMode(null)}
            >
              Back
            </button>
          </form>
        )}

        {authMode === 'register' && !loading && (
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <h2 className="font-luxury text-2xl text-white mb-2 uppercase tracking-widest">CREATE ACCOUNT</h2>
            <input
              className="px-4 py-2 rounded border font-luxury text-navy-blue"
              type="email"
              name="email"
              placeholder="Email"
              value={registerForm.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              className="px-4 py-2 rounded border font-luxury text-navy-blue"
              type="password"
              name="password"
              placeholder="Password"
              value={registerForm.password}
              onChange={handleRegisterChange}
              required
            />
            <button
              className="px-6 py-3 rounded-lg bg-luxury-gold text-navy-blue font-luxury font-semibold cursor-pointer"
              type="submit"
            >
              CREATE ACCOUNT
            </button>
            <button
              type="button"
              className="text-sm underline font-luxury text-white mt-2 cursor-pointer"
              onClick={() => setAuthMode(null)}
            >
              Back
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Auth;
