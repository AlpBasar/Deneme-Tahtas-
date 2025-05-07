import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CreditBalance from '../components/CreditBalance';
import Login from '../components/Auth/Login';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [credits, setCredits] = useState(10); // Başlangıç kredisi

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setShowLogin(false);
    // Kullanıcı kredilerini burada ayarlayabilirsiniz
    // setCredits(userData.credits);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Map Data Extractor</title>
        <meta name="description" content="Google Maps verilerini Excel'e dönüştürün" />
      </Head>

      <Header 
        isLoggedIn={isLoggedIn} 
        onLoginClick={() => setShowLogin(true)}
        onLogout={() => setIsLoggedIn(false)}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        {isLoggedIn && <CreditBalance credits={credits} />}

        <div className="max-w-3xl mx-auto text-center mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Google Maps Verilerinizi Kolayca Excel'e Dönüştürün
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Maps linklerinizi yapıştırın, verileri çıkarın ve Excel olarak indirin.
            Profesyonel iş akışınızı basitleştirin.
          </p>

          {!isLoggedIn ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-200"
            >
              Başlamak İçin Giriş Yapın
            </button>
          ) : (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                placeholder="Google Maps linkini buraya yapıştırın..."
                rows="4"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
                Verileri Çıkar (1 Kredi)
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}
    </div>
  );
}