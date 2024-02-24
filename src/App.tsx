import { Routes, Route } from 'react-router-dom';

import './globals.css';
import { SigninForm } from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AruthLayout from './_auth/aruthLayout';
import RootLayout from './_root/rootLayout';

export const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Route */}
        <Route element={<AruthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-in" element={<SignupForm />} />
        </Route>
        {/* Private Route  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </main>
  )
}
