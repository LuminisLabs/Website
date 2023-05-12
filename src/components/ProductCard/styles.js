import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  border: 1px solid rgb(245, 237, 240);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ProductName = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`;