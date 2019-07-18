import React from 'react';
import './App.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>

    </div>
  );
}

export default App;
