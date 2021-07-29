import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      <ul className="navigationList">
        {mainRoutes.map((headerItem) => (
          <li key={headerItem.path} className="navigationListItem">
            <NavLink
              to={headerItem.path}
              className="navigationListItemAnchor"
              activeClassName="activeNavigationListItemAnchor"
              exact={headerItem.exact}
            >
              {headerItem.name[language]}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
