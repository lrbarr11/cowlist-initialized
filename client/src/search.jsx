import React from "react";


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }

    onChange(e) {
       this.setState({
           name: e.target.value
       })
    }

    onSubmit(e) {
        this.setState({
            description: e.target.value
        })
    }

    render() {
    return (
        <div>
            <form>
                <input type='text' onChange={this.onChange.bind(this)}/>
                <input type='text' onChange={this.onSubmit.bind(this)}/>
                <input type='submit' value='New Cow' onSubmit={this.props.addNew(this.state.name, this.state.description)}/>
            </form>
        </div>
    )
    }
}

export default Search