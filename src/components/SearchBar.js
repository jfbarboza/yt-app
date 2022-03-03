import React, { Component, useState } from 'react'

const SearchBar = ({onFormSubmit}) =>{
    const [term, setTerm] = useState('');

    const onChange = (e) => {
        setTerm(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className='ui segment search-bar'>
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                        <div className="ui big icon input">
                            <input 
                                type="text"
                                placeholder="Search for a video..."
                                onChange={onChange}
                                value={term}
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
        </div>
        )

}

export default SearchBar;
