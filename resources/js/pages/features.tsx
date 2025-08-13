import { AlertTriangle, ArrowRight, BarChart2, Check, Cloud, Database, Lock, Menu, Settings, Shield, TrendingUp, Users, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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

            {/* Navigation */}
            <nav className="relative z-40 px-6 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-2xl font-bold text-transparent">INSPEKSI</span>
                    </div>

                    <div className="hidden items-center space-x-8 md:flex">
                        <a href="/" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                            Home
                        </a>
                        <a href="#features" className="border-b-2 border-blue-400 font-medium text-blue-400">
                            Features
                        </a>
                        <a href="#technology" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                            Technology
                        </a>
                        <a href="#contact" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                            Contact
                        </a>
                        <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-900">
                            Get Started
                        </button>
                    </div>

                    <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-blue-800/30 bg-black/95 backdrop-blur-sm md:hidden`}>
                    <div className="space-y-4 px-6 py-4">
                        <a href="/" className="block font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                            Home
                        </a>
                        <a href="#features" className="block font-medium text-blue-400">
                            Features
                        </a>
                        <a href="#technology" className="block font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                            Technology
                        </a>
                        <a href="#contact" className="block font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                            Contact
                        </a>
                        <button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-900">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="features" className="relative z-10 px-6 py-20 md:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full border border-blue-700/50 bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-300">
                            <Zap className="mr-2 h-4 w-4" />
                            Comprehensive Feature Set
                        </div>
                        <h1 className="mb-8 text-4xl font-bold md:text-6xl lg:text-7xl">
                            Powerful <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Features</span> for
                            Modern Inspection
                        </h1>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300">
                            Our comprehensive suite of features is designed to streamline your inspection processes, enhance accuracy, and provide
                            actionable insights for better decision making.
                        </p>
                    </div>

                    {/* Core Features */}
                    <div className="mb-20 grid gap-16 lg:grid-cols-2">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-blue-400">Core Inspection Capabilities</h2>
                            <p className="text-lg text-gray-300">
                                Our platform provides everything you need for comprehensive industrial inspection, from data collection to analysis
                                and reporting.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: 'Automated Defect Detection',
                                        desc: 'AI-powered algorithms identify potential issues with 99.9% accuracy, reducing human error and increasing inspection speed.',
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: 'Predictive Maintenance',
                                        desc: 'Analyze historical data to predict equipment failures before they occur, minimizing downtime and maintenance costs.',
                                    },
                                    {
                                        icon: BarChart2,
                                        title: 'Real-time Analytics',
                                        desc: 'Monitor key performance indicators and receive instant alerts when parameters fall outside acceptable ranges.',
                                    },
                                    {
                                        icon: Cloud,
                                        title: 'Cloud-Based Reporting',
                                        desc: 'Generate comprehensive inspection reports automatically and access them from anywhere at any time.',
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 rounded-lg border border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-gray-900/20 p-4"
                                    >
                                        <feature.icon className="mt-1 h-8 w-8 flex-shrink-0 text-blue-400" />
                                        <div>
                                            <h3 className="mb-1 text-xl font-semibold">{feature.title}</h3>
                                            <p className="text-gray-300">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-6 -right-6 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                            <div className="relative rounded-2xl border border-blue-800/30 bg-gradient-to-br from-blue-900/40 to-gray-900/40 p-8 shadow-2xl backdrop-blur-sm">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                        <div>
                                            <div className="text-sm text-gray-300">Inspection Completion</div>
                                            <div className="text-2xl font-bold text-blue-400">98.7%</div>
                                        </div>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                                            <Check className="h-8 w-8 text-blue-400" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                        <div>
                                            <div className="text-sm text-gray-300">Anomalies Detected</div>
                                            <div className="text-2xl font-bold text-blue-400">2,347</div>
                                        </div>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                                            <AlertTriangle className="h-8 w-8 text-red-400" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg border border-blue-800/30 bg-black/50 p-4">
                                        <div>
                                            <div className="text-sm text-gray-300">Active Inspections</div>
                                            <div className="text-2xl font-bold text-blue-400">156</div>
                                        </div>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                                            <Zap className="h-8 w-8 text-green-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Features */}
                    <div className="mb-20">
                        <h2 className="mb-12 text-center text-3xl font-bold text-blue-400">Advanced Features</h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: Users,
                                    title: 'Team Collaboration',
                                    description:
                                        'Enable seamless collaboration between inspection teams with shared workspaces, task assignments, and real-time updates.',
                                },
                                {
                                    icon: Settings,
                                    title: 'Custom Workflows',
                                    description:
                                        'Create and customize inspection workflows tailored to your specific processes and compliance requirements.',
                                },
                                {
                                    icon: Database,
                                    title: 'Historical Data Archive',
                                    description:
                                        'Store and analyze years of inspection data to identify long-term trends and improve operational efficiency.',
                                },
                                {
                                    icon: Cloud,
                                    title: 'Remote Access',
                                    description: 'Access inspection data and reports from anywhere using our secure mobile and web applications.',
                                },
                                {
                                    icon: Lock,
                                    title: 'Role-Based Security',
                                    description: 'Implement granular access controls with different permission levels for various user roles.',
                                },
                                {
                                    icon: Zap,
                                    title: 'Instant Alerts',
                                    description:
                                        'Receive immediate notifications via email, SMS, or in-app alerts when critical issues are detected.',
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="transform rounded-xl border border-blue-800/30 bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600/50"
                                >
                                    <feature.icon className="mb-6 h-12 w-12 text-blue-400" />
                                    <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                                    <p className="leading-relaxed text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Comparison */}
                    <div className="rounded-2xl border border-blue-800/50 bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-8 backdrop-blur-sm md:p-12">
                        <h2 className="mb-12 text-center text-3xl font-bold">Feature Comparison</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-blue-800/30">
                                        <th className="px-4 py-4 text-left font-bold text-blue-400">Feature</th>
                                        <th className="px-4 py-4 text-center font-bold">Basic</th>
                                        <th className="px-4 py-4 text-center font-bold text-blue-400">Professional</th>
                                        <th className="px-4 py-4 text-center font-bold">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        'Automated Defect Detection',
                                        'Predictive Maintenance',
                                        'Real-time Analytics',
                                        'Cloud Reporting',
                                        'Team Collaboration',
                                        'Custom Workflows',
                                        'Historical Data Archive',
                                        'Remote Access',
                                        'Role-Based Security',
                                        'Instant Alerts',
                                    ].map((feature, index) => (
                                        <tr key={index} className="border-b border-blue-800/20">
                                            <td className="px-4 py-4 font-medium">{feature}</td>
                                            <td className="px-4 py-4 text-center">
                                                {index < 4 ? <Check className="inline h-5 w-5 text-green-400" /> : '-'}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <Check className="inline h-5 w-5 text-blue-400" />
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <Check className="inline h-5 w-5 text-blue-400" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-4xl font-bold">
                        Ready to Transform Your{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Inspection Process?</span>
                    </h2>
                    <p className="mb-8 text-xl text-gray-300">
                        Experience the power of our comprehensive inspection platform with a free 30-day trial.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="group flex transform items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-900">
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <button className="rounded-full border border-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-blue-900/20">
                            Schedule Demo
                        </button>
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
