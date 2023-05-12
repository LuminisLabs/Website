import { PageContent } from '../../components/PageContent/index.jsx';
import { ProductCard } from '../../components/ProductCard/index.jsx';
import { ProductsContainer } from './styles.js';

export const Products = () => {
  const SynCarbon = {
    name: 'SynCarbon',
    image: 'https://cdn.discordapp.com/attachments/881985912711557888/882000000000000000/unknown.png',
  };

  const AgroVision = {
    name: 'AgroVision',
    image: 'https://cdn.discordapp.com/attachments/881985912711557888/882000000000000000/unknown.png',
  };


  return (
    <PageContent>
      <ProductsContainer>
        <ProductCard product={ SynCarbon }/>
        <ProductCard product={ AgroVision }/>
      </ProductsContainer>
    </PageContent>
  );
};