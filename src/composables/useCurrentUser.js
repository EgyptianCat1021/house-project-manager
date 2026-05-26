import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config.js'

const user = ref(null)

onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser
})

export function useCurrentUser() {
  return { user }
}