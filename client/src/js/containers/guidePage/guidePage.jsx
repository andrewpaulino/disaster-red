import React from 'react';
import {getGuide, getOnlineGuide, removeSelectedGuide} from './guidePageActions'
// Fix for mobile friendly
export default class guidePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false
        }
    }
               
               

    componentDidMount(){ 
        const {dispatch} = this.props,
            URLID = this.props.match.params.id;
          
            dispatch(getOnlineGuide(URLID))
                   
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.selectedGuide !== prevProps.selectedGuide) {
          this.setState({loading:false, selectedGuide: this.props.selectedGuide})
        }
      }

    componentWillUnmount() {
        const { dispatch } = this.props;

        dispatch(removeSelectedGuide());
    }
    render() {
            const {selectedGuide} = this.props;
        return( 
            <div className="guidePage">
                <div className="loading">
                    {this.state.loading ? 
                    <div className="loader">
                        <div className="preloader-wrapper active">
                                <div className="spinner-layer spinner-white-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                                </div>
                            </div>
                    </div>
                    
                    :

                    <div className="container">
                    <div className="row">
                        <div className="col s12">
                        <div className="card">
                            <div className="card-content article-content">
                                <div className="row">
                                    <div className="col s6">
                                        <a href='/' className="waves-effect waves-red btn-flat center"><i className="material-icons large left">chevron_left</i><span className="bold">BACK</span> </a>
                                    </div>
                                    <div className="col s6 right-align">
                                        <span className="light">PUBLISHED ON </span>
                                        <br />
                                        <div className="center"></div>
                                        <span className="bold">{selectedGuide.date}</span>
                                    </div>
                                </div>
                                <div className="border-bottom"></div>
                                <div className="row">
                                    <div className="col s12">
                                        <span className="article-title">
                                            <h1>{selectedGuide.Name}</h1>
                                        </span>
                                    </div>
                                    <div className="col s12">
                                        Sourced from, <span className="bold">NASA, WHO, UN RELIEF</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12"><img src="https://s3-us-west-1.amazonaws.com/disaster-red/EarthquakesBackground.jpeg" alt=""/></div>
                                </div>
                                <div className="row ">
                                    <div className="col s12 border-dashed">
                                        <div className="article-subheader border-bottom">
                                            <h2>Preperation</h2>
                                        </div>
                                        <p className="article-text">
                                        <br />
                                        {selectedGuide.PreparationDesc}
                                        </p>
                                        <br />
                                    </div>
                                    <div className="col s12 border-dashed">
                                        <div className="row">
                                            <div className="col s6 ">
                                            <h3>Family</h3>
                                            </div>
                                            <div className="col s6">
                                            <br />
                                            {selectedGuide.FamilyPlanDesc}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12">
                                        <div className="row">
                                            <div className="col s6 ">
                                            <h3>Supply Kit</h3>
                                            </div>
                                            <div className="col s6">
                                            <br />
                                            {selectedGuide.SupplyKitDesc}
                                            </div>
                                        </div>
                                        <div className="supplyList">
                                            {!!selectedGuide.SupplyKitList && selectedGuide.SupplyKitList.map(item => {
                                                return (
                                                    <div key={item} className="row">
                                                    <div className="col s6 right-align">
                                                    <i className="material-icons large">forward</i> 
                                                    </div>
                                                    <div className="col s6">
                                                        <span className="list bold">{item}</span> 
                                                    </div>
                                                </div>
                                                )
                                            })}
                                          
                                           
                                        </div>
                                        <div className="col s12 border-dashed">
                                            <div className="article-subheader border-bottom">
                                                <h2>Survival</h2>
                                            </div>
                                            <p className="article-text">
                                                <br />
                                               {selectedGuide.KnowledgeOfDisasterDesc}
                                            </p>
                                                <br />
                                        </div>
                                        <div className="col s12 border-bottom">
                                        <div className="row">
                                            <div className="col s12 center">
                                            <h3>Survival Tips</h3>
                                            </div>
                                            <div className="col s12 border-dashed">
                                            <br />
                                                {!!selectedGuide.SurvivalTipsList && selectedGuide.SurvivalTipsList.map(item => {
                                                    return (
                                                        <div key={item} className="row">
                                                        <div className="col s6 right-align">
                                                        <i className="material-icons large">forward</i> 
                                                        </div>
                                                        <div className="col s6">
                                                            <span className="list bold">{item}</span> 
                                                        </div>
                                                    </div>
                                                    )
                                                 })}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 center">
                                            <h3>A Organized Plan</h3>
                                            </div>
                                            <div className="col s12">
                                            <br />
                                                {!!selectedGuide.OrganizedPlanList && selectedGuide.OrganizedPlanList.map(item => {
                                                    return (
                                                        <div key={item} className="row">
                                                        <div className="col s6 right-align">
                                                        <i className="material-icons large">forward</i> 
                                                        </div>
                                                        <div className="col s6">
                                                            <span className="list bold">{item}</span> 
                                                        </div>
                                                    </div>
                                                    )
                                                 })}
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
                }
                
                
                </div>
             
            </div>
        )
    }
}