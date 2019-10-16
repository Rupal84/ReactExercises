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

    onBlur = (event)=>{
        var value = event.target.value;
        switch(event.target.name) {
            case "title":
                this.setState({titleValid: value && value.length < 4 ? false: true});
                break;
            case "author":
                this.setState({authorValid: value && value.length < 3 ? false: true});
                break;
            case "genre":
                this.setState({genreValid: value ? true: false});
                break;
            default:
        }
        console.log(value, this.state.titleValid , this.state.authorValid , this.state.genreValid)
        var isFormValid = this.state.titleValid && this.state.authorValid && this.state.genreValid;
        this.setState({formValid: isFormValid});
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
                    onBlur={this.onBlur}
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
                    onBlur={this.onBlur}
                />
                </div>
                <div className="form-group control-label">
                <label className="control-label " for='genre'>Genre:</label>
                <select 
                    name='genre' 
                    className="custom-select" 
                    value={this.state.genre}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                >
                         <option value="mystery-thriller">Mystery Thriller</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non Fiction</option>
                </select><br/><br/>
                <button disabled={!this.state.formValid}type="submit" className="btn btn-success">Add Book</button>
                </div>
            </form>
            </div>
        )
    }
   
}

export {AddBook};