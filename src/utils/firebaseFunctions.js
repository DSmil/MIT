// Saving new Item

import {
	setDoc,
	doc,
	getDocs,
	query,
	collection,
	orderBy,
	deleteDoc,
	addDoc,
	where,
} from 'firebase/firestore';
import { firestore } from 'firebase.config';
export const saveItem = async (data) => {
	// Add a new document with a generated id.
	const docRef = await addDoc(collection(firestore, 'requestItems'), data);

	// Get the id of the new document.
	const id = docRef.id;

	// Add the id to the document.
	await setDoc(
		doc(firestore, 'requestItems', id),
		{ ...data, id },
		{
			merge: true,
		}
	);
};

export const acceptItem = async (data) => {
	if (data.id) {
		// Use data.id as the document ID in Firestore.
		await setDoc(doc(firestore, 'acceptedItems', data.id), data, {
			merge: true,
		});

		try {
			// Delete the document from requestItems collection.
			await deleteDoc(doc(firestore, 'requestItems', data.id));
		} catch (error) {
			console.error('Error deleting document: ', error);
		}
	} else {
		console.error('No id in data');
	}
};

export const declineItem = async (data) => {
	if (data.id) {
		// Use data.id as the document ID in Firestore.
		await setDoc(doc(firestore, 'declinedItems', data.id), data, {
			merge: true,
		});

		try {
			// Delete the document from requestItems collection.
			await deleteDoc(doc(firestore, 'requestItems', data.id));
		} catch (error) {
			console.error('Error deleting document: ', error);
		}
	} else {
		console.error('No id in data');
	}
};

// getall requested items
export const getAllRequestedData = async () => {
	const items = await getDocs(
		query(collection(firestore, 'requestItems'), orderBy('id', 'desc'))
	);

	return items.docs.map((doc) => doc.data());
};

export const getAllDeclinedData = async (userId) => {
	const items = await getDocs(
		query(
			collection(firestore, 'declinedItems'),
			where('userId', '==', userId),
			orderBy('id', 'desc')
		)
	);

	return items.docs.map((doc) => doc.data());
};

export const getAllAcceptedData = async (userId) => {
	const items = await getDocs(
		query(
			collection(firestore, 'acceptedItems'),
			where('userId', '==', userId),
			orderBy('id', 'desc')
		)
	);
	return items.docs.map((doc) => doc.data());
};

export const getAllAcceptedPageData = async () => {
	const items = await getDocs(
		query(collection(firestore, 'acceptedItems'), orderBy('id', 'desc'))
	);
	return items.docs.map((doc) => doc.data());
};
