import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    main: {
        height: '100%',
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        height: '100%',
        marginTop: theme.spacing(1),
        verticalAlign: 'middle',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));
/**
 * Add conditional Code Field 
 * Add Props to check email and load list of clubs 
 * Send Data to API on Submit 
 * Add Autocomplit for Clubs via Chai API 
 */
export default function ClubForm() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className={classes.main}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h3">
                    Chai Clubs
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="club"
                        label="Club"
                        type="text"
                        id="club"
                        autoComplete="select-club"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.root}
                    >
                        JOIN CLUB
          </Button>
                </form>
            </div>
        </Container>
    );
}