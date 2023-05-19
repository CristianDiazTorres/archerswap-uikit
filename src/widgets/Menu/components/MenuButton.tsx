import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textSubtle};
  padding: 0 8px;
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 0;
  }
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
