import { useAddress, useNetworkMismatch } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ConnectBtn from "./ConnectBtn";
import DisconnectBtn from "./DisconnectBtn";
import NetworkSelect from "./NetworkSelect";

function Account() {
  const address = useAddress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col">
      {loading || !address ? (
        <div className="flex items-end gap-2">
          {/* {!loading && <NetworkSelect></NetworkSelect>} */}
          <ConnectBtn loading={loading}></ConnectBtn>
        </div>
      ) : (
        <p className="text-fuchsia-400 font-semibold text-lg">
          Welcome <br /> {address} <br />
        </p>
      )}
      {address && !loading && (
        <div className="mt-2">
          <DisconnectBtn></DisconnectBtn>
        </div>
      )}
    </div>
  );
}

export default Account;
