// Datagrid.jsx
import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Datagrid({ searchKeyword }) { 
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6");
        const data = await response.json();

        const formattedRows = data.map((item) => ({
          title: item.title || '無資料',
          location: item.showInfo[0]?.location || '無資料',
          price: item.showInfo[0]?.price || '無資料',
        }));

        setDataset(formattedRows);
        setFilteredData(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);  

  
  useEffect(() => {
    const filtered = dataset.filter((row) =>
      row.title.toLowerCase().includes(String(searchKeyword).toLowerCase())  
    );
    setFilteredData(filtered);
    setCurrentPage(0); 
  }, [searchKeyword, dataset]);  

  const currentPageData = filteredData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const handleNextPage = () => {
    if ((currentPage + 1) * pageSize < filteredData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ overflow: 'auto', height: '400px', width: '800px', margin: '0 auto' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word', width: '30%' }}>名稱</TableCell>
              <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word', width: '35%' }}>地點</TableCell>
              <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word', width: '35%' }}>票價</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 分頁控制 */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button onClick={handlePrevPage} disabled={currentPage === 0}>
          上一頁
        </Button>
        <span style={{ margin: '0 10px' }}>
          第 {currentPage + 1} 頁 / 共 {Math.ceil(filteredData.length / pageSize)} 頁
        </span>
        <Button onClick={handleNextPage} disabled={(currentPage + 1) * pageSize >= filteredData.length}>
          下一頁
        </Button>
      </div>
    </>
  );
}
