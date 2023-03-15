import React from 'react';
import Layout from '../../components/layout/Layout';
import './Home.scss'
const Home: React.FC = () => {

    return (
        <div>
            <Layout>
                <div className = "home-page">
                    <h1 id='heading'>This is the homepage</h1>
                    <h3>add some subtitles</h3>
                </div>
            </Layout>
        </div>
    )
}

export default Home