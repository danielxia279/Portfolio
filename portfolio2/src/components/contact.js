import React, { Component,useState } from 'react';

import { StyleSheet, css } from 'aphrodite'

import axios from 'axios';

function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [cell, setCell] = useState('');
    const [sent, setSent] = useState(false);
    const [buttonText, setButtonText] = useState('Send')

    const formSubmit = (e) => {
        e.preventDefault();

        setButtonText('...sending');

        let data = {
            dataName: name,
            dataEmail: email,
            dataCell: cell,
            dataMessage: message,
        }

        const resetForm = () => {
            setName('');
            setEmail('');
            setMessage('');
            setCell('');
            setButtonText('Send');
        }

         axios.post('http://localhost:5000/send', data)
         .then(res => {
             setSent(true);
             resetForm();
             console.log(res);
        })
        .catch(() => {
            console.log('Message not sent');
        })

    }


    return(
    <div className={css(styles.contactContainer)}>
        <div className={css(styles.text)}>
            <div className={css(styles.chat)}>Let's Chat</div>
            <div className={css(styles.info)}>
                Email: Daniel.xia.279@gmail.com
                <br/>
                Tel: (647)-909-9338
            </div>
        </div>
        <form onSubmit={(e) => formSubmit(e)}>

            <input type="text" value={name} onInput={e => {setName(e.target.value)}} placeholder="Name" className={css(styles.textInput)}/>
            <input type="tel" value={cell} onInput={e => {setCell(e.target.value)}} placeholder="Phone Number" className={css(styles.textInput)}/>
            <input type="email" value={email} onInput={e => {setEmail(e.target.value)}} placeholder="Email" className={css(styles.textInput)}/>
            <textarea  value={message} onInput={e => {setMessage(e.target.value)}} placeholder="Write something.." className={css(styles.textInput, styles.message)}></textarea>
            
            <button type="submit" className={css(styles.submit)}>{buttonText}</button>
        </form>
        </div>
    )
}

const B612 = {
    fontFamily : 'B612 Mono',
}

const styles = StyleSheet.create({
    contactContainer: {
        width: '50rem',
        color: 'white',
        paddingTop: '2rem',
        margin: '3em auto',
        marginBottom: '20em',
    },
    text: {
        display: 'flex',
        alignItems: 'flex-end',
        fontSize: '4rem'
    },
    chat: {
        float: 'left',
    },
    info: {
        float: 'left',
        fontSize: '0.8rem',
        paddingBottom: '0.7rem',
        marginLeft: '0.5rem',
        fontFamily: [B612],
    },
    textInput : {
        outline: 'none',
        backgroundColor: '#191919',
        color: 'white',
        padding: '12px 10px',
        borderColor: '#4067a5',
        borderWidth: '0 0 3px 0',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        marginBottom: '10px',
        width: '100%',
    },

    message : {
        width : '100%',
        height: '10em',
    },
    submit: {
        userSelect: 'none',
        padding: '5px',
        fontSize: '2rem',
        background: '#191919',
        borderColor: '#044489',
        borderWidth: '2px',
        borderStyle: 'solid',
        display: 'inline-block',
        marginTop: '5px',
        color: 'white',
        cursor: 'pointer',
        transition: 'background 0.5s, color 0.5s',
        ':hover': {
            background: '#e5f2fc',
            color: '#044489',
        } 
    }


})

export default Contact;
