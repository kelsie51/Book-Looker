import React from "react";

function Saved(props){
    return (
        <div className="model fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModelLabel" aria-hidden="true">
            <div className="model-dialog" role="document">
                <div className="model-content">
                    <div className="model-header">
                        <h5 className="model-title" id="exampleModelLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="model" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="model-body">
                        <img src={props.img} alt="img" />
                        <h3>{props.objectTitle}</h3>
                        <h5>By: {props.author}</h5>
                    </div>
                    <div className="model-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="model">Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Saved;