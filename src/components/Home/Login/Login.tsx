'use client'

import Image from 'next/image'
import styles from './Login.module.scss'
import { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
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
            <button className={styles.loginButton}>
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
              <Image
                width={130}
                height={44}
                alt="apple"
                src="https://scontent.fala3-2.fna.fbcdn.net/v/t39.8562-6/119597221_2801552506611915_4465041091818364564_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=DvyCEehbtvAQ7kNvwErgeG-&_nc_oc=AdmZQS1q9-IhnqZp5wIhUWNC7kOVQWmk65X6hIk-SbiXvLidy_Y9FiANXHJs4aYNQ5U&_nc_zt=14&_nc_ht=scontent.fala3-2.fna&_nc_gid=exLTHSRumF_ad1OxQirFuQ&oh=00_AfUd_IEbVeKjc8gA0CEqjx8bovnC32e9hszzrzTwC38ApA&oe=689AA875"
              />
            </a>
            <a
              href="https://apps.microsoft.com/detail/9wzdncrf0083?hl=en-US&gl=US"
              className={styles.appLink}
            >
              <Image
                width={150}
                height={44}
                alt="microsoft"
                src="https://scontent.fala3-2.fna.fbcdn.net/v/t39.8562-6/464845381_1070495111392058_4721916965659495303_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=tHZSff3w-LIQ7kNvwHEAG5-&_nc_oc=AdlgdmoTd-PERU6-dT8N3K03uD1xCdOZ7r73Voknrtq38XwLij2YiQxbmntltYPD_a4&_nc_zt=14&_nc_ht=scontent.fala3-2.fna&_nc_gid=exLTHSRumF_ad1OxQirFuQ&oh=00_AfXBM6CDjITpUJyT2qdQEIO2ge2TMlRbQkrL0mxpYs_a8Q&oe=689ABC2C"
              />
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
