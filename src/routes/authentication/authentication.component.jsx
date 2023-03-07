// import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import './authentication.styles.scss';

const Authentication = () => {

    return(
        <div className="authentication-container">
            <SignUpForm className="sign-up-form" />
            <SignInForm className="sign-in-form" />
        </div>
    );
};

export default Authentication;