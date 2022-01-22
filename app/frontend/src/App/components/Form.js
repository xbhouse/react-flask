import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  FormSelect,
  FormSelectOption,
  ActionGroup,
  Button
} from '@patternfly/react-core';

export default class HorizontalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'please choose',
      value1: '',
      value2: '',
      value3: ''
    };
    this.onChange = (value, event) => {
      this.setState({ value });
    };
    this.handleTextInputChange1 = value1 => {
      this.setState({ value1 });
    };
    this.options = [
      { value: 'select one', label: 'Select one', disabled: false },
      { value: 'elab-01d', label: 'elab-01d', disabled: false }
    ];
  }

  render() {
    const { value1 } = this.state;

    return (
      <Form isHorizontal>
        <FormGroup label="Application name" isRequired fieldId="horizontal-form-name" helperText="A unique name for your app">
          <TextInput
            value={value1}
            isRequired
            type="text"
            id="horizontal-form-name"
            aria-describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="Cluster" fieldId="horizontal-form-title" helperText="Where your app will live">
          <FormSelect
            value={this.state.value}
            onChange={this.onChange}
            id="horzontal-form-title"
            name="horizontal-form-title"
            aria-label="Your title"
          >
            {this.options.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit</Button>
          <Button variant="link">Cancel</Button>
        </ActionGroup>
      </Form>
    );
  }
}