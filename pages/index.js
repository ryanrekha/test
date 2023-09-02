import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'
import thumbSpotify from '../public/images/links/spotify.png'
import thumbMail from '../public/images/works/mail.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an founder; based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            citto 
          </Heading>
          <p>(Founder)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="300%"
              height="300%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Lazy for Work
        </Heading>
        <Paragraph>
          vimalacitto is a founder and a looking for event based in Indonesia with a
          passion for a job. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with teams. {''}
          fuck u big toket
           &quot;
          <NextLink href=" " passHref>
            <Link target="_blank">toket;</Link>
          </NextLink>
          &quot; which has 1 dick, include me.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Medan, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Onyx part of Logistic (EO)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working as a freelancer also works at samafitro as an apprentice student 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href=" https://wa.me/+6281361208715" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                @citto
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/@r_2408va" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @r_2408va
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/v.citto_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @v.citto_
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://open.spotify.com/embed/playlist/4PY9nJ1I18r4HaY2R6iQ1S?utm_source=generator"
            title="Playlist"
            thumbnail={thumbSpotify}
          >
            My Playlist Spotify
          </GridItem>
          <GridItem
            href="mailto: ryanshahteja@icloud.com"
            title="Hire Us"
            thumbnail={thumbMail}
          >
            @ryanshahteja
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
