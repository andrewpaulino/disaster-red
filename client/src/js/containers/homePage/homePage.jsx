import React from 'react';

export default class homePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guide: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    handleOnChange(e) {
        const target = e.target,
            value = target.value,
            name = target.name;
        this.setState({
            [name]: value
        });

    }

    handleSubmit(e) {
        if (this.state.guide) {
            console.log(this.state.guide)
           this.props.history.push(`/guide/${this.state.guide}`) 
        } else {
            alert('error')
        }
        

        e.preventDefault();
    }
    render() {
        const { guides } = this.props.homePage;
        return (
            <div className="homePage">
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col m12 l6 s12">
                            <div className="row">
                                <div className="col s12 ">
                                <div id="home-card-guide" className="card ">
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col s12 l6">
                                                <div className="row center">
                                                    <div className="col s12">
                                                        <h2><i className="fas main-green fa-4x fa-clipboard-list"></i></h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s12 l6">
                                                <span className="card-title "> <h3>Guides</h3> </span>
                                                <p>
                                                    <h6> 
                                                        Guides are made to help you find information regarding natural disasters. Use the dropdown menu to select the natural disaster you want.
                                                    </h6>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-action">
                                        <form onSubmit = {this.handleSubmit} action="onSubmit ">
                                            <div className="row">
                                                <div className="col s6">
                                                <label>SELECT GUIDE</label>
                                                    <select name="guide" value={this.state.guide} onChange={this.handleOnChange} className="browser-default">
                                                        <option value="" disabled selected>Choose your option</option>
                                                        {!!guides && guides.map( guide => {
                                                            return (<option key={guide.id}  value={guide.Name}>{guide.Name}</option>)
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col s6">
                                                <div className="center">
                                                <br />
                                                    <button type="submit" class="waves-effect waves-light guide-btn btn-large">OPEN GUIDE</button>
                                                </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* Active Disaster map */}
                        <div className="col m12 l6 s12">
                            <div className="row">
                                <div className="col s12 ">
                                <div id="home-card-map" className="card ">
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col s12 center">
                                                <h3><i className="fas fa-3x main-red fa-broadcast-tower"></i></h3>
                                            </div>
                                            <div className="col s12">
                                                <span className="card-title"> <h4> Make A Disaster Plan</h4> </span>
                                                <p>
                                                <h6> 
                                                   Make a disaster plan for your family. Select item's for survival, put emergency phone number(s)/addresses you would want your child to know.
                                                </h6>
                                            </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-action">
                                    <div className="row">
                                        <div className="col s12 right-align vertical-align ">
                                            <a href='/plan' class="waves-effect waves-light map-btn btn-large center">START PLAN    <i className="right large material-icons">arrow_forward</i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}