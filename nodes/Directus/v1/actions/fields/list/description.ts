import { globalDescr } from '../../../descriptions';
import type { FieldsProperties } from '../../interfaces';

export const listDescription: FieldsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['fields'],
			},
		},
		placeholder: 'articles',
		default: '',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},

	...globalDescr.splitIntoItems('fields', 'list'),
];
