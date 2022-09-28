import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import Router from '../router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <Router />
  </StrictMode>
)

// Strict mode se elimina cuando vaya a desplegar mi aplicación
