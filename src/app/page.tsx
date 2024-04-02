import InputText from "@/components/InputText/InputText"

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-20">
      <div className="w-72">
        <InputText placeholder="Nome" id="name" type='text' />
      </div>
    </main>
  )
}
