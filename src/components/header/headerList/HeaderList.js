import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      <ul className="navigationList">
        {mainRoutes.map((headerItem) => (
          <li key={headerItem.path} className="navigationListItem">
            <a href={headerItem.path} className="navigationListItemAnchor">
              {headerItem.name[language]}
            </a>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
