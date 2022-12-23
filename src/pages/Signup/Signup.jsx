import React from 'react';
import './Signup.scss';
import { Signup } from '../../features/auth/signup';

function SignupPage() {
  return (
    <main className="signup-page">
      <Signup.Form />
    </main>
  );
}

export default SignupPage;
