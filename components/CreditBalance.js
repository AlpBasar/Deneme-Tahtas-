export default function CreditBalance({ credits }) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-blue-800">Kredi Bakiyeniz</h3>
          <p className="text-sm text-blue-600">Veri çıkarma işlemi başına 1 kredi harcanır</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="font-bold text-blue-600">{credits}</span> Kredi
        </div>
      </div>
    );
  }