import React from 'react'
import LoginForm from '../components/LoginForm'
import SignUp from '../components/SignUp'

const AuthPage = () => {
  const [haveAccount, setHaveAccount] = React.useState(true);
  return (
    <div>
      {haveAccount ? <LoginForm setHaveAccount={setHaveAccount} /> : <SignUp setHaveAccount={setHaveAccount} />}
    </div>
  );
}

export default AuthPage
