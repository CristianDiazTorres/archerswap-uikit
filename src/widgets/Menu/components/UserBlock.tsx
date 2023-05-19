import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { useMatchBreakpoints } from "../../../hooks";

const StyledButton = styled(Button)`
  color: black;
`;

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;

  return (
    <div>
      {account ? (
        <Button
          scale="md"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <StyledButton
          scale="md"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {isMobile ? "Connect" : "Connect Wallet"}
        </StyledButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
