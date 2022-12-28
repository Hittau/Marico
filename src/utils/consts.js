import ReducedAnxiety from '../assets/reduced-anxiety.png'
import LowerWorkload from '../assets/lower-workload.png'
import MoreTime from '../assets/more-time.png'
import Phone from '../components/SecondStep/Phone/Phone'
import JacobMark from '../assets/Team/jacob-mark.png'
import Daniel from '../assets/Team/daniel.png'
import RyanTrump from '../assets/Team/ryan-trump.png'
import {
	BsInstagram,
	BsMedium,
	BsRss,
	BsSpotify,
	BsSubtract,
	BsTwitter,
	BsWordpress,
	BsYoutube,
} from 'react-icons/bs'
import { MdAnchor } from 'react-icons/md'
import { SiApplepodcasts } from 'react-icons/si'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

export const menuNavItems = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'about',
		path: '/about',
	},
	{
		name: 'pricing',
		path: '/pricing',
	},
	{
		name: 'blog',
		path: '/blog',
	},
]

export const benefitsItems = [
	{
		title: 'reduced anxiety',
		subtitle: 'Never worry about losing your audience',
		img: ReducedAnxiety,
	},
	{
		title: 'lower workload',
		subtitle: "Just share one link. We'll handle the rest.",
		img: LowerWorkload,
	},
	{
		title: 'more time',
		subtitle: 'Spend less time on marketing tools',
		img: MoreTime,
	},
]

export const firstStepItems = [
	{
		text: 'Bring all of your content together into one homepage.',
	},
	{
		text: 'Your page automatically updates whenever you create.',
	},
]

export const thirdStepItems = [
	{
		text: 'Embed content or create something new to share.',
	},
	{
		text: 'Share content over email, text message or your homepage.',
	},
]

export const secondStepCards = [
	{
		label: 'one link',
		title: 'all you create.',
		highlighted: 'one link',
		additionalEl: <Phone />,
	},
	{
		label: 'one link',
		title: 'emails. phone #s.',
		highlighted: 'all yours.',
	},
]

export const plans = [
	{
		name: 'starer',
		desc: 'Perfect for tying out Wavium',
		price: 'free',
		emailsCount: 500,
		addition: 'Upgrade to send more emails',
		optionsTitle: 'Key features',
		options: ['Automatic updating home page', 'Unlimited sources + posts'],
	},
	{
		name: 'basic',
		desc: 'Build your online home',
		price: '$14',
		monthlyPrice: '$19',
		emailsCount: 2000,
		addition: 'Purchase more for $0.002 per email',
		optionsTitle: 'Everything in starter, plus',
		options: ['Remove Wavium branding', 'Embed Wavium on your own domain'],
	},
	{
		name: 'complete',
		desc: 'Enhanced engagement',
		price: '$29',
		monthlyPrice: '$34',
		emailsCount: 10000,
		addition: 'Purchase more for $0.002 per email',
		optionsTitle: 'Everything in basic, plus ',
		options: [
			'Collect text massage subscribers',
			'Share posts over text massage',
		],
		highlighted: true,
	},
]

export const paragraphs = [
	{
		content:
			"Building a career on social platforms is like building a home on someone else's land. While social platforms are great for discovering and reaching your audience, your goal as a creator should be to convert your followers into email or text message subscribers. Why? Look no further than TikTok. Almost overnight, millions of creative people almost lost their careers.",
	},
	{
		content:
			'If a platform removes your account, or their algorithm for distribution no longer favours you, are you prepared?',
	},
	{
		content:
			"If you want to build a career as a creator, your focus should be on building durable distribution channels. Without distribution, you have no business. So how can you build an audience that you actually own? With emails and phone numbers. These distribution channels are direct. Instead of going through some algorithm, when you share over email and text message, you know that your audience will see your content. Even better is the fact that you own these lists. Instagram removes your account, you're ok. YouTube changes their algorithm, you're ok. You own your audience.",
	},
	{
		content:
			"We built Marico to make this process easy, fast, and effective. The traditional solution to this problem involves spending days building a website or hiring someone expensive to do it for you. But those days are gone. With Marico, you get a portfolio that is always up-to-date and converts visitors into email or text message subscribers. The best thing? It takes under 5 minutes to setup, and it automatically updates whenever you post new content anywhere online. We believe the best tools are the ones you don't even notice. Marico helps you build your own audience, without any hassle or time commitment. All you have to do is share your portfolio link with your audience, and we'll handle the rest.",
	},
	{
		content:
			'You can also create posts from within Marico and share them in just a few clicks to your portfolio, and to your email and text message subscribers. Since all of your content is already in Marico, creating content takes minutes, not hours.',
	},
	{
		content:
			'For too long, social platforms have taken advantage of creators. Fight back and build an audience that you own.',
	},
]

export const teamMembers = [
	{
		img: JacobMark,
		name: 'jacob mark',
		position: 'CEO & design',
		twitterLink: 'https://twitter.com/',
	},
	{
		img: Daniel,
		name: 'daniel',
		position: 'CTO & development',
		twitterLink: 'https://twitter.com/',
	},
	{
		img: RyanTrump,
		name: 'ryan trump',
		position: 'COO & sales',
		twitterLink: 'https://twitter.com/',
	},
]

export const contentSources = [
	{
		icon: BsTwitter,
		iconColor: '#61bcfe',
		name: 'Twitter',
		desc: 'Connect your Twitter feed to your Marico homepage.',
	},
	{
		icon: BsYoutube,
		iconColor: '#fc3C3a',
		name: 'YouTube',
		desc: 'Connect your YouTube feed to your Marico homepage.',
	},
	{
		icon: BsWordpress,
		iconColor: '#00769d',
		name: 'WordPress',
		desc: 'Connect your WordPress feed to your Marico homepage.',
	},
	{
		icon: BsSubtract,
		iconColor: '#ff671b',
		name: 'Substack',
		desc: 'Connect your Substack feed to your Marico homepage.',
	},
	{
		icon: BsMedium,
		iconColor: '#383635',
		name: 'Medium',
		desc: 'Connect your Medium feed to your Marico homepage.',
	},
	{
		icon: BsRss,
		iconColor: '#ff671b',
		name: 'RSS feeds',
		desc: 'Connect your RSS feed to your Marico homepage.',
	},
	{
		icon: BsSpotify,
		iconColor: '#1bba54',
		name: 'Spotify',
		desc: 'Connect your Spotify feed to your Marico homepage.',
	},
	{
		icon: MdAnchor,
		iconColor: '#8940fc',
		name: 'Anchor',
		desc: 'Connect your Anchor feed to your Marico homepage.',
	},
	{
		icon: SiApplepodcasts,
		iconColor: '#8940fc',
		name: 'Apple podcasts',
		desc: 'Connect your Apple Podcasts feed to your Marico homepage.',
	},
	{
		icon: BsInstagram,
		iconColor: '#ef72ad',
		name: 'Instagram',
		desc: 'Connect your Instagram feed to your Marico homepage.',
	},
	{
		icon: FaLinkedinIn,
		iconColor: '#007ab9',
		name: 'Linkedin',
		desc: 'Connect your Linkedin feed to your Marico homepage.',
	},
	{
		icon: FaFacebookF,
		iconColor: '#2d63ef',
		name: 'Facebook',
		desc: 'Connect your Facebook feed to your Marico homepage.',
	},
]
