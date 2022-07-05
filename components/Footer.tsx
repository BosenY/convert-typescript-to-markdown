import React from 'react';
import Image from 'next/image'
import xw from 'xwind'
const Footer: React.FC = () => {
    return (<footer css={xw`flex px-0 py-2 border-t-2 border-solid border-footer-color justify-center items-center`} >
        <a
            css={xw`flex flex-grow justify-center items-center`}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <span >
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
        </a>
    </footer>)
}
export default Footer