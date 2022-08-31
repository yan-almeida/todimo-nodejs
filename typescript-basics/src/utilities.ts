// utilities -> https://www.typescriptlang.org/docs/handbook/utility-types.html
  // readonly
  // partial
  // required
  // record
  // pick
  // omit

// readonly e private - apenas leitura e propriedade privada
class A { 
  readonly nome: string = 'Yan' // propriedades de "apenas leitura" não podem ter o seu valor alterado de fora da contexto!

  private email: string = 'yan@mail.com' // propriedades privadas não podem ser acessadas de fora do contexto!
}
// new A().nome = 'José' // resulta num erro
// new A().email // propriedade inacessivel


// partial - transforma todas as propriedades em propriedades opcionais
// pick - pegar propriedades de uma interface
// omit - omitir propriedades de uma interface

interface Dto {
  id: string
  criadoEm: Date
  atualizadoEm: Date
  ativo: boolean
}

interface UsuarioDto {
  
  nome: string
  email: string
  telefone: string
}

// interface UsuarioDto extends Pick<Dto, 'ativo' | 'id'> {
//   nome: string
//   email: string
//   telefone: string
// }

// interface UsuarioDto extends Omit<Dto, 'ativo'> {
//   nome: string
//   email: string
//   telefone: string
// }

interface CriarUsuarioDto extends UsuarioDto {
  ativo: boolean
}

interface UtualizarUsuarioDto extends Partial<CriarUsuarioDto> { }

const utualizarUsuarioDto: UtualizarUsuarioDto = { 
  ativo: true
}

// required - transforma propriedades opcionais em obrigatorias
interface Jacare { 
  tamanho: number
  nome: string
  classificacao?: string
  peso?: number
}

interface JacarePagua extends Required<Jacare> { }

// record - grava um padrão

interface UsuarioApi extends Pick<UsuarioDto, 'email' | 'telefone'> {}

const usuario: UsuarioApi = {
  email: 'email',
  telefone: 'telefone'
}

type Usuarios =  'Yan Almeida'| 'Marcio' | 'Endreo' | 'Luciano'

const objetoApi: Record<Usuarios, UsuarioApi> = {
  'Yan Almeida': usuario,
  'Marcio': usuario,
  'Endreo': usuario,
  'Luciano': usuario,
}

objetoApi.Marcio.telefone

// utilizando chaves dinamicas
interface PontoPartida { 
  [key: string]: number
}

interface Ponto { 
  alturaOnda: PontoPartida
}

const ponto: Ponto = {
  alturaOnda: {
    a1: 0,
    a2: 5,
    a3: 10
  }
}

// type compatibility - compatibilidade de tipos (interfaces, types e classes)

interface Jogo {
  idadeMinima: number
  nome: string
  iniciar: () => Promise<void>
}

class Minecraft {
  nome: string = 'Minecraft'
  idadeMinima: number = 10

  async iniciar (): Promise<void> {
    console.log(`${this.nome} iniciou!`)
  }
}

(async () => {
  let jogo: Jogo
  jogo = new Minecraft()

  await jogo.iniciar()  
})()
