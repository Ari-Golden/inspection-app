import { useState } from "react";
import { Shield, Lock, Mail, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "@inertiajs/react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Keep for button loading state

  const form = useForm({
    email: '',
    password: '',
    name: '',
    company: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      form.post(route('login'), {
        onFinish: () => setIsLoading(false),
      });
    } else {
      form.post(route('register'), {
        onFinish: () => setIsLoading(false),
      });
    }
  };

  const handleToggle = (loginMode) => {
    setIsLogin(loginMode);
    form.reset(); // Reset form data when toggling between login/register
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gradient-to-br from-blue-900/40 to-gray-900/40 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              INSPEKSI
            </h1>
            <p className="text-gray-400 mt-2">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex bg-black/50 rounded-lg p-1 mb-8 border border-blue-800/30">
            <button
              onClick={() => handleToggle(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                isLogin 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => handleToggle(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                !isLogin 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={form.data.name}
                      onChange={(e) => form.setData('name', e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-blue-800/30 rounded-lg bg-black/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required={!isLogin}
                    />
                  </div>
                  {form.errors.name && <div className="text-red-500 text-sm mt-1">{form.errors.name}</div>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BuildingIcon className="h-5 w-5 text-blue-400" />
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={form.data.company}
                      onChange={(e) => form.setData('company', e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-blue-800/30 rounded-lg bg-black/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                      required={!isLogin}
                    />
                  </div>
                  {form.errors.company && <div className="text-red-500 text-sm mt-1">{form.errors.company}</div>}
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.data.email}
                  onChange={(e) => form.setData('email', e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-blue-800/30 rounded-lg bg-black/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {form.errors.email && <div className="text-red-500 text-sm mt-1">{form.errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.data.password}
                  onChange={(e) => form.setData('password', e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-blue-800/30 rounded-lg bg-black/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
              {form.errors.password && <div className="text-red-500 text-sm mt-1">{form.errors.password}</div>}
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={form.data.remember}
                    onChange={(e) => form.setData('remember', e.target.checked)}
                    className="h-4 w-4 bg-black/50 border-blue-800/30 rounded focus:ring-blue-500 text-blue-600"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href={route('password.request')} className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || form.processing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:from-gray-600 disabled:to-gray-700 px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              {isLoading || form.processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-800/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Google', 'Microsoft', 'Apple'].map((provider) => (
                <div
                  key={provider}
                  className="flex items-center justify-center px-4 py-3 border border-blue-800/30 rounded-lg bg-black/50 hover:bg-blue-900/20 cursor-pointer transition-all duration-300"
                >
                  <span className="text-sm font-medium text-gray-300">{provider}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => handleToggle(!isLogin)}
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6 text-sm text-gray-500">
          By continuing, you agree to our{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

// BuildingIcon component for company field
function BuildingIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}