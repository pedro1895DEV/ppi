let usuarios = [
    {
    nome: 'Rodrigo Melo Fernandes',
    email: 'rodrigo1999@zzzmail.com',
    categorias: ['premium', 'admin', 'proprietario'],
    },
    {
    nome: 'Letícia Goncalves Azevedo',
    email: 'lga@dayrep.com',
    categorias: ['admin'],
    },
    {
    nome: 'Pedro Almeida Oliveira',
    email: 'poliv3@armyspy.com',
    categorias: ['premium', 'promocao'],
    }
   ];

   function organiza(usuarios){
    for(let i in usuarios){
        for(let k =0; k < usuarios[i].length; k++){
            console.log(''+usuarios[i][k]);
        }
    }
   }

organiza([usuarios])