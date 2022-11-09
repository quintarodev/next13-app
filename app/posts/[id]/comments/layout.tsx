import type { NextPage } from "next"
import Image from "next/image"
import { use } from "react"
const loadPostSingleCommetns = (id: string) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json())
}
const CommentsPage: NextPage<{ params: any }> = ({ params }) => {
  const { id } = params
  const comments = use(loadPostSingleCommetns(id))

  return (
    <>
      <div>
        <h1>Comments post {id}</h1>
        <div className="grid grid-cols-1 gap-8">
          {comments.map((comm: any) => (
            <li key={comm.id} className="list-none">
              <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Image
                    src={`https://avatars.dicebear.com/api/male/${comm.id}.svg`}
                    alt="hola"
                    className="w-12 h-12 rounded-full shadow-lg shadow-indigo-500/30"
                    width={50}
                    height={50}
                  />
                  <span>{comm.email}</span>
                </div>

                <div className="px-4 py-2">
                  <h4>{comm.name}</h4>
                  <p>{comm.body}</p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  )
}

export default CommentsPage
