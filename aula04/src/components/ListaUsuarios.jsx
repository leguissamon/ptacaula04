import { useEffect, useState } from 'react'

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const controle = new AbortController() 
    const signal = controle.signal          

    async function buscar() {
      try {
        setCarregando(true)
        setErro(null)
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', { signal })
        // const resp = await fetch('https://jsonplaceholder.typicode.com/usuariosenterrado', { signal }) // descomente para testar o erro
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
        const data = await resp.json()
      // const data = [] // descomente para testar o estado vazio
        setUsuarios(data)
      } catch (e) {
        if (e.name !== 'AbortError') {
          
          setErro(e.message)
        }
      } finally {
        setCarregando(false)
      }
    }

    buscar()

    
    return () => controle.abort()
  }, [])

  if (carregando) return <p>Carregando...</p>
  if (erro)     return <p>Erro: {erro}</p>
  if (usuarios.length === 0) return <p>Nenhum usuário encontrado.</p>

  return (
    <>
    {usuarios.length === 0 && !carregando && !erro && (
  <p>Nenhum usuário cadastrado ainda.</p>
)}
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
    </>
  )
}