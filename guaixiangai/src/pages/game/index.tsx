import { useLocation } from 'react-router-dom'

export default function Game() {
  const location = useLocation()
  console.log(location);
  
  return (
    <div>
      Game
    </div>
  )
}
