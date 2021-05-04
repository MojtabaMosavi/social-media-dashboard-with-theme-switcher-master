import Detail from "./Detail";
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';




const OverviewDatails = (props) => {
    return (  
        <section className="overview-datails">
            <h2 className="overview-details__title">Overview - Today </h2>
            <div className="overview-details__container">
                <Detail toggled={props.toggled} heading={"Page Views"} image={facebook} 
                icon={"facebook icon"} stats={87} state={"positive"} growth={"3%"}/>

                <Detail toggled={props.toggled} heading={"Likes"} image={facebook} 
                icon={"facebook icon"} stats={52} state={"positive"} growth={"2%"} />

                <Detail toggled={props.toggled} heading={"Likes"} image={instagram} 
                icon={"instagram icon"} stats={5462} state={"positive"} growth={"2257%"}/>

                <Detail toggled={props.toggled} heading={"Profile Views"} image={instagram} 
                icon={"facebook icon"} stats={"52k"} state={"positive"} growth={"1375%"}/>

                <Detail toggled={props.toggled} heading={"Retweets"} image={twitter} 
                icon={"twitter icon"} stats={117} state={"positive"} growth={"303%"}/>

                <Detail toggled={props.toggled} heading={"Likes"} image={twitter} 
                icon={"facebook icon"} stats={507} state={"positive"} growth={"553%"}/>

                <Detail toggled={props.toggled} heading={"Likes"} image={youtube} 
                icon={"youtube icon"} stats={107} state={"negative"} growth={"19%"}/>

                <Detail toggled={props.toggled} heading={"Total Views"} image={youtube} 
                icon={"youtube icon"} stats={1407} state={"negative"} growth={"12%"}/>
            </div>
        </section>
    );
}
 
export default OverviewDatails;