# <center>Wowza Helper Library</center>
***

## Install
---

<strong>To use the package, just do the standard</strong>

    $ npm install --save wowza-helper

## Startup
---

* <strong>CommonJS</strong>

```js

var Wowza = require('wowza-helper');

var wowzaHelper = new Wowza('WOWZA_API_KEY', 'WOWZA_ACCESS_KEY');

```
* <strong>ESM</strong>

```js

import Wowza  from 'wowza-helper';

const wowzaHelper = new Wowza('WOWZA_API_KEY', 'WOWZA_ACCESS_KEY');

```

## Usage
---

* <strong>CreateLiveStream</strong>

```js
const streamOptions = {
	name: string,
	aspect_ratio_height: number, // Example 720
	aspect_ratio_width: number, // example 1280
	broadcast_location: string,
	recording?: boolean, // true by default
	encoder?: string, // "other_webrtc" by default
};

// Enums for broadcast_location -> "asia_pacific_australia" "asia_pacific_india" "asia_pacific_japan" "asia_pacific_singapore" "asia_pacific_s_korea" "asia_pacific_taiwan" "eu_belgium" "eu_germany" "eu_ireland" "south_america_brazil" "us_central_iowa" "us_east_s_carolina" "us_east_virginia" "us_west_california" "us_west_oregon"

// you can use any location as per your choice

// Enums for encoder -> "wowza_clearcaster" "wowza_gocoder" "wowza_streaming_engine" "media_ds" "axis" "epiphan" "file" "hauppauge" "jvc" "live_u" "matrox" "newtek_tricaster" "osprey" "sony" "telestream_wirecast" "teradek_cube" "vmix" "x_split" "ipcamera" "other_rtmp" "other_rtsp" "other_webrtc" "other_udp" "other_srt"

// you can use any encoding type if not default would be "other_webrtc

// It creates the live stream and returns the data
// it returns promise so resolve it

const streamData = await wowzaHelper.CreateLiveStream(streamOptions);

```

* <strong>UpdateLiveStream</strong>

```js

const updateOptions = {
	name?: string,
	aspect_ratio_height?: number, // Example 720
	aspect_ratio_width?: number, // example 1280
	encoder?: string, // Example "other_webrtc"
};

// At least one of the value is required for update
// It returns the updated stream data
// it returns promise so resolve it

const streamData = await wowzaHelper.UpdateLiveStream(updateOptions);

```

* <strong>GetAllLiveStream</strong>

```js
// It returns all the stream data
// it returns promise so resolve it

const streamData = await wowzaHelper.GetAllLiveStream();

```

* <strong>GetLiveStreamById</strong>

```js
// It returns the stream data for given streamId
// it returns promise so resolve it

const streamData = await wowzaHelper.GetLiveStreamById(streamId);

```

* <strong>StartLiveStreamById</strong>

```js
// It starts the live stream and returns the status
// it returns promise so resolve it

const streamData = await wowzaHelper.StartLiveStreamById(streamId);

```

* <strong>StopLiveStreamById</strong>

```js
// It stops the live stream and return the status
// it returns promise so resolve it

const streamData = await wowzaHelper.StopLiveStreamById(streamId);

```

* <strong>DeleteLiveStreamById</strong>

```js
// It deletes the live stream and return blank
// it returns promise so resolve it

const streamData = await wowzaHelper.DeleteLiveStreamById(streamId);

```

* <strong>GetLiveStreamThumbnailById</strong>

```js
// It returns the live stream thumbnail data for given streamId
// it returns promise so resolve it

const thumbnailData = await wowzaHelper.GetLiveStreamThumbnailById(streamId);

```



* <strong>GetLiveStreamStatusById</strong>

```js
// It returns the stream status data
// it returns promise so resolve it

const streamData = await wowzaHelper.GetLiveStreamStatusById(streamId);

```

* <strong>GetMetricsForActiveLiveStreamById</strong>

```js
// It returns the metrics of active live stream for given id
// it returns promise so resolve it

const streamData = await wowzaHelper.GetMetricsForActiveLiveStreamById(streamId);

```