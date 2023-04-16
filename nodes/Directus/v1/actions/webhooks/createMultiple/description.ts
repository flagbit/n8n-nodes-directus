import type { WebhooksProperties } from '../../interfaces';

export const createMultipleDescription: WebhooksProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createMultiple'],
				resource: ['webhooks'],
			},
		},
		placeholder:
			'[\n	{\n		"name": "Example",\n		"actions": ["create", "update"],\n		"collections": ["articles"],\n		"url": "https://example.com"\n	},\n	{\n		"name": "Second Example",\n		"actions": ["delete"],\n		"collections": ["articles"],\n		"url": "https://example.com/on-delete"\n	}\n]',
		default: null,
		description:
			'An array of partial [webhook object](https://docs.directus.io/reference/api/system/webhooks/#the-webhook-object). `name`, `actions`, `collections`, and `url` are required.',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
