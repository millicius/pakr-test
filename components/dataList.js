import { revalidatePath } from "next/cache"
import { getXataClient } from "../src/xata"
const xata = getXataClient()

const DataList = async () => {
    const data = await xata.db.List.getAll()
    revalidatePath('/')

  return (
    <div>
        <h1>Data List</h1>
        {
            data.map((d, index) => (
                <p key={index}>{d.name}</p>
            ))
        }
    </div>
  )
}

export default DataList