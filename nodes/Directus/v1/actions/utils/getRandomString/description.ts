import type { UtilsProperties } from '../../interfaces';

export const getRandomStringDescription: UtilsProperties = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getRandomString'],
				resource: ['utils'],
			},
		},
		options: [
			{
				displayName: 'Length',
				name: 'length',
				type: 'number',
				placeholder: '20',
				default: null,
				description: 'Length of the random string',
				typeOptions: {
					minValue: 1,
				},
			},
		],
	},
];
