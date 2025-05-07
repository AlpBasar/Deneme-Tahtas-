export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">MapDataExtractor</h3>
              <p className="text-gray-400">Google Maps verilerinizi kolayca Excel'e dönüştürün</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Bağlantılar</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Ana Sayfa</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Fiyatlandırma</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Yardım</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">SSS</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">İletişim</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Koşullar</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MapDataExtractor. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    );
  }