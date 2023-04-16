import { globalDescr } from '../../../descriptions';
import type { AuthProperties } from '../../interfaces';

export const listDescription: AuthProperties = [...globalDescr.splitIntoItems('auth', 'list')];
