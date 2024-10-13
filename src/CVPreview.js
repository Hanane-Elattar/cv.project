import React from 'react';
import './view.css';

function CVPreview({ formData }) {
    return (
        <div id="cv-preview">
            <h2>{formData.firstName} {formData.lastName}</h2>
            
            {formData.profilePic && (
                <div className="profile-pic-container">
                    <img 
                        src={URL.createObjectURL(formData.profilePic)} 
                        alt="Profile" 
                        className="profile-pic" 
                    />
                </div>
            )}
            {formData.titre && <h3 className="title">{formData.titre}</h3>}
            <p className="section">
                {formData.address} <br/> {formData.phone} <br/> {formData.email}
            </p>

            {formData.experience && (
                <div className="section">
                    <h3 className="section-title">Experience</h3>
                    <p>{formData.experience}</p>
                </div>
            )}

           
            {formData.formation && (
                <div className="section">
                    <h3 className="section-title">Formation</h3>
                    <p>{formData.formation}</p>
                </div>
            )}

            
            {formData.skills && (
                <div className="section">
                    <h3 className="section-title">Skills</h3>
                    <p>{formData.skills}</p>
                </div>
            )}

            
            {formData.software && (
                <div className="section">
                    <h3 className="section-title">Software</h3>
                    <p>{formData.software}</p>
                </div>
            )}

            
            {formData.language && (
                <div className="section">
                    <h3 className="section-title">Language</h3>
                    <p>{formData.language}</p>
                </div>
            )}
        </div>
    );
}

export default CVPreview;
