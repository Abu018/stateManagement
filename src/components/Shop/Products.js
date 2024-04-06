import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    description: "Description of product 1",
    price: 10.99,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description of product 2",
    price: 19.99,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description of product 3",
    price: 8.49,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description of product 4",
    price: 15.75,
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description of product 5",
    price: 12.49,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
