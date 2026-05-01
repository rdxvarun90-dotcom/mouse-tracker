import './App.css';
import { useEffect, useState } from 'react';

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    };
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div>
      <h1>Mouse Tracking ...</h1>
      <div className='mouse-axis'>
        <p>X: {mousePosition.x}  y: {mousePosition.y}</p></div>
    </div>
  )
}

export default MouseTracker;