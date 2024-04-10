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
                        <input className='Enter-your-name' type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input className='Enter-your-email' type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="resume">Upload Resume:</label>
                        <input className="your-file" type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                    </div>

                    <button className='apply-here' type="submit">Submit</button>
                </form>
            </div>


            <div >
                <div class="job-card">
                    <div class="card">
                        <h2>Applied Scientist, International Machine Learning</h2>
                        <p>Bengaluru, KA, IND</p>
                        <p>Job ID: 2608368</p>
                        <p>Posted April 8, 2024 (Updated about 7 hours ago)</p>
                        <p>Do you want to join an innovative team of scientists who use machine learning and statistical techniques to create state-of-the-art solutions for providing better value to Amazon’s customers? Do you want...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Senior Associate, Catalog Specialist</h2>
                        <p>Bengaluru, KA, IND</p>
                        <p>Job ID: 2607408</p>
                        <p>Posted April 8, 2024 (Updated 1 day ago)</p>
                        <p>Listings Experience team at Amazon is looking for a highly motivated and talented candidate for the role of Catalog Specialist. Proficiency in written and verbal English is a fundamental requirement for...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Senior Associate, Catalog Specialist</h2>
                        <p>Bengaluru, KA, IND</p>
                        <p>Job ID: 2607393</p>
                        <p>Posted April 5, 2024 (Updated 1 day ago)</p>
                        <p>Listings Experience team at Amazon is looking for a highly motivated and talented candidate for the role of Catalog Specialist. Proficiency in written and verbal English is a fundamental requirement for...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Senior Program Manager, Returns & CoBW</h2>
                        <p>Bengaluru, KA, IND</p>
                        <p>Job ID: 2603741</p>
                        <p>Posted March 27, 2024 (Updated 2 days ago)</p>
                        <p>Amazon’s vision is to be ‘earth’s most customer centric company’. In pursuit of the same, we constantly challenge ourselves to build paradigm changing customer experiences such as - no questions asked...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Account Manager</h2>
                        <p>Bangalore, KA, IND</p>
                        <p>Job ID: 2606178</p>
                        <p>Posted September 5, 2023 (Updated 2 days ago)</p>
                        <p>• Understand products and services offered by GlowRoad services and be able to articulate its functions and benefits to external audiences• Track performance of existing key sellers using appropriate metrics...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Account Manager</h2>
                        <p>Bangalore, KA, IND</p>
                        <p>Job ID: 2606185</p>
                        <p>Posted March 22, 2024 (Updated 2 days ago)</p>
                        <p>• Understand products and services offered by GlowRoad services and be able to articulate its functions and benefits to external audiences• Track performance of existing key sellers using appropriate metrics...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Account Manager</h2>
                        <p>Bangalore, KA, IND</p>
                        <p>Job ID: 2606172</p>
                        <p>Posted March 22, 2024 (Updated 2 days ago)</p>
                        <p>• Understand products and services offered by GlowRoad services and be able to articulate its functions and benefits to external audiences• Track performance of existing key sellers using appropriate metrics...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Marketing Manager, Social Ads, Performance Marketing</h2>
                        <p>Bengaluru, KA, IND</p>
                        <p>Job ID: 2602580</p>
                        <p>Posted March 21, 2024 (Updated 2 days ago)</p>
                        <p>With its vast product portfolio and robust advertising charter, Amazon runs one of the largest online performance marketing program internationally. The team is highly results oriented, and at its core...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Data Engineer, IN Data Engineering & Analytics</h2>
                        <p>Bengaluru, KA, IND</p>
                        <p>Job ID: 2602744</p>
                        <p>Posted March 20, 2024 (Updated 7 days ago)</p>
                        <p>IN Data Engineering & Analytics(IDEA) Team is looking to hire a rock star Data Engineer to build analytics solutions and manage the largest petabyte-scale data infrastructure in India and for Amazon India...</p>
                    </div>
                </div>

                <div class="job-card">
                    <div class="card">
                        <h2>Performance Marketing Manager, Amazon</h2>
                        <p>Bangalore, KA, IND +1 other locations</p>
                        <p>Job ID: 2602595</p>
                        <p>Posted March 22, 2024 (Updated 7 days ago)</p>
                        <p>The Consumer Marketing team at Amazon India is seeking a talented, highly motivated and experienced Marketing Manager to grow Amazon Associates Program, a global leader in online marketing and one of the...</p>
                    </div>
                </div>

            </div>

            <Footer />

        </>

    )
}

export default Careers