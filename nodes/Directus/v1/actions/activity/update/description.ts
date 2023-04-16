import { options } from '../../../descriptions';
import type { ActivityProperties } from '../../interfaces';

export const updateDescription: ActivityProperties = [
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['activity'],
			},
		},
		placeholder: 'My updated comment',
		default: '',
		description: 'The updated comment content. Supports Markdown.',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['update'],
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
		displayName: 'Update Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['activity'],
			},
		},
		options: [...options.Meta()],
	},
];
