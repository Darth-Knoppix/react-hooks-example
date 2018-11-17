import React, { useState } from "react";

function byInitialVal(a, c) {
  a[c.props.id] = c.props.defaultValue || "";
  return a;
}

export default function Form({ name, children, onSubmit }) {
  const childArray = React.Children.toArray(children);
  const initialState = childArray.reduce(byInitialVal, {});
  const [values, setValue] = useState(initialState);

  function createFormField(child) {
    return (
      <div>
        <label htmlFor={child.props.id}>
          <span style={{ textTransform: "capitalize" }}>{child.props.id}</span>
          <child.type
            type={child.props.type}
            id={child.props.id}
            value={values[child.props.id]}
            onChange={({ target }) =>
              setValue({
                ...values,
                [child.props.id]: target.value
              })
            }
          />
        </label>
      </div>
    );
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(values);
      }}
      onReset={() => setValue(initialState)}
    >
      {React.Children.map(children, createFormField)}
      <hr/>
      <input type="reset" value="Reset" />
      {' '}
      <input type="submit" value="Submit" />
    </form>
  );
}
