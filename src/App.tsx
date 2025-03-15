import {
  Container,
  Credit,
  SourceCode,
  SwitchDefaultController
} from './components/index.ts'

const App = () => (
  <Container className='h-dvh w-dvw flex-col gap-5'>
    <Credit />
    <SwitchDefaultController />
    <SourceCode />
  </Container>
)

export default App
