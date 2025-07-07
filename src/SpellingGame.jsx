import React, { useState, useEffect, useRef } from 'react';
import { Star, Heart, Crown, Sparkles, RotateCcw, Volume2, ShoppingBag, Palette, Lightbulb } from 'lucide-react';

const SpellingGame = () => {
  const inputRef = useRef(null);
  const nextWordButtonRef = useRef(null);

  // ... (All the theme, wordList, and shopItem data is the same as you provided)
  // Theme configurations
  const themes = {
    princess: {
      name: 'Princess Kingdom',
      colors: {
        primary: 'pink',
        secondary: 'purple',
        bg: 'from-pink-100 via-purple-50 to-pink-200',
        card: 'border-pink-200',
        button: 'from-pink-500 to-purple-500',
        text: 'text-pink-600'
      },
      emoji: '👑',
      background: '🏰✨💖🌸👑🦄💎🌙'
    },
    animals: {
      name: 'Animal Safari',
      colors: {
        primary: 'green',
        secondary: 'yellow',
        bg: 'from-green-100 via-yellow-50 to-green-200',
        card: 'border-green-200',
        button: 'from-green-500 to-yellow-500',
        text: 'text-green-600'
      },
      emoji: '🦁',
      background: '🦁🐯🐘🦒🐵🦓🐨🦘'
    },
    seaworld: {
      name: 'Ocean Adventure',
      colors: {
        primary: 'blue',
        secondary: 'teal',
        bg: 'from-blue-100 via-teal-50 to-blue-200',
        card: 'border-blue-200',
        button: 'from-blue-500 to-teal-500',
        text: 'text-blue-600'
      },
      emoji: '🐋',
      background: '🐋🐠🐙🦈🐟🐡🦀🌊'
    },
    nature: {
      name: 'Nature Explorer',
      colors: {
        primary: 'emerald',
        secondary: 'lime',
        bg: 'from-emerald-100 via-lime-50 to-emerald-200',
        card: 'border-emerald-200',
        button: 'from-emerald-500 to-lime-500',
        text: 'text-emerald-600'
      },
      emoji: '🌳',
      background: '🌳🌸🦋🐝🌺🍄🌿🌞'
    },
    home: {
      name: 'Cozy Home',
      colors: {
        primary: 'orange',
        secondary: 'red',
        bg: 'from-orange-100 via-red-50 to-orange-200',
        card: 'border-orange-200',
        button: 'from-orange-500 to-red-500',
        text: 'text-orange-600'
      },
      emoji: '🏠',
      background: '🏠🛋️🍽️🛏️📚🧸🎮🍪'
    }
  };

  // Base word lists
  const wordLists = {
    princess: {
      easy: [
        { word: 'magic', hint: 'What princesses use to cast spells' },
        { word: 'castle', hint: 'Where a princess lives' },
        { word: 'crown', hint: 'What a princess wears on her head' },
        { word: 'dance', hint: 'Moving to music at a ball' },
        { word: 'brave', hint: 'Not being scared' },
        { word: 'dream', hint: 'What you see when you sleep' },
        { word: 'jewel', hint: 'Shiny precious stones' },
        { word: 'royal', hint: 'Like a king or queen' }
      ],
      medium: [
        { word: 'beautiful', hint: 'Very pretty, like a princess' },
        { word: 'adventure', hint: 'An exciting journey' },
        { word: 'treasure', hint: 'Precious things like jewels' },
        { word: 'princess', hint: 'A royal daughter' },
        { word: 'kingdom', hint: 'The land a king or queen rules' },
        { word: 'unicorn', hint: 'Magical horse with a horn' },
        { word: 'slipper', hint: 'Special shoe, like Cinderella wore' },
        { word: 'carriage', hint: 'Royal vehicle pulled by horses' }
      ],
      hard: [
        { word: 'magnificent', hint: 'Even more beautiful than beautiful' },
        { word: 'enchanted', hint: 'Under a magical spell' },
        { word: 'celebration', hint: 'A big party' },
        { word: 'wonderful', hint: 'Really, really good' },
        { word: 'graceful', hint: 'Moving in a beautiful way' },
        { word: 'mysterious', hint: 'Full of secrets' },
        { word: 'spectacular', hint: 'Amazing to see' }
      ]
    },
    animals: {
      easy: [
        { word: 'lion', hint: 'King of the jungle' },
        { word: 'bear', hint: 'Big furry animal that loves honey' },
        { word: 'bird', hint: 'Animal that can fly' },
        { word: 'fish', hint: 'Animal that lives in water' },
        { word: 'dog', hint: 'Man\'s best friend' },
        { word: 'cat', hint: 'Pet that says meow' },
        { word: 'horse', hint: 'Animal you can ride' },
        { word: 'duck', hint: 'Bird that swims and quacks' }
      ],
      medium: [
        { word: 'elephant', hint: 'Huge animal with a long trunk' },
        { word: 'giraffe', hint: 'Tallest animal with a long neck' },
        { word: 'monkey', hint: 'Animal that swings from trees' },
        { word: 'tiger', hint: 'Big cat with orange and black stripes' },
        { word: 'rabbit', hint: 'Fluffy animal that hops' },
        { word: 'turtle', hint: 'Slow animal with a shell' },
        { word: 'penguin', hint: 'Bird that can\'t fly but loves ice' },
        { word: 'kangaroo', hint: 'Animal that hops and has a pouch' }
      ],
      hard: [
        { word: 'rhinoceros', hint: 'Big gray animal with a horn on its nose' },
        { word: 'chimpanzee', hint: 'Smart ape that\'s like humans' },
        { word: 'crocodile', hint: 'Big reptile with sharp teeth' },
        { word: 'butterfly', hint: 'Colorful insect with beautiful wings' },
        { word: 'octopus', hint: 'Sea animal with eight arms' },
        { word: 'hippopotamus', hint: 'Big animal that loves water' },
        { word: 'chameleon', hint: 'Lizard that changes colors' },
        { word: 'peacock', hint: 'Beautiful bird with colorful tail feathers' }
      ]
    },
    seaworld: {
      easy: [
        { word: 'whale', hint: 'Biggest animal in the ocean' },
        { word: 'fish', hint: 'Animal that swims underwater' },
        { word: 'crab', hint: 'Animal with claws that walks sideways' },
        { word: 'shell', hint: 'Hard home for some sea animals' },
        { word: 'wave', hint: 'Water that moves up and down' },
        { word: 'boat', hint: 'What people use to travel on water' },
        { word: 'sand', hint: 'Tiny pieces of rock on the beach' },
        { word: 'coral', hint: 'Colorful underwater plant-like structure' }
      ],
      medium: [
        { word: 'dolphin', hint: 'Smart sea animal that jumps and plays' },
        { word: 'octopus', hint: 'Sea animal with eight arms' },
        { word: 'seahorse', hint: 'Tiny horse-shaped fish' },
        { word: 'starfish', hint: 'Star-shaped sea animal' },
        { word: 'jellyfish', hint: 'See-through sea animal that stings' },
        { word: 'treasure', hint: 'Valuable things hidden underwater' },
        { word: 'mermaid', hint: 'Magical half-human, half-fish' },
        { word: 'seaweed', hint: 'Plants that grow in the ocean' }
      ],
      hard: [
        { word: 'submarine', hint: 'Underwater vehicle for exploring' },
        { word: 'aquarium', hint: 'Place to see fish and sea animals' },
        { word: 'lighthouse', hint: 'Tall tower that guides ships' },
        { word: 'barnacle', hint: 'Small sea creature that sticks to rocks' },
        { word: 'anemone', hint: 'Colorful sea creature with tentacles' },
        { word: 'plankton', hint: 'Tiny sea creatures that whales eat' },
        { word: 'current', hint: 'Flow of water in the ocean' },
        { word: 'maritime', hint: 'Related to the sea and ships' }
      ]
    },
    nature: {
      easy: [
        { word: 'tree', hint: 'Tall plant with leaves and branches' },
        { word: 'flower', hint: 'Pretty, colorful part of a plant' },
        { word: 'grass', hint: 'Green plants that cover the ground' },
        { word: 'sun', hint: 'Bright star that gives us light' },
        { word: 'rain', hint: 'Water that falls from clouds' },
        { word: 'bird', hint: 'Animal with wings that can fly' },
        { word: 'rock', hint: 'Hard piece of stone' },
        { word: 'leaf', hint: 'Green part of a tree or plant' }
      ],
      medium: [
        { word: 'forest', hint: 'Place with many trees' },
        { word: 'mountain', hint: 'Very tall hill reaching the sky' },
        { word: 'rainbow', hint: 'Colorful arc that appears after rain' },
        { word: 'butterfly', hint: 'Colorful insect with beautiful wings' },
        { word: 'waterfall', hint: 'Water falling down from high rocks' },
        { word: 'mushroom', hint: 'Fungus that grows in damp places' },
        { word: 'squirrel', hint: 'Small animal that collects nuts' },
        { word: 'dandelion', hint: 'Yellow flower that turns into white fluff' }
      ],
      hard: [
        { word: 'photosynthesis', hint: 'How plants make food from sunlight' },
        { word: 'ecosystem', hint: 'Community of plants and animals' },
        { word: 'pollination', hint: 'How flowers make seeds with help from bees' },
        { word: 'hibernation', hint: 'Long winter sleep of some animals' },
        { word: 'camouflage', hint: 'How animals hide by blending in' },
        { word: 'deciduous', hint: 'Trees that lose leaves in fall' },
        { word: 'evergreen', hint: 'Trees that stay green all year' },
        { word: 'biodiversity', hint: 'Variety of life in nature' }
      ]
    },
    home: {
      easy: [
        { word: 'chair', hint: 'Furniture you sit on' },
        { word: 'table', hint: 'Flat surface for eating or working' },
        { word: 'bed', hint: 'Where you sleep at night' },
        { word: 'door', hint: 'What you open to enter a room' },
        { word: 'window', hint: 'Glass opening to see outside' },
        { word: 'lamp', hint: 'Light you can turn on and off' },
        { word: 'book', hint: 'Paper with words and stories' },
        { word: 'spoon', hint: 'Tool for eating soup' }
      ],
      medium: [
        { word: 'kitchen', hint: 'Room where you cook food' },
        { word: 'bathroom', hint: 'Room with a bathtub and sink' },
        { word: 'television', hint: 'Screen that shows movies and programs' },
        { word: 'refrigerator', hint: 'Big box that keeps food cold' },
        { word: 'telephone', hint: 'Device for talking to people far away' },
        { word: 'computer', hint: 'Machine for games and homework' },
        { word: 'blanket', hint: 'Soft cover to keep you warm' },
        { word: 'pillow', hint: 'Soft thing you rest your head on' }
      ],
      hard: [
        { word: 'microwave', hint: 'Machine that heats food quickly' },
        { word: 'dishwasher', hint: 'Machine that cleans dishes' },
        { word: 'vacuum', hint: 'Machine that cleans carpets' },
        { word: 'thermostat', hint: 'Controls how hot or cold your house is' },
        { word: 'chandelier', hint: 'Fancy light that hangs from ceiling' },
        { word: 'upholstery', hint: 'Fabric covering on furniture' },
        { word: 'pantry', hint: 'Small room for storing food' },
        { word: 'appliance', hint: 'Helpful machine in your home' }
      ]
    }
  };

  // Shop items
  const shopItems = {
    pets: [
      { id: 'unicorn', name: 'Rainbow Unicorn', price: 100, emoji: '🦄' },
      { id: 'dragon', name: 'Friendly Dragon', price: 150, emoji: '🐲' },
      { id: 'cat', name: 'Magic Cat', price: 80, emoji: '🐱' },
      { id: 'owl', name: 'Wise Owl', price: 120, emoji: '🦉' },
      { id: 'butterfly', name: 'Golden Butterfly', price: 60, emoji: '🦋' },
      { id: 'hamster', name: 'Fluffy Hamster', price: 70, emoji: '🐹' }
    ],
    toys: [
      { id: 'wand', name: 'Magic Wand', price: 90, emoji: '🪄' },
      { id: 'ball', name: 'Sparkle Ball', price: 40, emoji: '⚽' },
      { id: 'puzzle', name: 'Rainbow Puzzle', price: 50, emoji: '🧩' },
      { id: 'teddy', name: 'Cuddle Bear', price: 85, emoji: '🧸' },
      { id: 'kite', name: 'Flying Kite', price: 55, emoji: '🪁' },
      { id: 'blocks', name: 'Building Blocks', price: 65, emoji: '🧱' }
    ],
    decorations: [
      { id: 'crown', name: 'Jeweled Crown', price: 200, emoji: '👑' },
      { id: 'star', name: 'Glowing Star', price: 75, emoji: '⭐' },
      { id: 'flower', name: 'Magic Flower', price: 45, emoji: '🌺' },
      { id: 'crystal', name: 'Power Crystal', price: 110, emoji: '💎' },
      { id: 'trophy', name: 'Winner Trophy', price: 130, emoji: '🏆' },
      { id: 'ribbon', name: 'Victory Ribbon', price: 35, emoji: '🎀' }
    ]
  };

  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).currentTheme || 'princess' : 'princess';
  });
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).score || 0 : 0;
  });
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).streak || 0 : 0;
  });
  const [difficulty, setDifficulty] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).difficulty || 'easy' : 'easy';
  });
  const [gameState, setGameState] = useState('playing'); // 'playing', 'correct', 'incorrect'
  const [message, setMessage] = useState('');
  const [wrongWords, setWrongWords] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).wrongWords || [] : [];
  });
  const [practiceMode, setPracticeMode] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).dailyGoal || 10 : 10;
  });
  const [wordsCompleted, setWordsCompleted] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).wordsCompleted || 0 : 0;
  });
  const [usedWords, setUsedWords] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? new Set(JSON.parse(saved).usedWords || []) : new Set();
  });
  const [showShop, setShowShop] = useState(false);
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem('spellingGameProgress');
    return saved ? JSON.parse(saved).inventory || [] : [];
  });

  const theme = themes[currentTheme];

  // Save progress to local storage
  useEffect(() => {
    const progress = {
      score,
      streak,
      difficulty,
      wrongWords,
      dailyGoal,
      wordsCompleted,
      usedWords: Array.from(usedWords),
      inventory,
      currentTheme,
    };
    localStorage.setItem('spellingGameProgress', JSON.stringify(progress));
  }, [score, streak, difficulty, wrongWords, dailyGoal, wordsCompleted, usedWords, inventory, currentTheme]);

  const getRandomWord = () => {
    let availableWords;
    
    if (practiceMode && wrongWords.length > 0) {
      availableWords = wrongWords.filter(word => !usedWords.has(word.word));
      if (availableWords.length === 0) {
        setUsedWords(new Set());
        availableWords = wrongWords;
      }
    } else {
      const themeWords = wordLists[currentTheme][difficulty];
      availableWords = themeWords.filter(word => !usedWords.has(word.word));
      
      if (availableWords.length === 0) {
        const recentWrongWords = wrongWords.slice(-3).map(w => w.word);
        setUsedWords(new Set(recentWrongWords));
        availableWords = themeWords.filter(word => !recentWrongWords.includes(word.word));
      }
    }

    if (availableWords.length === 0) {
      // Fallback if all words are exhausted
      return wordLists[currentTheme][difficulty][0];
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    return availableWords[randomIndex];
  };

  const speakWord = (word) => {
    if ('speechSynthesis' in window && word) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.7;
      utterance.pitch = 1.2;
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.toLowerCase().includes('zira') ||
        voice.name.toLowerCase().includes('samantha')
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      speechSynthesis.speak(utterance);
    }
  };

  const startNewWord = () => {
    const word = getRandomWord();
    setCurrentWord(word);
    setUserInput('');
    setGameState('playing');
    setMessage('');
    setTimeout(() => inputRef.current?.focus(), 100);
    speakWord(word.word);
  };

  const checkSpelling = () => {
    if (!currentWord || !userInput.trim()) return;

    const isCorrect = userInput.toLowerCase().trim() === currentWord.word.toLowerCase();
    
    if (isCorrect) {
      const streakBonus = streak * 2;
      const pointsEarned = 10 + streakBonus;
      setScore(score + pointsEarned);
      setStreak(streak + 1);
      setWordsCompleted(wordsCompleted + 1);
      setGameState('correct');
      setMessage(getEncouragementMessage(pointsEarned));
      setUsedWords(prev => new Set([...prev, currentWord.word]));
      if (practiceMode) {
        setWrongWords(wrongWords.filter(w => w.word !== currentWord.word));
      }
    } else {
      setStreak(0);
      setGameState('incorrect');
      setMessage(`Oops! The correct spelling is: ${currentWord.word}`);
      if (!wrongWords.some(w => w.word === currentWord.word)) {
        setWrongWords([...wrongWords, currentWord]);
      }
      setUsedWords(prev => new Set([...prev, currentWord.word]));
    }
    setTimeout(() => nextWordButtonRef.current?.focus(), 100);
  };

  const getEncouragementMessage = (points) => {
    const messages = [
      `Magical! +${points} points! ✨`, `Perfect! +${points} points! 👑`, 
      `Brilliant! +${points} points! 🌟`, `Amazing! +${points} points! 💖`, 
      `Fantastic! +${points} points! ${theme.emoji}`, `Wonderful! +${points} points! 🌸`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (gameState === 'playing') {
        checkSpelling();
      } else {
        startNewWord();
      }
    }
  };
  
  const buyItem = (item) => {
    if (score >= item.price && !inventory.some(inv => inv.id === item.id)) {
      setScore(score - item.price);
      setInventory([...inventory, item]);
      alert(`🎉 You bought ${item.name} ${item.emoji}!`);
    } else if (inventory.some(inv => inv.id === item.id)) {
      alert(`You already own the ${item.name}!`);
    } else {
      alert(`❌ You need ${item.price - score} more points to buy this!`);
    }
  };

  const changeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
    setUsedWords(new Set());
    setWrongWords([]); // Reset wrong words on theme change
  };

  useEffect(() => {
    startNewWord();
  }, [difficulty, practiceMode, currentTheme]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
    }
  }, []);

  const getStreakColor = () => {
    if (streak >= 10) return `text-${theme.colors.secondary}-600`;
    if (streak >= 5) return `text-${theme.colors.primary}-600`;
    return `text-${theme.colors.primary}-400`;
  };

  const progressPercentage = Math.min((wordsCompleted / dailyGoal) * 100, 100);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.colors.bg} p-4 relative overflow-hidden font-sans`}>
      <div className="fixed inset-0 pointer-events-none opacity-10">
        {theme.background.split('').map((emoji, index) => (
          <div key={index} className="absolute text-4xl animate-bounce" style={{
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`, animationDuration: `${3 + Math.random() * 2}s`
          }}>{emoji}</div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <header className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Crown className={`${theme.colors.text} w-8 h-8`} />
            <h1 className={`text-4xl font-bold ${theme.colors.text}`}>{theme.name} Spelling</h1>
            <span className="text-4xl">{theme.emoji}</span>
          </div>
          <p className={theme.colors.text}>Master the magical words of {theme.name.toLowerCase()}!</p>
        </header>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {Object.entries(themes).map(([key, themeData]) => (
            <button key={key} onClick={() => changeTheme(key)} className={`px-3 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                currentTheme === key ? `bg-${themeData.colors.primary}-500 text-white border-${themeData.colors.primary}-600`
                : `bg-white text-${themeData.colors.primary}-600 border-${themeData.colors.primary}-300 hover:bg-${themeData.colors.primary}-50`
            }`}>{themeData.emoji} {themeData.name}</button>
          ))}
        </div>

        <div className={`bg-white/80 backdrop-blur rounded-2xl p-4 mb-6 shadow-lg border-2 ${theme.colors.card}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1">
                <Star className="text-yellow-500 w-5 h-5" />
                <span className="font-bold text-lg">{score}</span>
              </div>
              <p className="text-sm text-gray-600">Magic Points</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <Sparkles className={`w-5 h-5 ${getStreakColor()}`} />
                <span className={`font-bold text-lg ${getStreakColor()}`}>{streak}</span>
              </div>
              <p className="text-sm text-gray-600">Spell Streak</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <Heart className="text-red-500 w-5 h-5" />
                <span className="font-bold text-lg">{wordsCompleted}/{dailyGoal}</span>
              </div>
              <p className="text-sm text-gray-600">Daily Goal</p>
            </div>
            <div>
              <button onClick={() => setShowShop(!showShop)} className={`flex items-center w-full justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r ${theme.colors.button} text-white hover:scale-105 transition-transform`}>
                <ShoppingBag className="w-4 h-4" /> Shop
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className={`bg-${theme.colors.primary}-200 rounded-full h-3 overflow-hidden`}>
              <div className={`bg-gradient-to-r ${theme.colors.button} h-full transition-all duration-500`} style={{ width: `${progressPercentage}%` }} />
            </div>
            <p className="text-center text-sm text-gray-600 mt-1">
              {wordsCompleted >= dailyGoal ? "🎉 Daily goal complete!" : `Keep going! ${theme.emoji}`}
            </p>
          </div>
          {inventory.length > 0 && (
            <div className="mt-4 p-3 bg-white/50 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-2">My Collection:</p>
              <div className="flex flex-wrap gap-2">{inventory.map((item, index) => (<span key={index} className="text-2xl" title={item.name}>{item.emoji}</span>))}</div>
            </div>
          )}
        </div>

        {showShop && (
          <div className={`bg-white/90 backdrop-blur rounded-2xl p-6 mb-6 shadow-lg border-2 ${theme.colors.card} transition-all duration-300`}>
            <h3 className={`text-2xl font-bold ${theme.colors.text} mb-4 text-center`}>🛍️ Magic Shop</h3>
            {Object.entries(shopItems).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className={`text-lg font-semibold ${theme.colors.text} mb-2 capitalize`}>{category}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {items.map((item) => (
                    <div key={item.id} className={`p-3 bg-white/80 rounded-lg border ${theme.colors.card} text-center`}>
                      <div className="text-3xl mb-1">{item.emoji}</div>
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-gray-600 mb-2">{item.price} points</div>
                      <button onClick={() => buyItem(item)} disabled={score < item.price || inventory.some(inv => inv.id === item.id)} className={`w-full px-2 py-1 text-xs rounded-md transition-colors ${
                          inventory.some(inv => inv.id === item.id) ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : score >= item.price ? `bg-gradient-to-r ${theme.colors.button} text-white hover:opacity-90`
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}>{inventory.some(inv => inv.id === item.id) ? 'Owned' : 'Buy'}</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- THIS IS THE NEWLY ADDED GAMEPLAY SECTION --- */}
        <div className={`bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border-2 ${theme.colors.card}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-bold ${theme.colors.text}`}>Spell the word!</h2>
            <button onClick={() => currentWord && speakWord(currentWord.word)} className={`p-2 rounded-full bg-gradient-to-r ${theme.colors.button} text-white hover:scale-110 transition-transform`}>
              <Volume2 />
            </button>
          </div>

          <div className={`p-4 rounded-lg bg-${theme.colors.primary}-50 border-l-4 ${theme.colors.card} mb-4`}>
            <p className="flex items-center gap-2">
              <Lightbulb className={`w-5 h-5 ${theme.colors.text}`} />
              <span className="font-semibold text-gray-700">Hint:</span>
              <span className="text-gray-600">{currentWord?.hint}</span>
            </p>
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your spelling here..."
            disabled={gameState !== 'playing'}
            className={`w-full p-4 text-2xl text-center rounded-lg border-2 ${theme.colors.card} focus:ring-2 focus:ring-${theme.colors.primary}-400 focus:outline-none transition-all ${gameState !== 'playing' ? 'bg-gray-100' : 'bg-white'}`}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
          />

          {message && (
            <div className={`mt-4 text-center p-2 rounded-lg font-semibold ${gameState === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}

          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
            {gameState === 'playing' ? (
              <button onClick={checkSpelling} className={`w-full sm:w-auto flex-grow px-6 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r ${theme.colors.button} hover:scale-105 transition-transform`}>
                Check Spelling
              </button>
            ) : (
              <button ref={nextWordButtonRef} onClick={startNewWord} className={`w-full sm:w-auto flex-grow px-6 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r ${theme.colors.button} hover:scale-105 transition-transform`}>
                Next Word
              </button>
            )}
            <button onClick={startNewWord} className={`p-3 text-${theme.colors.primary}-600 bg-white rounded-lg border-2 ${theme.colors.card} hover:bg-${theme.colors.primary}-50 transition-colors`} title="Get a new word">
              <RotateCcw />
            </button>
          </div>
        </div>

        <div className={`bg-white/80 backdrop-blur rounded-2xl p-4 mt-6 shadow-lg border-2 ${theme.colors.card}`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex gap-2">
              {['easy', 'medium', 'hard'].map(level => (
                <button key={level} onClick={() => setDifficulty(level)} className={`px-4 py-2 text-sm font-semibold rounded-full capitalize transition-colors ${difficulty === level ? `bg-gradient-to-r ${theme.colors.button} text-white` : `bg-white text-gray-700 hover:bg-${theme.colors.primary}-50`}`}>
                  {level}
                </button>
              ))}
            </div>
            <button onClick={() => setPracticeMode(!practiceMode)} className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${practiceMode ? `bg-gradient-to-r ${theme.colors.button} text-white` : `bg-white text-gray-700 hover:bg-${theme.colors.primary}-50`}`}>
              <div className={`w-4 h-4 rounded-full border-2 ${practiceMode ? 'bg-white border-white' : `border-${theme.colors.primary}-400`}`}/>
              Practice Wrong Words ({wrongWords.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellingGame;