import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AppContext } from "next/app";

import { wrapper } from "../redux/store";

const App = ({ Component }: AppContext) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        ></meta>
        <title>App</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
