import { useMetamask } from "@thirdweb-dev/react";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
import { fade } from "../helpers/animation";

function ConnectBtn({ loading }: ConnectBtnPropsType) {
  const connectWithMetamask = useMetamask();
  return (
    <button
      className="appearance-none outline-none py-2 px-4 rounded bg-white text-slate-700 transition duration-300 
    focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 w-56 disabled:cursor-not-allowed
    disabled:opacity-90 hover:translate-y-[-1px]"
      onClick={connectWithMetamask}
      disabled={loading}
    >
      {loading ? (
        <ClipLoader size={20} color="rgb(162,28,175)"></ClipLoader>
      ) : (
        <motion.span variants={fade} animate="animate" initial="initial">
          Connect with Metamask
        </motion.span>
      )}
    </button>
  );
}
type ConnectBtnPropsType = {
  loading: boolean;
};
export default ConnectBtn;
