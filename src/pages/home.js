import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Foundation from 'react-foundation';
import { Grid } from 'react-foundation';
import SnowyBackground from "../components/video/video";
import myNavbar from "../components/navbar/mynavbar";
import Video from "../components/video/video";
import eocLogo from "../eoc-logo-vertical-snowflake.png";
import "./home.css";


function MyHome () {
    return (
        <Grid className="homeBackground">

            <Video />
            <img src={eocLogo} className="logo" alt="Cole and Co, Elves On Call" />

        </Grid>
    )
}

export default MyHome;


