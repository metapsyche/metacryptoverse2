import axios from 'axios';
import React, { Component, UseState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

class Metaverses extends Component {
    constructor(props) {
        super(props);
        this.state = { metaverses: [] };
    }

    componentDidMount() {

        //const url = 'https://api.github.com/repos/ContentPI/ContentPI/issues';
        //const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getMetaverses%20%7B%0A%20%20%20%20name%0A%20%20%20%20characteristics%20%7B%0A%20%20%20%20%20%20style%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A';
        const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getMetaverses%20%7B%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20characteristics%20%7B%0A%20%20%20%20%20%20style%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A';
        //const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getIssues%0A%7D%0A';
        //get issue via ajax
        /**
        
        //using axios 
         axios
        .get(url)
        .then((response) => {
            this.setState({
                issues: response.data
            })
        })

        */

        //using fetch
        fetch(url)
        .then(response => response.json())
        .then(data => {
    
            console.log(data);
            let metaverses = data.data.getMetaverses;
            console.log(`metaverses = ${metaverses}`);
            this.setState({
                metaverses: metaverses
            })

        })
        
    }

    render() {
        console.log(this.state);
        const { metaverses } = this.state;
        return (
            <>
                <h1>METAVERSES</h1>
 
                {
                    metaverses.map((metaverse) => (
                        <>
                        <p key={metaverse.name}>{metaverse.name}</p>
                        <p>Description: {metaverse.description}</p>
                        </>
                    ))
                }
   
               
            </>
        )

    }
    
}


export { Metaverses }