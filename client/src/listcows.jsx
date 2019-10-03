import React from 'react';



class List extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return(
            <>
            {this.props.cows.map((cow) => {
                return (
                    <ul key={cow._id}>
                        {cow.name}
                        <li>{cow.description}</li>
                        <button onClick={this.props.edit(cow._id)} value='edit'/>
                        <button onClick={this.props.remove(cow._id)} value='Delete'/>
                    </ul>
                )
            })}
            </>
        )
    }
}


export default List