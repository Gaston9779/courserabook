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

      {/* Sezione Navigazione */}
      <header>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, alignItems:'center', gap:10 }}>
            <p>LOGO</p>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Chi Siamo</a></li>
            <li><a href="#contact">Contatti</a></li>
          </ul>
        </nav>
      </header>

      {/* Sezione Hero */}
      <section id="hero" style={{ textAlign: 'center', padding: '50px 0', background: '#f4f4f4' }}>
        <h2>Little Lemon Ristorante</h2>
        <p>Posizione: Via Roma, 123, Milano</p>
        <p>Il nostro ristorante offre un'esperienza gastronomica unica, con piatti freschi e un ambiente accogliente. Prenota subito il tuo tavolo!</p>
        <a href="#reservation" style={{ padding: '10px 20px', backgroundColor: '#ffcc00', textDecoration: 'none', color: 'black' }}>Prenota un Tavolo</a>
      </section>

      {/* Sezione Highlights */}
      <section id="highlights" style={{ padding: '40px 20px', background: '#fff' }}>
        <h3>Speciali Settimanali</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center' }}>
            <img src="https://via.placeholder.com/200" alt="Piatto speciale" />
            <h4>Pizza Margherita</h4>
            <p>Pizza classica con pomodoro fresco, mozzarella e basilico.</p>
            <p><strong>€8.99</strong></p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="https://via.placeholder.com/200" alt="Piatto speciale" />
            <h4>Pasta Carbonara</h4>
            <p>Spaghetti con uova, pancetta, pecorino e pepe nero.</p>
            <p><strong>€10.50</strong></p>
          </div>
        </div>
      </section>

      {/* Sezione Testimonianze */}
      <section id="testimonials" style={{ padding: '40px 20px', background: '#f4f4f4' }}>
        <h3>Testimonianze</h3>
        <div style={{ textAlign: 'center' }}>
          <p>"Un'esperienza culinaria fantastica! I piatti sono deliziosi e l'atmosfera è accogliente."</p>
          <p>- Maria Rossi</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>"Il miglior ristorante di Milano! Unico nel suo genere. Tornerò sicuramente."</p>
          <p>- Luca Bianchi</p>
        </div>
      </section>

      {/* Sezione Informazioni su Little Lemon */}
      <section id="about" style={{ padding: '40px 20px', background: '#fff' }}>
        <h3>Chi Siamo</h3>
        <p>Little Lemon è un ristorante che nasce dalla passione per la cucina autentica e l'amore per gli ingredienti freschi e locali. Il nostro obiettivo è offrire un'esperienza gastronomica unica, che possa far sentire ogni cliente come a casa propria.</p>
      </section>

      {/* Sezione Prenotazione */}
      <section id="reservation" style={{ padding: '40px 20px', background: '#f4f4f4' }}>
        <h3>Prenota il tuo Tavolo</h3>
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
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', background: '#333', color: 'white', textAlign: 'center' }}>
        <div>
          <img src="https://via.placeholder.com/100" alt="Logo Little Lemon" />
        </div>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'center', padding: 0 }}>
            <li><a href="#home" style={{ color: 'white', margin: '0 10px' }}>Home</a></li>
            <li><a href="#menu" style={{ color: 'white', margin: '0 10px' }}>Menu</a></li>
            <li><a href="#about" style={{ color: 'white', margin: '0 10px' }}>Chi Siamo</a></li>
            <li><a href="#contact" style={{ color: 'white', margin: '0 10px' }}>Contatti</a></li>
          </ul>
        </nav>
        <div>
          <p>Contattaci: info@littlelemon.com</p>
          <p>Seguici sui social:</p>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
            <li><a href="https://facebook.com" style={{ color: 'white', margin: '0 10px' }}>Facebook</a></li>
            <li><a href="https://instagram.com" style={{ color: 'white', margin: '0 10px' }}>Instagram</a></li>
          </ul>
        </div>
      </footer>

    </div>
  );
}

export default App;
