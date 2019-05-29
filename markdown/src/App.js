import React from "react";
import "./App.css";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";

const marked = require("marked");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
  }

  updateMarkdown = function(markdown) {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>
              <h1>Markdown Input</h1>
            </FormLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={event => this.updateMarkdown(event.target.value)}
            />
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    );
  }
}

export default App;
