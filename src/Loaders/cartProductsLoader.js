import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await 
    const storeCart = getShoppingCart();
    console.log(storeCart);

    return products;
};
export default cartProductsLoader;