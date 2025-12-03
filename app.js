import React, { useState, useRef } from 'react';
import { Camera, Search, Heart, BookOpen, TrendingUp, Users, Award, Bell, Settings, Home, Upload, Sparkles, Leaf, Share2, Star, Clock, ChevronRight, Plus, X, Check, Zap, Target, Filter } from 'lucide-react';

const WasteToProductApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedWaste, setSelectedWaste] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const [userPoints, setUserPoints] = useState(1250);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const fileInputRef = useRef(null);

  const wasteTypes = [
    { id: 1, name: 'Plastic Bottles', emoji: '🍾', icon: '♻️', count: 156 },
    { id: 2, name: 'Cardboard', emoji: '📦', icon: '📦', count: 98 },
    { id: 3, name: 'Glass', emoji: '🥃', icon: '🔮', count: 67 },
    { id: 4, name: 'Metal Cans', emoji: '🥫', icon: '🔩', count: 89 },
    { id: 5, name: 'Paper', emoji: '📄', icon: '📰', count: 134 },
    { id: 6, name: 'Fabric', emoji: '👕', icon: '🧵', count: 45 },
    { id: 7, name: 'Wood', emoji: '🪵', icon: '🌲', count: 52 },
    { id: 8, name: 'Electronics', emoji: '📱', icon: '⚡', count: 34 }
  ];

  const suggestions = [
    {
      id: 1,
      title: 'Vertical Garden Planter',
      wasteType: 'Plastic Bottles',
      difficulty: 'Easy',
      time: '30 min',
      materials: ['Plastic bottles', 'Scissors', 'Soil', 'Seeds'],
      impact: 'Saves 5 bottles from landfill',
      rating: 4.8,
      views: 15234,
      likes: 1289,
      description: 'Create a beautiful vertical garden using recycled plastic bottles',
      steps: 5,
      image: '🌱'
    },
    {
      id: 2,
      title: 'Cardboard Organizer',
      wasteType: 'Cardboard',
      difficulty: 'Medium',
      time: '45 min',
      materials: ['Cardboard boxes', 'Glue', 'Decorative paper'],
      impact: 'Reuses 3 boxes',
      rating: 4.6,
      views: 12456,
      likes: 987,
      description: 'Transform cardboard into stylish desk organizers',
      steps: 7,
      image: '📋'
    },
    {
      id: 3,
      title: 'Glass Jar Lantern',
      wasteType: 'Glass',
      difficulty: 'Easy',
      time: '20 min',
      materials: ['Glass jars', 'Paint', 'Candles', 'Wire'],
      impact: 'Prevents 2 jars from waste',
      rating: 4.9,
      views: 18765,
      likes: 1567,
      description: 'Beautiful decorative lanterns from old glass jars',
      steps: 4,
      image: '🕯️'
    },
    {
      id: 4,
      title: 'Tin Can Wind Chimes',
      wasteType: 'Metal Cans',
      difficulty: 'Medium',
      time: '60 min',
      materials: ['Tin cans', 'Paint', 'String', 'Beads'],
      impact: 'Recycles 6 cans',
      rating: 4.7,
      views: 9876,
      likes: 745,
      description: 'Create melodious wind chimes from metal cans',
      steps: 8,
      image: '🎐'
    },
    {
      id: 5,
      title: 'Paper Mache Bowl',
      wasteType: 'Paper',
      difficulty: 'Hard',
      time: '90 min',
      materials: ['Old newspapers', 'Glue', 'Paint', 'Varnish'],
      impact: 'Uses 50 sheets of paper',
      rating: 4.5,
      views: 11234,
      likes: 892,
      description: 'Artistic bowls using paper mache technique',
      steps: 10,
      image: '🥣'
    },
    {
      id: 6,
      title: 'T-Shirt Tote Bag',
      wasteType: 'Fabric',
      difficulty: 'Easy',
      time: '15 min',
      materials: ['Old t-shirts', 'Scissors'],
      impact: 'Saves 1 shirt from disposal',
      rating: 4.9,
      views: 23456,
      likes: 2134,
      description: 'No-sew tote bag from old t-shirts',
      steps: 3,
      image: '👜'
    }
  ];

  const achievements = [
    { id: 1, name: 'Eco Warrior', icon: '🏆', progress: 80, total: 100 },
    { id: 2, name: 'Recycler Pro', icon: '♻️', progress: 45, total: 50 },
    { id: 3, name: 'Creative Mind', icon: '🎨', progress: 23, total: 30 },
    { id: 4, name: 'Community Helper', icon: '🤝', progress: 12, total: 25 }
  ];

  const communityPosts = [
    { id: 1, user: 'Sarah M.', avatar: '👩', project: 'Bottle Lamp', likes: 234, image: '💡' },
    { id: 2, user: 'John D.', avatar: '👨', project: 'Cardboard Castle', likes: 189, image: '🏰' },
    { id: 3, user: 'Emma W.', avatar: '👧', project: 'Tin Can Planters', likes: 312, image: '🌺' }
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const filteredSuggestions = suggestions.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.wasteType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.wasteType === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderHome = () => (
    <div className="flex flex-col h-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-b-3xl text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Hello, Eco Warrior! 👋</h1>
            <p className="text-green-100 text-sm mt-1">Let's make a difference today</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white/20 rounded-full backdrop-blur">
              <Bell size={20} />
            </button>
            <button onClick={() => setCurrentScreen('profile')} className="p-2 bg-white/20 rounded-full backdrop-blur">
              <Settings size={20} />
            </button>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur p-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm">Your Impact Points</p>
            <p className="text-3xl font-bold">{userPoints}</p>
          </div>
          <Leaf size={48} className="text-green-200" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button 
            onClick={() => setShowCamera(true)}
            className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl text-white flex flex-col items-center gap-2 shadow-lg"
          >
            <Camera size={28} />
            <span className="text-xs font-medium">Scan Waste</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('explore')}
            className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl text-white flex flex-col items-center gap-2 shadow-lg"
          >
            <Sparkles size={28} />
            <span className="text-xs font-medium">Explore</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('community')}
            className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl text-white flex flex-col items-center gap-2 shadow-lg"
          >
            <Users size={28} />
            <span className="text-xs font-medium">Community</span>
          </button>
        </div>

        {/* Trending Projects */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-gray-800">🔥 Trending Projects</h2>
            <button className="text-green-600 text-sm font-medium">See All</button>
          </div>
          <div className="space-y-3">
            {suggestions.slice(0, 3).map(item => (
              <div key={item.id} className="bg-white p-4 rounded-2xl shadow-md">
                <div className="flex gap-3">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.wasteType} • {item.time}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Heart size={14} />
                        <span className="text-xs">{item.likes}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-2 rounded-full ${favorites.includes(item.id) ? 'text-red-500' : 'text-gray-400'}`}
                  >
                    <Heart size={20} fill={favorites.includes(item.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Preview */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-gray-800">🏆 Your Achievements</h2>
            <button className="text-green-600 text-sm font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {achievements.slice(0, 2).map(achievement => (
              <div key={achievement.id} className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-2xl">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{achievement.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full"
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{achievement.progress}/{achievement.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderExplore = () => (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-b-3xl text-white">
        <h1 className="text-2xl font-bold mb-4">Explore Ideas 🔍</h1>
        
        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-3 flex items-center gap-2 mb-4">
          <Search size={20} className="text-white" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/70"
          />
        </div>

        {/* Waste Type Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === 'all' 
                ? 'bg-white text-purple-600' 
                : 'bg-white/20 text-white'
            }`}
          >
            All
          </button>
          {wasteTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedCategory(type.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === type.name
                  ? 'bg-white text-purple-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              {type.emoji} {type.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredSuggestions.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 text-center">
                <div className="text-5xl">{item.image}</div>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">{item.title}</h3>
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`${favorites.includes(item.id) ? 'text-red-500' : 'text-gray-400'}`}
                  >
                    <Heart size={16} fill={favorites.includes(item.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {item.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} /> {item.time}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500" fill="currentColor" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={12} />
                    <span>{item.likes}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setCurrentScreen('detail')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-1"
                >
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-b-3xl text-white">
        <h1 className="text-2xl font-bold mb-2">Community 🤝</h1>
        <p className="text-orange-100 text-sm">Share your creativity with others</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl mb-4 flex items-center justify-center gap-2 font-medium shadow-lg">
          <Plus size={20} />
          Share Your Project
        </button>

        <div className="space-y-4">
          {communityPosts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{post.user}</h3>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <button className="text-gray-400">
                    <Share2 size={20} />
                  </button>
                </div>
                <p className="text-gray-700 mb-3">Just completed my {post.project}! So happy with the results! 🎉</p>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 text-center mb-3">
                  <div className="text-6xl">{post.image}</div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-red-500">
                    <Heart size={20} fill="currentColor" />
                    <span className="font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500">
                    <span className="font-medium">💬 Comment</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 ml-auto">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-b-3xl text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold">Eco Warrior</h1>
            <p className="text-indigo-100 text-sm">Level 12 • 🏆 Pro Recycler</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur p-3 rounded-xl text-center">
            <p className="text-2xl font-bold">{userPoints}</p>
            <p className="text-xs text-indigo-100">Points</p>
          </div>
          <div className="bg-white/20 backdrop-blur p-3 rounded-xl text-center">
            <p className="text-2xl font-bold">47</p>
            <p className="text-xs text-indigo-100">Projects</p>
          </div>
          <div className="bg-white/20 backdrop-blur p-3 rounded-xl text-center">
            <p className="text-2xl font-bold">12.5kg</p>
            <p className="text-xs text-indigo-100">Saved</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3">All Achievements 🏆</h2>
        <div className="space-y-3 mb-6">
          {achievements.map(achievement => (
            <div key={achievement.id} className="bg-white p-4 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{achievement.name}</h3>
                  <p className="text-xs text-gray-500">{achievement.progress} / {achievement.total} completed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">{Math.round((achievement.progress / achievement.total) * 100)}%</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-3">Settings ⚙️</h2>
        <div className="space-y-2">
          {['Edit Profile', 'Notifications', 'Privacy', 'Help & Support', 'About'].map((item, idx) => (
            <button key={idx} className="w-full bg-white p-4 rounded-2xl shadow-md flex items-center justify-between">
              <span className="font-medium text-gray-700">{item}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCamera = () => (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <Camera size={80} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">AI Waste Scanner</h2>
          <p className="text-gray-300 mb-6">Position your waste material in the frame</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={() => {
              setShowCamera(false);
              setUserPoints(prev => prev + 50);
            }}
          />
          <button
            onClick={handleImageUpload}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            📷 Capture Photo
          </button>
        </div>
      </div>
      <div className="p-6">
        <button
          onClick={() => setShowCamera(false)}
          className="w-full bg-white/10 backdrop-blur text-white py-4 rounded-2xl font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-full max-h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Status Bar */}
        <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-xs">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-3 border border-white rounded-sm" />
            <span>100%</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {showCamera ? renderCamera() : 
           currentScreen === 'home' ? renderHome() :
           currentScreen === 'explore' ? renderExplore() :
           currentScreen === 'community' ? renderCommunity() :
           renderProfile()}
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
          <button
            onClick={() => setCurrentScreen('home')}
            className={`flex flex-col items-center gap-1 ${currentScreen === 'home' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Home size={24} fill={currentScreen === 'home' ? 'currentColor' : 'none'} />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setCurrentScreen('explore')}
            className={`flex flex-col items-center gap-1 ${currentScreen === 'explore' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Search size={24} />
            <span className="text-xs font-medium">Explore</span>
          </button>
          <button
            onClick={() => setShowCamera(true)}
            className="flex flex-col items-center gap-1 -mt-6"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full shadow-lg">
              <Camera size={28} className="text-white" />
            </div>
          </button>
          <button
            onClick={() => setCurrentScreen('community')}
            className={`flex flex-col items-center gap-1 ${currentScreen === 'community' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Users size={24} />
            <span className="text-xs font-medium">Community</span>
          </button>
          <button
            onClick={() => setCurrentScreen('profile')}
            className={`flex flex-col items-center gap-1 ${currentScreen === 'profile' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Award size={24} />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteToProductApp;