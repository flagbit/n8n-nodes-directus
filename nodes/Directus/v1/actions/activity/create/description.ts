import { globalDescr, options } from '../../../descriptions';
import type { ActivityProperties } from '../../interfaces';

export const createDescription: ActivityProperties = [
	{
		displayName: 'Item',
		name: 'item',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['activity'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: '1',
		default: '1\n',
		description: 'Primary Key of the item to comment on',
		required: true,
		typeOptions: {
			minValue: 1,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['activity'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'A new comment',
		default: '',
		description: 'The comment content. Supports Markdown.',
		required: true,
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['activity'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'projects',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Collection in which the item resides',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
	...globalDescr.jsonParameters('activity', 'create'),
	...globalDescr.bodyParametersJson('activity', 'create'),
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['activity'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [...options.Meta()],
	},
];
