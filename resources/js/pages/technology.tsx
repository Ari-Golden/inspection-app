import { useState, useEffect } from "react";
import { Shield, Zap, Cpu, Database, Cloud, Lock, ArrowRight, Menu, X, Code, Cpu as CpuIcon, Globe, Server, GitBranch, Network } from "lucide-react";

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
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-blue-400 text-lg font-semibold">
            Loading Inspeksi System...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              INSPEKSI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Home</a>
            <a href="#technology" className="text-blue-400 font-medium border-b-2 border-blue-400">Technology</a>
            <a href="#integration" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Integration</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black/95 backdrop-blur-sm border-t border-blue-800/30`}>
          <div className="px-6 py-4 space-y-4">
            <a href="/" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Home</a>
            <a href="#technology" className="block text-blue-400 font-medium">Technology</a>
            <a href="#integration" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Integration</a>
            <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-6 py-2 rounded-full font-semibold transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="technology" className="relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-300 text-sm font-medium mb-6">
              <CpuIcon className="w-4 h-4 mr-2" />
              Advanced Technology Stack
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Technology</span> Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our inspection system leverages the most advanced technologies in artificial intelligence, 
              cloud computing, and real-time data processing to deliver unparalleled accuracy and reliability.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400">AI & Machine Learning</h2>
              <p className="text-gray-300 text-lg">
                Our proprietary AI algorithms analyze millions of data points to detect anomalies with 
                unprecedented accuracy and continuously improve through machine learning.
              </p>
              
              <div className="space-y-4">
                {[
                  "Deep Neural Networks for pattern recognition",
                  "Computer Vision for visual inspection",
                  "Predictive analytics for maintenance forecasting",
                  "Natural Language Processing for report generation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400">Cloud Infrastructure</h2>
              <p className="text-gray-300 text-lg">
                Built on a secure, scalable cloud architecture that ensures 24/7 availability and 
                seamless integration with your existing systems.
              </p>
              
              <div className="space-y-4">
                {[
                  "Multi-region deployment for redundancy",
                  "End-to-end encryption for data security",
                  "Auto-scaling to handle peak loads",
                  "Real-time data synchronization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Cpu,
                title: "Advanced Processing",
                description: "High-performance computing clusters process terabytes of inspection data in real-time with sub-millisecond latency."
              },
              {
                icon: Database,
                title: "Data Intelligence",
                description: "Our distributed database system stores and analyzes historical data to identify trends and predict future issues."
              },
              {
                icon: Network,
                title: "IoT Integration",
                description: "Seamless connectivity with thousands of sensors and devices across your infrastructure for comprehensive monitoring."
              },
              {
                icon: Code,
                title: "API Ecosystem",
                description: "Robust APIs allow easy integration with existing enterprise systems and custom application development."
              },
              {
                icon: Globe,
                title: "Global Access",
                description: "Secure web and mobile interfaces provide access to inspection data from anywhere in the world."
              },
              {
                icon: GitBranch,
                title: "Modular Architecture",
                description: "Flexible, component-based design allows customization for specific industry requirements and use cases."
              }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 backdrop-blur-sm border border-blue-800/30 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <tech.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/30 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Performance & Reliability</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "99.99%", label: "System Uptime", desc: "Enterprise-grade reliability" },
                { value: "<100ms", label: "Response Time", desc: "Real-time processing" },
                { value: "24/7", label: "Monitoring", desc: "Continuous surveillance" },
                { value: "100%", label: "Data Encryption", desc: "End-to-end security" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-800/30 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                INSPEKSI
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Inspeksi. All rights reserved. Built with cutting-edge technology.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}