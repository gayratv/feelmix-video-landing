import React from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { videoCodec } from '@cloudinary/url-gen/actions/transcode';
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec';
import styl from './Showreels.module.scss';

// Import required actions and qualifiers.
// import { fill } from '@cloudinary/url-gen/actions/resize';
// import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
// import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
// import { Gravity } from '@cloudinary/url-gen/qualifiers';
// import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus';

const sources = [
  {
    type: 'mp4',
    codecs: ['avc1.4d002a'],
    transcode: videoCodec(auto()),
  },
  {
    type: 'webm',
    codecs: ['vp8', 'vorbis'],
    transcode: videoCodec(vp9()),
  },
];

export function Showreels() {
  // Create a Cloudinary instance and set your cloud name.

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'as001006',
    },
  });

  const myVideo = cld.video('Motion_0e50bf2cb98d1be66c40_AdobeExpress_hlcjvy');
  const myVideo2 = cld.video('2D_9ae52a81129c33a4e6fc_AdobeExpress_whzbig');

  return (
    <main className={styl.main}>
      <h2>Showreels</h2>
      <div className={styl.containerVideo}>
        <AdvancedVideo
          cldVid={myVideo}
          controls
          loop
          autoPlay
          sources={sources}
        />
        <AdvancedVideo
          cldVid={myVideo2}
          controls
          loop
          sources={sources}
          autoPlay
        />
      </div>
    </main>
  );
}
