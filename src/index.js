import axios from 'axios';

const apiVersion = 'v1.8';
const baseEndpoint = `https://api.video.wowza.com/api/${apiVersion}/live_streams`;
const LiveStreamById = `${baseEndpoint}/<streamId>`;
const LiveStreamThumbnailById = `${baseEndpoint}/<streamId>/thumbnail_url`;
const StartLiveStreamById = `${baseEndpoint}/<streamId>/start`;
const StopLiveStreamById = `${baseEndpoint}/<streamId>/stop`;
const ResetLiveStreamById = `${baseEndpoint}/<streamId>/reset`;
const RegenerateConnectionCodeById = `${baseEndpoint}/<streamId>/regenerate_connection_code`;
const GetLiveStreamStatusById = `${baseEndpoint}/<streamId>/state`;
const GetMetricsForActiceStreamById = `${baseEndpoint}/<streamId>/stats`;

// This header will work for all version 1.8 and above
function GetHeaders(WOWZA_JWT_KEY) {
	return {
		Authorization: `Bearer ${WOWZA_JWT_KEY}`,
		'Content-Type': 'application/json',
	};
}

class WowzaHelper {
	constructor(WOWZA_JWT_KEY) {
		this.CreateLiveStream = async function (streamOptions) {
			try {
				const {
					name,
					aspect_ratio_height,
					aspect_ratio_width,
					broadcast_location,
					recording = true,
					encoder = 'other_webrtc',
				} = streamOptions;

				const response = await axios.post(
					baseEndpoint,
					{
						live_stream: {
							aspect_ratio_height,
							aspect_ratio_width,
							billing_mode: 'pay_as_you_go',
							broadcast_location,
							delivery_method: 'push',
							encoder,
							name,
							recording,
							transcoder_type: 'transcoded',
						},
					},
					{ headers: GetHeaders(WOWZA_JWT_KEY) }
				);
				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.UpdateLiveStream = async function (LIVE_STREAM_ID, updateOptions) {
			try {
				const updateUrl = LiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);

				if (!Object.keys(updateOptions).length) {
					throw 'No data provided to update!';
				}

				const updateData = {
					live_stream: updateOptions,
				};

				const response = await axios.patch(updateUrl, updateData, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetAllLiveStream = async function () {
			try {
				const response = await axios.get(baseEndpoint, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const getLiveStreamUrl = LiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const response = await axios.get(getLiveStreamUrl, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.DeleteLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const deleteLiveStreamUrl = LiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);
				const response = await axios.delete(deleteLiveStreamUrl, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.StartLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const startStreamUrl = StartLiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);

				const response = await axios({
					method: 'put',
					url: startStreamUrl,
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.StopLiveStreamById = async function (LIVE_STREAM_ID) {
			try {
				const stopStreamUrl = StopLiveStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);

				const response = await axios({
					method: 'put',
					url: stopStreamUrl,
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetLiveStreamThumbnailById = async function (LIVE_STREAM_ID) {
			try {
				const liveStreamThumbnailUrl = LiveStreamThumbnailById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);

				const response = await axios.get(liveStreamThumbnailUrl, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetLiveStreamStatusById = async function (LIVE_STREAM_ID) {
			try {
				const streamStatusUrl = GetLiveStreamStatusById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);

				const response = await axios.get(streamStatusUrl, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};

		this.GetMetricsForActiveLiveStreamById = async function (
			LIVE_STREAM_ID
		) {
			try {
				const streamMetricsUrl = GetMetricsForActiceStreamById.replace(
					'<streamId>',
					LIVE_STREAM_ID
				);

				const response = await axios.get(streamMetricsUrl, {
					headers: GetHeaders(WOWZA_JWT_KEY),
				});

				return response.data;
			} catch (error) {
				throw error;
			}
		};
	}
}

module.exports = WowzaHelper;
