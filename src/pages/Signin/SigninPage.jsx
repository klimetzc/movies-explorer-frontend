import React from 'react';
import { Signin } from '../../features/auth/signin';
import './SigninPage.scss';

function SigninPage() {
  return (
    <main className="signin-page">
      <Signin.Form />
    </main>
  );
}

export default SigninPage;
