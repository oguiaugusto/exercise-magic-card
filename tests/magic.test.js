const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  while (favoriteCards.length > 4) {
    favoriteCards.pop();
  }
};

describe(' Testa a função getMagicCard', () => { 
  afterEach(() => {
    retrievesFavoriteCards();
  });

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(1);
    await getMagicCard('130553');

    expect(favoriteCards.length).toBe(5);
  });

  it("O array favoriteCards possui um card com a propriedade name com valor 'Beacon of Immortality'", async () => {
    expect.assertions(2);
    await getMagicCard('130553');
    const lastCard = favoriteCards[favoriteCards.length - 1];

    expect(lastCard).toHaveProperty('name');
    expect(lastCard.name).toEqual('Beacon of Immortality');
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);

    expect(favoriteCards).toHaveLength(4);
  });

  it('Os nomes das cartas devem ser como o esperado', async () => {
    expect.assertions(1);
    const names = favoriteCards.map((card) => card.name);
    const expected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']
    
    expect(names).toEqual(expected);
  });
});
