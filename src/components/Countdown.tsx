import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../hooks/ChallengesHook';
import { CountdownContext } from '../hooks/CountdownHook';
import styles from '../styles/Countdown.module.css';

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        isActive, 
        hasFinished, 
        resetCountdown, 
        startCountdown, 
    } = useContext(CountdownContext);
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <>
            <div className={styles.countdown}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    type="button" 
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton} 
                            onClick={startCountdown}
                        >
                            Iniciar ciclo
                        </button>
                    )}
                </>
            )}

        </>
    );
}