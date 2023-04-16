import { globalDescr } from '../../../descriptions';
import type { FoldersProperties } from '../../interfaces';

export const createDescription: FoldersProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['folders'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'Nature',
		default: '',
		description: 'Name of the folder',
		required: true,
	},
	...globalDescr.jsonParameters('folders', 'create'),
	...globalDescr.bodyParametersJson('folders', 'create'),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['folders'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'Unique identifier of the parent folder. This allows for nested folders.',
			},
		],
	},
];
