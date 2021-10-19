const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    expect.assertions(1);

    const magicCard = await getMagicCardSimulator('130550');
    expect(magicCard).toEqual(expected);
  });
  it('A propriedade types é do tipo array', async () => {
    expect.assertions(1);

    const magicCard = await getMagicCardSimulator('130550');
    const { types } = magicCard;
    expect(Array.isArray(types)).toBe(true);
  });
});
