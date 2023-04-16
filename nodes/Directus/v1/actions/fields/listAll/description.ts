import { globalDescr } from '../../../descriptions';
import type { FieldsProperties } from '../../interfaces';

export const listAllDescription: FieldsProperties = [
	...globalDescr.splitIntoItems('fields', 'listAll'),
];
