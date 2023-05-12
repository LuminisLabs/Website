import { Logo, Menu, MenuItem, HeaderContainer, MenuText, LogoText, LogoIcon } from './styles.js';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentPageContext } from '../../contexts/currentPage.jsx';

export const Header = () => {
  const navigate = useNavigate();
  const { setCurrentPage, currentPage } = useContext(CurrentPageContext);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <HeaderContainer>
      <Logo onClick={ () => {
        handleCurrentPage('home');
        navigate('/');
      } }>
        <LogoIcon/>
        <LogoText>Luminus Labs</LogoText>
      </Logo>
      <Menu>
        <MenuItem onClick={ () => {
          handleCurrentPage('about');
          navigate('/sobre-nos');
        } } page={ currentPage === 'about' ? 'selected' : '' }>
          <MenuText>Sobre nós</MenuText>
        </MenuItem>
        <MenuItem onClick={ () => {
          handleCurrentPage('products');
          navigate('/produtos');
        } } page={ currentPage === 'products' ? 'selected' : '' }>
          <MenuText>Produtos</MenuText>
        </MenuItem>
        <MenuItem onClick={ () => {
          handleCurrentPage('team');
          navigate('/time');
        } } page={ currentPage === 'team' ? 'selected' : '' }>
          <MenuText>Conheça nosso time</MenuText>
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
};