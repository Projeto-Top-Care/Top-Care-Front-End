import InputText from "@/components/InputText/InputText";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";
import Select from "@/components/Select/Select";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <div className="w-[90%]">
        <CadastroPet />
      </div>
    </main>
  )
}
