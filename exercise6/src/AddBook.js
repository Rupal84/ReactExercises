import React from 'react';

const AddBook = ()=>{
    return (
        <div className='book-form'>
        <form className="form-horizontal ">
            <h1>Add A Book</h1>
            <div className="form-group control-label">
            <label for="title">Title:</label>
            <input type='text' name='title' className="form-control"/>
            </div>
            <div className="form-group control-label">
            <label for="author">Author</label>
            <input type='text' name='author' className="form-control" />
            </div>
            <div className="form-group control-label">
            <label className="control-label " for='genre'>Genre:</label>
            <select name='genre' class="custom-select">
                <option selected>Open this select menu</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non Fiction</option>
            </select>
            </div>
        </form>
        </div>
    )
}

export {AddBook};