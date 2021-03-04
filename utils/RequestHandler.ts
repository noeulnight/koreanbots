import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import rateLimit from 'express-rate-limit'
import ResponseWrapper from '@utils/ResponseWrapper'

const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 120,
	statusCode: 429,
	handler: (_req, res) => ResponseWrapper(res, { code: 429 }),
	keyGenerator: (req) => req.headers['x-forwarded-for'] as string,
	
})
const RequestHandler = () =>
	nc<NextApiRequest, NextApiResponse>({
		onNoMatch(_req, res) {
			return ResponseWrapper(res, { code: 405 })
		},
		onError(err, _req, res) {
			console.error(err)
			return ResponseWrapper(res, { code: 500 })
		},
	})
		.use(limiter)

export default RequestHandler
