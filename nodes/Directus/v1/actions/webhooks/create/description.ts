import { globalDescr } from '../../../descriptions';
import type { WebhooksProperties } from '../../interfaces';

export const createDescription: WebhooksProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['webhooks'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'Build Website',
		default: '',
		description: 'Name for the webhook. Shown in the Admin App.',
		required: true,
	},
	{
		displayName: 'Actions',
		name: 'actions',
		type: 'multiOptions',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['webhooks'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: '["create", "update"]',
		default: [],
		description: 'When to fire the webhook. Can contain create, update, delete.',
		required: true,
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Delete',
				value: 'delete',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-multi-options
		displayName: 'Collections',
		name: 'collections',
		type: 'multiOptions',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['webhooks'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: '["articles"]',
		default: [],
		description: 'What collections to fire this webhook on',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomCollections',
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['webhooks'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'https://example.com/',
		default: '',
		description: 'Where to send the request too',
		required: true,
	},
	...globalDescr.jsonParameters('webhooks', 'create'),
	...globalDescr.bodyParametersJson('webhooks', 'create'),
];
