'use client'

import Image from 'next/image'
import { useState } from 'react'
import { downloadApple, downloadMS, loginBanner } from '@/constants/images'
import { signIn } from '@/api/auth/auth'
import { setCookie } from 'typescript-cookie'
import { accessTokenCookieKey, refreshTokeCookieKey } from '@/constants/keys'
import { useRouter } from 'next/navigation'
import { URLEnum } from '@/enums/url'
import styles from './Login.module.scss'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()

  const onLogInClick = async () => {
    const { email, password } = form
    if (!email || !password) return
    const tokens = await signIn({ email, password })
    setCookie(accessTokenCookieKey, tokens.accessToken)
    setCookie(refreshTokeCookieKey, tokens.refreshToken)

    router.push(URLEnum.CHATS)
  }

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <h3 className={styles.title}>A place for meaningful conversations</h3>
          <p className={styles.subtitle}>
            Messenger helps you connect with your Facebook friends and family,
            build your community, and deepen your interests.
          </p>
          <div className={styles.inputs}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={styles.input}
              placeholder="Email or phone number"
            />
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={styles.input}
              placeholder="Password"
            />
          </div>
          <div className={styles.buttons}>
            <button className={styles.loginButton} onClick={onLogInClick}>
              <p className={styles.loginButtonText}>Log in</p>
            </button>
            <a href="#" className={styles.forgotLink}>
              Forgotten your password?
            </a>
          </div>
          <div className={styles.under}>
            <div className={styles.keep}>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className={styles.checkbox}
              />
              <label htmlFor="checkbox">
                <span className={styles.checkboxText}>Keep me signed in</span>
              </label>
            </div>
          </div>
          <div className={styles.apps}>
            <a
              href="https://apps.apple.com/us/app/messenger/id1480068668?mt=12"
              className={styles.appLink}
            >
              <Image width={130} height={44} alt="apple" src={downloadApple} />
            </a>
            <a
              href="https://apps.microsoft.com/detail/9wzdncrf0083?hl=en-US&gl=US"
              className={styles.appLink}
            >
              <Image width={150} height={44} alt="microsoft" src={downloadMS} />
            </a>
          </div>
        </div>
        <Image src={loginBanner} alt="notebook" width={576} height={836} />
      </div>
    </div>
  )
}

export default Login
