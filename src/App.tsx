import {
  Container,
  Credit,
  SourceCode,
  ThemeToggle
} from './components/index.ts'

const App = () => (
  <Container className='h-dvh w-dvw flex-col gap-6 dark:bg-zinc-900'>
    <Credit />
    <ThemeToggle />
    {/* <SwitchDefaultController /> */}
    <SourceCode />
  </Container>
)

export default App
