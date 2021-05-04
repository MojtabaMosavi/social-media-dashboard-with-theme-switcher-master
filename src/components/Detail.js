const Detail = (props) => {
    return (
        <article className={"card detail " + `${props.toggled ? 'light-theme': 'dark-theme'}`}>
            <h4 className="detail__heading"> {props.heading}</h4>
            <img className="detail__image" src={props.image} alt={props.icon}  />
            <p className="detail__stats">{props.stats}</p>
            <p className={"detail__growth " + `detail__growth_${props.state} `}>{props.growth}</p>
        </article>
    );
}
 
export default Detail
