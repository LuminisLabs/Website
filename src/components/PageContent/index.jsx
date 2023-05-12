import { Header } from '../Header/index.jsx';
import { Container, Content } from './styles.js';

export const PageContent = ({ children }) => {
  return (
    <Container>
      <Header/>
      <Content>
        { children }
      </Content>
    </Container>
  );
};