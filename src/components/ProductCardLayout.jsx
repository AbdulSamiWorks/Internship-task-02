import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10202-300x291.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10203-300x291.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10197-300x291.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10195-300x291.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10200-300x291.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10192-300x291.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10193-300x291.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10201-300x354.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

const ProductCardLayout = () => {
  return (
    <>
     
        <div className="flex flex-col bg-white items-center justify-center mt-10">
          <h2 className="text-5xl pl-5 font-bold lg:pl-0">Best Seller Products</h2>

          <p className="text-gray-400 py-5">
            There are many variations passages
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="border border-gray-300 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-[#ffffff] xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                    <div className="mt-72 flex  justify-center ">
                      <h3 className="mt-4 text-lg font-medium text-black mr-6">
                        {product.name}
                      </h3>
                      <p className="mt-4 text-lg font-medium text-gray-900">
                        {product.price}
                      </p>
                      <div className="absolute mt-6">
                    <Link to={'products'}> <Button title={'Add To Cart'} border="b"/></Link>
                     
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default ProductCardLayout;
