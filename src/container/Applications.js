import React, {useEffect, useState} from 'react';
import {Button, Grid, IconButton, makeStyles, SwipeableDrawer, Toolbar} from "@material-ui/core";
import TableCom from "../component/TableCom";
import {useDispatch, useSelector} from "react-redux";
import {getApps, getStatuses, getUsers} from "../store/action/applications";
import CloseIcon from '@material-ui/icons/Close';
import FormCreate from "../component/FormCreate";
import FormUpdate from "../component/FormUpdate";

const useStyles = makeStyles({
    root: {
        zIndex: '1200!important',
        '& .MuiDrawer-paper': {
            width: '55%'
        },
        '& .MuiBackdrop-root': {
            background: 'transparent'
        },
    },

});

const Applications = () => {
    const headTable = ['ID', 'Название', 'Статус', 'Исполнитель']
    const dispatch = useDispatch()
    const classes = useStyles();
    const apps = useSelector(state => state.app.apps)
    const [modal, setModal] = useState({
        editId: null,
        isOpen: false,
        title: 'Создать заявку'
    })

    useEffect(() => {
        dispatch(getApps())
        dispatch(getStatuses())
        dispatch(getUsers())
    }, [])

    const openCreateModal = () => {
        setModal(prevState => ({...prevState, isOpen: true, title: 'Создать заявку', editId: null}))
    }

    const closeModal = (id) => {
        setModal(prevState => ({...prevState, isOpen: false, editId: null}))

    }

    const editOpenModal = (data) => {
        console.log(data);
        setModal(prevState => {
            return {...prevState, isOpen: true, editId: data.id, title: data.name}
        })
    }

    return (
        <div>
            <Grid container direction="column" spacing={1}>
                <Grid item xs>
                    <Button
                        onClick={openCreateModal}
                        className="btn">Создать заявку</Button>
                </Grid>
                <Grid item xs>
                    <TableCom
                        head={headTable}
                        body={apps.value || []}
                        editOpenModal={editOpenModal}
                    />
                </Grid>
                <SwipeableDrawer
                    anchor="right"
                    open={modal.isOpen}
                    onClose={closeModal}
                    onOpen={() => {
                    }}
                    classes={{
                        root: classes.root
                    }}
                >
                    <Toolbar/>
                    <div className="modal">
                        <div className="modal__header">
                            {modal.editId && <p>№{modal.editId}</p>}
                            <p style={{padding: '0 10px'}}>{modal.title}</p>
                            <IconButton onClick={closeModal}>
                                <CloseIcon className="modal__icon"/>
                            </IconButton>
                        </div>
                        <div className="modal__body">
                            {modal.editId ?
                                <FormUpdate closeModal={closeModal} id={modal.editId}/>
                                : <FormCreate closeModal={closeModal}/>}
                        </div>
                    </div>
                </SwipeableDrawer>
            </Grid>
        </div>
    );
};

export default Applications;