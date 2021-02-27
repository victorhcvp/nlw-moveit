import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesHook';
import styles from '../styles/Profile.module.css';

export default function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <section className={styles.profile}>
            <img src="https://github.com/victorhcvp.png" alt="VH" />
            <div>
                <strong>Victor Hugo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Up" />
                    Level {level}
                </p>
            </div>
        </section>
    );
}