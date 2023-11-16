import { getXataClient } from "../src/xata"
const xata = getXataClient()

const dataList = async () => {
    const data = await xata.db.List.getAll()

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

export default dataList