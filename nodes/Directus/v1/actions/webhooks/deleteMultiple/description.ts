import type { WebhooksProperties } from '../../interfaces';

export const deleteMultipleDescription: WebhooksProperties = [
	{
		displayName: 'Keys (JSON)',
		name: 'keys',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['webhooks'],
			},
		},
		placeholder: '[2, 15, 41]',
		default: null,
		description: 'An array of webhook primary keys',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
