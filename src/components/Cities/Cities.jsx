import React, { Component } from 'react';
import CitiesList from './CitiesList/CitiesList';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import { Container, Box, Title, Img } from './Cities.styled';
import data from 'data/university.json';

export default class Cities extends Component {
  state = {
    isShow: false,
    cities: data.cities,
    inputValue: '',
  };
  handlerClick = () => {
    // this.setState({ isShow: true });
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  };
  handleSubmit = () => {
    this.setState(prevState => ({
      cities: [...prevState.cities, this.state.inputValue],
      inputValue: '',
      isShow: false,
    }));
  };

  handlerChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ inputValue: value });
  };
  render() {
    const { isShow, cities, inputValue } = this.state;
    return (
      <Container>
        <Box>
          <Img />
          <Title>Міста</Title>
        </Box>
        <CitiesList cities={cities} />
        <Button text="Добавити місто" onClick={this.handlerClick} />
        {isShow && (
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={inputValue}
              name="city"
              onChange={this.handlerChange}
            />
          </Form>
        )}
      </Container>
    );
  }
}
