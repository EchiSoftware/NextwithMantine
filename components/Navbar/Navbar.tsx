import { useState } from 'react'
import {
  createStyles,
  Header,
  Container,
  Anchor,
  Group,
  Burger,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import VercelLogo from 'public/assets/vercel.svg'
import Link from 'next/link'
import Image from 'next/image'

const HEADER_HEIGHT = 84

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: 'gray',
    }).background,
    borderBottom: 0,
    position: 'sticky',
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: theme.white,
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    borderBottom: '2px solid transparent',
    transition: 'border-color 100ms ease, opacity 100ms ease',
    opacity: 0.9,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,

    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },
  },

  secondaryLink: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.white,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.white,
    opacity: 1,
    borderBottomColor:
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.colors[theme.primaryColor][5],
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: 'gray' })
        .background,
      0.1,
    ),
  },

  imageContainer: {
    width: '10%',
  },
}))

interface LinkProps {
  label: string
  link: string
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[]
  userLinks: LinkProps[]
}

const Navbar = ({ mainLinks, userLinks }: DoubleHeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()
  const [active, setActive] = useState(0)

  const mainItems = mainLinks.map((item, index) => (
    <Link key={item.label} href={item.link} passHref>
      <Anchor<'a'>
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: index === active,
        })}
        onClick={() => {
          setActive(index)
        }}
      >
        {item.label}
      </Anchor>
    </Link>
  ))

  const secondaryItems = userLinks.map((item) => (
    <Link key={item.label} href={item.link} passHref>
      <Anchor<'a'>
        className={classes.secondaryLink}
      >
        {item.label}
      </Anchor>
    </Link>
  ))

  return (
    <Header height={HEADER_HEIGHT} className={classes.header}>
      <Container className={classes.inner}>
        <div className={classes.imageContainer} style={{ color: '#fff'}}>
          <Image
            src={VercelLogo}
            width={130}
            priority
            layout="responsive"
            alt="Vercel Image"
          />
        </div>

        <div className={classes.links}>
          <Group position="right">{secondaryItems}</Group>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="#fff"
        />
      </Container>
    </Header>
  )
}

export default Navbar
