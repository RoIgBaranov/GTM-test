import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main'>
      <header>
        <h1>Roman Baranov</h1>
        <p>Test GTM</p>
      </header>
      <section className='section'>
        <button id='Add'>Добавить в корзину</button>
        <button id='Buy'>Купить</button>
        <button id='View'>Посмотреть товар</button>
        <button id='Remove'>Удалить</button>
      </section>
      <footer>
          <a href='https://t.me/romanbaranovofficial'>telegram</a>
      </footer>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
