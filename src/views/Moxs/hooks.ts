import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

function useStore(name: any) {
  const store = useContext(MobXProviderContext);
  return store[name];
}

export default useStore;
