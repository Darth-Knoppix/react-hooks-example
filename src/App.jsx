import React, { useState } from "react";
import Toggle from "./containers/Toggle";
import Form from "./containers/Form";
import Button from "./components/Button";
import Slide from "./components/Slide";
import Modal from "./components/Modal";

// #region Style & Code examples
const containerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  gridGap: "2rem",
  justifyItems: "center"
};

const CodeSnippet = {
  Simple: `<Toggle Element={Button}>
  <span>On</span>
  <span>Off</span>
</Toggle>`,
  Slide: `<Toggle Element={Slide}>
  <span>On</span>
  <span>Off</span>
</Toggle>`,
  Reveal: `<Toggle Element={Modal}>
  <span>Hide</span>
  <span>Show</span>
</Toggle>`,
  Form: `<Form onSubmit={v => setFormOutput(JSON.stringify(v))}>
  <input id="name" />
  <input id="birth" type="date" defaultValue="1995-01-01" />
  <input id="email" type="email" />
</Form>`
};

// #endregion

const PreformattedCodeBlock = ({ children }) => (
  <aside>
    <code>
      <pre>{children}</pre>
    </code>
  </aside>
);

export default function App() {
  const [formOutput, setFormOutput] = useState("");

  return (
    <main>
      <h1>
        React Hooks{" "}
        <small>
          <i>Using the state hook</i>
        </small>
      </h1>
      <article>
        <h2>Toggle</h2>
        <p>
          Basic components all using the <b>Toggle</b> component with{" "}
          <code>setState</code> hook
        </p>
        <section>
          <h3>
            <small>Simple Button</small>
          </h3>
          <div style={containerStyle}>
            <Toggle Element={Button}>
              <span>On</span>
              <span>Off</span>
            </Toggle>

            <PreformattedCodeBlock>{CodeSnippet.Simple}</PreformattedCodeBlock>
          </div>

          <h3>
            <small>Slide Button</small>
          </h3>
          <div style={containerStyle}>
            <Toggle Element={Slide}>
              <span>⏪</span>
              <span>⏩</span>
            </Toggle>

            <PreformattedCodeBlock>{CodeSnippet.Slide}</PreformattedCodeBlock>
          </div>

          <h3>
            <small>Reveal Element</small>
          </h3>
          <div style={containerStyle}>
            <Toggle Element={Modal}>
              <span>Hide</span>
              <span>Show</span>
            </Toggle>

            <PreformattedCodeBlock>{CodeSnippet.Reveal}</PreformattedCodeBlock>
          </div>
        </section>
      </article>
      <hr />
      <article>
        <h2>Form</h2>
        <p>
          A form which uses a simple state container to store the data of the
          form
        </p>
        <div style={containerStyle}>
          <Form onSubmit={v => setFormOutput(JSON.stringify(v))}>
            <input id="name" />
            <input id="birth" type="date" defaultValue="1995-01-01" />
            <input id="email" type="email" />
          </Form>

          <PreformattedCodeBlock>{CodeSnippet.Form}</PreformattedCodeBlock>
        </div>
        <br />
        <p>
          <i>Last submit result: </i>
        </p>
        <code>{formOutput}</code>
      </article>
    </main>
  );
}
