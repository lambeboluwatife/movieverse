const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-black via-gray-900 to-indigo-900 text-white shadow-sm py-3 px-4 flex items-center justify-between gap-4 border-b border-indigo-700">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center bg-indigo-600 rounded-full p-1 shadow-sm">
          {/* compact favicon-style SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#6366F1" />
            <g fill="#fff">
              <rect x="5" y="8" width="3" height="2" rx="0.5" />
              <rect x="16" y="8" width="3" height="2" rx="0.5" />
              <rect x="5" y="14" width="3" height="2" rx="0.5" />
              <rect x="16" y="14" width="3" height="2" rx="0.5" />
            </g>
            <path d="M8 6h8v12H8z" fill="rgba(255,255,255,0.06)" />
          </svg>
        </span>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            MovieVerse
          </h1>
          <p className="hidden sm:block text-xs md:text-sm text-gray-300 mt-0.5 max-w-lg">
            Discover movies from every genre, era, and culture—your gateway to
            the universe of cinema.
          </p>
        </div>
      </div>
      <nav className="flex gap-4 text-sm">
        <a href="#discover" className="hover:text-indigo-300 transition-colors">
          Discover
        </a>
        <a href="#genres" className="hover:text-indigo-300 transition-colors">
          Genres
        </a>
        <a href="#mylist" className="hover:text-indigo-300 transition-colors">
          My List
        </a>
        <a href="#about" className="hover:text-indigo-300 transition-colors">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
