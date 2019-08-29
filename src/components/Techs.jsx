import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tech from './Tech';
import { ADD_FRONTEND, ADD_BACKEND } from '../actions/types';

const Techs = ({ techs, addFrontend, addBackend }) => (
    <section>
        <div className="row d-flex justify-content-center">
            {
                techs.map((tech, key) => (
                    <Fragment key={ key }>
                        <div className="col-4 col-md-2 col-lg-1">
                            <Tech tech={ tech }
                                  addFrontend={ addFrontend }
                                  addBackend={ addBackend } />
                        </div>
                    </Fragment>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    techs: state.techs
});

const mapDispatchToProps = dispatch => ({
    addFrontend(tech){
        dispatch({
            type: ADD_FRONTEND,
            tech
        });
    },
    addBackend(tech){
        dispatch({
            type: ADD_BACKEND,
            tech
        });
    }
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Techs);