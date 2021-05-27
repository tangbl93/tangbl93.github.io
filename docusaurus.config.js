/** @type {import('@docusaurus/types').DocusaurusConfig} */
const githubUrl = 'https://github.com/tangbl93/tangbl93.github.io';

module.exports = {
  title: 'Docusaurus',
  url: 'https://tangbl93.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'tangbl93', // Usually your GitHub org/user name.
  projectName: 'tangbl93.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docusaurus',
      logo: {
        alt: 'Docusaurus Logo',
        src: 'images/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: '专栏',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: githubUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        doc: {
          editUrl: githubUrl,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          editUrl: githubUrl,
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
