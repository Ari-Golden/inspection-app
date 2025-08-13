import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import NavigationMenu from './NavigationMenu';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative z-40 px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a href="/" className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                        <Shield className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-2xl font-bold text-transparent">INSPEKSI</span>
                </a>

                <NavigationMenu />

                <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-blue-800/30 bg-black/95 backdrop-blur-sm md:hidden`}>
                <div className="space-y-4 px-6 py-4">
                    <a href="#features" className="block font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                        Features
                    </a>
                    <a href="#technology" className="block font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                        Technology
                    </a>
                    <a href="#integration" className="block font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                        Integration
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
    );
};

export default NavBar;
