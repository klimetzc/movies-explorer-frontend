import React from 'react';
import './Signup.scss';
import { Signup } from '../../features/auth/signup';

function SignupPage() {
  return (
    <div className="signup-page">
      <Signup.Form />
    </div>
  );
}

export default SignupPage;
