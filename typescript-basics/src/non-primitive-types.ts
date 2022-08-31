// tipos não primitivos - quais são?
    // objetos
    // classes
    // tipos
    // interfaces
  
  // type - tipo

  type AtendimentoEnum = 'urgente' | 'expresso' | 'normal'

  type Pessoa = {
    nome: string
    idade: number
    telefone: string
    atendimento: AtendimentoEnum
  }

  const pessoa: Pessoa = {
    nome: 'Gean',
    idade: 25,
    telefone: '65 9 8461-2534',
    atendimento: 'normal'
  }

  const buscarPessoaGeanderson = (): Pessoa => {
    const geanderson: Pessoa = {
      atendimento: 'expresso',
      idade: 15,
      nome: 'José',
      telefone: '61 ..'
    }
    
    return geanderson
  }
  
  const buscarTodasPessoas = (): Pessoa[] => {
    return [
      pessoa,
      pessoa,
      {
        atendimento: 'expresso',
        idade: 15,
        nome: 'José',
        telefone: '61 ..'
      }
    ]
  }

  type PessoaComRgOuCPf = Pessoa & {
    rgOuCpf: string  
  }

  const novaPessoa: PessoaComRgOuCPf = {
    ...pessoa,
    rgOuCpf: '4234538'
  }

  // tuple - tupla

  const chaveValor: [string, string] = ['nome', 'yan'] // { nome: 'yan' }

  // {
  //  atendimento: 'expresso',
  //  idade: 15,
  //  nome: 'José',
  //  telefone: '61 ..'
  // }

  type ChaveValor = [string, string | number]

  const pessoaSerializada: ChaveValor[] = [
    ['atendimento', 'expresso'],
    ['idade', 12],
    ['nome', 'Antonio'],
    ['telefone', '85 9 ...'],
  ]

  for (const pessoaProp of pessoaSerializada) {
    const [chave, valor] = pessoaProp
    
    console.log(chave, valor)
  }

  type NovaTupla = [string, Pessoa]
  
  const novaTupla: NovaTupla = ['Jean', pessoa]
  
  // generic
  interface Paginacao<Item> {
    itens: Item[]
    possuiProximo: boolean
    possuiAnterior: boolean
    quantidade: number
    quantidadePorPagina: number
    paginaAtual: number
  }

  const pessoasPaginadas: Paginacao<Pessoa> = {
    itens: [pessoa, pessoa, pessoa, pessoa, pessoa],
    paginaAtual: 1,
    possuiAnterior: false,
    possuiProximo: true,
    quantidade: 3,
    quantidadePorPagina: 5
  }

  const datasPaginadas: Paginacao<Date> = {
    itens: [new Date(), new Date(), new Date()],
    paginaAtual: 1,
    possuiAnterior: false,
    possuiProximo: true,
    quantidade: 3,
    quantidadePorPagina: 3
  }

  // multiplos genericos
  interface RetornoDaFuncao<Sucesso, Erro> {
    sucesso: () => Sucesso
    erro: () => Erro
  }

  interface ErroCustomizado {
    mensagem: string
    codigo: number
  }

  const retornoDaFuncao: RetornoDaFuncao<string, ErroCustomizado> =  {
    sucesso: () => 'Usuário salvo com sucesso!',
    erro: () => ({
      codigo: 154,
      mensagem: 'Erro ao tentar salvar usuário.'
    })
  }
  
  retornoDaFuncao.erro()
  retornoDaFuncao.sucesso()

