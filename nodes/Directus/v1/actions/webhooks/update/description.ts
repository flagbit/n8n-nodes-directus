import type { WebhooksProperties } from '../../interfaces';

export const updateDescription: WebhooksProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['webhooks'],
			},
		},
		placeholder: '15',
		default: '',
		description: 'Primary key of the webhook',
		required: true,
	},
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['webhooks'],
			},
		},
		placeholder: '{\n	"name": "Build Website"\n}',
		default: null,
		description:
			'A partial [webhook object](https://docs.directus.io/reference/api/system/webhooks/#the-webhook-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
