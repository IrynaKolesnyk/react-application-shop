import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((headerItem) => (
        <li key={headerItem.path} className="headerListItem">
          <a href={headerItem.path} className="headerListLink">
            {headerItem.name[language]}
          </a>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
