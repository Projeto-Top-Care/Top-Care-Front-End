import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export const construirEstrelas = (numEstrelas: number) => {
    const arrayFull = new Array(Math.round(numEstrelas)).fill(null)
    const arrayEmpty = new Array(5 - arrayFull.length).fill(null)
    return (
      <div className='flex flex-row'>
        {arrayFull.map((avaliacao, i) => (
          <div key={i}>
            <AiFillStar style={{ color: "#FFD601", }} size={25} />
          </div>
        ))}
        {arrayEmpty.map((a, i) => (
          <div key={i}>
            <AiOutlineStar style={{ color: "#FFD601", }} size={25} />
          </div>
        ))}
      </div>
    )
  }