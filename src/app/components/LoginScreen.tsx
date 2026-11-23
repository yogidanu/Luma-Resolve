import React, { useState } from 'react';
import { Loader2, Sparkles, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import svgPaths from '../imports/svg-qy3ib0tgdz';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSampleCredentials = () => {
    setEmail('agent@lumasolve.com');
    setPassword('demo1234');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      if (email && password) {
        onLogin();
      } else {
        setError('Please enter your credentials to continue.');
        setIsLoading(false);
      }
    }, 900);
  };

  const features = [
    { icon: Zap,        label: 'AI-powered resolution' },
    { icon: ShieldCheck,label: 'Enterprise security'   },
    { icon: Users,      label: 'Team collaboration'    },
  ];

  return (
    <div className="min-h-screen flex overflow-hidden bg-white">
      {/* ── Left Panel — Brand / Illustration ── */}
      <div className="hidden lg:flex w-[46%] flex-col relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, hsl(258,90%,62%) 0%, hsl(258,80%,48%) 50%, hsl(285,75%,45%) 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
        <div className="absolute bottom-[30%] right-[-40px] w-40 h-40 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <Sparkles size={17} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white text-[18px] font-bold tracking-tight">LumaResolve</span>
          </div>

          {/* Main headline */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            <div>
              <h1 className="text-4xl font-bold text-white leading-tight tracking-tight">
                Resolve tickets<br />faster with AI
              </h1>
              <p className="text-white/70 text-[15px] mt-4 leading-relaxed max-w-xs">
                Your intelligent customer support platform. Let AI handle the analysis while you focus on people.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-col gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center border border-white/20">
                    <Icon size={15} className="text-white" strokeWidth={2} />
                  </div>
                  <span className="text-white/85 text-[13px] font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Testimonial / social proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="text-white/90 text-[13px] leading-relaxed italic">
                "LumaResolve cut our average resolution time by 40%. The AI suggestions are surprisingly accurate."
              </p>
              <div className="flex items-center gap-2.5 mt-3">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">SC</span>
                </div>
                <div>
                  <p className="text-white text-[12px] font-semibold leading-tight">Sarah Chen</p>
                  <p className="text-white/60 text-[11px]">Head of Support, Acme Corp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-white/40 text-[11px]">© 2025 LumaResolve · v2.4.0</p>
        </div>
      </div>

      {/* ── Right Panel — Login Form ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-[400px] space-y-8">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2.5 justify-center mb-2">
            <div className="w-8 h-8 rounded-lg ai-gradient flex items-center justify-center ai-glow">
              <Sparkles size={15} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[18px] font-bold brand-gradient-text">LumaResolve</span>
          </div>

          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-[26px] font-bold text-gray-900 tracking-tight">Welcome back</h2>
            <p className="text-[14px] text-gray-400 mt-1">Sign in to your support dashboard</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-[13px] px-4 py-3 rounded-xl animate-fade-in">
              {error}
            </div>
          )}

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5"
          >
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-[13px] font-semibold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="you@company.com"
                required
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-150 ${
                  focusedField === 'email'
                    ? 'bg-white border-violet-400 ring-4 ring-violet-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-[13px] font-semibold text-gray-700">
                  Password
                </label>
                <button type="button" className="text-[12px] text-violet-600 hover:text-violet-800 font-medium transition-colors">
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter your password"
                required
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-150 ${
                  focusedField === 'password'
                    ? 'bg-white border-violet-400 ring-4 ring-violet-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 rounded-xl font-semibold text-[14px] text-white flex items-center justify-center gap-2.5 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: isLoading
                  ? 'hsl(258,90%,62%)'
                  : 'linear-gradient(135deg, hsl(258,90%,62%) 0%, hsl(270,80%,56%) 100%)',
                boxShadow: isLoading ? 'none' : '0 4px 14px hsl(258,90%,62%,0.4)',
              }}
            >
              {isLoading ? (
                <><Loader2 size={16} className="animate-spin" /> Signing in…</>
              ) : (
                <><ArrowRight size={16} /> Sign In</>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-[12px] text-gray-400 font-medium">or</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Sample credentials */}
            <button
              type="button"
              onClick={handleSampleCredentials}
              className="w-full h-10 rounded-xl border-2 border-dashed border-violet-200 hover:border-violet-400 hover:bg-violet-50/50 text-[13px] font-semibold text-violet-600 hover:text-violet-700 transition-all duration-150 flex items-center justify-center gap-2"
            >
              <Sparkles size={13} />
              Use Demo Credentials
            </button>
          </form>

          <p className="text-center text-[12px] text-gray-400">
            Protected by enterprise-grade encryption
          </p>
        </div>
      </div>
    </div>
  );
}