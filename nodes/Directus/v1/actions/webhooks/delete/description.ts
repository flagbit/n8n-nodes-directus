import type { WebhooksProperties } from '../../interfaces';

export const deleteDescription: WebhooksProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['webhooks'],
			},
		},
		placeholder: '15',
		default: '',
		description: 'Primary key of the webhook',
		required: true,
	},
];
