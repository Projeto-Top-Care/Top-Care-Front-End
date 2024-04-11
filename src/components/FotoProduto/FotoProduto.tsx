const FotoProduto = () => {
  return (
      <div className="flex items-center justify-center">
          <div className="flex flex-row w-[40%]">
              <div className="flex flex-col w-[12%] mr-[15%] mt-[4%]">
                  <img src="./assets/fotoProduto1.jpg" className="mb-[10%] border border-black rounded-xl" />
                  <img src="./assets/fotoProduto2.jpg" className="mb-[10%] border border-black rounded-xl" />
                  <img src="./assets/fotoProduto3.jpg" className="mb-[10%] border border-black rounded-xl" />
                  <img src="./assets/fotoProduto4.jpg" className="mb-[10%] border border-black rounded-xl" />
                  <img src="./assets/fotoProduto5.jpg" className="border border-black rounded-xl" />
              </div>
              <div className="w-[70%]">
                  <img src="./assets/fotoProduto1.jpg" className="border border-black rounded-xl" />
              </div>
          </div>
      </div>
  )
}

export default FotoProduto;