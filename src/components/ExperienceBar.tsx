import { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesHook';
import styles from '../styles/ExperienceBar.module.css';

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <section className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}} />
                {currentExperience > 0 && (
                    <span style={{left: `${percentToNextLevel}%`}}>
                        {currentExperience} xp
                    </span>
                )}
            </div>
            <span>{experienceToNextLevel} xp</span>
        </section>
    );
}