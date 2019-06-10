import React, { Component } from "react";
import { Trans } from "react-i18next";
import "./App.css";
import i18n from "./i18n";

class TestTComponent extends Component {
  render() {
    return (
      <div>
        <h1>{i18n.t("common.cancel")}</h1>
        <div>
          {i18n.t("retry", {
            timer: 3
          })}
        </div>
      </div>
    );
  }
}

class TestTransComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <Trans
            i18nKey={"choosePerson"}
            values={{ num: 3 }}
            components={[<code>1</code>]}
          />
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <TestTComponent />
        <TestTransComponent />
      </div>
    );
  }
}
