import { getXataClient } from "../src/xata"
const xata = getXataClient()

const DataList = async () => {
    const data = await xata.db.List.getAll()

  return (
    <div>
        <h1>Data List</h1>
        <div>
        {
            data.map((d, index) => (
                <div className="flex gap-5" key={index}><h3 className="text-blue-600 font-bold">{d.name}</h3><p className="text-zinc-500">{d.description}</p></div>
            ))
        }
        </div>
        
    </div>
  )
}

export default DataList