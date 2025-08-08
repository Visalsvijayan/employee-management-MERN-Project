 import React from 'react'
 import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import RoleBasedRoutes from './utils/RoleBasedRoutes'
import PrivateRoute from './utils/PrivateRoute'
import AdminSummery from './components/dashboard/AdminSummery'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import EditDepartment from './components/department/EditDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'
import View from './components/employee/View'
import Edit from './components/employee/Edit'
 const App = () => {
   return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/admin-dashboard"/>} > </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin-dashboard' element={
            <PrivateRoute>
              <RoleBasedRoutes requiredRole={['admin']}>
                <AdminDashboard/>
              </RoleBasedRoutes>
            </PrivateRoute>
           
           
            }>
              {/*children route to dynamically render with outlet*/}
              <Route index element={<AdminSummery/>}></Route>
              <Route path='/admin-dashboard/departments' element={<DepartmentList/>} ></Route>
              <Route path='/admin-dashboard/add-department' element={<AddDepartment/>} ></Route>
              <Route path='/admin-dashboard/department/:id' element={<EditDepartment/>}></Route>
              <Route path='/admin-dashboard/employee' element={<List/>} ></Route>
              <Route path='/admin-dashboard/add-employee'element={<Add/>} ></Route>
              <Route path='/admin-dashboard/employee/views/:id' element={<View/>}></Route>
              <Route path='/admin-dashboard/employee/edit/:id' element={<Edit/>}></Route>
          </Route>
          <Route path='/employee-dashboard' element={<EmployeeDashboard/>}></Route>
        </Routes>
      </BrowserRouter>

   )
 }
 
 export default App
 