import { useNavigate } from 'react-router'

export const BackButton = ({ onClick }) => {
    const navigate = useNavigate()
    return (
        <button type="button" onClick={onClick ? onClick : () => navigate(-1)}>
            Back
        </button>
    )
}
