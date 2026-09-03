import { useEffect, useState } from 'react'

export default function Exercicio5() {
  const [itens, setItens] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const controle = new AbortController()
    const signal = controle.signal

    async function buscar() {
      try {
        setCarregando(true)
        setErro(null)

      
        await new Promise(resolve => setTimeout(resolve, 1500))

        const resp = await fetch('https://jsonplaceholder.typicode.com/users', { signal })
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
        const data = await resp.json()
        setItens(data)
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

  let mensagem
  if (carregando) {
    mensagem = 'Carregando...'
  } else if (erro) {
    mensagem = `Erro: ${erro}`
  } else if (itens.length === 0) {
    mensagem = 'Nenhum item encontrado.'
  } else {
    mensagem = `Sucesso: ${itens.length} itens carregados.`
  }

  return <p>{mensagem}</p>
}