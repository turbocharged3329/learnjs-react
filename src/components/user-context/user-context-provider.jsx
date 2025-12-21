import { useMemo, useState } from 'react'
import { UserContext } from '@/components/user-context/user-context.jsx'

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const value = useMemo(() => {
        return {
            user,
            login: () => setUser({ name: 'John Doe' }),
            logout: () => setUser(null),
        }
    }, [user])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
