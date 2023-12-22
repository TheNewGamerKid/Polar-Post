import { firebaseDB } from '$lib/firebase.app.js'
import type { FullBlog } from '$lib/types.js'
import { error } from '@sveltejs/kit'
import { collection, getDocs } from 'firebase/firestore'

export const load = async ({ params }) => {
  const querySnapshot = await getDocs(collection(firebaseDB, 'blogs'))
  const blogId = params.blog_id
  let blog: FullBlog | undefined

  querySnapshot.forEach(async (item) => {
    const itemData = item.data() as FullBlog

    if (itemData.id === blogId) blog = itemData
  })

  if (!blog) {
    error(404, {
      message: 'Not Found'
    })
  }

  return blog
}