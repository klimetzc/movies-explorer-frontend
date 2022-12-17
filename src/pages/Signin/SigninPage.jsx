import React from 'react';
import { Signin } from '../../features/auth/signin';
import './SigninPage.scss';

function SigninPage() {
  return (
    <div className="signin-page">
      <Signin.Form />
    </div>
  );
}

export default SigninPage;
