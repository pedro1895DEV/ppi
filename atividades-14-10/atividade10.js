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

function organiza(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`Nome: ${usuarios[i].nome}`);
        console.log(`Email: ${usuarios[i].email}`);
        console.log(`Categorias: ${usuarios[i].categorias.join(', ')}`);
        console.log('\n');
    }
}

organiza(usuarios)