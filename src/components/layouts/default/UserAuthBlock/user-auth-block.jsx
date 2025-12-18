import { useContext } from 'react'
import { UserContext } from '@/components/user-context/user-context.jsx'
import styles from './user-auth-block.module.css'

export const UserAuthBlock = () => {
    const { user, login, logout } = useContext(UserContext)

    return (
        <>
            {!user ? (
                <button
                    type="button"
                    className={styles.authButton}
                    onClick={login}
                >
                    Sign in
                </button>
            ) : (
                <>
                    <span className={styles.userName}>{user.name}</span>
                    <button
                        type="button"
                        className={styles.authButton}
                        onClick={logout}
                    >
                        Sign out
                    </button>
                </>
            )}
        </>
    )
}
