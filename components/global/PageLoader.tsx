import { useWindowLoad } from "../../hooks/useWindowLoad";

export default function Loader() {
  const isLoad = useWindowLoad();

  return <div className={isLoad ? "" : ""}></div>;
}
