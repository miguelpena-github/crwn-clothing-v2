// import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './sign-in.styles.scss'

const SignIn = () => {

    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     await createUserDocumentFromAuth(user);
    // }

    return(
        <div className="sign-in-container">
            <SignUpForm className="sign-up-form" />
            <SignInForm className="sign-in-form" />
        </div>
    );
};

export default SignIn;