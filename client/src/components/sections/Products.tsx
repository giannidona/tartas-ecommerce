import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Smartwatch",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export const Products = () => {
  return (
    <section className="my-20">
      <h2 className="mb-5 text-center text-2xl font-bold text-pink-600">
        Mis Tortas
      </h2>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="mx-auto mb-5 w-[350px] rounded-lg border-2 border-pink-400 shadow-xl"
          >
            <div>
              <Image
                className="w-full rounded-t-lg object-cover"
                src={"/test-image.png"}
                alt="id"
                width={1920}
                height={1080}
              />
            </div>
            <div className="p-4">
              <div className="mb-4">
                <p className="font-semibold text-pink-500">{product.name}</p>
              </div>
              <div className="flex">
                <Link
                  className="w-full rounded-lg bg-green-500 px-3 py-2 text-center font-semibold text-white"
                  href={""}
                  target="_blank"
                >
                  Consultar por whatsapp
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
