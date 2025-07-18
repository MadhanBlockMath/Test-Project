import { useEffect, useState } from "react";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:3099/api/products")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch products");
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-10">Loading products...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
    if (products.length === 0) return <div className="text-center mt-10">No products available</div>;

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-700">₹{product.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
