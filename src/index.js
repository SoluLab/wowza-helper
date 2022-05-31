import axios from 'axios';
import crypto from 'crypto';

const WOWZA_BASE_URL = 'https://api.cloud.wowza.com';
const WOWZA_ENDPOINTS = {
	CreateLiveStream: '/api/v1.6/live_streams',
	GetAllLiveStream: '/api/v1.6/live_streams',
	GetLiveStreamById: '/api/v1.6/live_streams/<streamId>',
	GetLiveStreamThumbnailById:
		'/api/v1.6/live_streams/<streamId>/thumbnail_url',
	StartLiveStreamById: '/api/v1.6/live_streams/<streamId>/start',
	StopLiveStreamById: '/api/v1.6/live_streams/<streamId>/stop',
	GetLiveStreamStatusById: '/api/v1.6/live_streams/<streamId>/status',
};

class WowzaHelper {
	constructor(WOWZA_API_KEY, WOWZA_ACCESS_KEY) {
		this.CreateLiveStream = async function (options = {}) {
			try {
				const path = WOWZA_ENDPOINTS.CreateLiveStream;
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const {
					name = this.GenerateRandomStringOfLength(20),
					aspect_ratio_height = 720,
					aspect_ratio_width = 1280,
					broadcast_location = 'us_west_california',
					recording = true,
				} = options;

				const request = await axios.post(
					WOWZA_BASE_URL + path,
					{
						live_stream: {
							aspect_ratio_height,
							aspect_ratio_width,
							billing_mode: 'pay_as_you_go',
							broadcast_location,
							delivery_method: 'push',
							encoder: 'other_webrtc',
							name,
							recording,
							transcoder_type: 'transcoded',
						},
					},
					{ headers }
				);
				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.UpdateLiveStream = async function (options = {}) {
			try {
				const path = WOWZA_ENDPOINTS.CreateLiveStream;
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				if (!Object.keys(options).length) {
					throw 'No data provided to update!';
				}

				const request = await axios.post(
					WOWZA_BASE_URL + path,
					{
						live_stream: options,
					},
					{ headers }
				);

				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetAllLiveStream = async function () {
			try {
				const path = WOWZA_ENDPOINTS.GetAllLiveStream;
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const request = await axios.get(WOWZA_BASE_URL + path, {
					headers,
				});

				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const path = WOWZA_ENDPOINTS.GetLiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const request = await axios.get(WOWZA_BASE_URL + path, {
					headers,
				});

				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetLiveStreamThumbnailById = async function (LIVE_STREAM_ID) {
			try {
				const path = WOWZA_ENDPOINTS.GetLiveStreamThumbnailById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const request = await axios.get(WOWZA_BASE_URL + path, {
					headers,
				});

				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.StartLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const path = WOWZA_ENDPOINTS.StartLiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const request = await axios.put(WOWZA_BASE_URL + path, {
					headers,
				});

				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.StopLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const path = WOWZA_ENDPOINTS.StopLiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const request = await axios.put(WOWZA_BASE_URL + path, {
					headers,
				});

				return request.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetLiveStreamStatusById = async function (LIVE_STREAM_ID) {
			try {
				const path = WOWZA_ENDPOINTS.GetLiveStreamStatusById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const headers = this.GetHeaders(
					path,
					WOWZA_API_KEY,
					WOWZA_ACCESS_KEY
				);

				const request = await axios.get(WOWZA_BASE_URL + path, {
					headers,
				});

				return request.data;
			} catch (error) {
				throw error;
			}
		};
	}
	GenerateRandomStringOfLength(length) {
		let result = '';
		const characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result;
	}

	GetHeaders(PATH, WOWZA_API_KEY, WOWZA_ACCESS_KEY) {
		const timestamp = Math.round(new Date().getTime() / 1000);
		const HMACData = `${timestamp}:${PATH}:${WOWZA_API_KEY}`;
		const signature = crypto
			.createHmac('sha256', WOWZA_API_KEY)
			.update(HMACData)
			.digest('hex');

		return {
			'wsc-access-key': WOWZA_ACCESS_KEY,
			'wsc-timestamp': timestamp,
			'wsc-signature': signature,
			'Content-Type': 'application/json',
		};
	}
}

module.exports = WowzaHelper;
