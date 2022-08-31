// trabalhando com classes

class Store { 
  readonly id =  ''
}


class Order { 
  readonly id: string // somente para leitura, fora da classe, não será possivel assinar outro valor

  protected constructor(id: string, private readonly store: Store) {
    this.id = id
  }

  static from(id: string, store: Store): Order { 
    return new Order(id, store)
  }

  consultingStore(): Store { 
    return this.store
  }
}

const store = new Store()

const order = Order.from('some-id', store)
order.id


// implements - implementação de interface
interface Encriptador { 
  encriptar (valor: string): string
}

class EncriptadorMd5 implements Encriptador {
  encriptar (valor: string): string {
    return 'md5-encriptado-' + valor
  }
}

class EncriptadorAES256 implements Encriptador {
  encriptar (valor: string): string {
    return `aes-256-encriptado-${valor}`
  }
}

class Usuario { 
  readonly login: string
  readonly senha: string

  constructor(login: string, senha: string) {
    this.login = login
    this.senha = senha
  }
}

class UsuarioRepositorio {

  constructor(private readonly encriptador: Encriptador) {}

  criar (login: string, senha: string): Usuario { 
    const senhaEncriptada = this.encriptador.encriptar(senha)

    return new Usuario(login, senhaEncriptada)
  }
}

const usuarioRepositorioMd5 = new UsuarioRepositorio(new EncriptadorMd5())
const usuarioRepositorioAES256 = new UsuarioRepositorio(new EncriptadorAES256())


// extends - herança

class Animal {
  readonly peso: number
  readonly nome: string

  constructor (peso: number, nome: string) {
    this.peso = peso
    this.nome = nome
  }
}

class Ave extends Animal {
  readonly quantidadePenas: number

  constructor (peso: number, nome: string, quantidadePenas: number) {
    super(peso, nome)
    
    this.quantidadePenas = quantidadePenas
  }

  voar (): void {
    console.log(`${this.nome} está voando!`)
  }
}

class Papagaio extends Ave { 
  constructor (peso: number, nome: string, quantidadePenas: number) {
    super(peso, nome, quantidadePenas)
  }
}

const papagaio = new Papagaio(2, 'José', 226) 
papagaio.voar()


// classe abstrata
enum TipoAtendimento { 
  URGENTE,
  NORMAL
}

abstract class Atendimento {

  abstract diaDeAtendimento (): boolean 
}

class AtendimentoDiario implements Atendimento {
  #tipoAtendimento: TipoAtendimento

  constructor (tipoAtendimento: TipoAtendimento) {
    this.#tipoAtendimento = tipoAtendimento
  }

  get tipoAtendimento (): TipoAtendimento {
    return this.#tipoAtendimento
  }
  
  diaDeAtendimento (): boolean {
    return true
  }
}

class AtendimentoDataEspecifica implements Atendimento {
  #tipoAtendimento: TipoAtendimento
  #dataEspecifica: Date

  constructor (tipoAtendimento: TipoAtendimento, dataEspecifica: Date) {
    this.#tipoAtendimento = tipoAtendimento
    this.#dataEspecifica = dataEspecifica
  }

  get tipoAtendimento (): TipoAtendimento {
    return this.#tipoAtendimento
  }
  
  diaDeAtendimento (): boolean {
    return this.#dataEspecifica === new Date()
  }
}


const atendimentos = [
  new AtendimentoDiario(TipoAtendimento.NORMAL),
  new AtendimentoDiario(TipoAtendimento.URGENTE),
  new AtendimentoDataEspecifica(TipoAtendimento.NORMAL, new Date())
]

for (const atendimento of atendimentos) {
  atendimento.diaDeAtendimento()
}








