import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Margelo <Badge>2022</Badge>
      </Title>
      <P>
        The corporate website for the elite app development and contracting
        agency based in Vienna, Austria.
      </P>
      <P>
        <Link href="https://twitter.com/mrousavy" target="_blank">
          Marc Rousavy <ExternalLinkIcon mx="2px" />
        </Link>
        , the founder of the agency, is my friend from the React Native
        community. I coded the design they&apos;ve sent me, which consists of
        parallax effects inspired by Apple. I&apos;ve published a video showing
        the process of building the website as a tutorial on YouTube.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://margelo.io/" target="_blank">
              https://margelo.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / TypeScript / Vercel / Formspree / Fathom / Embla Carousel
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/margelo_eyecatch.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
