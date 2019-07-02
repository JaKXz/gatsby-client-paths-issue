import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import Home from "./home";
import Settings from "./settings";

export default function Account() {
  if (true) {
    return <p>loading...</p>
  }

  return (
    <Layout>
      <Router>
        <Settings path="/account/settings" />
        <Home path="/account" />
      </Router>
    </Layout>
  )
}
