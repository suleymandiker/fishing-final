import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Loader() {
  const { loading } = useContext(GlobalContext);
  return <div className={loading ? "loading" : "loading"}></div>;
}
