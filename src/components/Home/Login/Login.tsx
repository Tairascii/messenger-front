import Image from 'next/image'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <h3 className={styles.title}>A place for meaningful conversations</h3>
          <p className={styles.subtitle}>
            Messenger helps you connect with your Facebook friends and family,
            build your community, and deepen your interests.
          </p>
          <div className={styles.buttons}>
            <button className={styles.loginButton}>
              <p className={styles.loginButtonText}>Log in</p>
            </button>
            <a href="#" className={styles.forgotLink}>
              Forgotten your password?
            </a>
          </div>
        </div>
        <Image
          src="https://scontent.fala11-1.fna.fbcdn.net/v/t39.8562-6/474725753_1358504298471525_8447910813089343782_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=546v-sTxqW8Q7kNvwGGnQYH&_nc_oc=AdnAo62vI5hKkZ-O40VM96pFtg88VX0hUPbIkNks0d3U3U65GJUhVI1E0TceGKmfyJQ&_nc_zt=14&_nc_ht=scontent.fala11-1.fna&_nc_gid=sRCh_5TELpQkzJr09kFn1Q&oh=00_AfW4diimlMGHQLIIY-Xh1vtv_BMmuPbM07473gPuvMRYrQ&oe=6896D556"
          alt="notebook"
          width={576}
          height={836}
        />
      </div>
    </div>
  )
}

export default Login
