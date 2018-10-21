import React from 'react';

export default class disasterPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guide: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();
    }
    handleOnChange(e) {
        const target = e.target,
            value = target.value,
            name = target.name;
        this.setState({
            [name]: value
        });

    }

    render() {
        const { guides } = this.props.homePage;
        return (
            <div className="disasterPlan">


                <div className="container">
                    <div className="row">
                        <form onSubmit = {this.handleSubmit} className="col s12">
                        <div className="col s12">
                        <div className="card">
                            <div className="card-content article-content">
                                <div className="row">
                                    <div className="col s6">
                                        <a href='/' className="waves-effect waves-red btn-flat center"><i className="material-icons large left">chevron_left</i><span className="bold">BACK</span> </a>
                                    </div>
                                </div>
                                <div className="border-bottom"></div>
                                <div className="row">
                                    <div className="col s12">
                                        <span className="article-title">
                                            <h1>Make a Disaster Plan</h1>
                                        </span>
                                    </div>
                                    <div className="col s12">
                                         <span className="thin">Create a disaster plan for family and friends to reference, once done you will be able to download</span>
                                    </div>
                                </div>
                            
                                <div className="row ">
                                    <div className="col s12 ">
                                        <div className="article-subheader border-bottom">
                                            <h3>Name and Description</h3    >
                                        </div>
                                        <p className="article-text">
                                        <br />
                                      
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="name" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Plan Name</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <textarea id="textarea2" name="description" onChange = {this.handleOnChange} className="materialize-textarea" data-length="120"/>
                                                    <label htmlFor="textarea2">Preparation description</label>
                                                </div>
                                            </div>
                                        </p>
                                        <br />
                                    </div>



                                      <div className="col s12">
                                        <div className="article-subheader border-bottom">
                                            <h3>Preparation Items</h3    >
                                        </div>
                                        <p className="article-text">
                                        <br />
                                      
                                        <div className="row">
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox" name="FirstAid" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>First Aid Kit</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="SandBags" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Sand Bags</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="ThermalBlankets" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Thermal Blankets</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="CanOpener" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Can Opener</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="Generator" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Gas/Electric Generator</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="Flashlight" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Flashlight</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="WaterPurifier" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Water Purifier</span>
                                    </label>
                                </div>
                                <div className="col s3">
                                    <label>
                                        <input type="checkbox"  name="ExtraWater" onChange = {this.handleOnChange} className="filled-in" />
                                        <span>Water </span>
                                    </label>
                                </div>
                            </div>
                            </p>
                             <br />
                            </div>
                              <div className="row ">
                                    <div className="col s12 ">
                                        <div className="article-subheader border-bottom">
                                            <h3>Phone Number(s) or Address(s)</h3    >
                                        </div>
                                        <p className="article-text">
                                        <br />
                                      
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="Emergency1" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Phone Number or Address</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="Emergency2" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Phone Number or Address</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="Emergency3" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Phone Number or Address</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="Emergency4" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Phone Number or Address</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="Emergency5" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Phone Number or Address</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="input_text" name="Emergency6" onChange = {this.handleOnChange}type="text" data-length="10" />
                                                    <label htmlFor="input_text">Plan Name</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col s12 center-align">
                                                        <button className="btn waves-effect background-green btn-large waves-light" type="submit" name="action">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                        </p>
                                        <br />
                                    </div>
                                    </div>


                                 
                                       
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
                </div>
        )
    }
}