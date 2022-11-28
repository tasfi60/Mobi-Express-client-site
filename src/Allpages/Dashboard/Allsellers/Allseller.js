import React, { useContext, useState } from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from '@tanstack/react-query';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import toast from 'react-hot-toast';
import './Allseller.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Allseller = () => {
    
    let n = 1;
    const [myseller, setMyseller] = useState([]);

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
      

    const {user,logOut} = useContext(AuthContext);

  const url = "https://mobile-resale-server-site.vercel.app/users";

  const [alluser, setAlluser] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
        setAlluser(response.data);
    });
  }, []);

  console.log(alluser);
    
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
});

const handleVerifySeller = id => {
    fetch(`https://mobile-resale-server-site.vercel.app/users/seller/${id}`, {
        //method: 'PUT'
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Seller successfully Verified.')
                refetch();
            }
        })
}
  
  const handleDelete = r =>{
          
    const agree = window.confirm(`Are you sure you want to delete?`)
   
     
    if(agree){
        fetch(`https://mobile-resale-server-site.vercel.app/users/${r}`,{
            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data => 
            {
                if(data.deletedCount > 0)
                {
                    const remainingseller = myseller.filter(rev => rev.email !== r);
                    setMyseller(remainingseller);
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
          <StyledTableCell align="right">Photo</StyledTableCell>
            <StyledTableCell  align="right">User Name</StyledTableCell>
            <StyledTableCell align="right">email</StyledTableCell>
            <StyledTableCell align="right">User Type</StyledTableCell>
            <StyledTableCell align="right">Drop User</StyledTableCell>
            <StyledTableCell align="right">Verify User</StyledTableCell>
            <StyledTableCell align="right">User Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          
          
          alluser.map((row) => (

            <>
            {
                row.usertype === "seller"?
                <>
                
                <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row" >{n++}</StyledTableCell>
                <StyledTableCell align="right" ><img src={row.photoURL} alt='' className='rounded-circle table-img'/></StyledTableCell>
                <StyledTableCell align="right" >
                  {row.displayName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right" >{row.usertype}</StyledTableCell>
                <StyledTableCell align="right"> <DeleteIcon aria-label="Example" onClick={() => handleDelete(row.email)} > </DeleteIcon></StyledTableCell>
                <StyledTableCell align="right" ><button onClick={() => handleVerifySeller(row._id)} className="btn fw-bold my-2 border shadow">Verify</button><VerifiedUserIcon aria-label="Example" ></VerifiedUserIcon></StyledTableCell>
                {
                  row.role === "seller"?
                  <>
                      <StyledTableCell align="right" >Verified</StyledTableCell>
                  </>
                  :
                  <>
                      <StyledTableCell align="right" >Unverified</StyledTableCell>
                  </>
                  

                }
               
            
              </StyledTableRow>
              
              </>
              :
              <>
              </>
                
          }
          {
            
          }
          </>
                
            ))

            }
          
            
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default Allseller;