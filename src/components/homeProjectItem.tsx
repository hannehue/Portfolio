import styles from "@/app/page.module.css";

export default function HomeProjectItem({title, description}: {title: string, description: string}) {

    return (
        <div className={styles.projects}>
            <div className={styles.pItem}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}