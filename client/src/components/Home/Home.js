import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts';
import useStyles from "./HomeStyles"

import Posts from '../Posts/Posts';
import Form from '../../components/Form/Form';

const Home = () =>  {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);
  return (
    <Grow in>
        <Container className={classes.mainContainer}>
            <Grid container justifyContent = "space-between" alignItems = "stretch" spacing = {3}>
                 <Grid item xs = {12} sm = {7}>
                    <Posts setCurrentId ={setCurrentId}/>
                </Grid>
                <Grid item xs = {12} sm = {4}>
                    <Form currentId ={currentId} setCurrentId ={setCurrentId}/>
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home;