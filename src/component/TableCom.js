import React from 'react';
import {makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    row: {
        position: 'relative',
    },
    brdr: {
        width: '5px',
        height: '93%',
        position: 'absolute',
        left: '0',
        top: '2px',
        bottom: '0'
    }
});
const TableCom = ({head, body, editOpenModal}) => {
    const classes = useStyles();
    const renderStatus = (bg, status) => {
        return <span style={{background: bg || '#ccc'}} className="statusItem">{status}</span>
    }

    const szRow = idx => {
        let sz = 'auto'
        if (idx === 0){
            sz = '20px'
        }else if (idx === 1){
            sz = '550px'
        }else if (idx === 2){
            sz = '30px'
        }
        return sz
    }
    return (
        <TableContainer style={{overflow: 'scroll'}}>
            <Table className={classes.table} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        {head.map((el, idx) => {
                           return <TableCell style={{width: szRow(idx)}} key={idx}>{el}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {body.map(el => {
                        return <TableRow key={el.id} style={{cursor: 'pointer'}} onClick={() => editOpenModal(el)}>
                            <TableCell className={classes.row}>
                                <div style={{background: el.statusRgb}} className={classes.brdr}/>
                               {el.id}
                            </TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{renderStatus(el.statusRgb, el.statusName)}</TableCell>
                            <TableCell>{el.executorName}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableCom;