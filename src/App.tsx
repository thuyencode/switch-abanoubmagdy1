import { MoonIcon, SunIcon } from './components/icons/index.ts'
import {
  Container,
  Credit,
  SourceCode,
  ThemeToggle
} from './components/index.ts'

const App = () => (
  <Container className='h-dvh w-dvw flex-col gap-6 dark:bg-zinc-900'>
    <Credit />

    <Container className='gap-3'>
      <SunIcon className='dark:invert' />
      <ThemeToggle />
      <MoonIcon className='dark:invert' />
    </Container>

    {/* <SwitchDefaultController /> */}
    <SourceCode />
  </Container>
)

export default App
