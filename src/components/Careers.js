import React from 'react'
import Navbar from './Navbar'
import MenuBar from './MenuBar'
import Footer from './Footer'
import './Careers.css'
const Careers = () => {
    return (
        <>
            <Navbar />
            <MenuBar />

            <div className="careers-container">
                <h1>Join Our Team</h1>
                <p>Explore exciting career opportunities at Amazon:</p>
                <form className="careers-form">
                    <div className="form-group">
                        <label htmlFor="position">Position:</label>
                        <select id="position" name="position">
                            <option value="software-engineer">Software Engineer</option>
                            <option value="marketing-manager">Marketing Manager</option>
                            <option value="warehouse-associate">Warehouse Associate</option>
                            <option value="data-scientist">Data Scientist</option>
                            <option value="customer-service-representative">Customer Service Representative</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="resume">Upload Resume:</label>
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>


            <Footer />

        </>

    )
}

export default Careers