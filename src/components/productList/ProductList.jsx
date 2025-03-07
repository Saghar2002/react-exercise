import { Card } from "../common/Card";

export const ProductList = ({ items }) => {
  return (
    <Card>
      <h2 className="text-gray-300">Products:</h2>
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
    </Card>
  );
};
