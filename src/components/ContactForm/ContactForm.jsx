import { useState } from 'react';
import { Form, AddBtn, Label, Input } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, number };
    onSubmit(data);
  };

  const hendleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);

        break;
      default:
        break;
    }
  };
  // render() {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={hendleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          required
          value={number}
          onChange={hendleChange}
        />
      </Label>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};

export default ContactForm;
