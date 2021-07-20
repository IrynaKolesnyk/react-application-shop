import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;

  .headerListItem:not(:last-child) {
    margin-right: 20px;
  }

  .headerListLink {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.colors.darkColors.main};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${(props) => props.colors.darkColors.active};
      border-bottom: 1px solid ${(props) => props.colors.darkColors.active};
    }
  }
`;
