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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
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
    if (name === 'cardTrunfo') {
      this.setState({
        [name]: target.checked,
      }, this.validationFields);
      return;
    }
    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deck,
      hasTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    const hasTrunfoCard = !hasTrunfo && cardTrunfo ? true : hasTrunfo;
    if (hasTrunfo && cardTrunfo) {
      return;
    }
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: hasTrunfoCard,
      isSaveButtonDisabled: true,
      deck: [...deck, newCard],
    });
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
      hasTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;

    const cartaSalva = deck.map((cardObj, index) => (<Card
      key={ index }
      cardName={ cardObj.cardName }
      cardDescription={ cardObj.cardDescription }
      cardAttr1={ cardObj.cardAttr1 }
      cardAttr2={ cardObj.cardAttr2 }
      cardAttr3={ cardObj.cardAttr3 }
      cardImage={ cardObj.cardImage }
      cardRare={ cardObj.cardRare }
      cardTrunfo={ cardObj.cardTrunfo }
    />));
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        {cartaSalva}
      </div>
    );
  }
}

export default App;
