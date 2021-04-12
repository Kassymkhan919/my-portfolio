import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import useScript from '../hooks/useScript'

const TwitterTimeline = props => {
    useScript('https://platform.twitter.com/widgets.js');
    return(
        <div className="twitter-timeline">
        <Card>
        <a class="twitter-timeline" 
        data-theme="light" 
        href="https://twitter.com/kasymkhan_bkb?ref_src=twsrc%5Etfw">
            Tweets by kasymkhan_bkb</a> 


        </Card>
        
    </div>
    );
}

export default TwitterTimeline;