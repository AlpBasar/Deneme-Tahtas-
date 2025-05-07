import { useState } from 'react';

export default function Login({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada gerçek auth işlemi yapılacak
    // Şimdilik mock veri döndürüyoruz
    onLoginSuccess({
      email,
      credits: 10 // Yeni kullanıcıya 10 kredi ver
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {isRegister ? 'Kayıt Ol' : 'Giriş Yap'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
              minLength="6"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-4"
          >
            {isRegister ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
          
          <p className="text-center text-sm text-gray-600">
            {isRegister ? (
              <>
                Zaten hesabınız var mı?{' '}
                <button 
                  type="button" 
                  onClick={() => setIsRegister(false)}
                  className="text-blue-600 hover:underline"
                >
                  Giriş yap
                </button>
              </>
            ) : (
              <>
                Hesabınız yok mu?{' '}
                <button 
                  type="button" 
                  onClick={() => setIsRegister(true)}
                  className="text-blue-600 hover:underline"
                >
                  Kayıt olun
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}