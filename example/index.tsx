import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useToggle } from '../src';

export const ToggleComponent = () => {
  const [value, toggleValue] = useToggle();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}>ToggleComponent</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => toggleValue()}>toggle {`${value}`}</button>
          <button onClick={() => toggleValue(false)}>set false</button>
          <button onClick={() => toggleValue(true)}>set true</button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<ToggleComponent />, document.getElementById('root'));
