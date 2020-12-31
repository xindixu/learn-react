import React from "react";

import {
  Route,
  Link,
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from "../xReactRouterDom";

function Detail() {
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}
const ProductPage = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  const { id } = params;
  const { url } = match;

  console.log(history, params, location, match);
  return (
    <div>
      <h1>Search-{id}</h1>
      <Link to={`${url}/detail`}>Detail</Link>
      <Route path={`${url}/detail`} component={Detail} />
    </div>
  );
};

export default ProductPage;
