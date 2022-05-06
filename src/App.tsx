import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages'

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/signIn" element={<SignInPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route
                        path="/detail/:touristRouteId"
                        element={<DetailPage />}
                    ></Route>
                    <Route path="*" element={<h1>404 not found</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
