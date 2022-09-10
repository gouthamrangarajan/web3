import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const chain: ChainId = import.meta.env.PROD ? ChainId.Polygon : ChainId.Mumbai;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={chain}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
