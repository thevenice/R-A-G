import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";

//apollo setup
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

//first create a link where we will connect our client to gql
const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
