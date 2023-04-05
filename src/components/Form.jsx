import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
          />
        </label>
        <label htmlFor="textarea">
          Descrição
          <textarea
            data-testid="description-input"
            id="textarea"
          />
        </label>
        <label htmlFor="number1">
          Attr01
          <input
            data-testid="attr1-input"
            type="text"
            id="number1"
          />
        </label>
        <label htmlFor="number2">
          Attr02
          <input
            data-testid="attr2-input"
            type="text"
            id="number2"
          />
        </label>
        <label htmlFor="number3">
          Attr03
          <input
            data-testid="attr3-input"
            type="text"
            id="number3"
          />
        </label>
        <label htmlFor="name">
          Insira imagem da carta
          <input
            data-testid="image-input"
            type="text"
            id="name"
          />
        </label>
        <label>
          Raridade
          <select data-testid="rare-input" name="select" id="select">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label>
          <input type="checkbox" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
