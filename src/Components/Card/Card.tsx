import { StyledCard } from "../Styled/StyledCard"

type CardProps = {
    item:{
        id:number,
        title:string,
        body:string,
        image:string,
    },
}

const Card = ({item:{id, title, body, image,}}:CardProps) => {
  return (
    <StyledCard layout={id % 2 === 0 ? 'row-reverse' : ''}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`}/>
      </div>
    </StyledCard>
  )
}

export default Card
