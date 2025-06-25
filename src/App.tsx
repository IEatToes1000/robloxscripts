import React, { useState, useEffect } from 'react';
import { Play, Code, Zap, Shield, Star, ExternalLink, ArrowRight } from 'lucide-react';

interface ScriptItem {
  title: string;
  url: string;
  isHighlighted?: boolean;
}

interface ScriptCategory {
  title: string;
  icon: React.ReactNode;
  scripts: ScriptItem[];
  color: string;
}

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scriptCategories: ScriptCategory[] = [
    {
      title: "Grow A Garden",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-400 to-emerald-600",
      scripts: [
        { title: "Grow a Garden Script GUI", url: "https://lockr.so/4DYYuUM6B" },
        { title: "[☀️ UPDATED] Grow a Garden 🍏 Script", url: "https://lockr.so/N1qGm937R", isHighlighted: true }
      ]
    },
    {
      title: "Jail Break Scripts",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-600",
      scripts: [
        { title: "Jail Break Script Updated - Auto Rob, Kill Aura, Arrest All, Infinite Money", url: "https://lockr.so/gptWzc96C" },
        { title: "Jail Break Script $1 Mil/Hour", url: "https://lockr.so/SDHGynnRS", isHighlighted: true }
      ]
    },
    {
      title: "Steal A Brainrot Scripts",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-400 to-pink-600",
      scripts: [
        { title: "Steal A Brainrot Script No Key *UPDATED*", url: "https://lockr.so/VfWjvdobX", isHighlighted: true },
        { title: "Insane Steal a Brainrot Script | OP Steal, No-Clip, Secrets & More! No Key", url: "https://www.ghostbin.cloud/b3x3i" }
      ]
    },
    {
      title: "Anime Saga Script",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-400 to-red-600",
      scripts: [
        { title: "NEW Anime Saga Script (2025) – Auto Skill, Heal, Farm & More!", url: "https://lockr.so/hWG2KF8Lt", isHighlighted: true }
      ]
    },
    {
      title: "Bubble Gum Simulator",
      icon: <Play className="w-6 h-6" />,
      color: "from-pink-400 to-purple-600",
      scripts: [
        { title: "OP Bubble Gum Simulator Infinity Script!", url: "https://lockr.so/v8h2SRrFg", isHighlighted: true }
      ]
    },
    {
      title: "Fisch Script",
      icon: <Zap className="w-6 h-6" />,
      color: "from-teal-400 to-blue-600",
      scripts: [
        { title: "Best Auto-Farm Fish, Auto-Sell, Shake & More", url: "https://lockr.so/rdEWOPCqG", isHighlighted: true }
      ]
    }
  ];

  useEffect(() => {
    if (showOptions) {
      document.body.style.overflow = 'auto';
    }
  }, [showOptions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10">
        {!showOptions ? (
          // Welcome Screen
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Roblox Scripts
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Premium collection of the most powerful scripts
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Always Updated</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>No Key Required</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span>Premium Quality</span>
                  </span>
                </div>
                
                <button
                  onClick={() => setShowOptions(true)}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="text-lg">Enter Hub</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Scripts Hub
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  Script Hub
                </h1>
                <p className="text-xl text-gray-300 font-light">
                  Choose your adventure
                </p>
              </div>

              {/* Scripts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scriptCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(categoryIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-gray-700/50 transition-all duration-500 hover:border-gray-600/50 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl ${
                      hoveredCard === categoryIndex ? 'shadow-2xl' : ''
                    }`}>
                      {/* Category Header */}
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
                          {category.icon}
                        </div>
                        <h2 className="text-xl font-bold text-white">
                          {category.title}
                        </h2>
                      </div>

                      {/* Scripts List */}
                      <div className="space-y-3">
                        {category.scripts.map((script, scriptIndex) => (
                          <a
                            key={scriptIndex}
                            href={script.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/script block relative p-4 rounded-xl transition-all duration-300 hover:scale-102 ${
                              script.isHighlighted 
                                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-600/30 hover:to-purple-600/30' 
                                : 'bg-gray-700/30 hover:bg-gray-700/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className={`text-sm font-medium leading-relaxed ${
                                  script.isHighlighted ? 'text-blue-200' : 'text-gray-300'
                                } group-hover/script:text-white transition-colors`}>
                                  {script.title}
                                </p>
                                {script.isHighlighted && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-2">
                                    ⭐ Featured
                                  </span>
                                )}
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover/script:text-white transition-colors ml-2 flex-shrink-0" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="text-center mt-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-lg border border-gray-700/50">
                  <span className="text-gray-400 text-sm">
                    Created by{' '}
                    <span className="text-blue-400 font-medium">@IEatToes0001</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default App;