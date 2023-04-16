import * as getGraphQL from './getGraphQL';
import * as getOpenAPI from './getOpenAPI';
import * as ping from './ping';
import * as health from './health';
import * as info from './info';

import type { INodeProperties } from 'n8n-workflow';
export { getGraphQL, getOpenAPI, ping, health, info };

// https://docs.directus.io/reference/server.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['server'],
			},
		},
		options: [
			{
				name: 'Get GraphQL',
				value: 'getGraphQL',
				description: 'Retrieve the GraphQL SDL for the current project',
				action: 'Get GraphQL',
			},
			{
				name: 'Get OpenAPI',
				value: 'getOpenAPI',
				description: 'Retrieve the OpenAPI spec for the current project',
				action: 'Get OpenAPI',
			},
			{
				name: 'Ping Server',
				value: 'ping',
				description: 'Ping... pong! 🏓.',
				action: 'Ping the server',
			},
			{
				name: 'Server Health',
				value: 'health',
				description: 'Get the current health status of the server',
				action: 'Get server health',
			},
			{
				name: 'System Info',
				value: 'info',
				description: 'Information about the current installation',
				action: 'Get system info',
			},
		],
		default: 'getGraphQL',
	},
	...getGraphQL.description,
	...getOpenAPI.description,
	...ping.description,
	...health.description,
	...info.description,
];
