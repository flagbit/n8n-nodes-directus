import type { UtilsProperties } from '../../interfaces';

export const generateHashDescription: UtilsProperties = [
	{
		displayName: 'String',
		name: 'string',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['generateHash'],
				resource: ['utils'],
			},
		},
		placeholder: 'Hello World!',
		default: '',
		description: 'String to hash',
		required: true,
	},
];
