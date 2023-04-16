import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { directusApiRequest } from '../transport';

// Get all Collections
export async function getCollections(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const data = await directusApiRequest.call(this, 'GET', 'collections');

	if (!data || !Array.isArray(data) || data.length === 0) {
		throw new NodeOperationError(this.getNode(), 'No data available');
	}

	const response = data.map((c: any) => ({
		name: c.collection,
		value: c.collection,
	})) as INodePropertyOptions[];

	// console.log('all collections:', response);
	return response;
}

// Get only user created Collections
export async function getCustomCollections(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const data = await directusApiRequest.call(this, 'GET', 'collections');

	if (!data || !Array.isArray(data) || data.length === 0) {
		throw new NodeOperationError(this.getNode(), 'No data available');
	}

	const response = data
		.filter((c: any) => !c.meta.system)
		.map((c: any) => ({ name: c.collection, value: c.collection })) as INodePropertyOptions[];

	// console.log('user collections:', response);
	return response;
}

// Get Relational fields in a collection
export async function getRelationalFields(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const collection = this.getCurrentNodeParameter('collection') as string;

	if (!collection) {
		return [] as INodePropertyOptions[];
	}

	const data = await directusApiRequest.call(this, 'GET', `relations/${collection}`);

	if (!data || !Array.isArray(data) || data.length === 0) {
		throw new NodeOperationError(this.getNode(), 'No data available');
	}

	const response = data.map((f: any) => ({
		name: f.field,
		value: f.field,
	})) as INodePropertyOptions[];

	console.log('relational fields:', response);
	return response;
}

// Get fields in a collection
export async function getFieldsInCollection(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const collection =
		(this.getCurrentNodeParameter('collection') as string) ??
		`directus_${this.getCurrentNodeParameter('resource')}`;

	if (!collection) {
		return [] as INodePropertyOptions[];
	}

	const data = await directusApiRequest.call(this, 'GET', `fields/${collection}`);

	if (!data || !Array.isArray(data) || data.length === 0) {
		throw new NodeOperationError(this.getNode(), 'No data available');
	}

	const response = data.map((f: any) => ({
		name: f.field,
		value: f.field,
	})) as INodePropertyOptions[];

	console.log('fields:', response);
	return response;
}

// Get User Roles
export async function getRoles(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const data = await directusApiRequest.call(this, 'GET', 'roles');

	if (!data || !Array.isArray(data) || data.length === 0) {
		throw new NodeOperationError(this.getNode(), 'No data available');
	}

	const response = data.map((r: any) => ({
		name: r.name,
		value: r.id,
	})) as INodePropertyOptions[];

	console.log('roles:', response);
	return response;
}
