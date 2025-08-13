import { Cloud, Zap, Shield } from 'lucide-react'; // Shield added back
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'; // Import NavBar

export default function Features() {
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
                    <p className="text-lg font-semibold text-blue-400">Loading Features...</p>
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

            <NavBar /> {/* Use NavBar component */}

            {/* Features Section */}
            <section id="features" className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                            Advanced <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Technology</span>{' '}
                            Stack
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-300">
                            Our integrated system combines multiple cutting-edge technologies to deliver unparalleled inspection capabilities and
                            insights.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Shield, // Shield is used here, so it needs to be imported
                                title: 'AI-Powered Analysis',
                                description:
                                    'Machine learning algorithms detect anomalies with 99.9% accuracy, learning from millions of data points to improve over time.',
                            },
                            {
                                icon: Zap,
                                title: 'Real-time Monitoring',
                                description:
                                    'Continuous surveillance with instant alerts and automated responses to potential issues before they become critical.',
                            },
                            {
                                icon: Cloud,
                                title: 'Seamless Integration',
                                description: 'Connect with existing systems and platforms through our robust API ecosystem and pre-built connectors.',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="transform rounded-xl border border-blue-800/30 bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/50"
                            >
                                <feature.icon className="mb-6 h-12 w-12 text-blue-400" />
                                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                                <p className="leading-relaxed text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 mt-20 border-t border-blue-800/30">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 flex items-center space-x-2 md:mb-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                                <Shield className="h-5 w-5 text-white" /> {/* Shield is used here */}
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