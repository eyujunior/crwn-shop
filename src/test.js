import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('YSrmOhjnikaIBmYXctvU').collection('cartItems').doc('Ttm9Aod0NZP0w8RdVTyV');
firestore.doc('users/YSrmOhjnikaIBmYXctvU/cartItem/Ttm9Aod0NZP0w8RdVTyV')