import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="cardName"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="textarea">
          Descrição
          <textarea
            data-testid="description-input"
            id="textarea"
            name="cardDescription"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="number1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="number1"
            name="cardAttr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="number2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            id="number2"
            name="cardAttr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="number3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            id="number3"
            name="cardAttr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="image">
          Insira imagem da carta
          <input
            data-testid="image-input"
            type="text"
            id="image"
            name="cardImage"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label>
          Raridade
          <select
            data-testid="rare-input"
            id="select"
            name="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="check">
              <input
                type="checkbox"
                id="check"
                name="cardTrunfo"
                data-testid="trunfo-input"
                onChange={ onInputChange }
                checked={ cardTrunfo }
              />
              Super Trybe Trunfo
            </label>
          )
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
