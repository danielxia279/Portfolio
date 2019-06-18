import React from "react"
import { Link } from "gatsby"

import Main from "../components/main"

import { StyleSheet, css } from 'aphrodite'

import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css'

const IndexPage = () => (
  <ParallaxProvider className={css(styles.mainContainer)}>
    <Main/>
  </ParallaxProvider>
)

const styles = StyleSheet.create({
  mainContainer : {
    margin : '0',
    padding : '0',
    border : '0',

  }
  
})

export default IndexPage
