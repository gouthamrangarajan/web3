import { ChainId } from "@thirdweb-dev/sdk";
import React, { useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { useNetwork } from "@thirdweb-dev/react";
import { motion } from "framer-motion";
import { scaleDown } from "../helpers/animation";

function NetworkSelect() {
  const [networks, setNetworks] = useState<(string | ChainId)[]>([]);
  const [_, switchNetwork] = useNetwork();

  const changeNetwork = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (switchNetwork) {
      const resp = await switchNetwork(e.target.value as unknown as ChainId);
      console.log(resp);
    }
  };

  useEffect(() => {
    setNetworks(
      Object.values(ChainId)
        .filter((el) => isNaN(parseInt(el.toString())))
        .sort((a, b) =>
          a.toString().toLowerCase() == "mainnet" ||
          b.toString().toLowerCase() == "mainnet"
            ? -1
            : 0
        )
    );
  }, [ChainId]);
  return (
    <motion.div
      className="flex flex-col items-start gap-1 origin-top"
      variants={scaleDown}
      animate="animate"
      initial="initial"
    >
      <label className="text-white">Select Network</label>
      <div className="relative">
        <select
          className="outline-none appearance-none bg-white text-slate-700 py-2 px-4 rounded
            transition duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 
            focus:ring-offset-slate-700 cursor-pointer"
          onChange={changeNetwork}
        >
          {networks.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <ChevronUpDownIcon className="absolute top-2 right-0 h-6 w-6 text-slate-600"></ChevronUpDownIcon>
      </div>
    </motion.div>
  );
}

export default NetworkSelect;
