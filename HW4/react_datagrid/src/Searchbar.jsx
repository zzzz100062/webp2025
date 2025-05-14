import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Datagrid from './Datagrid';
import { useState } from 'react';

export default function Searchbar() {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
    <h1>景點觀光展資訊</h1>
    <Box
      component="form"
      sx={{ 
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',        // 使用 flex 布局
        justifyContent: 'flex-start'  // 將內容靠左對齊
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="搜尋欄" variant="outlined" onChange={(e) => {setSearchKeyword(e.target.value)}} />      
    </Box>
    <Datagrid searchKeyword = {searchKeyword}/>
    </>
  );
}
