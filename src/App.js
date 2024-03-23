import React from 'react';
import {Routes , Route , Link, BrowserRouter} from 'react-router-dom';
import {Layout , Typography , Space} from 'antd';
import {Navbar,HomePage,Exchanges,Cryptocurrencies,CryptoDetails,News} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
            <div className='routes'>
                <Routes>
                    <Route exact path="/" Component={HomePage} />
                    <Route exact path="/exchanges" Component={Exchanges} />
                    <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
                    <Route exact path="/crypto/:coinId" Component={CryptoDetails} />
                    <Route exact path="/news" Component={News} />
                </Routes>
            </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
              <Link to="/">
                Cryptoverse Inc.
              </Link> <br />
              All Rights Reserved.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
        </div>
      </div>
    </div>
  )
}

export default App
