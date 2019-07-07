//Libraries
import React, { Component, useState, useRef, useEffect } from 'react';
import { Parallax, withController } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade'

//CSS
import { StyleSheet, css } from 'aphrodite'
import Dragon from '../images/dragon.png'

//Components
import Hello from './hello'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Navbar from './navbar'
import Contactbar from './contactbar'
import ParallaxField from './parallaxField'
import RowLines from './rowLines'

function Main(){
  
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const quransRef = useRef(null);

    //Remove Loading Page
    useEffect(() => {  
      const ele = document.getElementById('loading-page')
      const ele2 = document.getElementById('loading-page2')
      const ele3 = document.getElementById('loading-page3')
      if(ele){
        ele.classList.add('slide-out')
        ele2.classList.add('slide-out-longer')
        ele3.classList.add('slide-out-longerer')
        setTimeout(() => {
          ele.outerHTML = '';
          console.log("removed");
        }, 1000)
        setTimeout(() => {
          ele2.outerHTML = '';
          console.log("removed");
        }, 1000)
        setTimeout(() => {
          ele3.outerHTML = '';
          console.log("removed");
        }, 1000)
      }
    }, [])

    return(
      <div className={css(styles.mainWrapper)}>
          <ParallaxField/>
          <div className={css(styles.contentWrapper)}>
            
            <Hello/>
            <div className={css(styles.container)} ref={aboutRef}><About/></div>
            <div className={css(styles.container)} ref={projectsRef}><Projects/></div>
            {/* <div className={css(styles.container)} ref={quransRef}><Qurans/></div> */}
            <Contactbar/>

            <Navbar
            aboutRef = {aboutRef}
            contactRef = {contactRef}
            projectsRef = {projectsRef}
            quransRef = {quransRef}
            />

            <div className={css(styles.container)} ref={contactRef}><Contact/></div>
        </div>
    </div>
    )
}

const openSans = {
  fontFamily: 'OpenSans'
}
const firaCode = {
    fontFamily: "FiraCode-bold",
  };
const googleSans = {
  fontFamily : 'Google Sans'
}
  
  const styles = StyleSheet.create({
    mainWrapper: {
        margin: '0',
        padding: '0',
        border : '0',
        boxSizing : 'border-box',
        backgroundColor: '#191919',
        position: 'relative',
        overflow: 'hidden',
    },
    contentWrapper : {
        margin: '0',
        paddingLeft: '10%',
        paddingRight: '10%',
        border : '0',
        boxSizing : 'border-box',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        width: '100%',
        zIndex : '5',
    },

    
  })

export default Main;