import AddForm from "@/components/addForm"
import DataList from "@/components/dataList"

export default async function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <AddForm />
      <DataList />
    </div>
  )
}
