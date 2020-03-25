import React, {Fragment} from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet'

import Query from './components/Query/Components/Query'
import AutoQueryRoot from './components/AutoQuery/Component/AutoQueryRoot'
import RobotView from './components/AutoQuery/Component/RobotView'
import Authentication from './components/Authentication'
import AdminRootPanel from './components/Admin/AdminRootPanel'
import Import from './components/Import/Import'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/Main/NavBar'

import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/status-bar/dist/style.css'

// Call it once in your app. At the root of your app is the best place
toast.configure()

function App () {
  return (
    
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Orthanc Tools</title>
      </Helmet>
      <NavBar/>
      <Switch>
          <Route exact path='/' component={Authentication}>
          </Route>
          <Route exact path='/import' component={Import}> 
          </Route>
          <Route exact path='/query' component = {Query}>
          </Route>
          <Route exact path='/auto-query' component = {AutoQueryRoot}>
          </Route>
          <Route exact path='/options' component = {AdminRootPanel}>
          </Route>
          <Route exact path='/robot/:username' component = {RobotView}>
          </Route>
      </Switch>
    </Fragment>
  )
}

export default (App)
