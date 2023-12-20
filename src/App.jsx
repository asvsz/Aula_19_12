import { useState } from "react"
import Aluno from "./components/Aluno"

function App() {

  const alunos = ["Alan", "Aline", "Roberto", "Amanda", "Márcia"]
  const [notaPadrao, setNotaPadrao] = useState(0)

  return (
    <>
      <h1>Lançar Notas</h1>
      <p>
        Disciplina:
        <input type="text" />
      </p>
      <p>
        <span>Aluno</span>
        <span>Nota</span>
      </p>

      {alunos.map((al, index) => 
        <Aluno key={index} nome={al} nota={notaPadrao}/>
      )}

      <button onClick={() => setNotaPadrao(0)}>Limpar</button>
      <button>Salvar</button>
    </>
  )
}

export default App
