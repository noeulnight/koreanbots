import { ImageOptions } from '../types'
import { makeImageURL } from './Tools'

export const Status = {
	online: {
		text: '온라인',
		color: 'green-400',
	},
	idle: {
		text: '자리 비움',
		color: 'yellow-300',
	},
	dnd: {
		text: '다른 용무중',
		color: 'red-500',
	},
	offline: {
		text: '오프라인',
		color: 'gray-500',
	},
	streaming: {
		text: '방송중',
		color: 'purple-500'
	},
	null: {
		text: '알 수 없음',
		color: 'gray-500',
	},
	'???': {
		text: '알 수 없음',
		color: 'gray-500',
	},
}

export const perms = {
	general: 0x0,
	staff: 0x1,
	bughunter: 0x2,
	booster: 0x4,
}

export const libs = [
	'discord.js',
	'Eris',
	'discord.py',
	'discordcr',
	'Nyxx',
	'Discord.Net',
	'DSharpPlus',
	'Nostrum',
	'coxir',
	'DiscordGo',
	'Discord4J',
	'Javacord',
	'JDA',
	'Discordia',
	'RestCord',
	'Yasmin',
	'disco',
	'discordrb',
	'serenity',
	'SwiftDiscord',
	'Sword',
	'기타',
	'비공개',
]
export const cats = [
	'관리',
	'뮤직',
	'전적',
	'웹 대시보드',
	'로깅',
	'도박',
	'게임',
	'밈',
	'레벨링',
	'유틸리티',
	'번역',
	'대화',
	'NSFW',
	'검색',
]
export const reportCats = [
	'불법',
	'괴롭힘, 모욕, 명예훼손',
	'스팸, 도배, 의미없는 텍스트',
	'폭력, 자해, 테러 옹호하거나 조장하는 컨텐츠',
	'라이선스혹은 권리 침해',
	'Discord ToS 위반',
	'Koreanbots 가이드라인 위반',
	'기타',
]

export const BASE_URLs = {
	cdn: 'https://cdn.discordapp.com'
}
export const DiscordEnpoints = {
	CDN: class CDN {
		static root = BASE_URLs.cdn
		static emoji (id: string, options:ImageOptions={}) { return makeImageURL(`${this.root}/emojis/${id}`, options) }
		static guild (id: string, hash: string, options:ImageOptions={}) { return makeImageURL(`${this.root}/icons/${id}/${hash}`, options) }
		static default (tag: string, options:ImageOptions={}) { return makeImageURL(`${this.root}/embed/avatars/${isNaN(Number(tag)) ? Number(tag) % 5 : 0}`, options) }
		static user (id: string, hash: string, options:ImageOptions={}) { return makeImageURL(`${this.root}/avatars/${id}/${hash}`, options) }
	}
}

export const git = { 'github.com': { icon: 'github', text: 'Github' },  'gitlab.com':  { icon: 'gitlab', text: 'Gitlab' }}
