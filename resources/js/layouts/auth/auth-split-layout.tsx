import AppLogoIcon from '@/components/app-logo-icon';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const { name, quote } = usePage<SharedData>().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center bg-black px-4 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            {/* Left Side - Hero Section */}
            <div className="relative hidden h-full flex-col lg:flex">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-900"></div>
                    <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>
                    <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-700/20 blur-3xl delay-1000"></div>

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

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col p-12 text-white">
                    <Link href={route('home')} className="mb-8 flex items-center text-lg font-medium">
                        <AppLogoIcon className="mr-3 size-8 fill-current text-blue-400" />
                        <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
                            {name || 'INSPEKSI'}
                        </span>
                    </Link>

                    <div className="flex flex-1 flex-col justify-center">
                        <h2 className="mb-6 text-4xl leading-tight font-bold">
                            Revolutionizing{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Industrial Inspection</span>
                        </h2>
                        <p className="mb-12 max-w-lg text-xl leading-relaxed text-gray-300">
                            Harnessing cutting-edge technology for comprehensive, real-time inspection solutions that ensure safety, compliance, and
                            operational excellence.
                        </p>

                        {quote && (
                            <div className="mt-8 max-w-md rounded-xl border border-blue-800/50 bg-gradient-to-r from-blue-900/30 to-gray-900/30 p-6 backdrop-blur-sm">
                                <blockquote className="space-y-4">
                                    <p className="text-lg leading-relaxed">&ldquo;{quote.message}&rdquo;</p>
                                    <footer className="text-sm font-medium text-blue-300">— {quote.author}</footer>
                                </blockquote>
                            </div>
                        )}
                    </div>

                    <div className="mt-auto">
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                                <div className="text-sm text-gray-400">Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">24/7</div>
                                <div className="text-sm text-gray-400">Monitoring</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">100+</div>
                                <div className="text-sm text-gray-400">Integrations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="flex w-full items-center justify-center bg-black p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-lg">
                    <div className="mx-auto">
                        {/* Mobile Logo */}
                        <Link href={route('home')} className="mb-6 flex items-center justify-center lg:hidden">
                            <AppLogoIcon className="h-12 fill-current text-blue-500" />
                            <span className="ml-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
                                {name || 'INSPEKSI'}
                            </span>
                        </Link>

                        {/* Form Header */}
                        {/* <div className="mb-6 flex flex-col items-start gap-3 text-left sm:items-center sm:text-center">
                            <h1 className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-3xl font-bold text-transparent">{title}</h1>
                            <p className="max-w-sm text-center text-sm text-gray-400">{description}</p>
                        </div> */}

                        {/* Form Content */}

                        {children}

                        {/* Footer */}
                        <div className="mt-6 text-center text-xs text-gray-500">
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
            </div>
        </div>
    );
}
