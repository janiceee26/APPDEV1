import styles from './SignUp.module.css';
import logo from "../assets/logo.svg";

export default function SignUp() {
    return (
        <div className={styles.signupContainer}>
            {/* ---------- Left panel ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className={styles.logo} src={logo} alt="Design Spacee logo" />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Create Account</h2>

                    {/* Social Sign Up Buttons */}
                    <div className={styles.socialButtons}>
                        <button type="button" className={styles.socialBtn}>Sign up with Google</button>
                        <button type="button" className={styles.socialBtn}>Sign up with Facebook</button>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider}>— OR —</div>

                    {/* Inputs */}
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    {/* Submit Button */}
                    <button type="submit" className={styles.submitBtn}>Create Account</button>

                    {/* Bottom Link */}
                    <p className={styles.loginLink}>
                        Already have an account? <a href="#">Login</a>
                    </p>
                </div>
            </section>
        </div>
    );
}