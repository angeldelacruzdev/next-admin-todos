import { ProductCard } from "@/products";
import { products } from "@/products/data/product";

export const metadata = {
  title: "Producto Page",
  description: "Producto Page",
};

export default function ProductPage() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2">
      {/* ProductCard */}

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
