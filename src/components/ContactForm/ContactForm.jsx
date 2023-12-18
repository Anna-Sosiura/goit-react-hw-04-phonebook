import { Component } from 'react';
import { Form, AddBtn, Label, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';
class ContactForm extends Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '', id: nanoid() });
  };

  hendleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.hendleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.hendleChange}
          />
        </Label>
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    );
  }
}
export default ContactForm;
