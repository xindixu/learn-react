import React from "react";
import { Route, Link } from "../xReactRouterDom";

function Detail() {
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}
const ProductPage = ({ match }) => {
  const { params, url } = match;
  const { id } = params;
  return (
    <div>
      <h1>Search-{id}</h1>
      <Link to={`${url}/detail`}>Detail</Link>
      <Route path={`${url}/detail`} component={Detail} />
    </div>
  );
};

export default ProductPage;
