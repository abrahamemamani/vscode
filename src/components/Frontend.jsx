import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tech from './Tech';
import { DELETE_FRONTEND } from '../actions/types';
import imgFrontend from '../img/Frontend.png';

const Frontend = ({ frontend, actionDelete }) => (
    <div className="col-12 col-md-6 mb-5">
        <section className="app-frontend">
            <h3 className="text-center">Frontend</h3>
            <img className="app-frontend__img" src={ imgFrontend } alt="Background frontend"/>
            <div className="row">
                {
                    frontend.map((tech, key) => (
                        <Fragment key={ key }>
                            <div className="col-12 col-md-6 col-lg-3">
                                <Tech tech={ tech }
                                    actionDelete={ actionDelete } />
                            </div>
                        </ Fragment>
                    ))
                }
            </div>
        </section>
    </div>
);

const mapStateToProps = state => ({
    frontend: state.frontend
});

const mapDispatchToProps = dispatch => ({
    actionDelete(tech){
        dispatch({
            type: DELETE_FRONTEND,
            tech
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontend);