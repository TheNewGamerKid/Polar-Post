import { collection, getDocs } from 'firebase/firestore'
import { firebaseDB } from '$lib/firebase.app'
import type { Blog } from '$lib/types'

export async function load() {
  const querySnapshot = await getDocs(collection(firebaseDB, "blog-card"))
  const blogs: Blog[] = [];

  querySnapshot.forEach((doc) => {
    blogs.push(doc.data() as Blog)
  })

  blogs.sort((a, b) => b.time_posted - a.time_posted)

  return { blogs }
}