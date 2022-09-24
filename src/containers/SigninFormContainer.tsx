import SigninForm from 'components/organisms/SigninForm'
import { useAuthContext } from 'contexts/AuthContext'
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext'

interface SigninFormContainerProps {
  onSignin: (error?: Error) => void
}

const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const { signin } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const handleSignin = async (username: string, password: string) => {
    try {
      setGlobalSpinner(true)
      await signin(username, password)
      onSignin && onSignin()
    } catch (error: unknown) {
      if (error instanceof Error) {
        window.alert(error.message)
        onSignin && onSignin(error)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }
  return <SigninForm onSignin={handleSignin} />
}

export default SigninFormContainer
