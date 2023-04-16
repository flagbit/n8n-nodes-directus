import type { WebhooksProperties } from '../../interfaces';

export const updateMultipleDescription: WebhooksProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['webhooks'],
			},
		},
		placeholder: '{\n	"keys": [15, 41],\n	"data": {\n		"name": "Build Website"\n	}\n}',
		default: null,
		description:
			"Required:\n- **`keys`** [Array of primary keys of the webhooks you'd like to update]\n- **`data`** [Any of the webhook object](https://docs.directus.io/reference/api/system/webhooks/#the-webhook-object)'s properties]",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
