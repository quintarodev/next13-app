import Link from "next/link"
import { use } from "react"
const loadStores = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  )
}
interface Props {
  num: number
}
export function ListStores({ num }: Props): JSX.Element {
  const posts = use(loadStores())
  return (
    <ul className="grid grid-cols-4 gap-12 p-12">
      {posts.slice(0, num).map((store: any) => (
        <li key={store.id} className="h-full">
          <Link href={`/posts/${store.id}`}>
            <div className="border h-full border-gray-300 rounded-lg p-4 text-center">
              <h3 className="text-3xl text-indigo-900 font-bold mb-4">
                {store.id}
              </h3>
              <h3 className="text-xl text-indigo-900 font-bold mb-2">
                {store.title}
              </h3>
              <h3 className="text-gray-500">{store.body}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
