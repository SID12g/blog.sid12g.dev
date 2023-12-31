'use client'
import styles from '../../styles/NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import instagram from '../../../public/navbar/instagram_icon.svg';
import github from '../../../public/navbar/github_icon.svg';
import instagram_dark from '../../../public/navbar/dark/instagram_icon.svg';
import github_dark from '../../../public/navbar/dark/github_icon.svg';
import sun from '../../../public/navbar/sun_icon.svg';
import moon from '../../../public/navbar/dark/moon_icon.svg';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function ChangeDarkMode() {
  const cookieValue = ('; ' + document.cookie).split('; mode=');
  const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
  const mode = lastPart ? lastPart.split(';')[0] : '';
  if (mode === 'light') {
    document.cookie = 'mode=dark; path=/; max-age=' + (3600 * 24 * 400);
  } else if (mode === 'dark') {
    document.cookie = 'mode=light; path=/; max-age=' + (3600 * 24 * 400);
  }
}

export default function NavBar({mode} : {mode: any}) {
  const router = useRouter()
  useEffect(() => {
    const cookieValue = ('; ' + document.cookie).split('; mode=');
    const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
    const mode = lastPart ? lastPart.split(';')[0] : '';
    if (mode === '') {
      document.cookie = 'mode=light; path=/; max-age=' + (3600 * 24 * 400);
    }
  }, [])
  return (
    <div className={styles.nav_wrap} style={mode && mode.value == 'dark' ? { backgroundColor: '#1d1d1d' } : {}}>
      <Link href="/" className={styles.logo} style={mode && mode.value == 'dark' ? { color: 'white' } : {}}>
        <p>SIIID</p>
      </Link>
      <div className={styles.btn_wrap}>
        <Link href="https://sid12g.dev" className={styles.button} style={mode && mode.value == 'dark' ? { color: 'white' } : {}}>
          <p>about me</p>
        </Link>
        <Link
          href="https://www.instagram.com/clwm_222"
          className={mode && mode.value == 'dark' ? styles.icon_wrap_dark : styles.icon_wrap}
        >
          <Image className={styles.icon} src={mode && mode.value == 'dark' ? instagram_dark : instagram} alt="icon" />
        </Link>
        <Link href="https://github.com/SID12g" className={mode && mode.value == 'dark' ? styles.icon_wrap_dark : styles.icon_wrap}>
          <Image className={styles.icon} src={mode && mode.value == 'dark' ? github_dark : github} alt="icon" />
        </Link>
        <div className={mode && mode.value == 'dark' ? styles.icon_wrap_dark : styles.icon_wrap} onClick={() => {
          ChangeDarkMode()
          router.refresh()
        }}>
          <Image className={styles.mode} src={mode && mode.value == 'dark' ? moon : sun} alt="icon" />
        </div>
      </div>
    </div>
  );
}
