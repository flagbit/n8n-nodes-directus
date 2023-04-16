import { globalDescr } from '../../../descriptions';
import type { SettingsProperties } from '../../interfaces';

export const updateDescription: SettingsProperties = [
	...globalDescr.jsonParameters('settings', 'update'),
	...globalDescr.queryParametersJson('settings', 'update'),
	...globalDescr.additionalFields('settings', 'update'),
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['settings'],
			},
		},
		placeholder: '{\n	"project_url": "https://example.com/"\n}',
		default: null,
		description:
			'A partial [settings object](https://docs.directus.io/reference/api/system/settings/#the-settings-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
