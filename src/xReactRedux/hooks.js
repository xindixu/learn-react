import { useLayoutEffect, useReducer, useContext } from "react";
import { StoreContext } from "./provider";

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export const useSubscribe = () => {
  const { subscribe } = useStore();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // const [, forceUpdate] = useState({});
  // and use forceUpdate({});

  // ___(mount) __(useEffect) => what if data changes in the delay
  // ___(mount)__(useLayoutEffect)
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsubscribe();
    };
  }, []);
};

// ex. const counter = useSelector((state) => state.counter);
export const useSelector = (selector) => {
  const { getState } = useStore();
  useSubscribe();

  return selector(getState());
};

// const dispatch = useDispatch();
export const useDispatch = () => {
  const { dispatch } = useStore();

  return dispatch;
};
