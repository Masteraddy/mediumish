module.exports = {
  title: 'XVII',
  base: '/',
  dest: 'public',
  description: 'Thoughts, stories and ideas.',
  logo: 'https://res-5.cloudinary.com/hbvjrqyqn/image/upload/q_auto/v1/ghost-blog-images/ghost-35852_640.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'MasterAddy',
      avatar: 'https://res-2.cloudinary.com/hbvjrqyqn/image/upload/q_auto/v1/ghost-blog-images/C8A8B8E8-580F-4CB5-B928-9497C185CEC4.jpg',
      link: 'https://addy.vercel.app',
      linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/masteraddy',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: 'https://instagram.com/itsmasteraddy',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/itsmasteraddy',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Made by Addy',
          link: 'https://addy.vercel.app',
        },
      ],
    },

    sitemap: {
      hostname: 'https://xvii.vercel.app/'
    },
    comment: {
      service: 'disqus',
      shortname: 'xvii',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://xvii.vercel.app/',
    },
    smoothScroll: true
  },
}
