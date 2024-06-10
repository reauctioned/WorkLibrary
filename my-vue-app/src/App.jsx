import React from "react";
import Navbar from './Navbar';
import './App.css';
import data from './data';
import Card from './Card';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        location={item.location}
        startDate={item.startDate}
        description={item.description}
      />
    );
  });

  return (
    <div className='main'>
      <Navbar />
      <section className='cards-section'>
        {cards}
      </section>
    </div>
  );
}
