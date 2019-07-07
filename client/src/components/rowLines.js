import React, { Component,useState } from 'react';

import { StyleSheet, css } from 'aphrodite'

function RowLines(){



    return(
        <div className={css(styles.rowLineContainer)}>  
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
            <div className={css(styles.row)}/>
        </div>
    )
    
}

const styles = StyleSheet.create({
    rowLineContainer: {
        width : '100%',
        height : '100%',
        position : 'absolute',

    },
    row : {
        width  : '100%',
        height : '5%',
        border: 'solid',
        borderWidth : '1px 0px 0px 0px',
        borderColor : 'black',
        boxSizing : 'border-box',

    }
})

export default RowLines;
