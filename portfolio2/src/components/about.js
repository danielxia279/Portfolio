import React, { Component, useState, useRef, useEffect } from 'react';

import { StyleSheet, css } from 'aphrodite'
import { Parallax } from 'react-scroll-parallax';

import Resume from './resume.pdf'

function About(){

    return(
        <div className={css(styles.aboutContainer)}>
            
                About
            <div className={css(styles.content)}>
                I am a senior student at Markville Secondary School and
                an aspiring full-stack web developer.
                <br/>
                While my love for software is rooted in its mathematics
                and functionality, I've recently found myself playing with the
                client-side and learning UX/UI design.
                <br/>
                Currently in Toronto, Canada
                <br/>
                <a class="link" className={css(styles.resumeLink)} href={Resume} target="_blank">Check Out My Resume (PDF)</a>

            </div>
            
            
        </div>
    )
}

const poppins = {
    fontFamily : "Poppins",
}

const styles = StyleSheet.create({
    
    aboutContainer: {
        width: '50rem',
        color: 'white',
        zIndex :'6',
        fontSize: '3em',
        paddingTop: '2rem',
        marginBottom: '4em',  
    },
    content: {
        margin: '2rem',
        marginLeft: '0',
        fontSize: '1.5rem',
        fontFamily: [poppins],
    },

    resumeLink: {
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
        cursor: 'pointer',
        transition: 'background 0.5s, color 0.5s',
        ':hover': {
            color: '#4067a5',
            background: '#e5f2fc',
        } 
    },

    torch: {
        width: '6em',
        float: 'left',
        padding : '15px',
    }
})

export default About;