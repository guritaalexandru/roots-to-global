import {connectToDatabase,} from '@/lib/mongodb.js';
import {getAllObjects, getObjectById, postObject, updateObjectById,} from '@/js/utils/mongoMethods.js';

const REGISTRATION_COLLECTION = process.env.DB_COLLECTION;

const getCollection = async collectionName => {
	const {database,} = await connectToDatabase();
	return database.collection(collectionName);
};

export const postRegistration = async registrationObject => {
	const routeCollection = await getCollection(REGISTRATION_COLLECTION);

	return postObject(routeCollection, registrationObject);
};

export const getRegistration = async (queryOptions = {}) => {
	const routeCollection = await getCollection(REGISTRATION_COLLECTION);

	return getAllObjects(routeCollection, queryOptions);
};

export const getRegistrationById = async id => {
	const routeCollection = await getCollection(REGISTRATION_COLLECTION);

	return getObjectById(routeCollection, id);
};

export const updateRegistrationById = async (id, updateObject) => {
	const routeCollection = await getCollection(REGISTRATION_COLLECTION);

	return updateObjectById(routeCollection, id, updateObject);
};