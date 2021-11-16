import React, { useState } from 'react'
import axios from 'axios'
import Button from '../Button/Button'
import LoginForm from '../../macro/Forms/Login/LoginForm'

export default function ApiLogin(props) {
    
    var inputEmail = document.querySelector("#inputEmail")
    var inputPassword = document.querySelector("#inputPassword")

    

    if (props.email) return (<LoginForm Email />)

    if (props.password) return (<LoginForm Password />)

}