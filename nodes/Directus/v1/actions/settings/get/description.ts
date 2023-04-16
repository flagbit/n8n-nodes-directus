import { globalDescr } from '../../../descriptions';
import type { SettingsProperties } from '../../interfaces';

export const getDescription: SettingsProperties = [
	...globalDescr.jsonParameters('settings', 'get'),
	...globalDescr.queryParametersJson('settings', 'get'),
	...globalDescr.additionalFields('settings', 'get'),
];
