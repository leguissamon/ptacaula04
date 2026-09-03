import ListaUsuarios from "./components/ListaUsuarios";

import Exercicio5 from "./components/Exercicio5";

export default function App(){
  return(
    <>
      <section>
        <h1>Exercícios 1, 2, 3 e 4</h1>
        <p>Professor, eu deixei o exercicio 2 e 4 em forma de um fetch comentado, basta ir no codigo, comentar o primeiro fetch e descomentar o segundo
          fetch para testar</p>
        <ListaUsuarios/>
      </section>

      <section>
        <h1>Exercício 5</h1>
        <Exercicio5/>
      </section>
    </>
  )
}