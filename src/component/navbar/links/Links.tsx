"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./links.module.css";
import NavLinks from './navLink/navLink';

type Link = {
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

    const session: boolean = true;
    const isAdmin: boolean = true;
    return ( 
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLinks item={link} />
                ))}
                {session ? (
                    <>
                        {isAdmin && <NavLinks item={{ title: "Admin", path: '/admin' }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLinks item={{ title: "Login", path: "/login" }} />
                )}
            </div>    
            <button className={styles.menuButton} onClick={(prev) =>{
                setOpen(prev => !prev)
            }}>Menu</button>
            {open && <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLinks item={link} />
                ))}
            </div> }
        </div>
    );
};

export default Links;
