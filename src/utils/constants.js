export const POKEMON_CARDS_LENGTH = 6;
export const POKEMON_PROVIDER_MOCK = {
  firePokemon: [
    { name: 'A', image: '', color: 'red' },
    { name: 'A', image: '', color: 'red' },
    { name: 'A', image: '', color: 'red' },
  ],
  waterPokemon: [
    { name: 'A', image: '', color: 'blue' },
    { name: 'A', image: '', color: 'blue' },
    { name: 'A', image: '', color: 'blue' },
  ],
  grassPokemon: [
    { name: 'A', image: '', color: 'green' },
    { name: 'A', image: '', color: 'green' },
    { name: 'A', image: '', color: 'green' },
  ],
};
export const BAGS_LENGTH = 2;
export const PLAYER_ONE_WIN = 'Jogador 1 venceu!';
export const PLAYER_TWO_WIN = 'Jogador 2 venceu!';
export const DRAW = 'Empate!';
export const WIN_CONDITION = [
  [DRAW, PLAYER_TWO_WIN, PLAYER_ONE_WIN],
  [PLAYER_ONE_WIN, DRAW, PLAYER_TWO_WIN],
  [PLAYER_TWO_WIN, PLAYER_ONE_WIN, DRAW]];
export const COLOR_TO_NUMBER = {
  red: 0,
  blue: 1,
  green: 2,
};
