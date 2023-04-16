import { options } from '../../../descriptions';
import type { ActivityProperties } from '../../interfaces';

export const getDescription: ActivityProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['activity'],
			},
		},
		placeholder: '1',
		default: 1,
		description: 'Index',
		required: true,
		typeOptions: {
			minValue: 1,
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['activity'],
			},
		},
		options: [...options.Fields(), ...options.Meta()],
	},
];
