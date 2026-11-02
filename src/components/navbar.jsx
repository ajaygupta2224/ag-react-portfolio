import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { CONTACT } from '../constants'

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <span className='m-8 font-extrabold text-3xl tracking-tight text-neutral-800'>AG</span>
        </div>
        <div className='m-8 flex items-center justify-center gap-5 text-2xl md:text-3xl'>
          <a
            href="https://github.com/ajaygupta2224"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-600 transition-colors">
            <FaGithub/>
          </a>
          <a
            className='text-blue-700 hover:text-blue-900 transition-colors'
            href="https://www.linkedin.com/in/ajay-gupta-4281311ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin/>
          </a>
          <a
            href="https://x.com/Ajay7_Gupta?t=yfIY2frbp33mhgs3lyMDQw&s=08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="hover:text-neutral-600 transition-colors">
            <FaSquareXTwitter/>
          </a>
          <a
            className='text-pink-600 hover:text-pink-700 transition-colors'
            href='https://www.instagram.com/ajay7.gupta?utm_source=qr&igsh=emFqdzFsZ2hzMDV5'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <FaInstagram/>
          </a>
          <a
            className='text-neutral-700 hover:text-neutral-900 transition-colors'
            href={`mailto:${CONTACT.email}?subject=Inquiry`}
            aria-label="Email">
            <FaEnvelope/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar
