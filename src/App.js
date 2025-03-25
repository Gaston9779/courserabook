import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState({
    date: null,
    ospiti: null,
    occasion: null
  });
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const date = e.target.elements.data.value;
    const ospiti = e.target.elements.ospiti.value;
    const occasion = e.target.elements.occasione.value;

    // Validazione dei dati
    if (!date || !ospiti || !occasion) {
      setError("Tutti i campi sono obbligatori.");
      return;
    }

    setError(""); // Resetta l'errore se tutto è valido
    setInput({
      date: date,
      ospiti: ospiti,
      occasion: occasion
    });
  };

  useEffect(() => {
    console.log(input, 'inp');
  }, [input]);

  return (
    <div className="App">
      <h1>Prenota il tuo tavolo</h1>
      <form onSubmit={onSubmit} style={{ border: '1px solid', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', margin: '0 auto' }}>

        {/* Data */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="data">Data</label>
          <input
            type="datetime-local"
            name="data"
            id="data"
            aria-label="Seleziona la data e l'ora"
            required
          />
        </div>

        {/* Ospiti */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="ospiti">Ospiti</label>
          <input
            type="number"
            name="ospiti"
            id="ospiti"
            aria-label="Inserisci il numero di ospiti"
            min="1"
            required
          />
        </div>

        {/* Occasione */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="occasione">Occasione</label>
          <input
            type="text"
            name="occasione"
            id="occasione"
            aria-label="Inserisci l'occasione"
            required
          />
        </div>

        {/* Mostra errore se presente */}
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default App;
