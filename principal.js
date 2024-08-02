import { Usuario } from './Usuario.js';
import { funcoesES } from './EntradaSaida.js';
import filme from './filme.js';
import serie from './serie.js';


const EntradaSaida = new funcoesES()

const numeros = [0,1,2]

//--------------Filme----------------------//

// const Filmes = [new filme(" Harry Potter",124," Um menino orfão que descobre o mundo da magia",2010),
//     new filme(" Orgulho e Preconceito ",118," De um homem preconceituoso e uma mulher orgulhosa",2009),
//     new filme(" Velozes e Furiosos 5 ", 131," São pilotos fugindo das autoriedades ",2011)
// ]

// for (var i = 0;i < Filmes.length; i++){
// EntradaSaida.mensagemCompleta(i +" - "+ Filmes[i].nome);
// }

// var resposta = Number(EntradaSaida.entrada("Digite uma filme para assistir"))
// EntradaSaida.mensagemCompleta(Filmes[resposta].assistir());

// var resposta = Number(EntradaSaida.entrada("Digite uma filme para compartilhar"))
// EntradaSaida.mensagemCompleta(Filmes[resposta].compartilhar());


//------------Serie-------------------//

// const Series = [new serie(1," Criminal Minds",40,"Agente do FBI que fazem o perfil de assassinos",2013,1,1),
//                 new serie(1," Suits",40,"De um homem inteligente que se passa por advogado",2015,1,1),
//                 new serie(1," The BlackList ", 45," Um dos criminosos mais procurados se entrega e oferece uma acordo ao FBI ",2012,1,1)
// ]

// for (var i = 0;i < Series.length; i++){
//     EntradaSaida.mensagemCompleta(i +" - "+ Series[i].nomeSerie);
// }

// var resposta = Number(EntradaSaida.entrada("Digite uma serie para assistir"))
// EntradaSaida.mensagemCompleta(Series[resposta].assistir());

// var resposta = Number(EntradaSaida.entrada("Digite uma serie para compartilhar"))
// EntradaSaida.mensagemCompleta(Series[resposta].compartilhar());


//--------------------Usuario-----------------//

const Usuarios = [new Usuario("Ana", "ana@gmail.com", "12345678"),
                new Usuario("Denis", "denis@teste.com", "12345678"),
                new Usuario("Erika", "erika@gmail.com", "12345678")

]
for  (var i = 0;i < Usuarios.length; i++){
    EntradaSaida.mensagemCompleta(i +" - "+ Usuarios[i].Nome);
}

var resposta = Number(EntradaSaida.entrada("Digite um Usuário"))
// EntradaSaida.mensagemCompleta(Usuarios[resposta].fazerLogin(email,senha));

var email = EntradaSaida.entrada("Digite um email")
var senha = EntradaSaida.entrada("Digite uma senha")

var resultado = EntradaSaida.mensagemCompleta(Usuarios[resposta].fazerLogin(email,senha));
// var resultado = (Usuario.fazerLogin())

 if (resultado == "Login efetuado"){
EntradaSaida.mensagemCompleta("Bem vindo "+this.Nome)

}

//------------------------------------------------------------//