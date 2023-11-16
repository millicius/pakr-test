import { getXataClient } from "@/src/xata"
import { revalidatePath } from "next/cache"
const xata = getXataClient()

const AddForm = () => {
    const addData = async (formData) => {
        'use server'
        const name = formData.get('name')
        const description = formData.get('description')

        await xata.db.List.create({name, description})

        revalidatePath('/')
    }
  return (
    <div>
        <form action={addData}>
            <div>
                <input className="border p-1 mb-4" type="text" name="name" placeholder="Name..." required />
            </div>
            <div>
                <input className="border p-1" type="text" name="description" placeholder="Descritpion" required />
            </div>
            <div>
                <button className="border-2 border-zinc-900 my-5 px-5 py-2 rounded-md">Roll</button>
            </div>
        </form>
    </div>
  )
}

export default AddForm