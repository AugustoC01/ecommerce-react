import { db } from '.';
import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  addDoc,
  writeBatch,
  documentId,
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

export const getCheckout = (cart, newOrder) => {
  return new Promise((resolve, reject) => {
    const collectionRef = collection(db, 'products');
    const batch = writeBatch(db);

    const ids = cart.map((prod) => prod.id);
    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();

          const prod = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = prod.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, 'orders');
          // return addDoc(collectionRef, newOrder);
          resolve(addDoc(collectionRef, newOrder));
        } else {
          reject({ type: 'out_of_stock', products: outOfStock });
        }
      })
      .then(() => {
        batch.commit();
      });
  });
};
