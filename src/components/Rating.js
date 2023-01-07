

const Rating = ({children}) => {

    const stars = Math.round(children);
    const oneToFive = [1, 2, 3, 4, 5]
    return( 
        <div>
      {oneToFive.map((e,i) => (
        <span key={i}>{i < stars ? '★' : '☆'}</span>
      ))}
    </div>
    )
}


export default Rating;