import { useDisconnect } from "@thirdweb-dev/react";

function DisconnectBtn() {
  const disconnect = useDisconnect();
  return (
    <button
      className="appearance-none outline-none py-2 px-4 rounded bg-white text-slate-700 
transition duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 text-base"
      onClick={disconnect}
    >
      <span>Disconnect</span>
    </button>
  );
}

export default DisconnectBtn;
