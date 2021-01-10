import Link from 'next/link'
import Container from './Container'
import Wave from './Wave'

const Footer = (): JSX.Element => {
	return (
		<div className='releative'>
			<Wave color='currentColor' className='dark:text-discord-dark text-white bg-discord-black -mb-10' />
			<div className='bottom-0 text-white bg-discord-black'>
				<Container className='pb-20 pt-10 w-11/12 lg:flex lg:pt-0 lg:w-3/5' ignoreColor>
					<div className='w-full lg:flex-grow'>
						<h1 className='text-koreanbots-blue text-3xl font-extrabold'>국내봇을 한 곳에서.</h1>
						<span className='text-base'>2020 Koreanbots, All rights reserved.</span>
						<div className='text-2xl'>
							<Link href='/discord'>
								<a className='mr-2'>
									<i className='fab fa-discord' />
								</a>
							</Link>
							<a href='https://github.com/koreanbots' className='mr-2'>
								<i className='fab fa-github' />
							</a>
						</div>
					</div>
					<div className='flex-col mb-2 w-full lg:w-1/3'>
						<h2 className='text-koreanbots-blue text-base font-bold'>한국 디스코드봇 리스트</h2>
						<ul className='text-sm'>
							<li>
								<Link href='/about'>
									<a className='hover:text-gray-300'>소개</a>
								</Link>
							</li>
							<li>
								<Link href='/api'>
									<a className='hover:text-gray-300'>API</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex-col mb-2 w-full lg:w-1/5'>
						<h2 className='text-koreanbots-blue text-base font-bold'>커뮤니티</h2>
						<ul className='text-sm'>
							<li>
								<Link href='/partners'>
									<a className='hover:text-gray-300'>파트너</a>
								</Link>
							</li>
							<li>
								<Link href='/verification'>
									<a className='hover:text-gray-300'>인증</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex-col mb-2 w-full lg:w-1/5'>
						<h2 className='text-koreanbots-blue text-base font-bold'>약관</h2>
						<ul className='text-sm'>
							<li>
								<Link href='/privacy'>
									<a className='hover:text-gray-300'>개인정보취급방침</a>
								</Link>
							</li>
							<li>
								<Link href='/guidelines'>
									<a className='hover:text-gray-300'>가이드라인</a>
								</Link>
							</li>
						</ul>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default Footer
