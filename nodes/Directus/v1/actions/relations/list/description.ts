import { globalDescr } from '../../../descriptions';
import type { RelationsProperties } from '../../interfaces';

export const listDescription: RelationsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['list'],
				resource: ['relations'],
			},
		},
		placeholder: 'articles',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Unique name of the parent collection',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
	...globalDescr.splitIntoItems('relations', 'list'),
];
