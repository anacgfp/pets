import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import axios from 'axios';
import React, { useState } from 'react';
import Pet from '../../models/pet.model';
import Responsible from '../../models/responsible.model';
import { URLS } from '../../utils/urls';
import './styles.scss';


function Register() {
 const [petName, setPetName] = useState<string>('');
 const [petType, setPetType] = useState<string>('');

 const [responsibleName, setResponsibleName] = useState<string>('');
 const [responsiblePhone, setResponsiblePhone] = useState<string>('');
 const [responsibleDoc, setResponsibleDoc] = useState<string>('');
 const [responsibleEmail, setResponsibleEmail] = useState<string>('');

 const submitPetInfo = async () => {
  const responsible: Responsible = {
   name: responsibleName,
   phone: responsiblePhone,
   doc: responsibleDoc,
   email: responsibleEmail
  };
  const pet: Pet = {
   name: petName,
   type: petType,
   responsible
  }
  console.log(pet);

  try {
   await axios.post(URLS.BASE, pet);
  } catch (e) {
   console.log(e);
  }
 };

 return (
  <div className="form">
   <form className="form-container">
    <h3>Cadastro dos pets</h3>
    <TextField
     id="pet-name"
     label="Nome"
     variant="standard"
     value={petName}
     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPetName(event.target.value)}
     required
     fullWidth />
    <TextField
     id="responsible-name"
     label="Nome do responsável"
     value={responsibleName}
     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setResponsibleName(event.target.value)}
     variant="standard"
     required
     fullWidth />
    <TextField
     id="pet-type"
     label="Espécie do pet"
     variant="standard"
     required helperText="Cachorro, gato,..."
     fullWidth
     value={petType}
     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPetType(event.target.value)} />
    <TextField
     id="responsible-phone"
     label="Telefone do responsável"
     variant="standard"
     required
     fullWidth
     value={responsiblePhone}
     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setResponsiblePhone(event.target.value)} />
    <TextField
     id="responsible-email"
     label="Email do responsável"
     variant="standard"
     required
     fullWidth
     value={responsibleEmail}
     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setResponsibleEmail(event.target.value)} />
    <TextField
     id="responsible-doc"
     label="CPF do responsável"
     variant="standard"
     required
     fullWidth
     value={responsibleDoc}
     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setResponsibleDoc(event.target.value)} />

    <Button onClick={submitPetInfo} variant="contained">Enviar</Button>

   </form>
  </div>
 )
}

export default Register;