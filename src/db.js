import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({ projectId: 'pokedex-b6c10' })
    .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }