import { Link } from "react-router-dom";

function CryptoRow({ asset }) {
  const isPositive = asset.change24h >= 0;

  return (
    <tr className="border-b border-gray-100 text-sm hover:bg-gray-50">
      <td className="px-3 py-4 text-gray-500">{asset.rank}</td>
      <td className="px-3 py-4 font-semibold text-gray-900">
        <Link to={`/assets/${asset.id}`} className="hover:text-blue-600">
          {asset.name}
        </Link>
      </td>
      <td className="px-3 py-4 text-gray-600">{asset.symbol}</td>
      <td className="px-3 py-4 text-right font-medium text-gray-900">${asset.price.toLocaleString()}</td>
      <td className={`px-3 py-4 text-right font-semibold ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? "+" : ""}
        {asset.change24h.toFixed(2)}%
      </td>
      <td className="px-3 py-4 text-right text-gray-600">${asset.marketCap}</td>
      <td className="px-3 py-4 text-right text-gray-600">${asset.volume24h}</td>
    </tr>
  );
}

export default CryptoRow;
