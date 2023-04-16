import type { WebhooksProperties } from '../../interfaces';

export const getDescription: WebhooksProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['webhooks'],
			},
		},
		placeholder: '15',
		default: '',
		description: 'Primary key of the webhook',
		required: true,
	},
];
