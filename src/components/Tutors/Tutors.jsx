import React, { Component } from 'react';
import TutorsList from './TutorsList/TutorList';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import { Container, Box, Title, Img } from './Tutors.styled';

export default class Tutors extends Component {
  state = {
    isFormShow: false,
    lastName: '',
    firstName: '',
    patreonomic: '',
    phone: '',
    email: '',
    city: '',
  };

  toggleForm = () => {
    this.setState(prevState => ({
      isFromShow: !prevState.isFormShow,
    }));
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    const { lastName, firstName, patreonomic, phone, email, city } = this.state;
    event.preventDefault();
  };

  render() {
    const { isFormShow, lastName, firstName, patreonomic, phone, email, city } =
      this.state;
    return (
      <Container>
        <Box>
          <Img />
          <Title>Викладачі</Title>
        </Box>
        <TutorsList />
        <Button text="Добавити викладача" onClick={this.toggleForm} />
        {isFormShow && (
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="firstname"
              value={firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="patreonomic"
              placeholder="patreonomic"
              value={patreonomic}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="city"
              value={city}
              onChange={this.handleChange}
            />
          </Form>
        )}
      </Container>
    );
  }
}
