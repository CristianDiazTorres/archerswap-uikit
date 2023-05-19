import Metamask from "./icons/Metamask";
// import MathWallet from "./icons/MathWallet";
// import OntoWallet from "./icons/OntoWallet";
// import BitKeepWallet from "./icons/BitKeepWallet";
// import TokenPocket from "./icons/TokenPocket";
// import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
// import BinanceChain from "./icons/BinanceChain";
// import SafePalWallet from "./icons/SafePalWallet";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  // {
  //   title: "TrustWallet",
  //   icon: TrustWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "ONTO Wallet",
  //   icon: OntoWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "BitKeep  Wallet",
  //   icon: BitKeepWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorId: ConnectorNames.Injected,
  // },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  // {
  //   title: "SafePal Wallet",
  //   icon: SafePalWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
