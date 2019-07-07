import React, { Component, useState, useRef, useEffect } from 'react';

import { StyleSheet, css } from 'aphrodite'
import { Parallax } from 'react-scroll-parallax';

function Projects(){

    return(
        <div className={css(styles.projectsContainer)}>
                Projects
            <div className={css(styles.content)}>
                <a className={css(styles.projectLink)} href="https://github.com/Dancharr/Portfolio" target="_blank">Portfolio</a>
                <div className={css(styles.description)}>
                    This simple static react app.
                </div>
                <a className={css(styles.projectLink)} href="https://github.com/Dancharr/Aaron-and-Daniel-9D-Bomberman" target="_blank">BomberPerson</a>
                <div className={css(styles.description)}>
                    Java remake of the first Super Bomberman.
                </div>
                <a className={css(styles.projectLink)} href="https://github.com/Dancharr/idle-app" target="_blank">World of Irucraft</a>
                <div className={css(styles.description)}>
                    A work in progress incremental game.
                </div>
                <br/><br/>
                A bit empty but not for long.

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
    
    projectsContainer: {
        width: '50rem',
        color: 'white',
        zIndex :'6',
        fontSize: '3em',
        paddingTop: '2rem',
        marginBottom: '4em',  
        marginLeft: 'auto',
        marginRight: '0',
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
        transition: 'background 0.5s, color 0.5s',
        ':hover': {
            color: '#4067a5',
            background: '#e5f2fc',
        } 
    },
})

export default Projects;