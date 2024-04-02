import InputText from "@/components/InputText/InputText";
import Select from "@/components/Select/Select";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <div className="w-72">
        <Select label="Escolha a raça" options={["oi", "Tchau"]} />
      </div>
    </main>
  )
}
