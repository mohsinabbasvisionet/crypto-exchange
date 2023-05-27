import React, { useState } from 'react';

const Signup = ({users,addUser,setIsLoggedIn}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [cnicFile, setCnicFile] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        if (!address.trim()) {
            errors.address = 'Address is required';
            isValid = false;
        }

        if (!cnicFile) {
            errors.cnicFile = 'CNIC document is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCnicFileChange = (e) => {
        const file = e.target.files[0];
        setCnicFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Perform signup logic here
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Address:', address);
            console.log('CNIC File:', cnicFile);

            const newUser = {
                name: name,
                email: email,
                password: password,
                address: address,
                cnicFile: cnicFile,
            };

            // Call the addUser function passed as a prop
            addUser([...users,newUser])

            console.log(users);
            setIsLoggedIn(true);
            setErrors({});
        }
    };

    return (
        <div class="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={handleNameChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label>Home Address:</label>
                    <textarea className="form-control" value={address} onChange={handleAddressChange} />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="form-group">
                    <label>CNIC Document (PDF):</label>
                    <input className="form-control" type="file" accept=".pdf" onChange={handleCnicFileChange} />
                    {errors.cnicFile && <span className="error">{errors.cnicFile}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
};

export default Signup;