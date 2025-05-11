import styles from "@/app/page.module.css";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

export default function HomeProjectItem({title, description, bulletPoints}: {title: string, description: string, bulletPoints: string[]}) {

    const [showAlt, setShowAlt] = useState<boolean>(false)
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    const points = bulletPoints.map(point =>
        <li key={crypto.randomUUID()}>{point}</li>);

    useEffect(() => console.log(ref), [])

    useLayoutEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        setHeight(ref.current!.clientHeight)

    }, []);

    return (
        <div className={styles.projects} onMouseEnter={() => setShowAlt(true)} onMouseLeave={() => setShowAlt(false)}>
            <div className={`${styles.pItem}`} >
                <h3>{title}</h3>
                <div  style={{maxHeight: (height)}} className={styles.pText}>
                    <p ref={ref} className={`${showAlt ? styles.slideUp : styles.slideDown}`}>{description}</p>
                    <div style={{height: height}} className={`${showAlt ? styles.slideUp : styles.slideDown}`}>
                        <a href={"/"} >
                            <ul>{points}</ul>
                            Go to project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}