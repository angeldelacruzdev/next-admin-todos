import { cookies } from "next/headers";

export const metadata = {
  title: "Carrito De Compra",
  description: "Productos en el carrito",
};

const getProductInCart = (cart: { [id: string]: number }) => {

};

export default function CartPage() {
  const cookiesStore = cookies();

  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as { [id: string]: number };

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">{}</div>
      </div>
    </div>
  );
}
