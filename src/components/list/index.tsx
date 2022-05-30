import React, { useEffect } from "react";
import './styles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button/Button";
import Pet from "../../models/pet.model";
import { useGetPets } from "../../hooks/useGetPets";

const petsMock = [
 {
  id: 1,
  name: 'Hanna',
  type: 'cachorro',
  responsible: {
   id: 1,
   name: 'Cláudio',
   phone: '81 999999999',
   doc: '99999999999',
   email: 'b@b.com'
  }
 },
 {
  id: 2,
  name: 'Xaropinho',
  type: 'cachorro',
  responsible: {
   id: 2,
   name: 'Solange',
   phone: '81 999999999',
   doc: '99999999999',
   email: 'b@b.com'
  }
 }
];

function PetsList() {
 const { errorPets, fetchingPets, fetchPets } = useGetPets();

 useEffect(() => {
  fetchPets();
 }, [fetchPets]);

 const editPetInfo = (pet: Pet) => {
  console.log(pet)
 }
 const deletePetInfo = (pet: Pet) => {
  console.log(pet)
 }
 return (<div>
  <TableContainer component={Paper}>
   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
    <TableHead>
     <TableRow>
      <TableCell>Nome do pet</TableCell>
      <TableCell align="right">Tipo do pet</TableCell>
      <TableCell align="right">Nome do responsável</TableCell>
      <TableCell align="right">Documento do responsável</TableCell>
      <TableCell align="right">Telefone do responsável</TableCell>
      <TableCell align="right">Email do responsável</TableCell>
      <TableCell align="right">Ações</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {petsMock.map((pet) => (
      <TableRow
       key={pet.name}
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
       <TableCell component="th" scope="row">
        {pet.name}
       </TableCell>
       <TableCell align="right">{pet.type}</TableCell>
       <TableCell align="right">{pet.responsible.name}</TableCell>
       <TableCell align="right">{pet.responsible.doc}</TableCell>
       <TableCell align="right">{pet.responsible.phone}</TableCell>
       <TableCell align="right">{pet.responsible.email}</TableCell>
       <TableCell align="right">
        <Button onClick={() => editPetInfo(pet)} variant="contained">Editar</Button>
        <Button onClick={() => deletePetInfo(pet)} variant="contained">Excluir</Button>

       </TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 </div>)
}

export default PetsList;