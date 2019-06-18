import React, { Component, useState, useRef, useEffect } from 'react';

import { StyleSheet, css } from 'aphrodite'
import { Parallax } from 'react-scroll-parallax';

//Qurans
import Q1Cover from '../images/quran1.jpg'
import Q1PDF from '../qurans/quran1.pdf'
import Q2Cover from '../images/quran2.png'
import Q2PDF from '../qurans/quran2.pdf'
import Q3Cover from '../images/quran3.jpg'
import Q3PDF from '../qurans/quran3.pdf'
import Q4Cover from '../images/quran4.png'
import Q4PDF from '../qurans/quran4.pdf'

function Qurans(){

    return(
        <div className={css(styles.quransContainer)}>
                4 Versions of the Noble Qu'ran for Free
            <div className={css(styles.content)}>
                <a className={css(styles.quranLink)} href={Q1PDF} target='_blank'>
                    <img src={Q1Cover} height="300px"/>
                </a>
                <a className={css(styles.quranLink)} href={Q2PDF} target='_blank'>
                    <img src={Q2Cover}  height="300px"/>
                </a>
                <a className={css(styles.quranLink)} href={Q3PDF} target='_blank'>
                    <img src={Q3Cover}  height="300px"/>
                </a>
                <a className={css(styles.quranLink)} href={Q4PDF} target='_blank'>
                    <img src={Q4Cover}  height="300px"/>
                </a>
                
            </div>
            
            
        </div>
    )
}

const poppins = {
    fontFamily : "Poppins",
}

const B612 = {
    fontFamily : 'B612 Mono',
}

const styles = StyleSheet.create({
    
    quransContainer: {
        width: '100%',
        color: 'white',
        zIndex :'6',
        fontSize: '3em',
        paddingTop: '2rem',
        marginBottom: '4em',  
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    quranLink: {
        marginLeft: "20px", 
    },
    content: {
        margin: '2rem',
        marginLeft: '0',
        fontSize: '1.5rem',
        fontFamily: [poppins],
    },
    description: {
        marginLeft: '1em', 
        marginBottom: '2em',
        fontSize: '0.8rem',
        fontFamily: [B612],
    },

    projectLink: {
        width: '100%',
        userSelect: 'none',
        curser: 'pointer',
        fontSize: '2rem',
        background: '#191919',
        borderColor: '#4067a5',
        borderWidth: '2px',
        borderStyle: 'solid',
        display: 'inline-block',
        margin: '5px 0',
        padding: '5px',
        color: 'white',
        textDecoration: 'none',
        transition: 'background 0.8s, color 0.8s',
        ':hover': {
            color: '#4067a5',
            background: '#e5f2fc',
        } 
    },
})

export default Qurans;