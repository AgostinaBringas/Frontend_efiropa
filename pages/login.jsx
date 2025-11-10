import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { TextField, Button, Container, Box, Typography, Paper } from '@mui/material';

export default function Login() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" mb={2}>Iniciar sesión</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField label="Correo" fullWidth margin="normal" {...register('email', { required: true })} error={!!errors.email}/>
          <TextField label="Contraseña" type="password" fullWidth margin="normal" {...register('password', { required: true })} error={!!errors.password} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Ingresar</Button>
        </Box>
      </Paper>
    </Container>
  );
}
