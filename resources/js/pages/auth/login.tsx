import { Head, useForm } from '@inertiajs/react';
import { Eye, EyeOff, LoaderCircle, Lock, Mail, Shield } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth/auth-split-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Log in" />

            <div className="flex min-h-screen items-center justify-center overflow-hidden bg-black p-4 text-white">
                {/* Animated Background */}
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/20"></div>
                    <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-700/10 blur-3xl delay-1000"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage: `
                                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                            `,
                                backgroundSize: '50px 50px',
                            }}
                        ></div>
                    </div>
                </div>

                {/* Login Container */}
                <div className="relative z-10 w-full max-w-md">
                    <div className="rounded-2xl border border-blue-800/50 bg-gradient-to-br from-blue-900/40 to-gray-900/40 p-8 shadow-2xl backdrop-blur-sm">
                        {/* Logo */}
                        <div className="mb-8 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h1 className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-3xl font-bold text-transparent">INSPEKSI</h1>
                            <p className="mt-2 text-gray-400">Welcome back</p>
                        </div>

                        <form method="POST" className="space-y-6" onSubmit={submit}>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                                        Email address
                                    </Label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <Mail className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="Enter your email"
                                            className="block w-full rounded-lg border border-blue-800/30 bg-black/50 py-3 pr-3 pl-10 placeholder-gray-500 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={route('password.request')}
                                                className="text-sm text-blue-400 hover:text-blue-300"
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <Lock className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <Input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder="Enter your password"
                                            className="block w-full rounded-lg border border-blue-800/30 bg-black/50 py-3 pr-10 pl-10 placeholder-gray-500 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                                            ) : (
                                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                                            )}
                                        </button>
                                    </div>
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onClick={() => setData('remember', !data.remember)}
                                        tabIndex={3}
                                        className="border-blue-800/30 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                                    />
                                    <Label htmlFor="remember" className="text-gray-300">
                                        Remember me
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-4 flex w-full transform items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-900 disabled:from-gray-600 disabled:to-gray-700"
                                    tabIndex={4}
                                    disabled={processing}
                                >
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    <span>Log in</span>
                                </Button>
                            </div>

                            <div className="text-center text-sm text-gray-400">
                                Don't have an account?{' '}
                                <TextLink
                                    href={route('register')}
                                    className="font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
                                >
                                    Sign up
                                </TextLink>
                            </div>

                            {status && (
                                <div className="mb-4 rounded-lg bg-green-500/10 px-4 py-2 text-center text-sm font-medium text-green-500">
                                    {status}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Footer Text */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        By continuing, you agree to our{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
