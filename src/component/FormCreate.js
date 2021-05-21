import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {createApp} from "../store/action/applications";

const FormCreate = ({closeModal}) => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: '',
        description: ''
    })

    const submitHandler = e => {
        e.preventDefault()
        dispatch(createApp({...state})).then((res) => {
            closeModal(res)
        })
    }

    const changeHandler = e => {
        setState(prevState => ({...prevState, [e.target.name] : e.target.value}))
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container direction="column" spacing={3}>
                <Grid item xs={8}>
                    <label htmlFor="name" className="label">
                        Название
                    </label>
                    <TextField
                        id="name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={changeHandler}
                        value={state.name}
                        className="modal__input"
                    />
                </Grid>
                <Grid item xs={8}>
                    <label htmlFor="description" className="label">
                        Описание
                    </label>
                    <TextField
                        id="description"
                        name="description"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        onChange={changeHandler}
                        value={state.description}
                        className="modal__input"
                        rows={4}
                    />
                </Grid>
                <Grid item xs>
                    <Grid item xs={4}>
                        <Button type="submit" className="btn">Сохранить</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormCreate;