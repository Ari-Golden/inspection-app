import { ArrowRight, Cloud, Cpu, Database, Lock, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'; // Import NavBar

export default function App() {
    const [isLoading, setIsLoading] = useState(true); // isMenuOpen and setIsMenuOpen removed

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                    <p className="text-lg font-semibold text-blue-400">Loading Inspeksi System...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen overflow-hidden bg-black text-white">
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

            <NavBar />

            {/* Hero Section */}
            <section className="relative z-10 px-6 py-20 md:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-full border border-blue-700/50 bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-300">
                                    <Zap className="mr-2 h-4 w-4" />
                                    Next-Gen Inspection Technology
                                </div>
                                <h1 className="text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
                                    <span className="block">Revolutionizing</span>
                                    <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                                        Industrial Inspeksi
                                    </span>
                                </h1>
                                <p className="text-xl leading-relaxed text-gray-300">
                                    Harnessing cutting-edge technology for comprehensive, real-time inspection solutions that ensure safety,
                                    compliance, and operational excellence across all industries.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a href="/login" className="group flex transform items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-900">
                                    Start Inspection
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <button className="rounded-full border border-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-blue-900/20">
                                    Watch Demo
                                </button>
                            </div>

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

                        <div className="relative">
                            <div className="relative">
                                <div className="absolute -top-4 -right-4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                                <div
                                    className="absolute -bottom-4 -left-4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"
                                    style={{ animationDelay: '1s' }}
                                ></div>

                                <div className="relative rounded-2xl border border-blue-800/30 bg-gradient-to-br from-blue-900/40 to-gray-900/40 p-8 shadow-2xl backdrop-blur-sm">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                                <Cpu className="mb-2 h-8 w-8 text-blue-400" />
                                                <div className="text-sm text-gray-300">AI Analysis</div>
                                                <div className="text-xs text-blue-400">Real-time</div>
                                            </div>
                                            <div className="rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                                <Cloud className="mb-2 h-8 w-8 text-blue-400" />
                                                <div className="text-sm text-gray-300">Cloud Sync</div>
                                                <div className="text-xs text-blue-400">Secure</div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                                <Database className="mb-2 h-8 w-8 text-blue-400" />
                                                <div className="text-sm text-gray-300">Data Storage</div>
                                                <div className="text-xs text-blue-400">Encrypted</div>
                                            </div>
                                            <div className="rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                                <Lock className="mb-2 h-8 w-8 text-blue-400" />
                                                <div className="text-sm text-gray-300">Security</div>
                                                <div className="text-xs text-blue-400">Enterprise</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-lg border border-blue-800/30 bg-black/30 p-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-300">System Status</span>
                                            <span className="flex items-center text-green-400">
                                                <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                                                Operational
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Footer */}
            <footer className="relative z-10 mt-20 border-t border-blue-800/30">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 flex items-center space-x-2 md:mb-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-xl font-bold text-transparent">
                                INSPEKSI
                            </span>
                        </div>
                        <div className="text-sm text-gray-400">© 2024 Inspeksi. All rights reserved. Built with cutting-edge technology.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
