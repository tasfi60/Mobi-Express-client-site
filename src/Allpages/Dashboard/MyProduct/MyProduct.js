import React, { useContext, useState } from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import Paper from '@mui/material/Paper';
import {useQuery} from '@tanstack/react-query';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Advertisement from '../../Home/Advertisement/Advertisement';


const MyProduct = () => {
    
    let n = 1;
    const {user,logOut} = useContext(AuthContext);
    

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
      


    const url = `http://localhost:5000/category/category_details?displayName=${user.displayName}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.displayName],
        queryFn: async () => {
            const res  = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(products);   

    const handleAdvertise = (row) =>
    {

        const product = {

            img: row.img,
            saleprice: row.saleprice,
            condition: row.condition,
            product: row.product

        }


                 fetch('http://localhost:5000/addCollection', {
                     method: 'PUT',
                     headers: {
                         'content-type': 'application/json'
                     },
                     body: JSON.stringify(product)
                 })
                     .then(res => res.json())
                     .then(data => {
                         console.log(data)      
                     })
                     .catch(error => console.error(error));

         
        
    }

    const [myproduct, setProduct] = useState([]);

    const handleDelete = r =>{
          
      const agree = window.confirm(`Are you sure you want to delete?`)
     
       console.log(r)
      if(agree){
          fetch(`http://localhost:5000/category/${r}`,{
              method: 'DELETE'
  
          })
          .then(res => res.json())
          .then(data => 

              {   console.log(data.deletedCount)
                  if(data.deletedCount > 0)
                  {
                      const remainproduct = myproduct.filter(rev => rev.category_id !== r);
                      setProduct(remainproduct);
                      alert('Deletation Successful!');
                  }
              }
              )
  
      }
  }
    
  
  
    return (
        <div className='px-3 '>
             <TableContainer component={Paper} >
      <Table sx={{ minWidth: 500 }} aria-label="customized table" className='p-5 '>
        <TableHead>
          <TableRow>
          <StyledTableCell>No</StyledTableCell>
          <StyledTableCell align="right">Product Image</StyledTableCell>
            <StyledTableCell  align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">SalePrice</StyledTableCell>
            <StyledTableCell align="right">Condition</StyledTableCell>
            <StyledTableCell align="right">Sale Status</StyledTableCell>
            <StyledTableCell align="right">Advertisement</StyledTableCell>
            <StyledTableCell align="right">Drop Product</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          
          
          products.map((row) => (

            <>
            
                
                <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row" >{n++}</StyledTableCell>
                <StyledTableCell align="right" ><img src={row.img} alt='' className='rounded-circle table-img'/></StyledTableCell>
                <StyledTableCell align="right" >
                  {row.product}
                </StyledTableCell>
                <StyledTableCell align="right">{row.saleprice}</StyledTableCell>
                <StyledTableCell align="right" >{row.condition}</StyledTableCell>
                <StyledTableCell align="right">available</StyledTableCell>
                <StyledTableCell align="right" onClick={() => handleAdvertise(row)} >
                <button className='ms-3 p-2 rounded btn'>Advertise<AddHomeOutlinedIcon className='ms-1'  > </AddHomeOutlinedIcon></button></StyledTableCell>
                <StyledTableCell align="right"> <DeleteIcon aria-label="Example" onClick={() => handleDelete(row.category_id)} > </DeleteIcon></StyledTableCell>
            
              </StyledTableRow>
              
              
                
          
          </>
                
            ))

            }
          
            
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default MyProduct;