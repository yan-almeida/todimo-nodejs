  // tipos primitivos - quais são?
    // string
    // number
    // Array / []
    // enum
    // void
    // never
    // any / unknown
    // null / undefined
    // boolean
    // Date

  const nome: string = 'Luciano' // string, sem inferencia de tipo
  const pet = 'Churrasco' // string, com inferencia de tipo
  const idade: number = 38 // number
  const nomeFilhos: string[] = ['Roberta', 'Ricardo'] // array de string
  const nomePets: Array<string> = ['Petisco', 'Salsicha', 'Raspadinha'] // array de string

  const digaMeuNome = (): void => {
    console.log(nome)
  }
  digaMeuNome() // void

  // any e unknown - NÃO UTILIZAR NUNCA!!!!!!
  const telefone: any = '61 9 8888-8888'
  telefone.map(' ')

  
  // null e undefined
  const retornaNome = (id: number): string | undefined | null => {
    // buscando usuário pelo id
    console.log(id)
    // se achar, retorna o nome do usuario

    if (!nome) {
      return null
    }

    if (!nome) {
      return
    }

    return nome
  }

  // null ou indefinido == FALSY, !false = true
  const nomeRetornado = retornaNome(123)

  if (nomeRetornado) {
    console.log(nomeRetornado)    
  }

  // booleano
  const euExisto: boolean = true
  const euNaoExisto: boolean = false


  // FALSY
  // null, undefined, 0, '', [].length === 0

  // TRUTHY
  // 'string', 1 (qlqr coisa maior que 0!), {}, [], Date

  // never
  function criarError(): never {
    throw new Error('Iiih. Deu erro!')
  }
  criarError()

  // enum
  enum QuantidadeDeChamados {
    DOMINGO = 5,
    SEGUNDA = 12,
    TERCA = 6,
    QUARTA = 4,
    QUINTA = 41,
    SEXTA = 8,
    SABADO = 2
  }
  // QuantidadeDeChamados.SABADO


  