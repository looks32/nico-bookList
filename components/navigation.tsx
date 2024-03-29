"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../css/nav.module.css";

export default function Navigation(){
	const path = usePathname();
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">
						HOME{path === "/" ? " *" : ""}
					</Link>
				</li>
				<li>
					<Link href="/about">
						ABOUT{path === "/about" ? " *" : ""}
					</Link>
				</li>
			</ul>
			<h1>Lilbray ^_~</h1>
		</nav>
	)
}