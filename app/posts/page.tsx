import type { NextPage } from "next"
import { ListStores } from "./components/ListStores"

const StorePage: NextPage = () => {
  return (
    <>
      <div>
        <h1>store pages</h1>
        <ListStores num={12} />
      </div>
    </>
  )
}

export default StorePage
