import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    // hasTrunfo: '',
    isSaveButtonDisabled: true,
  };

  validationFields = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const nameCheck = cardName !== '';
    const descriptionCheck = cardDescription !== '';
    const imageCheck = cardImage !== '';
    const rarityCheck = cardRare !== '';
    const maxNum = 90;
    const minNum = 0;
    const maxTotal = 210;
    const valAttr1 = Number(cardAttr1) >= minNum && Number(cardAttr1) <= maxNum;
    const valAttr2 = Number(cardAttr2) >= minNum && Number(cardAttr2) <= maxNum;
    const valAttr3 = Number(cardAttr3) >= minNum && Number(cardAttr3) <= maxNum;
    const TotalAttr = (Number(cardAttr1)) + (Number(cardAttr2)) + (Number(cardAttr3));
    const valTotalAttr = TotalAttr <= maxTotal;
    const valSaveButton = nameCheck
    && descriptionCheck
    && imageCheck
    && rarityCheck
    && valAttr1
    && valAttr2
    && valAttr3
    && valTotalAttr;
    this.setState({
      isSaveButtonDisabled: !valSaveButton,
    });
  };

  onInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Projeto Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={}
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          // onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
