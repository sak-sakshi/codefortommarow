import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const Form = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [errors, setErrors] = useState({}); 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
       
        const errors = {};
        if (!formData.username) {
            errors.username = 'Username is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        setFormData({
            username: '',
            password: '',
            email: ''
        });
        setErrors({});
        handleClose();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Open modal
            </Button>

            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Enter Your Information
                        </Typography>
                        <Button onClick={handleClose}>❌</Button>
                    </Box>
                    <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
                        <Input
                            sx={{ mb: '20px' }}
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                        <Input
                            sx={{ mb: '20px' }}
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        <Input
                            sx={{ mb: '20px' }}
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <Button onClick={handleSubmit} type="button" variant="contained">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
export default Form;