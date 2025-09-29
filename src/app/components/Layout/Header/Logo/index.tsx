import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <Image
        src='/images/Logo/Cucina.png'
        alt='logo'
        width={165}
        height={160}
      />
    </Link>
  )
}

export default Logo
