import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
import { Toggle } from "../../components/Toggle";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => {
  const [isGasBoostEnabled, setIsGasBoostEnabled] = useState(false);
  useEffect(() => {
    if (window?.localStorage) {
      const boostEnabled = localStorage?.getItem("isGasBoostEnabled");

      if (!boostEnabled) {
        localStorage?.setItem("isGasBoostEnabled", "false");
      }
      setIsGasBoostEnabled(boostEnabled === "true");
    }
  }, []);
  const onGasBoostChange = () => {
    if (window?.localStorage) {
      localStorage?.setItem("isGasBoostEnabled", "" + !isGasBoostEnabled);
      setIsGasBoostEnabled(!isGasBoostEnabled);
    }
  };
  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      {/* <Flex alignItems="center">
        <Text fontSize="20px" bold mr={2}>
          Boost Gas
        </Text>

        <Toggle scale="sm" checked={isGasBoostEnabled} onChange={() => onGasBoostChange()} />
      </Flex> */}

      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {account}
      </Text>
      <Flex mb="32px">
        <LinkExternal small href={`https://scan.coredao.org/address/${account}`} mr="16px">
          View on Core Scan
        </LinkExternal>
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
      </Flex>
      <Flex justifyContent="center">
        <Button
          scale="sm"
          variant="secondary"
          onClick={() => {
            logout();
            window.localStorage.removeItem(connectorLocalStorageKey);
            onDismiss();
          }}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  );
};

export default AccountModal;
