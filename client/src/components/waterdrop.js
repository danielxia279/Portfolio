import React, {Component, useState, useRef, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'

//svgs

//Parallax
import { Parallax } from 'react-scroll-parallax';

// const useForceUpdate = () => useState()[1];

function Waterdrop(props) {

    const styles = StyleSheet.create({
        waterdrop : {
            position: 'absolute',
            left: props.left,
            top: props.top,
        }, 
        svg: {
            width: '20vh',
            height: '20vh',
        }
      })

    const depthTable = [
        {speed: 300, size: '20%', colour: '#73c1f4'},
        {speed: -50, size: '15%', colour: '#2173a8'},
        {speed: -100, size: '10%', colour: '#0e4b72'},
        {speed: -200, size: '5%', colour: '#063c5e'},
    ]
    const [speed, setSpeed] = useState(depthTable[props.depth - 1].speed);
    const [size, setSize] = useState(depthTable[props.depth - 1].size);
    const [colour, setColour] = useState(depthTable[props.depth - 1].colour);


    return (
        <Parallax
            y={[speed, speed * -1]}
            className={css(styles.waterdrop)}
        >
            <svg className={css(styles.svg)}>
                <circle
                    fill = {colour}
                    cx = {size}
                    cy = {size}
                    r = {size}
                />
            </svg>
        </Parallax>
  );
}

export default Waterdrop;
