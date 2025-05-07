export default function Header({ isLoggedIn, onLoginClick, onLogout }) {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">MapDataExtractor</h1>
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Ana Sayfa</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Fiyatlandırma</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Nasıl Çalışır?</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onLogout}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Giriş Yap / Kayıt Ol
              </button>
            )}
          </div>
        </div>
      </header>
    );
  }