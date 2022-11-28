import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)

 
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    return (
        <div>

<div className='px-3 '>
             <TableContainer component={Paper} >
      <Table sx={{ minWidth: 500 }} aria-label="customized table" className='p-5 Font-style'>
        <TableHead >
          <TableRow>
          <StyledTableCell>No</StyledTableCell>
          {
             isAdmin &&
             <StyledTableCell align="center">ALL Users & Items</StyledTableCell>

          }
          {
             isSeller &&
             <StyledTableCell align="center">Products</StyledTableCell>

          }
          {
             !isSeller && !isAdmin ?
             <StyledTableCell align="center">Orders</StyledTableCell> : <></>

          }
         
            
          </TableRow>
        </TableHead>
        <TableBody>
          
              
              {
               isAdmin &&
               <>
               
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >1</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/Allseller">All Sellers</Link></StyledTableCell>
                
                
              </StyledTableRow>
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >2</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/AllBuyer">All Buyers</Link></StyledTableCell>
                
                
              </StyledTableRow>
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >3</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/ReportedItems">Reported Items</Link></StyledTableCell>
                
                
              </StyledTableRow>
              </>
               }
              {
                isSeller && 
               <>
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >1</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/AddProduct">Add Product</Link></StyledTableCell>
                
                
              </StyledTableRow>
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >2</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/MyProduct">My Product</Link></StyledTableCell>
                
                
              </StyledTableRow>
              </>
               }
              {
                  !isSeller && !isAdmin ?
               <>
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >1</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/MyOrders">My Orders</Link></StyledTableCell>  
                
              </StyledTableRow>
                <StyledTableRow>
                <StyledTableCell component="th" scope="row" >2</StyledTableCell>
                <StyledTableCell align="center" ><Link className='link' to="/dashboard/Wishlist">My Wishlist</Link></StyledTableCell>  
                
              </StyledTableRow>
              </>
               :
               <></>
               }
             
          
          
       </TableBody>
     </Table>
    </TableContainer>
            
        </div>
           
        </div>
    );
};

export default Dashboard;