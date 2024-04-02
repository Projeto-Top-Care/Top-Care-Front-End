import InputFile from "@/components/InputFile/InputFile";
import InputText from "@/components/InputText/InputText";

export default function Home() {
  return (
    <main>
      <p>Olá Top Care</p>
      <div className="w-96 h-40 border">
        <InputText label="Ola" type="text" />
      </div>
    </main>
  );
}
