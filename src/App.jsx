import React, { useState } from 'react';
import './App.css';

const bakugans = [
  {
    name: 'Drago (Dragonoid)',
    attribute: 'Pyrus (Fogo)',
    emoji: '🔥',
    description: 'Drago é o Bakugan do Dan Kuso. Um dragão vermelho nobre com forte senso de justiça.',
    image: 'https://i.redd.it/n5hpbsgrlyld1.png'
  },
  {
    name: 'Hydranoid',
    attribute: 'Darkus (Sombra)',
    emoji: '⚫',
    description: 'Bakugan do Masquerade. Dragão sombrio com múltiplas cabeças. Evolui para Alpha Hydranoid.',
    image: 'https://i.redd.it/the-only-thing-that-i-hate-in-dual-and-alpha-hydranoid-v0-o4u0xog3srzc1.png?width=1493&format=png&auto=webp&s=2288d8ce6b0509adc2b8519689f4aac1c0146f11'
  },
  {
    name: 'Tigrerra',
    attribute: 'Haos (Luz)',
    emoji: '☀️',
    description: 'Bakugan da Runo Misaki. Tigre branco com armadura, sábia e estratégica.',
    image: 'https://preview.redd.it/zdxeezrt95le1.jpeg?auto=webp&s=e6300cbaad06ec17c63a72290337ba2882bf931b'
  },
  {
    name: 'Skyress',
    attribute: 'Ventus (Vento)',
    emoji: '🌿',
    description: 'Bakugan do Shun Kazami. Ave fênix verde, elegante e poderosa nos ares.',
    image: 'https://preview.redd.it/phoenix-themed-heroes-v0-0m5ac8e3j5le1.png?width=640&crop=smart&auto=webp&s=afb3588b37bf7c1147d69e838e2fa5270f5e68d4'
  },
  {
    name: 'Preyas',
    attribute: 'Aquos (Água)',
    emoji: '🌊',
    description: 'Bakugan do Marucho. Dragão azul engraçado e leal. Pode mudar de atributo.',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cdbe62f-e054-4980-86fa-69585740fbfc/dgdvwx9-ef4784f7-77f2-49ae-9619-29322fb72d6c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjZGJlNjJmLWUwNTQtNDk4MC04NmZhLTY5NTg1NzQwZmJmY1wvZGdkdnd4OS1lZjQ3ODRmNy03N2YyLTQ5YWUtOTYxOS0yOTMyMmZiNzJkNmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.te5B5tprSc3YPh_Gt9Q2AcsHeNUwSbM7dfrtIJZfkQw'
  }
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h1>Bakugans Principais</h1>

      {selected ? (
        <div className="selected-card" onClick={() => setSelected(null)}>
          <img src={selected.image} alt={selected.name} className="selected-img" />
          <h2>{selected.emoji} {selected.name}</h2>
          <h4>{selected.attribute}</h4>
          <p>{selected.description}</p>
          <button className="back-btn">Voltar</button>
        </div>
      ) : (
        <div className="cards">
          {bakugans.map((b, index) => (
            <div className="card" key={index} onClick={() => setSelected(b)}>
              <img src={b.image} alt={b.name} className="bakugan-img" />
              <h2>{b.emoji} {b.name}</h2>
              <h4>{b.attribute}</h4>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
