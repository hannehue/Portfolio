'use client'

import styles from "./page.module.css";
import HomeProjectItem from "@/components/homeProjectItem";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>

                </div>
                <div className={styles.title}>
                    <h1>HANS ROSENFELDT PEDERSEN</h1>
                    <h2>FULLSTACK SOFTWARE ENGINEER</h2>
                </div>
                <HomeProjectItem title={"DISCO 2 STORAGE SYSTEM"}
                                 description={"Database, data-ingestion and data-access system for the Danish Cubesat Program (DISCO)" +
                                     "satellite DISCO 2, enabling seasoned scientists and new, to query observations in a" +
                                     "meaningful and easy to understand way to support their research"}
                                 bulletPoints={["Requirements-engineering", "Data modelling", "Go-API"]}/>
                <HomeProjectItem title={"WORKOUT TRACKER"}
                                 description={"Personal project to track progress of my weightlifting. A project also mainly done to learn " +
                                     "Spring and Spring boot"}
                                 bulletPoints={["Spring/Spring Boot"]}/>
                <HomeProjectItem title={"DEV-OPS & CI/CD"}
                                 description={"University course in devops principles and technologies, utilizing tools like Github Actions, " +
                                     "Docker, Kubernetes to build a full fledged pipeline with testing, staging and production " +
                                     "deployments. Theory to understand the devops mindset, and how to promote the culture"}
                                 bulletPoints={["Github Actions", "Docker", "Kubernetes"]}/>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
