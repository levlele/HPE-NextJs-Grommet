import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Introduction from '../components/CMP_Introduction/CMP_Introduction';

export default function Home() {
  return (
    <Grommet theme={hpe}>
      <Introduction />
    </Grommet>
  )
}
