import './App.css'
import Perfil from './components/Perfil'
import Habilidades from './components/Habilidades'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Educacion from './components/Educacion'
import Certificaciones from './components/Certificaciones'

function App() {
  return (
    <div className="app">
      <h1>Portafolio Profesional</h1>
      <Perfil />
      <Habilidades />
      <Experiencia />
      <Proyectos />
      <Educacion />
      <Certificaciones />
    </div>
  )
}

export default App
