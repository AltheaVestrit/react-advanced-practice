import { useState } from "react";

function App() {
  const onSubmit = (username) => console.log(username);

  const [username, setUsername] = useState("");

  return (
    <div>
      <Form
        onSubmit={(event) => {
          onSubmit(username);
          event.preventDefault();
        }}
      >
        <InputField value={username} onChange={setUsername}>
          Your name:
        </InputField>
        <Button color="violet" type="submit">
          Send
        </Button>
      </Form>
      <SplitPane
        left={
          <div>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </div>
        }
        right={<p>Copyright 2026</p>}
      />
    </div>
  );
}

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ color = "white", onClick, type = "button", children }) => (
  <button style={{ backgroundColor: color }} type={type} onClick={onClick}>
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

const SplitPane = ({ left, right }) => {
  return (
    <div className="split-pane">
      <div className="left-pane">{left}</div>
      <div className="right-pane">{right}</div>
    </div>
  );
};

export default App;
