import React, { useState } from 'react';
import CVPreview from './CVPreview';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({
        profilePic: null,
        firstName: '',
        lastName: '',
        titre: '',  
        phone: '',
        address: '',
        email: '',
        experience: '',
        formation: '',
        software: '',
        skills: '',
        language: '',
    });

    const [showPreview, setShowPreview] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePic: e.target.files[0] });
    };

    const handlePreview = () => {
        setShowPreview(true);
    };

    return (
        <div className="'title">
            <h2>Formulaire CV</h2>
            <form>
                <label className="custom-file-label" htmlFor="profilePic">
                        Upload Profile Picture
                    <input type="file" name="profilePic" id="profilePic"  onChange={handleFileChange} />
                </label>

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                
                
                <input
                    type="text"
                    name="titre"
                    placeholder="About you"
                    value={formData.titre}
                    onChange={handleChange}
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Adresse"
                    value={formData.address}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <textarea
                    name="experience"
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={handleChange}
                />

                <textarea
                    name="formation"
                    placeholder="Formation"
                    value={formData.formation}
                    onChange={handleChange}
                />

                <textarea
                    name="software"
                    placeholder="Soft Ware"
                    value={formData.software}
                    onChange={handleChange}
                />

                <textarea
                    name="skills"
                    placeholder="Skills"
                    value={formData.skills}
                    onChange={handleChange}
                />

                <textarea
                    name="language"
                    placeholder="Language"
                    value={formData.language}
                    onChange={handleChange}
                />

                <button type="button" onClick={handlePreview}>
                    View
                </button>
            </form>

            {showPreview && <CVPreview formData={formData} />}
        </div>
    );
}

export default Form;
