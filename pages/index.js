import SignUpForm from '../components/Form/SignUpForm'
import ToggleBtn from '../components/ToggleBtn/ToggleBtn'

export default function Home() {
  return (
    <div className="dark:bg-gray-800 bg-blue-50 min-h-screen ">
      <ToggleBtn/>
      <div className='min-h-screen flex items-center'>
      <SignUpForm/>
      </div>
    </div>
  )
}
