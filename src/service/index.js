import React, { Component } from 'react';

function withInfo(COM) {
    return class getInfo extends Component {

        state = {
            info: []
        }
        componentDidMount() {
            (async () => {
                let res = await fetch(
                    "http://jsonplaceholder.typicode.com/users"
                ).then(res => res.json())
    
                this.setState({
                    info: res
                })
            })();
    
            
        } 

        render () {
            return (
                <COM {...this.state}></COM>
            )
        }
    }
}

export {withInfo}

