import { globalDescr } from '../../../descriptions';
import type { FoldersProperties } from '../../interfaces';

export const updateDescription: FoldersProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['folders'],
			},
		},
		placeholder: '0fca80c4-d61c-4404-9fd7-6ba86b64154d',
		default: '',
		description: 'Unique ID of the folder object',
		required: true,
	},
	...globalDescr.jsonParameters('folders', 'update'),
	...globalDescr.bodyParametersJson('folders', 'update'),
	{
		displayName: 'Update Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['folders'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				placeholder: 'Cities',
				default: '',
				description: "Name of the folder. Can't be null or empty.",
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				placeholder: 'd97c2e0e-293d-4eb5-9e1c-27d3460ad29d',
				default: '',
				description: 'Unique identifier of the parent folder. This allows for nested folders.',
			},
		],
	},
];
