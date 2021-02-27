import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesHook';
import styles from '../styles/CompletedChallenges.module.css';

export default function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <section className={styles.completedChallenges}>
            <span>Desafios completos:</span>
            <span>{challengesCompleted}</span>
        </section>
    );
}