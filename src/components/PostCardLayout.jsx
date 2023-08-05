import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Posts = [
  {
    id: 1,
    name: "GameStop to Offer Up to $1 Billion in ",
    href: "#",
    price: " April 24, 2021",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-23-1600x900.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: 'SPAC Called 5G Edge Wants to Go Public',
    href: "#",
    price: "$35",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-22-1600x900.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Yoga Event Helping marginalised Women",
    href: "#",
    price: "$89",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-21-1600x900.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Dual-Drive Storage for Workflows",
    href: "#",
    price: "$35",
    imageSrc:
      "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-20-1600x900.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

const PostCardLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-5xl font-bold">Latest Posts</h2>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Posts.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="border border-gray-300 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-[#ffffff] xl:aspect-h-8 xl:aspect-w-7">
                  <div
                    style={{ backgroundImage: `url(${product.imageSrc})` }}
                    className="bg-no-repeat bg-contain"
                  ></div>
                  <div className="mt-52 flex justify-center ">
                   <center>
                   <h3 className=" mt-3 mx-3 text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                   </center>
                    <div className="absolute mt-16">
                     <Link to={'/blog'}> <Button title={'Read More...'} border="b"/></Link>
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

export default PostCardLayout;
