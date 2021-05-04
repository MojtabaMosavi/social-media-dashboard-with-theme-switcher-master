import './SCSS/style.scss';
import React from 'react';
import OverviewCard from './components/OverviewCard'
import OverviewDatails from './components/OverviewDatails'
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";


class App extends React.Component {
  state = {
    toggled: false,
  }

  render () {
    return (
      <div className={this.state.toggled ? 'wrapper light-theme' : ' wrapper dark-theme'}>
        <div className="container">
          <section className="overview">
            <div className="overview__top"> 
              <div className="overview__status">
                <h1 className="overview__heading">Social Media Dashboard</h1>
                <h3 className="overview__stats">Total Followers 23,004</h3>
              </div>
              <div className={this.state.toggled ? " overview__toggle overview__toggle_interactive":"overview__toggle"}>
                <label  className="overview__toggle-mode" htmlFor="toggle-switch">Dark Mode</label>
                <button type="checkbox" 
                className={ this.state.toggled ? "overview__toggle-input_interactive overview__toggle-input" :"overview__toggle-input"} id="toggle-switch" aria-hidden="true" 
                aria-label="toggle switch-mode" onClick={() => this.setState({toggled:!this.state.toggled})} >
                  <span className="overview__toggle-circle" aria-hidden="true"></span>
                </button>
              </div>
            </div>

            <div className="overview__bottom">
              <div className={this.state.toggled ?'overview-wrapper light-theme':'overview-wrapper dark-theme'}>
                  <OverviewCard image={facebook} title={"@nathanf"} heading={1987} subheading={"Followers"} growth={"12 Today"}
                  theme={this.state.toggled} state={false} alt={'facebook icon '} chanel={'facebook'}/>
                  <OverviewCard image={twitter} title={"@nathanf"} heading={1044} subheading={"Followers"} growth={"99 Today"}
                  theme={this.state.toggled} state={false} alt={'twitter icon '} chanel={'twitter'}/>
                  <OverviewCard image={instagram} title={"@realnathanf"} heading={"11k"} subheading={"Followers"} growth={"1099 Today"}
                  theme={this.state.toggled} state={false} alt={'instagram icon '} chanel={'instagram'}/>
                  <OverviewCard image={youtube} title={"Nathan F."} heading={8239} subheading={"Subscribers"} growth={"144 Today"}
                  theme={this.state.toggled} state={true} alt={'youtube icon '} chanel={'youtube'}/>
              </div>

            </div>
          </section>
          <OverviewDatails toggled={this.state.toggled} />
        </div>

    </div>



    )};

    }
export default App;
 