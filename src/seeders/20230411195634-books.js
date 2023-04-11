'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('books', [{
      title: 'A Hora da Estrela',
      author: 'Clarice Lispector',
      pageQuantity: '320'
    },
    {
      title: 'Quarto de Despejo',
      author: 'Carolina Maria de Jesus',
      pageQuantity: '270'
    },
    {
      title: 'O Velho e o Mar',
      author: 'Ernest Hemingway',
      pageQuantity: '205'
    },
    {
      title: 'As Crônicas de Nárnia',
      author: 'C.S. Lewis',
      pageQuantity: '420'
    },
    {
      title: 'A Insustentável Leveza do Ser',
      author: 'Milan Kundera',
      pageQuantity: '360'
    },
    {
      title: 'A Revolução dos Bichos',
      author: 'George Orwell',
      pageQuantity: '180'
    },
    {
      title: 'O Sol é para Todos',
      author: 'Harper Lee',
      pageQuantity: '390'
    },
    {
      title: 'Grande Sertão: Veredas',
      author: 'João Guimarães Rosa',
      pageQuantity: '450'
    },
    {
      title: 'O Nome da Rosa',
      author: 'Umberto Eco',
      pageQuantity: '280'
    },
    {
      title: 'Os Lusíadas',
      author: 'Luís de Camões',
      pageQuantity: '500'
    },
    {
      title: 'A Moreninha',
      author: 'Joaquim Manuel de Macedo',
      pageQuantity: '150'
    },
    {
      title: 'Cem Anos de Solidão',
      author: 'Gabriel Garcia Marquez',
      pageQuantity: '480'
    },
    {
      title: 'Macunaíma',
      author: 'Mário de Andrade',
      pageQuantity: '200'
    },
    {
      title: 'Memórias Póstumas de Brás Cubas',
      author: 'Machado de Assis',
      pageQuantity: '290'
    },
    {
      title: 'O Homem que Calculava',
      author: 'Malba Tahan',
      pageQuantity: '230'
    },
    {
      title: 'O Vermelho e o Negro',
      author: 'Stendhal',
      pageQuantity: '370'
    },
    {
      title: 'Vidas Secas',
      author: 'Graciliano Ramos',
      pageQuantity: '210'
    },
    {
      title: 'O Cortiço',
      author: 'Aluísio Azevedo',
      pageQuantity: '280'
    },
    {
      title: 'O Alienista',
      author: 'Machado de Assis',
      pageQuantity: '180'
    },
    {
      title: 'Viagens na Minha Terra',
      author: 'Almeida Garrett',
      pageQuantity: '150'
    },
    {
      title: 'O Ateneu',
      author: 'Raul Pompéia',
      pageQuantity: '220'
    },
    {
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      pageQuantity: '24'
    },
    {
      title: 'A Cidade e as Serras',
      author: 'Eça de Queiroz',
      pageQuantity: '290'
    },
    {
      title: 'O Primo Basílio',
      author: 'Eça de Queiroz',
      pageQuantity: '0'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
