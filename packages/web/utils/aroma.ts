import aromas from './aromas.json';
import sample from 'lodash/sample';

export const pickRandomAroma = () => sample(aromas)!;
export const getAromas = () => aromas;
