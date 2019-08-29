import React from 'react';
import './Tech.scss';

const Tech = ({ tech, addFrontend, addBackend, actionDelete }) => (
    <article className="tech">
        <figure className="tech__img-container">
            <img className="tech__img" src={ tech.image } alt={ tech.name } />
        </figure>
        <h6>{ tech.name }</h6>
        {
            (addFrontend || addBackend) ? (
                <>
                    <button onClick={ () => addFrontend(tech) } className="btn btn-outline-info btn-block btn-sm">Frontend</button>
                    <button onClick={ () => addBackend(tech) } className="btn btn-primary btn-block btn-sm">Backend</button>
                </>
            ) : (
                <button onClick={ () => actionDelete(tech) } className="btn btn-danger btn-block btn-sm">Quitar</button>
            )
        }
    </article>
);
 
export default Tech;