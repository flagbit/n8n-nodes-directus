import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { DirectusV1 } from './v1/DirectusV1.node';

export class Directus extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Directus',
			name: 'directus',
			icon: 'file:directus.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Node to interact with Directus',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new DirectusV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
