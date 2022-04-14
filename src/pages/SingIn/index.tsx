import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';
import { SignInPage } from './styles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const { signIn } = useContext(AuthContext);

    function handleSubmit() {
        signIn(email);
    }

    return (
        <SignInPage>
            <form>
                <input type="text" value={email} onInput={(e) => setEmail(e.currentTarget.value)}/>
                <button type="button" onClick={handleSubmit}>Logar</button>
            </form>
        </SignInPage>
    )
}

export default SignIn;