import { globalDescr } from '../../../descriptions';
import type { CollectionsProperties } from '../../interfaces';

export const listDescription: CollectionsProperties = [
	...globalDescr.splitIntoItems('collections', 'list'),
];
