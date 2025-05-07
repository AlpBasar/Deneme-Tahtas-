// pages/api/parse-link.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Yalnızca POST istekleri desteklenir.' })
    }
  
    const { url } = req.body
  
    const isValidMapsUrl = url.includes('google.') && url.includes('/maps/search/')

    if (!url || !isValidMapsUrl) {
      return res.status(400).json({ success: false, message: 'Geçerli bir Google Maps arama linki girin.' })
    }
    
  
    // Şimdilik sahte bir Excel çıktısı simülasyonu yapıyoruz
    // Gerçekte Puppeteer veya scraping ile firmaları çekeceğiz
    const dummyExcelFileUrl = 'https://example.com/sample-excel.xlsx'
  
    return res.status(200).json({
      success: true,
      fileUrl: dummyExcelFileUrl,
      message: 'Excel dosyanız hazırlanıyor...'
    })
  }
  