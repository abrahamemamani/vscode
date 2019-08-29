import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tech from './Tech';
import { DELETE_BACKEND } from '../actions/types';
import imgBackend from '../img/Backend.png';

const Backend = ({ backend, actionDelete }) => (
    <div className="col-12 col-md-6">
        <section className="app-backend">
            <h3 className="text-center">Backend</h3>
            <img className="app-backend__img" src={ imgBackend } alt="Background backend"/>
            <div className="row">
                {
                    backend.map((tech, key) => (
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
    backend: state.backend
});

const mapDispatchToProps = dispatch => ({
    actionDelete(tech){
        dispatch({
            type: DELETE_BACKEND,
            tech
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Backend);