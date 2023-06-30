import React, { useState } from 'react';
import { BiCurrentLocation, BiLogoInstagramAlt, BiLogoFacebookCircle, BiSolidPhoneCall } from 'react-icons/bi';
import rrImage2 from './image/RR2.jpeg';

const Register = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [instruments, setInstruments] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [instagram, setInstagram] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform validation
        let isValid = true;

        if (name.trim() === '') {
            isValid = false;
            // Handle error for name field
        }

        // Perform validation for other fields...

        if (isValid) {
            const data = {
                name: name.trim(),
                age: age.trim(),
                gender: gender,
                contact: contact.trim(),
                address: address.trim(),
                instruments: instruments,
                bloodGroup: bloodGroup,
                instagram: instagram.trim(),
            };

            // Send the form data using fetch or your preferred method
            fetch('http://65.1.95.32:8080/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("sucess");
                    } else {
                        console.log("fail");
                        // Handle form submission error
                    }
                })
                .catch((error) => {
                    // Handle fetch error
                });
        }
    };
    return (
        <main id="main" style={{ marginTop: "-30px" }}>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact" style={{ marginLeft: "10px", marginRight: "10px" }} >
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Welcome to Rudra-roopam</h2>
                        <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', lineHeight: '1.5', textAlign: 'center', color: '#333333', marginTop: '20px' }}>
                            सरसावली तरुणाई जपन्या संस्कृती आपली
                        </h5>
                    </div>

                    <div>
                        <img style={{ border: '0', width: '100%', height: '250px' }} src={rrImage2} frameborder="0" allowfullscreen />
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"><BiCurrentLocation /></i>
                                    <h4>Location:</h4>
                                    <p>PMPL Katraj Depo, Opposite Rajiv Gandhi National Park</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-instagram"><BiLogoInstagramAlt /></i>
                                    <h4>Instagram:</h4>
                                    <p>
                                        <a href="https://www.instagram.com/rudraroopam_dholtasha_pathak/?igshid=MzRlODBiNWFlZA%3D%3D" className="instagram">
                                            rudraroopam_dholtasha_pathak
                                        </a>
                                    </p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-facebook"><BiLogoFacebookCircle /></i>
                                    <h4>Facebook:</h4>
                                    <p>
                                        <a href="https://www.facebook.com/rudraroopam.pune?mibextid=ZbWKwL" className="facebook">
                                            Rudra-Roopam Dhol Pathak
                                        </a>
                                    </p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"><BiSolidPhoneCall /></i>
                                    <h4>Call:</h4>
                                    <p>+91 9960307221</p>
                                    <p>+91 8087169165</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0" style={{ marginTop: "50px" }}>
                            <form id="contact-form" className="" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name*" pattern="^[a-zA-Z\s]+$" title="Please Enter only Characters" required value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="number" className="form-control" name="age" id="age" placeholder="Your Age*" required value={age}
                                            onChange={(e) => setAge(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div style={{ position: 'relative' }}>
                                        <select className="form-control" name="gender" id="gender" required style={{ paddingRight: '25px' }} value={gender}
                                            onChange={(e) => setGender(e.target.value)} >
                                            <option value="" disabled selected>Select Gender*</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <select className="form-control" name="blood-group" id="blood-group" value={bloodGroup}
                                        onChange={(e) => setBloodGroup(e.target.value)}>
                                        <option value="" disabled selected>Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>

                                <div className="form-group mt-3">
                                    <input type="number" className="form-control" name="contact1" id="contact1" placeholder="Contact*" pattern="^\d{10}$" title="Please Enter 10 digit Number" required value={contact}
                                        onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="address" id="address" placeholder="Address*" required value={address}
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>

                                <div className="form-group mt-3">
                                    <select className="form-control" name="instruments" id="instruments" placeholder="Select Instruments*" required value={instruments}
                                        onChange={(e) => setInstruments(e.target.value)}>
                                        <option value="" disabled selected>Select Instruments*</option>
                                        <option value="Dhol">Dhol</option>
                                        <option value="Tasha">Tasha</option>
                                        <option value="Dhwaj">Dhwaj</option>
                                    </select>
                                </div>

                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="instagram" id="instagram" placeholder="Your Instagram User ID" value={instagram}
                                        onChange={(e) => setInstagram(e.target.value)} />
                                </div>

                                <div className="my-3"></div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        style={{
                                            display: 'inline-block',
                                            backgroundColor: '#34b7a7',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            fontSize: '16px',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.3s ease'
                                        }}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </main>

    );
};

export default Register;
