import React, {useEffect, useState} from 'react';
import {Button, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import {getApp} from "../store/action/applications";
import {useDispatch, useSelector} from "react-redux";

const FormUpdate = ({closeModal, id}) => {
    const dispatch = useDispatch()
    const {statuses, users} = useSelector(state => state.app)
    const [state, setState] = useState({
        comment: '',
        status: '',
        executorName: ''
    })

    console.log(users);
    useEffect(() => {
        console.log(id);
        dispatch(getApp(id))

    }, [])
    const submitHandler = e => {
        e.preventDefault()
        closeModal()
    }
    const changeHandler = e => {
        setState(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs>
                            <p className="label">Описание</p>
                            <p>Description</p>
                        </Grid>
                        <Grid item xs>
                            <p className="label">Добавление коментариев</p>
                            <TextField
                                fullWidth
                                rows={4}
                                value={state.comment}
                                onChange={changeHandler}
                                name="comment"
                                variant="outlined"
                                multiline
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="submit" className="btn">Сохранить</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item xs>
                            <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="status"
                                value={state.status}
                                onChange={changeHandler}
                            >
                                {statuses.map(el => {
                                    return <MenuItem value={el.id} key={el.id}>   <Brightness1Icon style={{
                                        color: el.rgb,
                                        fontSize: '12px', marginRight: '5px'
                                    }}/>{el.name}</MenuItem>
                                })}
                            </Select>

                        </Grid>
                        <Grid item xs>
                            <p className="label">Заявитель</p>

                        </Grid>
                        <Grid item xs>
                            <p className="label">Создана</p>
                        </Grid>
                        <Grid item xs>
                            <InputLabel id="demo-simple-select-label">Исполнитель</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="executorName"
                                value={state.executorName}
                                onChange={changeHandler}
                            >
                                {users.map(el => {
                                    return <MenuItem value={el.id} key={el.id}> {el.name}</MenuItem>
                                })}
                            </Select>
                        </Grid>
                        <Grid item xs>
                            <p className="label">Приоритет</p>
                        </Grid>
                        <Grid item xs>
                            <p className="label">Срок</p>
                        </Grid>
                        <Grid item xs>
                            <p className="label">Теги</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormUpdate;