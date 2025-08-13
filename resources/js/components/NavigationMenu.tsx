import React from 'react';

const NavigationMenu: React.FC = () => {
    return (
        <div className="hidden items-center space-x-8 md:flex">
            <a href="/features" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                Features
            </a>
            <a href="/technology" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                Technology
            </a>
            <a href="/integration" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                Integration
            </a>
            <a href="#contact" className="font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400">
                Contact
            </a>
            <a href="/register" className="transform rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-900">
                Get Started
            </a>
        </div>
    );
};

export default NavigationMenu;
