export const ProductList = ({ items }) => {
  return (
    <div className="mt-4 mb-20 bg-white dark:bg-gray-800 rounded-md p-7">
      <h2>Products:</h2>
      {items.map((item) => (
        <div
          className="mb-2 border border-solid border-gray-100 p-2  bg-gray-100"
          key={item.id}
        >
          <div className="mb-1">{item.productName}</div>
          <div className="mb-1">{item.description}</div>
          <div className="mb-1">{item.price}</div>
          <div className="mb-1">{item.tags}</div>
        </div>
      ))}
    </div>
  );
};
