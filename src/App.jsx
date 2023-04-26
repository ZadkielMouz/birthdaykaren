import { useEffect, useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

function App() {
  useEffect(() => {
    setTimeout(() => {
      confetti({
        zIndex: 999,
        particleCount: 1000,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
      confetti({
        zIndex: 999,
        particleCount: 1000,
        spread: 160,
        angle: -100,
        origin: {
          x: 0,
          y: 0
        }
      })
    }, 1000);
  }, []);

  const onClick = () => {
    confetti({
      zIndex: 999,
      particleCount: 1000,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
    confetti({
      zIndex: 999,
      particleCount: 1000,
      spread: 160,
      angle: -100,
      origin: {
        x: 0,
        y: 0
      }
    })
  }


  return (
    <>
      
      <h1>Feliz cumpleaños Karen!!!!!</h1>
      <h1>🎉🥳</h1>
      <h2>Espero la pases de lo mejor hoy ❤️ </h2>
      <div className="card">
        <button onClick={onClick}>
          Presioname caramba 👌
        </button>
      </div>
      <p className="read-the-docs">
        Made with love ❤️ but fast (sorry 😅)
      </p>
    </>
  )
}

export default App
