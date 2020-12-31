import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export const useHistory = () => {
  const { history } = useContext(RouterContext);
  return history;
};

export const useLocation = () => {
  const { location } = useContext(RouterContext);
  return location;
};

export const useRouteMatch = () => {
  const { match } = useContext(RouterContext);
  return match;
};

export const useParams = () => {
  const { match: { params } = {} } = useContext(RouterContext);
  return params || {};
};
