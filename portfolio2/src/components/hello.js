import React, { Component,useState } from 'react';

import { StyleSheet, css } from 'aphrodite'

function Hello(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [cell, setCell] = useState('');


    return(
    <div className={css(styles.hello)}>
        Hello, <br/>
        I'm Daniel
    </div>
    )
}

const googleSans = {
    fontFamily : 'Google Sans'
}

const styles = StyleSheet.create({
    hello: {
        fontFamily: [googleSans],
        fontSize: '10vw',
        color: 'white',
        display: 'table',
        margin: '25vh auto',
        userSelect: 'none',
        overflow: 'hidden',
        position: 'relative',
    },
})

export default Hello;
