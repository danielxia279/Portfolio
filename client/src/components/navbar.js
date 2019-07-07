import React, { Component,useState, useEffect } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { StyleSheet, css } from 'aphrodite'

import Fade from 'react-reveal/Fade'

function Navbar(props){
    
    const [showLabels, setShowLabels] = useState('')

    const speed = 800;

    return(
        <div className={css(styles.navbar)}
            onMouseEnter={() => setShowLabels(true)}
            onMouseLeave={() => setShowLabels(false)}
        >
            <div className={css(styles.line)}/>
            <div className={css(styles.buttonContainer, styles.top)}> 
                <div className={css(styles.button)} onClick = {() => scroll.scrollToTop({duration : speed})}/>
                
                <div className={css(styles.label)}>
                    Top
                </div>
            </div>
            <br/>
            <div className={css(styles.buttonContainer, styles.about)}>
                <div className={css(styles.button)} onClick={() => scroll.scrollTo(props.aboutRef.current.offsetTop, {duration : speed})}/>
                <div className={css(styles.label)}>
                    About
                </div>
            </div>
            <br/>
            <div className={css(styles.buttonContainer, styles.projects)}>
                <div className={css(styles.button)} onClick={() => scroll.scrollTo(props.projectsRef.current.offsetTop, {duration : speed})}/>
                    <div className={css(styles.label)}>
                        Projects
                    </div>
            </div>
            <br/>
            <div className={css(styles.buttonContainer, styles.contact)}>
                <div className={css(styles.button)} onClick={() => scroll.scrollTo(props.contactRef.current.offsetTop, {duration : speed})}/>
                    <div className={css(styles.label, styles.fade)}>
                        Contact
                    </div>
                
            </div>
            
        </div>
    )
}
const googleSans = {
    fontFamily : 'Google Sans'
}       

const B612 = {
    fontFamily : 'B612 Mono',
}

const styles = StyleSheet.create({
    navbar: {
        height : '100vh',
        width: '120px',
        position: 'fixed',
        color: '#5d95ef',
        right: '50px',
        top: '0px',

    },
    line: {
        position:'absolute',
        top: '21%',
        right: '11%',
        height: '45%',
        width: '0.3em',
        background: 'white',
    },
    buttonContainer : {
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        right: '0',

           
    },
    button: {
        background: 'white',
        borderRadius: '50%',
        width: '2em',
        height: '2em',
        transition: 'background 0.2s',
        ':hover': {
            background: '#fc6fa2',
        },
        float: 'right',
        userSelect: 'none',
    },
    innerCircle: {
        
    },

    label : {
        fontFamily : [B612],
        color : 'white',
        float: 'right',
        userSelect: 'none',
        paddingTop: '0.4em',
        paddingRight: '0.3em',
    }, 
    top: {
        top: '20%'
    },
    about: {
        top: '35%'
    },
    projects: {
        top: '50%'
    },
    contact: {
        top: '65%'
    },
})

export default Navbar;