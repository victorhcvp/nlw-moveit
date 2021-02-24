import styles from '../styles/Profile.module.css';

export default function Profile() {
    return (
        <section className={styles.profile}>
            <img src="https://github.com/victorhcvp.png" alt="VH" />
            <div>
                <strong>Victor Hugo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Up" />
                    Level 1
                </p>
            </div>
        </section>
    );
}