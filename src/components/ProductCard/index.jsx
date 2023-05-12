import { ProductCardContainer, ProductImage, ProductName } from './styles.js';


export const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={ product.image }/>
      <ProductName>{ product.name }</ProductName>
    </ProductCardContainer>
  );
};