import Link from "next/link"
import { use } from "react"
const loadPostSingle = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  )
}
const SinglePostPage = ({ params, children }: any) => {
  const { id } = params
  const postSingle = use(loadPostSingle(id))
  return (
    <>
      <div className="bg-red-100 p-8">
        <div className="flex space-x-2 items-center">
          <p className="text-lg font-semibold">Title post: </p>
          <h2 className="text-2xl uppercase font-bold">{postSingle.title}</h2>
        </div>
        <Link href={`/posts/${id}/comments`} className="text-indigo-500">
          Ver comments
        </Link>
        {children}
      </div>
    </>
  )
}

export default SinglePostPage
