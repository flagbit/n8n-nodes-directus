import type { ActivityProperties } from '../../interfaces';

export const createDescription: ActivityProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['activity'],
			},
		},
		placeholder: '1',
		default: 1,
		description: 'Unique identifier for the object',
		required: true,
		typeOptions: {
			minValue: 1,
		},
	},
];
