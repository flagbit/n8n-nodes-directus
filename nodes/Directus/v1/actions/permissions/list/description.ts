import { globalDescr } from '../../../descriptions';
import type { PermissionsProperties } from '../../interfaces';

export const listDescription = globalDescr.listDefault(
	'permissions',
	'list',
) as PermissionsProperties;
