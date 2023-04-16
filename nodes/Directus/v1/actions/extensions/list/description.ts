import { globalDescr } from '../../../descriptions';
import type { ExtensionsProperties } from '../../interfaces';

export const listDescription: ExtensionsProperties = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['extensions'],
			},
		},
		placeholder: 'Select an option',
		default: 'displays',
		required: true,
		options: [
			{
				name: 'Displays',
				value: 'displays',
			},
			{
				name: 'Interfaces',
				value: 'interfaces',
			},
			{
				name: 'Layouts',
				value: 'layouts',
			},
			{
				name: 'Modules',
				value: 'modules',
			},
		],
	},
	...globalDescr.splitIntoItems('extensions', 'list'),
];
