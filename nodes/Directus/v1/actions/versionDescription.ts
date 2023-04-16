/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import type { INodeTypeDescription } from 'n8n-workflow';
import * as activity from './activity';
import * as assets from './assets';
import * as auth from './auth';
import * as collections from './collections';
import * as extensions from './extensions';
import * as fields from './fields';
import * as files from './files';
import * as folders from './folders';
import * as items from './items';
import * as webhooks from './webhooks';
import * as settings from './settings';
import * as users from './users';
import * as permissions from './permissions';
import * as roles from './roles';
import * as relations from './relations';
import * as presets from './presets';
import * as revisions from './revisions';
import * as server from './server';
import * as utils from './utils';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Directus (denkhaus)',
	name: 'directus',
	icon: 'file:directus.svg',
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Consume Directus API',
	defaults: {
		name: 'Directus',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'directusApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Activity',
					value: 'activity',
				},
				{
					name: 'Asset',
					value: 'assets',
				},
				{
					name: 'Authentication',
					value: 'auth',
				},
				{
					name: 'Collection',
					value: 'collections',
				},
				{
					name: 'Extension',
					value: 'extensions',
				},
				{
					name: 'Field',
					value: 'fields',
				},
				{
					name: 'File',
					value: 'files',
				},
				{
					name: 'Folder',
					value: 'folders',
				},
				{
					name: 'Item',
					value: 'items',
				},
				{
					name: 'Permission',
					value: 'permissions',
				},
				{
					name: 'Preset',
					value: 'presets',
				},
				{
					name: 'Relation',
					value: 'relations',
				},
				{
					name: 'Revision',
					value: 'revisions',
				},
				{
					name: 'Role',
					value: 'roles',
				},
				{
					name: 'Server',
					value: 'server',
				},
				{
					name: 'Setting',
					value: 'settings',
				},
				{
					name: 'User',
					value: 'users',
				},
				{
					name: 'Utility',
					value: 'utils',
				},
				{
					name: 'Webhook',
					value: 'webhooks',
				},
			],
			default: 'items',
			required: true,
		},

		...activity.descriptions,
		...assets.descriptions,
		...auth.descriptions,
		...collections.descriptions,
		...extensions.descriptions,
		...fields.descriptions,
		...files.descriptions,
		...folders.descriptions,
		...items.descriptions,
		...permissions.descriptions,
		...presets.descriptions,
		...relations.descriptions,
		...revisions.descriptions,
		...roles.descriptions,
		...server.descriptions,
		...settings.descriptions,
		...users.descriptions,
		...utils.descriptions,
		...webhooks.descriptions,
	],
};
