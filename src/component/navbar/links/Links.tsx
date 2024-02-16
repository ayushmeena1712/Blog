"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./links.module.css";
import NavLinks from './navLink/navLink';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

interface Link {
    title: string;
    path: string;
}

const Links = () => {
    const [open, setOpen] = useState<boolean>(false);
    const links: Link[] = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        { 
            title: "Blog",
            path: "/blog",
        },
    ];

    const {data: session} = useSession();
    return ( 
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLinks key={link.title} title={link.title} path={link.path} />
                ))}
                {session ?(
                    <>
                        {session && <NavLinks  title='admin' path='/admin'  />}
                        <button onClick={()=> signOut()} className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <form onClick={()=> signIn('github', {callbackUrl: `${window.location.origin}`})}>
                        <NavLinks title='Login' path='/login' />
                    </form>
                )}
            </div>    
            <Image src={'/menu.png'} alt='' className={styles.menuButton} width={30} height={30} onClick={(prev) => !prev} />
            { open && <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLinks title={link.title} path={link.path} />
                ))}
            </div> }
        </div>
    );
};

export default Links;
