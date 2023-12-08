// boolean = true or false
let estaChovendo: boolean = false;

// number = number
let idade: number = 27;

//string = words
const nacionalidade: string = 'brasileira';

// array of string
const colegas: string[] = ['lucas', 'fernanda'];
const tecnologias: Array<string> = ['html', 'css', 'js'];

    //reading array
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

    //array with multiple data
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27];

    // array that accept one more data type
let idadeDaAna: number | string = 25;
idadeDaAna = '25 anos';

// accept anything | thing = coisa | anything = qualquer coisa
    // you use it when don't know the data type
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';