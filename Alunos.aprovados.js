const Alunos = [
    {
        nome:'Joao',
        nota: 5,
        turnma:'1b'
    },
    {
        nome:'Larissa',
        nota: 6,
        turnma:'1b'
    },
    {
        nome:'Gabriel',
        nota: 8,
        turnma:'1b'
    },
    {
        nome:'Miguel',
        nota: 4,
        turnma:'1b'
    }
]


function Alunosaprovados(array, media){
    
    let aprovados=[ ];
    
    for(let indice = 0; indice < array.length; indice++ ){

        const {nota, nome} = array[indice];


        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(Alunosaprovados(Alunos, 4))