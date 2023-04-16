import type { UtilsProperties } from '../../interfaces';

export const verifyHashDescription: UtilsProperties = [
	{
		displayName: 'String',
		name: 'string',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['verifyHash'],
				resource: ['utils'],
			},
		},
		placeholder: 'Hello World!',
		default: '',
		description: 'Source string',
		required: true,
	},
	{
		displayName: 'Hash',
		name: 'hash',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['verifyHash'],
				resource: ['utils'],
			},
		},
		placeholder: '$arg...fEfM',
		default: '',
		description: 'Hash you want to verify against',
		required: true,
	},
];
