import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4em 12em 4em 4em;
  color: #f5edf0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  position: relative;
  cursor: pointer;
`;

export const LogoIcon = styled.img.attrs({
  src: icon,
  alt: 'icon',
})`
  width: 4em;
  height: 4em;
`;

export const LogoText = styled.span`
  vertical-align: middle;
  font-weight: 600;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuItem = styled.li`
  padding: 0 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  vertical-align: middle;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    height: 3px;
    ${ ({ page }) => page === 'selected' ? 'background-color: rgb(245, 237, 240);' : 'background-color: transparent;'}
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      background-color: rgb(245, 237, 240);
    }
  }
`;

export const MenuText = styled(Link)`
  text-decoration: none;
  vertical-align: baseline;
  width: auto;
  display: block;
  font-size: 2em;
  font-weight: 500;
  color: inherit;
`;