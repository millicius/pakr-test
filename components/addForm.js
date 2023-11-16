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
                <input className="border" type="text" name="name" />
            </div>
            <div>
                <input className="border" type="text" name="description" />
            </div>
            <div>
                <button>Roll</button>
            </div>
        </form>
    </div>
  )
}

export default AddForm