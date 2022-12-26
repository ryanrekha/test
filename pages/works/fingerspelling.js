import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fingerspelling">
    <Container>
      <Title>
        Fingerspelling <Badge>2022</Badge>
      </Title>
      <P>
      This game will be using your webcam and machine learning to analyze your handshapes. 
      Everything is processed locally and no webcam data will be sent or stored anywhere
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fingerspelling.xyz/">
          https://fingerspelling.xyz/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fingerspelling.png" alt="fingerspelling" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
