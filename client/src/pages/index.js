import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Main from "../components/main"

import { StyleSheet, css } from 'aphrodite'

import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css'

const IndexPage = () => (
  <ParallaxProvider className={css(styles.mainContainer)}>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=B612+Mono|Poppins&display=swap" rel="stylesheet"/>
      <title>Daniel Xia | Welcome!</title>
    </Helmet>
    <div class="loading-page loading-page3" id="loading-page3"></div>
    <div class="loading-page loading-page2" id="loading-page2"></div>
    <div class="loading-page" id="loading-page">
        <svg xmlns='http://www.w3.org/2000/svg' id='svg8' viewBox='0 0 210 297'
        class="svg">
            <g id='layer1' strokeWidth='0.265'>
                <path id='path10' d='M 96.00595,104.98809 46.869048,239.54762 69.547617,253.91071 146.65476,132.20238 Z'
                fill='#999' stroke='#999' />
                <path id='path12' d='m 83.15476,129.93452 -5.291667,15.875 47.624997,26.45833 8.31548,-11.33928 z'
                fill='#666' stroke='#666' />
            </g>
            <g id='layer2' strokeWidth='0.265'>
                <path id='path21' d='m 99.02976,91.380952 -6.80357,-19.654763 18.14286,-29.482142 4.53571,31.749999 -0.75595,21.922621 z'
                fill='#f60' stroke='#f60' />
                <path id='path23' d='m 120.95238,68.70238 -3.02381,-33.261903 11.33929,-16.630953 6.04761,15.874998 21.16667,-25.7023794 -2.26786,40.0654764 z'
                fill='#f95' stroke='#f95' />
                <path id='path25' d='M 120.95238,97.42857 V 74.75 L 141.36309,64.166667 142.11905,90.625 Z'
                fill='#d45500' stroke='#d45500' />
                <path id='path27' d='M 145.14286,92.136903 127,102.72024 148.16666,113.30357 164.79762,96.672618 158.75,58.119046 146.65476,58.875001 Z'
                fill='#d45500' stroke='#d45500' />
                <path id='path29' d='m 159.50595,48.291667 3.77976,-34.77381 13.60715,-5.2916665 -1.51191,18.1428565 21.92262,-9.827381 -15.875,32.505953 -2.26786,40.821427 -4.53571,6.047621 z'
                fill='#f95' stroke='#f95' />
                <path id='path33' d='m 167.06547,102.72024 -15.11904,13.60714 39.30952,-15.875 -9.07143,-8.315477 z'
                fill='#ff7f2a' stroke='#ff7f2a' />
            </g>
                      ;<g id="layer3">
            <text
              id="text3813"
              y="283.13312"
              x="46.471016"
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30.14106941px",
                lineHeight: "1.25",
                fontFamily: "sans-serif",
                letterSpacing: 0,
                wordSpacing: 0,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.75352675"
              }}
              xmlSpace="preserve"
            >
              <tspan
                style={{
                  strokeWidth: "0.75352675",
                  InkscapeFontSpecification: '"Palatino Linotype Bold"',
                  fontFamily: '"Palatino Linotype"',
                  fontWeight: "bold",
                  fontStyle: "normal",
                  fontStretch: "normal",
                  fontVariant: "normal",
                  stroke: "#ffffff",
                  fill: "#ffffff"
                }}
                y="283.13312"
                x="46.471016"
                id="tspan3811"
              >
                Loading
              </tspan>
            </text>
          </g>

        </svg>
    </div>
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
