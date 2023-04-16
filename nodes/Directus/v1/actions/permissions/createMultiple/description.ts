import type { PermissionsProperties } from '../../interfaces';

export const createMultipleDescription: PermissionsProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createMultiple'],
				resource: ['permissions'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-placeholder-miscased-id
		placeholder:
			'[\n	{\n		"collection": "pages",\n		"action": "read",\n		"role": "c86c2761-65d3-43c3-897f-6f74ad6a5bd7",\n		"fields": ["id", "title"]\n	},\n	{\n		"collection": "pages",\n		"action": "create",\n		"role": "c86c2761-65d3-43c3-897f-6f74ad6a5bd7",\n		"fields": ["id", "title"]\n	}\n]',
		default: null,
		description:
			'An array of partial [permissions objects](https://docs.directus.io/reference/api/system/permissions/#the-permission-object). `action` and `collection` are required.',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
