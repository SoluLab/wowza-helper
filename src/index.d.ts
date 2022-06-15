export declare type BroadCastLocation =
	| 'asia_pacific_australia'
	| 'asia_pacific_india'
	| 'asia_pacific_japan'
	| 'asia_pacific_singapore'
	| 'asia_pacific_s_korea'
	| 'asia_pacific_taiwan'
	| 'eu_belgium'
	| 'eu_germany'
	| 'eu_ireland'
	| 'south_america_brazil'
	| 'us_central_iowa'
	| 'us_east_s_carolina'
	| 'us_east_virginia'
	| 'us_west_california'
	| 'us_west_oregon';

export declare type Encoder =
	| 'wowza_clearcaster'
	| 'wowza_gocoder'
	| 'wowza_streaming_engine'
	| 'media_ds'
	| 'axis'
	| 'epiphan'
	| 'file'
	| 'hauppauge'
	| 'jvc'
	| 'live_u'
	| 'matrox'
	| 'newtek_tricaster'
	| 'osprey'
	| 'sony'
	| 'telestream_wirecast'
	| 'teradek_cube'
	| 'vmix'
	| 'x_split'
	| 'ipcamera'
	| 'other_rtmp'
	| 'other_rtsp'
	| 'other_webrtc'
	| 'other_udp'
	| 'other_srt';
export declare interface StreamOptions {
	name: string;
	aspect_ratio_height: number;
	aspect_ratio_width: number;
	broadcast_location: BroadCastLocation;
	recording?: boolean;
	encoder?: Encoder;
}

export declare interface UpdateStream {
	name?: string;
	aspect_ratio_height?: number;
	aspect_ratio_width?: number;
	encoder?: Encoder;
}

declare class WowzaHelper {
	constructor(WOWZA_JWT_KEY: string);

	CreateLiveStream(streamOptions: StreamOptions): Promise<any>;

	UpdateLiveStream(
		LIVE_STREAM_ID: string,
		updateOptions: UpdateStream
	): Promise<any>;

	GetAllLiveStream(): Promise<any>;

	GetLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	StartLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	StopLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	DeleteLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;

	GetLiveStreamThumbnailById(LIVE_STREAM_ID: string): Promise<any>;

	GetLiveStreamStatusById(LIVE_STREAM_ID: string): Promise<any>;

	GetMetricsForActiveLiveStreamById(LIVE_STREAM_ID: string): Promise<any>;
}

export default WowzaHelper;
