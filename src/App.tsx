import { useState, ChangeEvent } from 'react';
import { toCase } from './utils';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [word, setWord] = useState("");
  const [wordCase, setWordCase] = useState("nominative");

  const onInputsHandler = (evt: ChangeEvent<HTMLInputElement>) =>{
    setWord(evt.currentTarget.value);
    evt.preventDefault();
  }

  const onSelectHandler = (evt: ChangeEvent<HTMLSelectElement>) =>{
    setWordCase(evt.currentTarget.value);
    evt.preventDefault();
  }

  const onFormSubmit = () => {
    setResult(toCase(word,wordCase));
  };

  return (
    <div className="App">
      <header className="App-header">
          <p>Слово:</p>
          <p className='word-tips'>Введите существительное в единственном числе и именительном падеже</p>
          <input
                type="text"
                value={word}
                onChange={onInputsHandler}
                placeholder="Введите слово"/>
          <select name="user-case" onChange={onSelectHandler} >
            <option value="nominative">Именительный</option>
            <option value="genitivus">Родительный</option>
            <option value="dativus">Дательный</option>
            <option value="accusativus">Винительный</option>
            <option value="creative">Творительный</option>
            <option value="prepositional">Предложный</option>
          </select>
          <button onClick={onFormSubmit}>Результат</button>
          <div className="case-result">{result}</div>
        </header>
    </div>
  );
}

export default App;
