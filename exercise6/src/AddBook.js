import React from 'react';


class AddBook extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            genre: 'fiction',
            titleValid: false,
            authorValid: false,
            genreValid: false,
            formValid: false
        }
    }

    onChange = (event)=>{
        var value = event.target.value;
        switch (event.target.name) {
            case "title":
                this.setState({title: value});
                break;
            case "author":
                this.setState({author: value});
                break;
            case "genre":
                this.setState({genre: value});
                break;
            default:
                
        }
    }

    updateState = (event)=>{
        var value = event.target.value;
        switch(event.target.name) {
            case "title":
                this.setState({titleValid: value && value.length < 4 ? false: true}, this.updateComponentState);
                break;
            case "author":
                this.setState({authorValid: value && value.length < 3 ? false: true}, this.updateComponentState);
                break;
            case "genre":
                this.setState({genreValid: value ? true: false}, this.updateComponentState);
                break;
            default:
        }
        
    }

    updateComponentState = ()=> {
        var isFormValid = this.state.titleValid && this.state.authorValid && this.state.genreValid;
        this.setState({formValid: isFormValid ? true: false});
    }
    render() {
        return (
            <div className='book-form'>
            <form className="form-horizontal ">
                <h1>Add A Book</h1>
                <div className="form-group control-label">
                <label for="title">Title:</label>
                <input 
                    type='text' 
                    name='title' 
                    className="form-control" 
                    value={this.state.title}
                    onBlur={this.updateState}
                    onChange={this.onChange}
                />
                </div>
                <div className="form-group control-label">
                <label for="author">Author</label>
                <input 
                    type='text' 
                    name='author' 
                    className="form-control" 
                    value={this.state.author}
                    onChange={this.onChange}
                    onBlur={this.updateState}
                />
                </div>
                <div className="form-group control-label">
                <label className="control-label " for='genre'>Genre:</label>
                <select 
                    name='genre' 
                    className="custom-select" 
                    value={this.state.genre}
                    onChange={this.onChange}
                    onBlur={this.updateState}
                >
                         <option value="mystery-thriller">Mystery Thriller</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non Fiction</option>
                </select><br/><br/>
               <p> sdfsf{this.state.formValid ? 'true' : 'false'}</p>
                <button disabled={!this.state.formValid} type="submit" className="btn btn-success">Add Book</button>
                </div>
            </form>
            </div>
        )
    }
   
}

export {AddBook};