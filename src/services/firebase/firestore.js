import { db } from '.';
import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
} from 'firebase/firestore';
import { createAdaptedProductFromFirestore } from '../../adapters/productAdapter';

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then((response) => {
        const firebaseProducts = response.docs.map((doc) => {
          return createAdaptedProductFromFirestore(doc);
        });
        resolve(firebaseProducts);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, 'products', productId);

    getDoc(docRef)
      .then((response) => {
        const firebaseProduct = createAdaptedProductFromFirestore(response);
        resolve(firebaseProduct);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
