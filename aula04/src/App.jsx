import ListaUsuarios from "./components/ListaUsuarios";
import StatusAPI from "./components/StatusAPI";

export default function App(){
  return(
    <section>
      <h1>Lista de Usuários</h1>
      <ListaUsuarios/>
      <StatusAPI/>
    </section>
  )
}
