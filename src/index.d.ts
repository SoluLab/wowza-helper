declare class WowzaHelper {
	constructor(WOWZA_API_KEY: string, WOWZA_ACCESS_KEY: string);

	CreateLiveStream(streamOptions: any): Promise<any>;

	UpdateLiveStream(updateOptions: any): Promise<any>;

	GetAllLiveStream(): Promise<any>;

	GetLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	GetLiveStreamThumbnailById(LIVE_STREAM_ID: string): Promise<any>;

	StartLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	StopLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	GetLiveStreamStatusById(LIVE_STREAM_ID: string): Promise<any>;
}

export default WowzaHelper;
