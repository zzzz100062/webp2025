import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';


export default function CguButton() {
    return(
        <div>
            <IconButton color='primary' aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </div>
    )
}