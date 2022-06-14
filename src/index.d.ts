declare interface StreamOptions {
	name?: string;
	aspect_ratio_height?: number;
	aspect_ratio_width?: number;
	broadcast_location?: string;
	recording?: boolean;
}
declare class WowzaHelper {
	constructor(WOWZA_API_KEY: string, WOWZA_ACCESS_KEY: string);

	CreateLiveStream(streamOptions: StreamOptions): Promise<any>;

	UpdateLiveStream(updateOptions: StreamOptions): Promise<any>;

	GetAllLiveStream(): Promise<any>;

	GetLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	GetLiveStreamThumbnailById(LIVE_STREAM_ID: string): Promise<any>;

	StartLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	StopLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	GetLiveStreamStatusById(LIVE_STREAM_ID: string): Promise<any>;
}

export default WowzaHelper;
