
const OverviewCard = (props) => {
    return ( 
        <article className={"card overview-card " + `${"overview-card_" + props.chanel}`}>
            <div className="overview-card__title-wrapper">
                <img src={props.image} alt={props.alt}/>
                <h4>{props.title}</h4>
            </div>
            <p className="overview-card__heading">{props.heading}</p>
            <p className="overview-card__subheading">{props.subheading}</p>
            <p className={props.state ? ' overview-card__growth overview-card__growth_negative':
        ' overview-card__growth overview-card__growth_positive'}>{props.growth}</p>
        </article>

    );
}
 
export default OverviewCard;