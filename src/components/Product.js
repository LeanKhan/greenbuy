function Product({
  product: { title, price, description, category, image, link },
}) {
  return (
    <div className="flex bg-white w-full mb-5 text-left shadow-sm rounded-lg dark:bg-gray-300">
      <div className="w-5/12 p-2 dark:bg-white rounded-l-lg">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-contain bg-no-repeat bg-center w-full h-full"
        ></div>
      </div>
      <div className="w-7/12 p-5">
        <h1 className="md:text-2xl font-bold">{title.substr(0, 50)}</h1>
        <p className="text-red-900 mt-2 font-medium text-lg">{price}</p>
        <h3 className="inline-block rounded-full text-white bg-lime-500 px-2 py-1 mt-2 text-xs mr-3">
          {category}
        </h3>
        {/* <div>{description.substr(0, 100)}</div> */}
        <div className="mt-5">
          <a
            className="p-2 px-3 font-medium bg-orange-500 text-gray-100 rounded-lg border-orange-600"
            target="_blank"
            href={link}
            rel="noreferrer"
          >
            <img
              src="https://icongr.am/fontawesome/amazon.svg?size=21&color=ffffff"
              style={{ display: "inline" }}
              alt="amazon logo"
            />
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
