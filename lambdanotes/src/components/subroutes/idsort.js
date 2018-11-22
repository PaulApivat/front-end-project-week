import React from 'react'
import { Link } from 'react-router-dom' 

import { connect } from 'react-redux'
import { getNotes } from '../../actions/noteAction'

class IdSort extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getNotes()      //gets notes from actions, which comes from store
    }

    sortObjProperty2 = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = b.localeCompare(a);   //reverses the order Z-A
            else result = b - a;                                  //reverses the order Z-A
            return result;
        }
        return list.sort(compare);
    }

    render(){
        const emptyArr7 = [];
        {this.props.notes.map(note => {
            emptyArr7.push(note)
        })}

        return(
            <div id="myDIV4">
                <h2> BY ID: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr7, '_id').map(obj => {
                        return(
                                <div className="notebox" key={obj._id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj._id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>    
                                    </div>
                                        <p> <strong>ID:</strong> {obj._id} </p>
                                </div>
                            ) 
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading,
    }
}


export default connect(mapStateToProps, {getNotes})(IdSort)