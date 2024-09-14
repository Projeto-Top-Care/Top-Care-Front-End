import PaginaProdutos from "@/components/PaginaProdutos/PaginaProduto";


interface InterfaceProdutos {
  searchParams?: { q: string }
}

export default function Produtos({searchParams}: InterfaceProdutos) {
  return(
    <>
      <PaginaProdutos query={searchParams?.q}/>
    </>
  )
}