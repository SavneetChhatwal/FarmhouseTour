(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A2D86427_B071_9154_41DF_3B7D3841802D], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_A2D8B427_B071_9154_41DF_6621A0A53433].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.component_B41A2225_ABB4_84F1_41E3_E46B421CF7F8",
  "this.Container_A2D8F427_B071_9154_41D6_3A83E3A6DD67",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadow": false,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": -35.82,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3549E37_C1DB_1E62_41E4_7459344704EE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -28.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0.41
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 145.1,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1590F40_C1DB_1E1F_41D4_52E2B7AFFA84",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D992855_9B81_3498_41CE_94A56CD4034F",
    "this.snapshot_8D98E855_9B81_3498_41E2_E105BB31BC83",
    "this.snapshot_8DEF3F5A_9B81_0C88_41C5_E9DD6F29820A"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Drawing room - 3",
 "hfovMin": "150%",
 "id": "panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8F11EF4E_9B81_0C88_41DA_FEF6D6F5B7CB",
  "this.overlay_B03AE04D_AB6F_84B1_41E0_45D8044482DF",
  "this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D2C4600B_C1DB_0221_41E0_B8D88CB13B33",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B4287365_A05D_678C_418C_5F463C8E2B10_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D994855_9B81_3498_41DC_2C2A3B20C09D",
    "this.snapshot_8D9B0855_9B81_3498_41DA_7A99599B6A81",
    "this.snapshot_8DEF9F5A_9B81_0C88_41AF_DAC54063C48E"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Dining Room",
 "hfovMin": "150%",
 "id": "panorama_8250838B_92F6_770B_41B9_A911C80FEF0F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_95B89C8B_9B83_0D88_41D3_82BB4D50E288",
  "this.overlay_B8EF0738_AAF7_8CDF_41E3_C5B76C94F6A6",
  "this.overlay_B9D46545_AAF5_8CB1_41AA_DE3583BF8B15",
  "this.overlay_BE6893E6_AAEC_8B73_41CD_DFBC04E85A0C",
  "this.overlay_BE5BE982_AAEC_87B3_419E_C470AEA5AAC1",
  "this.overlay_BE0A87A8_AAD4_8BFF_41B8_8B66D9332327",
  "this.overlay_BFDA4300_AAD3_84AF_41DF_7A2C531A6ED8",
  "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_tcap0",
  "this.overlay_B888814E_B50B_705F_41A8_185C96F2F35F",
  "this.overlay_BB2FAFBD_B508_903D_41E5_BC3E3531D2DC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -84.14,
  "class": "PanoramaCameraPosition",
  "pitch": -9.87
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82746645_92F2_117E_41BD_6D19460E229D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2_camera"
  }
 ],
 "id": "playList_D210ACDF_C1DB_0221_41DA_C9D767DE54B2",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -112.04,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "manualRotationSpeed": 1018,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D12D5F9E_C1DB_1E23_41E0_DC99938C6763",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970",
   "camera": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7",
   "camera": "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F",
   "camera": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4",
   "camera": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F",
   "camera": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10",
   "camera": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2",
   "camera": "this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -58.78,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3ED3D7B_C1DB_02E1_41DB_79EC5342E3F0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_camera"
  }
 ],
 "id": "playList_D2169CEF_C1DB_03E2_41E3_FFEC18B7ECEE",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1873EE2_C1DB_1FE3_41DE_ECB7BB894EEE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 156.12,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1398F6F_C1DB_1EE1_41B6_40AD69776876",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10 photo",
 "hfovMin": "150%",
 "id": "panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B57673D4_A032_A68C_41E3_A9462B97A737",
  "this.overlay_B5EEA3E7_A037_A68C_41D7_1BE55F528AC0",
  "this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5F05932_A055_A385_41B4_2D51AF2370DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -41.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1904E94_C1DB_1E27_41B0_6443E47B37F5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -63.37,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D180BED3_C1DB_1E21_41D4_6CC9AE38A551",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 143.52,
  "class": "PanoramaCameraPosition",
  "pitch": -24.47
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D99A855_9B81_3498_41E0_99E1B916C6DB",
    "this.snapshot_8D9B7855_9B81_3498_41D3_20C074936EC3",
    "this.snapshot_8DEFCF5A_9B81_0C88_41E0_E1C5F9981083"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Main Entrance",
 "hfovMin": "150%",
 "id": "panorama_82615CD8_92F6_1116_41C4_A092769E9AE7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BA39D13D_AAF3_84D1_41D6_A4ADD30FD36C",
  "this.overlay_B8521E05_AAF3_BCB1_41E4_AEB3BCC5212D",
  "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_t.jpg",
 "hfovMax": 130
},
{
 "duration": 500,
 "id": "FadeOutEffect_B6A0B25D_B9AD_276E_41E1_A2C03BA35A9F",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "initialPosition": {
  "yaw": 170.82,
  "class": "PanoramaCameraPosition",
  "pitch": -7.46
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 173.57,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3BD8DC9_C1DB_0221_41D7_3537B621AAE8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Bedroom",
 "hfovMin": "150%",
 "id": "panorama_B4287365_A05D_678C_418C_5F463C8E2B10",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B468D5EE_A033_E29C_41DB_8E4D12091B94",
  "this.overlay_BC6E0C7C_AAAF_9D57_41C8_2984C9909222",
  "this.overlay_BC6E1C7C_AAAF_9D57_41B5_5A240CCE1F13",
  "this.overlay_BD443A62_AAB5_8573_41D6_7FACFB505C4C",
  "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10_tcap0",
  "this.overlay_B1841C69_BFCB_02E1_4178_A60FDA0C7EEC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 154.29,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D116AFAE_C1DB_1E62_41E7_9412BE149137",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_A2D86427_B071_9154_41DF_3B7D3841802D",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_A2D85427_B071_9154_41C6_9E40E6627F59",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_B5F05932_A055_A385_41B4_2D51AF2370DD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_camera"
  }
 ],
 "id": "playList_D2142CEF_C1DB_03E2_41D0_99CD4CE22525",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 141.43,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1771F02_C1DB_1E23_41E4_B442E2A1F947",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 144.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0.54
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -99.79,
  "class": "PanoramaCameraPosition",
  "pitch": -7.26
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82513111_92F6_1316_41C6_B82EC08D51F2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -74.51,
  "class": "PanoramaCameraPosition",
  "pitch": -9.72
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.92,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3E14D6C_C1DB_02E6_4199_20D5A2704376",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D9F0845_9B81_34F8_41CF_A5F7D9AA2C75",
    "this.snapshot_8D9EB855_9B81_3498_41DD_9462AB3C7CFE",
    "this.snapshot_8DF2DF5A_9B81_0C88_41BE_A9C564475F45"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Back of the farm - 2",
 "hfovMin": "150%",
 "id": "panorama_82746645_92F2_117E_41BD_6D19460E229D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B3922BD1_AB54_9BAE_41DB_E04C63185B8A",
  "this.overlay_B2633DCA_AB54_7FB3_41E1_F172EFEBFCB2",
  "this.panorama_82746645_92F2_117E_41BD_6D19460E229D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/zoomImage_B7590D97_B9AD_FDFA_41D2_9784E9C608AE_0_0.png",
   "width": 1004,
   "class": "ImageResourceLevel",
   "height": 591
  },
  {
   "url": "media/zoomImage_B7590D97_B9AD_FDFA_41D2_9784E9C608AE_0_1.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 301
  }
 ],
 "id": "ImageResource_B6A3725D_B9AD_276E_41C0_6EBA661E1DC3",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 155.2,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D10EDFCD_C1DB_1E21_41DB_2ADD76A42321",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 141.43,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3CECDBA_C1DB_0262_41DB_AD82886EE83A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_camera"
  }
 ],
 "id": "playList_D2107CDF_C1DB_0221_41DF_E0225124F487",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 145.1,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D18F0EF2_C1DB_1FE3_41DC_95232A146822",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 106.53,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3746E08_C1DB_1E2F_41D6_D96338B3DEEF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D9FC855_9B81_3498_41D4_9F8037D7A8AC",
    "this.snapshot_8D99A855_9B81_3498_41B2_2D9489FF751D",
    "this.snapshot_8DEDEF5A_9B81_0C88_41D2_E11B3B7CC84F"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Master Bedroom",
 "hfovMin": "150%",
 "id": "panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B33E3988_A077_6284_41D4_3A5E09F81968",
  "this.overlay_BF13206B_AAD4_8571_41E2_8B8A601D9D4C",
  "this.overlay_BCF688B4_AAD4_85D7_41E4_D7304E33BC23",
  "this.overlay_BD3DD3B2_AABC_8BD3_41D9_C0D965128409",
  "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_tcap0",
  "this.overlay_B2306A76_BFC9_06E3_41DA_66910FFF1318"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970",
   "camera": "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7",
   "camera": "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F",
   "camera": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4",
   "camera": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F",
   "camera": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10",
   "camera": "this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 156.12,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D2FCCFDC_C1DB_1E27_41E1_FFD7F11F6DF0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D9F5845_9B81_34F8_41CF_53111FFA1FB6",
    "this.snapshot_8D9ED855_9B81_3498_41A0_D88D2244C563",
    "this.snapshot_8DED6F5A_9B81_0C88_41C8_FF0EE2C74FA1"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Master bedroom - 4",
 "hfovMin": "150%",
 "id": "panorama_8266F5C4_92F2_737D_4187_CD0CF4198672",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B39DBB41_A07F_6784_41D5_1257F57B994C",
  "this.panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 155.2,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D14C9F5F_C1DB_1E21_41A4_9010302A36F8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 146.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3F9CD4C_C1DB_0227_41C3_00A31D9AEB9D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 166.22,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3D60D8B_C1DB_0221_41B1_83BFE3045873",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 75.39,
  "class": "PanoramaCameraPosition",
  "pitch": 1.1
 },
 "manualRotationSpeed": 1018,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 75.39,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_839B88FF_92F6_310B_41C3_4CB12D567970_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 1.1,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_8266F5C4_92F2_737D_4187_CD0CF4198672",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_camera"
  }
 ],
 "id": "playList_D218DCEF_C1DB_03E2_41C5_5B502F8E09C7",
 "class": "PlayList"
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D9F4845_9B81_34F8_41DC_908EC389D49E",
    "this.snapshot_8D9EE855_9B81_3498_41E2_7E7F924955FD",
    "this.snapshot_8DED2F5A_9B81_0C88_41C9_C71146F75BB9"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "River Side",
 "hfovMin": "150%",
 "id": "panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B2C3222D_AAAC_84F1_41C8_FA8499720213",
  "this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82746645_92F2_117E_41BD_6D19460E229D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 133.82,
  "class": "PanoramaCameraPosition",
  "pitch": -2.03
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D9F8845_9B81_3488_41E2_A22D4E9DA4C8",
    "this.snapshot_8D990855_9B81_3498_41D5_B2EEF168A4E8",
    "this.snapshot_8DED4F5A_9B81_0C88_41E2_E4D72316CA7D"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Master bedroom - 3",
 "hfovMin": "150%",
 "id": "panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B4DCB409_A073_A184_41D1_A4C4C72FEAE4",
  "this.overlay_B44AAAFD_A07E_A67C_41C7_3B42626F8FB8",
  "this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8266F5C4_92F2_737D_4187_CD0CF4198672"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -73.47,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1201F7F_C1DB_1EE1_41DA_29673FE80272",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_82746645_92F2_117E_41BD_6D19460E229D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82746645_92F2_117E_41BD_6D19460E229D_camera"
  }
 ],
 "id": "playList_D2153CEF_C1DB_03E2_41D4_0EDD40B538BE",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D2D74FFC_C1DB_1DE7_41D2_6E4D7AA32229",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 46.84,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D17C8F11_C1DB_1E21_41E6_9D58E38B64A2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D99F855_9B81_3498_41C1_14EE029EB3C6",
    "this.snapshot_8D9B5855_9B81_3498_41D1_C27068FDE2C3",
    "this.snapshot_8DEE2F5A_9B81_0C88_41E0_ADB8F6A2D9D0"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Front of Farmhouse",
 "hfovMin": "150%",
 "id": "panorama_839B88FF_92F6_310B_41C3_4CB12D567970",
 "class": "Panorama",
 "overlays": [
  "this.overlay_811EFA46_92D6_117D_4181_7736E46AC13D",
  "this.overlay_A421301F_AAD4_84D1_41DA_6CC863FBCA10",
  "this.overlay_A51EFAF0_AADC_856F_41D3_EE908CA09E62",
  "this.overlay_BE5BECCA_AAEC_BDB3_41DB_8BA0E9CE3F69",
  "this.overlay_BA222149_AAF3_84B1_41DE_29A4C03DE149",
  "this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0",
  "this.popup_AA44D251_BA14_F9D7_41E3_F712D7803494"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D9EF855_9B81_3498_41BD_BDD68AE4A268",
    "this.snapshot_8D98B855_9B81_3498_419B_12AA26F917E6",
    "this.snapshot_8DECFF5A_9B81_0C88_41C9_FAB60B58A0C5"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Drawing room - 4",
 "hfovMin": "150%",
 "id": "panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_886C9259_9B81_F488_41E2_4F2D5C5D24AD",
  "this.panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_A022890B_B051_9353_41D9_A71AFCF52B63",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D21B2CFE_C1DB_03E3_41C9_6FED288D56E9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D21B2CFE_C1DB_03E3_41C9_6FED288D56E9, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_D21B2CFE_C1DB_03E3_41C9_6FED288D56E9",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 142.35,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D19B3EB4_C1DB_1E66_41DD_61ACD619B77F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_camera"
  }
 ],
 "id": "playList_D212DCEF_C1DB_03E2_41E2_AC75E7C89B51",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 145.1,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3C5DD9A_C1DB_0223_41C0_1CCE340E3836",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "12 photo",
 "hfovMin": "150%",
 "id": "panorama_B5F05932_A055_A385_41B4_2D51AF2370DD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B5D92FF7_A035_DE8C_41AA_B3EED9B717F5",
  "this.panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D16C0F31_C1DB_1E7E_41D3_2970BD5B834E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -58.78,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D2A2402B_C1DB_0262_41DB_E6E5EAB7E15F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8DEF7F5A_9B81_0C88_41C3_7443A6357998"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Drawing room - 2",
 "hfovMin": "150%",
 "id": "panorama_82513111_92F6_1316_41C6_B82EC08D51F2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_8F24DBD0_9B81_0B97_41E1_CEB8C4A4328A",
  "this.overlay_B730117B_AB75_8751_41BB_185CAE84FA05",
  "this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 31.22,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D342BE46_C1DB_1E23_41B5_D1950DF7DF9E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 31.6,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_AA44D251_BA14_F9D7_41E3_F712D7803494",
 "image": {
  "levels": [
   {
    "url": "media/popup_AA44D251_BA14_F9D7_41E3_F712D7803494_0_0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 280
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.62,
 "hideEasing": "cubic_out",
 "hfov": 2.94
},
{
 "initialPosition": {
  "yaw": 141.43,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1407F50_C1DB_1E3F_41AE_B7D74A587543",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 143.27,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1973EA4_C1DB_1E67_41E7_1FE724536B4F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 154.29,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1023FBD_C1DB_1E61_41E5_47672A462F9E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "snapshots": [
    "this.snapshot_8D991855_9B81_3498_41E0_6D05D909FF3A",
    "this.snapshot_8D98D855_9B81_3498_41BC_C62B40070D22",
    "this.snapshot_8DEF5F5A_9B81_0C88_41E1_6D0288FC195B"
   ],
   "top": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Drawing Room",
 "hfovMin": "150%",
 "id": "panorama_8269796F_92F6_330A_41C9_13F4125FF8C4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9451BA2C_9B81_1488_41A0_4373D38487A3",
  "this.overlay_BC473BB3_AAB3_9BD1_41D4_EC36C04BFDA6",
  "this.overlay_B76E0613_AB74_8CD1_41DF_0894C89F14B6",
  "this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 53.27,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D1657F21_C1DB_1E61_41D0_B3EC86B0B779",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_A022890B_B051_9353_41D9_A71AFCF52B63_t.jpg",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1920,
 "label": "VID_20200913_155812",
 "loop": false,
 "id": "video_A022890B_B051_9353_41D9_A71AFCF52B63",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_A022890B_B051_9353_41D9_A71AFCF52B63.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 108.37,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D364DE27_C1DB_1E61_41C3_3E40BF149F7B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 108.03,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 71.63,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "manualRotationSpeed": 1018,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3999DE9_C1DB_1DEE_41A8_2CE6EAE9FACB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_camera"
  }
 ],
 "id": "playList_D2161CEF_C1DB_03E2_41D4_98F5C81C3BDE",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -102.86,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3862DF8_C1DB_1DEF_41E3_E4BDBE85B5B4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_B6A3525D_B9AD_276E_41C7_C421AB2F4AC7",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "yaw": -57.86,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D2B5D01B_C1DB_0221_41CB_2CF00C5B09DA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 67.96,
  "class": "PanoramaCameraPosition",
  "pitch": 10.1
 },
 "manualRotationSpeed": 1018,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D3AB9DD9_C1DB_0221_41E5_98FBF542F57F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 156.12,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D2EB6FEC_C1DB_1DE7_41C6_C3F529284B79",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "paddingLeft": 0,
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "shadow": false,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "component_B41A2225_ABB4_84F1_41E3_E46B421CF7F8",
 "left": 0,
 "horizontalAlign": "center",
 "children": [
  "this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 135,
 "minWidth": 20,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container5167"
 }
},
{
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_A2D8F427_B071_9154_41D6_3A83E3A6DD67",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "width": 111.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_A2D80427_B071_9154_41E1_05939A36B815",
  "this.Container_A2D84427_B071_9154_41CC_C4B8482F98CA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0.31%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 438,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent5067"
 },
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage5068"
 },
 "visible": false
},
{
 "fontFamily": "Arial",
 "paddingLeft": 5,
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "shadow": false,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton5069"
 },
 "textDecoration": "none",
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D8B427_B071_9154_41DF_6621A0A53433",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 46,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Full screen",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A2D8B427_B071_9154_41DF_6621A0A53433_pressed.png",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D8B427_B071_9154_41DF_6621A0A53433.png",
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D8B427_B071_9154_41DF_6621A0A53433_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D992855_9B81_3498_41CE_94A56CD4034F",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D98E855_9B81_3498_41E2_E105BB31BC83",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEF3F5A_9B81_0C88_41C5_E9DD6F29820A",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 101.87,
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C, this.camera_D2A2402B_C1DB_0262_41DB_E6E5EAB7E15F); this.setMediaBehaviour(this.playList_D2161CEF_C1DB_03E2_41D4_98F5C81C3BDE, 0, this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1A4D4E2_AB6D_8D73_41E2_B6B7D8F8F603",
   "pitch": -25.5,
   "yaw": 101.87,
   "hfov": 5.62,
   "distance": 50
  }
 ],
 "id": "overlay_8F11EF4E_9B81_0C88_41DA_FEF6D6F5B7CB",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -20.61,
   "hfov": 5.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2, this.camera_D2B5D01B_C1DB_0221_41CB_2CF00C5B09DA); this.setMediaBehaviour(this.playList_D210ACDF_C1DB_0221_41DA_C9D767DE54B2, 0, this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1A354E2_AB6D_8D73_41D2_8783486E767A",
   "pitch": -20.53,
   "yaw": -20.61,
   "hfov": 5.83,
   "distance": 50
  }
 ],
 "id": "overlay_B03AE04D_AB6F_84B1_41E0_45D8044482DF",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D994855_9B81_3498_41DC_2C2A3B20C09D",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D9B0855_9B81_3498_41DA_7A99599B6A81",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEF9F5A_9B81_0C88_41AF_DAC54063C48E",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.41,
   "hfov": 11.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.95
  }
 ],
 "areas": [
  {
   "click": "this.openLink('https://www.whirlpoolindia.com/refrigerators/bottom-mount.html?gclid=CjwKCAjwkoz7BRBPEiwAeKw3q0tmGRO0cDUlwkI7TFmMf9jucdTh-pO-S-qmONBbLjsdpNQvv2V8-hoCmXEQAvD_BwE#', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8B61A85E_9B81_3488_417C_2C3C50FEF226",
   "pitch": -15.95,
   "yaw": 0.41,
   "hfov": 11.8,
   "distance": 100
  }
 ],
 "id": "overlay_95B89C8B_9B83_0D88_41D3_82BB4D50E288",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 42.4,
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.95
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10, this.camera_D2D74FFC_C1DB_1DE7_41D2_6E4D7AA32229); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_1_0.png",
      "width": 142,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "yaw": 42.4,
   "hfov": 9.56,
   "distance": 50
  }
 ],
 "id": "overlay_B8EF0738_AAF7_8CDF_41E3_C5B76C94F6A6",
 "data": {
  "label": "Bedroom"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 41.45,
   "hfov": 11.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10, this.camera_D2C4600B_C1DB_0221_41E0_B8D88CB13B33); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 41.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_2_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "hfov": 11.75
  }
 ],
 "id": "overlay_B9D46545_AAF5_8CB1_41AA_DE3583BF8B15",
 "data": {
  "label": "Dining"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.29,
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F, this.camera_D10EDFCD_C1DB_1E21_41DB_2ADD76A42321); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 79.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_3_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25,
   "hfov": 11.71
  }
 ],
 "id": "overlay_BE6893E6_AAEC_8B73_41CD_DFBC04E85A0C",
 "data": {
  "label": "Master Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_4_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.68,
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F, this.camera_D2FCCFDC_C1DB_1E27_41E1_FFD7F11F6DF0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_4_0.png",
      "width": 214,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.34,
   "yaw": 79.68,
   "hfov": 14.34,
   "distance": 50
  }
 ],
 "id": "overlay_BE5BE982_AAEC_87B3_419E_C470AEA5AAC1",
 "data": {
  "label": "Master Bedroom"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.23,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4, this.camera_D116AFAE_C1DB_1E62_41E7_9412BE149137); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 172.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_6_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "hfov": 11.72
  }
 ],
 "id": "overlay_BE0A87A8_AAD4_8BFF_41B8_8B66D9332327",
 "data": {
  "label": "Drawing Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_7_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.72,
   "hfov": 12.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.74
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4, this.camera_D1023FBD_C1DB_1E61_41E5_47672A462F9E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_7_0.png",
      "width": 193,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.74,
   "yaw": 172.72,
   "hfov": 12.94,
   "distance": 50
  }
 ],
 "id": "overlay_BFDA4300_AAD3_84AF_41DF_7A2C531A6ED8",
 "data": {
  "label": "Drawing Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_9_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -91.49,
   "hfov": 16.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F, this.camera_D2EB6FEC_C1DB_1DE7_41C6_C3F529284B79); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_9_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.77,
   "yaw": -91.49,
   "hfov": 16.39,
   "distance": 50
  }
 ],
 "id": "overlay_B888814E_B50B_705F_41A8_185C96F2F35F",
 "data": {
  "label": "Front of Farmhouse"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -92.56,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970, this.camera_D12D5F9E_C1DB_1E23_41E0_DC99938C6763); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -92.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_10_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78,
   "hfov": 11.64
  }
 ],
 "id": "overlay_BB2FAFBD_B508_903D_41E5_BC3E3531D2DC",
 "data": {
  "label": "Front of Farmhouse"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.27,
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10, this.camera_D3D60D8B_C1DB_0221_41B1_83BFE3045873); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B582F105_BA34_5B3F_41E0_77E80F707BFE",
   "pitch": -29.12,
   "yaw": -121.27,
   "hfov": 5.44,
   "distance": 50
  }
 ],
 "id": "overlay_B57673D4_A032_A68C_41E3_A9462B97A737",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 109.07,
   "hfov": 5.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5F05932_A055_A385_41B4_2D51AF2370DD, this.camera_D3ED3D7B_C1DB_02E1_41DB_79EC5342E3F0); this.setMediaBehaviour(this.playList_D2142CEF_C1DB_03E2_41D0_99CD4CE22525, 0, this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BF76C92F_B195_C8E4_41BF_0ECE6D358FDB",
   "pitch": -35.26,
   "yaw": 109.07,
   "hfov": 5.09,
   "distance": 50
  }
 ],
 "id": "overlay_B5EEA3E7_A037_A68C_41D7_1BE55F528AC0",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D99A855_9B81_3498_41E0_99E1B916C6DB",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D9B7855_9B81_3498_41D3_20C074936EC3",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEFCF5A_9B81_0C88_41E0_E1C5F9981083",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 106.66,
   "hfov": 8.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D1973EA4_C1DB_1E67_41E7_1FE724536B4F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0_HS_2_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.35,
   "yaw": 106.66,
   "hfov": 8.24,
   "distance": 50
  }
 ],
 "id": "overlay_BA39D13D_AAF3_84D1_41D6_A4ADD30FD36C",
 "data": {
  "label": "Dining"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 105.44,
   "hfov": 11.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D19B3EB4_C1DB_1E66_41DD_61ACD619B77F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 105.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_0_HS_3_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.37,
   "hfov": 11.63
  }
 ],
 "id": "overlay_B8521E05_AAF3_BCB1_41E4_AEB3BCC5212D",
 "data": {
  "label": "Dining"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82615CD8_92F6_1116_41C4_A092769E9AE7_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.2,
   "hfov": 5.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF, this.camera_D16C0F31_C1DB_1E7E_41D3_2970BD5B834E); this.setMediaBehaviour(this.playList_D212DCEF_C1DB_03E2_41E2_AC75E7C89B51, 0, this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B4BE7A22_A03D_E184_41C0_C6FB63C0245A",
   "pitch": -25.85,
   "yaw": -2.2,
   "hfov": 5.6,
   "distance": 50
  }
 ],
 "id": "overlay_B468D5EE_A033_E29C_41DB_8E4D12091B94",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 159.34,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.51
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F, this.camera_D14C9F5F_C1DB_1E21_41A4_9010302A36F8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 159.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_1_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.51,
   "hfov": 11.7
  }
 ],
 "id": "overlay_BC6E0C7C_AAAF_9D57_41C8_2984C9909222",
 "data": {
  "label": "Master Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_2_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 160.03,
   "hfov": 14.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.39
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F, this.camera_D1398F6F_C1DB_1EE1_41B6_40AD69776876); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_2_0.png",
      "width": 214,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39,
   "yaw": 160.03,
   "hfov": 14.31,
   "distance": 50
  }
 ],
 "id": "overlay_BC6E1C7C_AAAF_9D57_41B5_5A240CCE1F13",
 "data": {
  "label": "Master Bedroom"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -151.61,
   "hfov": 11.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D1590F40_C1DB_1E1F_41D4_52E2B7AFFA84); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_4_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.87,
   "yaw": -151.61,
   "hfov": 11.92,
   "distance": 50
  }
 ],
 "id": "overlay_BD443A62_AAB5_8573_41D6_7FACFB505C4C",
 "data": {
  "label": "Dining Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_B4287365_A05D_678C_418C_5F463C8E2B10_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -152.57,
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.94
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D1407F50_C1DB_1E3F_41AE_B7D74A587543); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -152.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_5_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.94,
   "hfov": 11.58
  }
 ],
 "id": "overlay_B1841C69_BFCB_02E1_4178_A60FDA0C7EEC",
 "data": {
  "label": "Drawing Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D86427_B071_9154_41DF_3B7D3841802D",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 58,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Turn of/on Gyroscope",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A2D86427_B071_9154_41DF_3B7D3841802D_pressed.png",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D86427_B071_9154_41DF_3B7D3841802D.png",
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "IconButton GYRO"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D86427_B071_9154_41DF_3B7D3841802D_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D85427_B071_9154_41C6_9E40E6627F59",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A2D85427_B071_9154_41C6_9E40E6627F59_rollover.png",
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A2D85427_B071_9154_41C6_9E40E6627F59.png",
 "transparencyActive": true,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D9F0845_9B81_34F8_41CF_A5F7D9AA2C75",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D9EB855_9B81_3498_41DD_9462AB3C7CFE",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DF2DF5A_9B81_0C88_41BE_A9C564475F45",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0_HS_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.8,
   "hfov": 16.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970, this.camera_D3AB9DD9_C1DB_0221_41E5_98FBF542F57F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0_HS_0_0.png",
      "width": 251,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "yaw": 136.8,
   "hfov": 16.83,
   "distance": 50
  }
 ],
 "id": "overlay_B3922BD1_AB54_9BAE_41DB_E04C63185B8A",
 "data": {
  "label": "Front of Farmhouse"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.07,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.38
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_839B88FF_92F6_310B_41C3_4CB12D567970, this.camera_D3999DE9_C1DB_1DEE_41A8_2CE6EAE9FACB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 136.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82746645_92F2_117E_41BD_6D19460E229D_0_HS_1_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.38,
   "hfov": 12.29
  }
 ],
 "id": "overlay_B2633DCA_AB54_7FB3_41E1_F172EFEBFCB2",
 "data": {
  "label": "Front of Farmhouse"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82746645_92F2_117E_41BD_6D19460E229D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D9FC855_9B81_3498_41D4_9F8037D7A8AC",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D99A855_9B81_3498_41B2_2D9489FF751D",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEDEF5A_9B81_0C88_41D2_E11B3B7CC84F",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 99.66,
   "hfov": 5.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5, this.camera_D1873EE2_C1DB_1FE3_41DE_ECB7BB894EEE); this.setMediaBehaviour(this.playList_D2107CDF_C1DB_0221_41DF_E0225124F487, 0, this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B345DDD3_A076_A28B_41E0_09F380ECF9C3",
   "pitch": -26.59,
   "yaw": 99.66,
   "hfov": 5.57,
   "distance": 50
  }
 ],
 "id": "overlay_B33E3988_A077_6284_41D4_3A5E09F81968",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.36,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10, this.camera_D17C8F11_C1DB_1E21_41E6_9D58E38B64A2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 1.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_2_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.72,
   "hfov": 11.72
  }
 ],
 "id": "overlay_BF13206B_AAD4_8571_41E2_8B8A601D9D4C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.06,
   "hfov": 9.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B4287365_A05D_678C_418C_5F463C8E2B10, this.camera_D1657F21_C1DB_1E61_41D0_B3EC86B0B779); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_3_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08,
   "yaw": 2.06,
   "hfov": 9.26,
   "distance": 50
  }
 ],
 "id": "overlay_BCF688B4_AAD4_85D7_41E4_D7304E33BC23",
 "data": {
  "label": "Bedroom"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -55.79,
   "hfov": 12.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D18F0EF2_C1DB_1FE3_41DC_95232A146822); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_5_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.59,
   "yaw": -55.79,
   "hfov": 12.06,
   "distance": 50
  }
 ],
 "id": "overlay_BD3DD3B2_AABC_8BD3_41D9_C0D965128409",
 "data": {
  "label": "Dining Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -56.96,
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D1771F02_C1DB_1E23_41E4_B442E2A1F947); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -56.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_6_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57,
   "hfov": 11.71
  }
 ],
 "id": "overlay_B2306A76_BFC9_06E3_41DA_66910FFF1318",
 "data": {
  "label": "Drawing Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D9F5845_9B81_34F8_41CF_53111FFA1FB6",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D9ED855_9B81_3498_41A0_D88D2244C563",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DED6F5A_9B81_0C88_41C8_FF0EE2C74FA1",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.3,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5, this.camera_D1201F7F_C1DB_1EE1_41DA_29673FE80272); this.setMediaBehaviour(this.playList_D2107CDF_C1DB_0221_41DF_E0225124F487, 0, this.panorama_8266F5C4_92F2_737D_4187_CD0CF4198672)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B7928A93_A07E_A684_41D6_ADFA26AAD91A",
   "pitch": -36.08,
   "yaw": -6.3,
   "hfov": 5.03,
   "distance": 100
  }
 ],
 "id": "overlay_B39DBB41_A07F_6784_41D5_1257F57B994C",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D9F4845_9B81_34F8_41DC_908EC389D49E",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D9EE855_9B81_3498_41E2_7E7F924955FD",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DED2F5A_9B81_0C88_41C9_C71146F75BB9",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.3,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82746645_92F2_117E_41BD_6D19460E229D, this.camera_D180BED3_C1DB_1E21_41D4_6CC9AE38A551); this.setMediaBehaviour(this.playList_D2153CEF_C1DB_03E2_41D4_0EDD40B538BE, 0, this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BEEDD112_B19D_78BD_41C3_B029C30CE917",
   "pitch": -29.45,
   "yaw": -87.3,
   "hfov": 5.42,
   "distance": 100
  }
 ],
 "id": "overlay_B2C3222D_AAAC_84F1_41C8_FA8499720213",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D9F8845_9B81_3488_41E2_A22D4E9DA4C8",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D990855_9B81_3498_41D5_B2EEF168A4E8",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DED4F5A_9B81_0C88_41E2_E4D72316CA7D",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.57,
   "hfov": 5.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.98
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F, this.camera_D3E14D6C_C1DB_02E6_4199_20D5A2704376); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AB1B12C1_BA6C_5936_41D4_3A748F5D62BC",
   "pitch": -31.98,
   "yaw": -0.57,
   "hfov": 5.28,
   "distance": 50
  }
 ],
 "id": "overlay_B4DCB409_A073_A184_41D1_A4C4C72FEAE4",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.07,
   "hfov": 4.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8266F5C4_92F2_737D_4187_CD0CF4198672, this.camera_D3F9CD4C_C1DB_0227_41C3_00A31D9AEB9D); this.setMediaBehaviour(this.playList_D218DCEF_C1DB_03E2_41C5_5B502F8E09C7, 0, this.panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B791DA93_A07E_A684_41DC_0C8F29C60308",
   "pitch": -42.62,
   "yaw": -176.07,
   "hfov": 4.58,
   "distance": 100
  }
 ],
 "id": "overlay_B44AAAFD_A07E_A67C_41C7_3B42626F8FB8",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D99F855_9B81_3498_41C1_14EE029EB3C6",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D9B5855_9B81_3498_41D1_C27068FDE2C3",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEE2F5A_9B81_0C88_41E0_ADB8F6A2D9D0",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.6,
   "hfov": 2.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.62
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_AA44D251_BA14_F9D7_41E3_F712D7803494, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingLeft':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_819624FF_92B2_110B_41DD_10D9E06DCF1C",
   "pitch": 1.62,
   "yaw": 31.6,
   "hfov": 2.94,
   "distance": 100
  }
 ],
 "id": "overlay_811EFA46_92D6_117D_4181_7736E46AC13D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 73.79,
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7, this.camera_D3746E08_C1DB_1E2F_41D6_D96338B3DEEF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 73.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_3_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.76,
   "hfov": 11.58
  }
 ],
 "id": "overlay_A421301F_AAD4_84D1_41DA_6CC863FBCA10",
 "data": {
  "label": "Entrance"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 74.2,
   "hfov": 8.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82615CD8_92F6_1116_41C4_A092769E9AE7, this.camera_D364DE27_C1DB_1E61_41C3_3E40BF149F7B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_5_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.69,
   "yaw": 74.2,
   "hfov": 8.27,
   "distance": 50
  }
 ],
 "id": "overlay_A51EFAF0_AADC_856F_41D3_EE908CA09E62",
 "data": {
  "label": "Entrance"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -119.39,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.57
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -119.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_7_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.57,
   "hfov": 12.29
  }
 ],
 "id": "overlay_BE5BECCA_AAEC_BDB3_41DB_8BA0E9CE3F69",
 "data": {
  "label": "River side"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -118.66,
   "hfov": 10.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.6
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2, this.camera_D3862DF8_C1DB_1DEF_41E3_E4BDBE85B5B4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_8_0.png",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.6,
   "yaw": -118.66,
   "hfov": 10.38,
   "distance": 50
  }
 ],
 "id": "overlay_BA222149_AAF3_84B1_41DE_29A4C03DE149",
 "data": {
  "label": "River Side"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D9EF855_9B81_3498_41BD_BDD68AE4A268",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D98B855_9B81_3498_419B_12AA26F917E6",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DECFF5A_9B81_0C88_41C9_FAB60B58A0C5",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -77.48,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE, this.camera_D3549E37_C1DB_1E62_41E4_7459344704EE); this.setMediaBehaviour(this.playList_D2169CEF_C1DB_03E2_41E3_FFEC18B7ECEE, 0, this.panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B442F5FA_AB6C_8F53_41A5_5284D6EEADE1",
   "pitch": -29.53,
   "yaw": -77.48,
   "hfov": 5.42,
   "distance": 100
  }
 ],
 "id": "overlay_886C9259_9B81_F488_41E2_4F2D5C5D24AD",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.25,
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF, this.camera_D3BD8DC9_C1DB_0221_41D7_3537B621AAE8); this.setMediaBehaviour(this.playList_D212DCEF_C1DB_03E2_41E2_AC75E7C89B51, 0, this.panorama_B5F05932_A055_A385_41B4_2D51AF2370DD)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AA8DE765_BA35_A7FE_41D5_88D45C22B8DC",
   "pitch": -31.17,
   "yaw": -31.25,
   "hfov": 5.33,
   "distance": 50
  }
 ],
 "id": "overlay_B5D92FF7_A035_DE8C_41AA_B3EED9B717F5",
 "data": {
  "label": "Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEF7F5A_9B81_0C88_41C3_7443A6357998",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -95.11,
   "hfov": 5.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4, this.camera_D342BE46_C1DB_1E23_41B5_D1950DF7DF9E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8384ED43_9B87_0CF9_41E2_CD56EC020DC7",
   "pitch": -23.17,
   "yaw": -95.11,
   "hfov": 5.73,
   "distance": 50
  }
 ],
 "id": "overlay_8F24DBD0_9B81_0B97_41E1_CEB8C4A4328A",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -178.78,
   "hfov": 6.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE, this.camera_D1904E94_C1DB_1E27_41B0_6443E47B37F5); this.setMediaBehaviour(this.playList_D2169CEF_C1DB_03E2_41E3_FFEC18B7ECEE, 0, this.panorama_82513111_92F6_1316_41C6_B82EC08D51F2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BF7E8487_B193_79A4_41D3_2004BC6C08A3",
   "pitch": -13.89,
   "yaw": -178.78,
   "hfov": 6.05,
   "distance": 100
  }
 ],
 "id": "overlay_B730117B_AB75_8751_41BB_185CAE84FA05",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_82513111_92F6_1316_41C6_B82EC08D51F2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "position": {
  "hfov": 130,
  "yaw": -75.15,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "id": "snapshot_8D991855_9B81_3498_41E0_6D05D909FF3A",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -52.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "snapshot_8D98D855_9B81_3498_41BC_C62B40070D22",
 "class": "PanoramaSnapshot"
},
{
 "position": {
  "hfov": 130,
  "yaw": -78.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "id": "snapshot_8DEF5F5A_9B81_0C88_41E1_6D0288FC195B",
 "class": "PanoramaSnapshot"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.01,
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.01
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_D210ACDF_C1DB_0221_41DA_C9D767DE54B2, 0, this.panorama_8269796F_92F6_330A_41C9_13F4125FF8C4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8ECAB1C5_9B81_17F9_41CA_51B069447E6A",
   "pitch": -23.01,
   "yaw": 165.01,
   "hfov": 5.75,
   "distance": 50
  }
 ],
 "id": "overlay_9451BA2C_9B81_1488_41A0_4373D38487A3",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 11.74,
   "hfov": 12.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D3C5DD9A_C1DB_0223_41C0_1CCE340E3836); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0_HS_2_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.22,
   "yaw": 11.74,
   "hfov": 12.1,
   "distance": 50
  }
 ],
 "id": "overlay_BC473BB3_AAB3_9BD1_41D4_EC36C04BFDA6",
 "data": {
  "label": "Dining Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 10.96,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8250838B_92F6_770B_41B9_A911C80FEF0F, this.camera_D3CECDBA_C1DB_0262_41DB_AD82886EE83A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 10.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0_HS_3_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.3,
   "hfov": 11.72
  }
 ],
 "id": "overlay_B76E0613_AB74_8CD1_41DF_0894C89F14B6",
 "data": {
  "label": "Dining Room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": true,
 "hfov": 67.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_tcap0.png",
    "width": 2160,
    "class": "ImageResourceLevel",
    "height": 2160
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "paddingLeft": 20,
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6",
 "backgroundOpacity": 0.19,
 "horizontalAlign": "center",
 "width": "99.909%",
 "itemBorderRadius": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemThumbnailShadowVerticalLength": 3,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemThumbnailShadowHorizontalLength": 3,
 "paddingRight": 20,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_9B35D1EC_95A4_02AC_41C3_8922CDE071E6_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "height": 134,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "rollOverItemLabelFontWeight": "normal",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 9,
 "shadow": false,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 10,
 "paddingTop": 10,
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailBorderRadius": 50,
 "itemLabelFontFamily": "Arial"
},
{
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_A2D80427_B071_9154_41E1_05939A36B815",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "width": 69,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_A2D83427_B071_9154_41D0_7F69FBED00A3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0.19%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 56,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 }
},
{
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_A2D84427_B071_9154_41CC_C4B8482F98CA",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "children": [
  "this.IconButton_A2D85427_B071_9154_41C6_9E40E6627F59",
  "this.IconButton_A2D88427_B071_9154_41E3_7F8E7CF34BC2",
  "this.IconButton_A2D86427_B071_9154_41DF_3B7D3841802D",
  "this.IconButton_A2D8B427_B071_9154_41DF_6621A0A53433",
  "this.IconButton_A2D89427_B071_9154_41B0_87EE2761CB4B",
  "this.IconButton_A2D8C427_B071_9154_41DC_D405D24B5434",
  "this.IconButton_A2D8E427_B071_9154_41A3_E844CA43445C"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "56.731%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.845%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 14,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 }
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_B1A4D4E2_AB6D_8D73_41E2_B6B7D8F8F603",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82B2F7F4_92F6_1F1E_41C0_18DE593236EE_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_B1A354E2_AB6D_8D73_41D2_8783486E767A",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8250838B_92F6_770B_41B9_A911C80FEF0F_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_8B61A85E_9B81_3488_417C_2C3C50FEF226",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_B582F105_BA34_5B3F_41E0_77E80F707BFE",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B33F6CA4_A052_E28D_41C5_458D3963C8EF_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_BF76C92F_B195_C8E4_41BF_0ECE6D358FDB",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B4287365_A05D_678C_418C_5F463C8E2B10_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_B4BE7A22_A03D_E184_41C0_C6FB63C0245A",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82566F28_92F2_0F35_41CE_D0CD0F71D97F_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_B345DDD3_A076_A28B_41E0_09F380ECF9C3",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8266F5C4_92F2_737D_4187_CD0CF4198672_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_B7928A93_A07E_A684_41D6_ADFA26AAD91A",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8241BE0E_92F2_310A_41DA_C1F7961CA7F2_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_BEEDD112_B19D_78BD_41C3_B029C30CE917",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_AB1B12C1_BA6C_5936_41D4_3A748F5D62BC",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82F5ADAE_92F2_130A_41D1_6650F1C466E5_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_B791DA93_A07E_A684_41DC_0C8F29C60308",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_839B88FF_92F6_310B_41C3_4CB12D567970_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_819624FF_92B2_110B_41DD_10D9E06DCF1C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82536F1B_92F6_0F0B_41E2_253A6D81146C_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_B442F5FA_AB6C_8F53_41A5_5284D6EEADE1",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B5F05932_A055_A385_41B4_2D51AF2370DD_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_AA8DE765_BA35_A7FE_41D5_88D45C22B8DC",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8384ED43_9B87_0CF9_41E2_CD56EC020DC7",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_82513111_92F6_1316_41C6_B82EC08D51F2_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_BF7E8487_B193_79A4_41D3_2004BC6C08A3",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8269796F_92F6_330A_41C9_13F4125FF8C4_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8ECAB1C5_9B81_17F9_41CA_51B069447E6A",
 "rowCount": 3,
 "class": "AnimatedImageResource"
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A2D83427_B071_9154_41D0_7F69FBED00A3",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 53,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 49,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Menu",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A2D83427_B071_9154_41D0_7F69FBED00A3_pressed.png",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "if(!this.Container_A2D84427_B071_9154_41CC_C4B8482F98CA.get('visible')){ this.setComponentVisibility(this.Container_A2D84427_B071_9154_41CC_C4B8482F98CA, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_A2D84427_B071_9154_41CC_C4B8482F98CA, false, 0, null, null, false) }",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D83427_B071_9154_41D0_7F69FBED00A3.png",
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "image button menu"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D83427_B071_9154_41D0_7F69FBED00A3_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D88427_B071_9154_41E3_7F8E7CF34BC2",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 51,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 43,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Show/Hide",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A2D88427_B071_9154_41E3_7F8E7CF34BC2_pressed.png",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "if(!this.component_B41A2225_ABB4_84F1_41E3_E46B421CF7F8.get('visible')){ this.setComponentVisibility(this.component_B41A2225_ABB4_84F1_41E3_E46B421CF7F8, true, 0, null, null, false) } else { this.setComponentVisibility(this.component_B41A2225_ABB4_84F1_41E3_E46B421CF7F8, false, 0, null, null, false) }",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D88427_B071_9154_41E3_7F8E7CF34BC2.png",
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Show/hide menu"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D88427_B071_9154_41E3_7F8E7CF34BC2_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D89427_B071_9154_41B0_87EE2761CB4B",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 41,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 45,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Whats app",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A2D89427_B071_9154_41B0_87EE2761CB4B_pressed.png",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.openLink('https://wa.me/+917620002211?text=I%20was%20exploring%20the%20Virtual%20Tour.%20Would%20like%20to%20know%20more.', '_blank')",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D89427_B071_9154_41B0_87EE2761CB4B.png",
 "transparencyActive": true,
 "visible": false,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "whats app"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D89427_B071_9154_41B0_87EE2761CB4B_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D8C427_B071_9154_41DC_D405D24B5434",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 47,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "rollOverIconURL": "skin/IconButton_A2D8C427_B071_9154_41DC_D405D24B5434_rollover.png",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 41,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Details",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.showPopupImage(this.ImageResource_B6A3725D_B9AD_276E_41C0_6EBA661E1DC3, null, '90%', '90%', this.FadeInEffect_B6A3525D_B9AD_276E_41C7_C421AB2F4AC7, this.FadeOutEffect_B6A0B25D_B9AD_276E_41E1_A2C03BA35A9F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingLeft':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D8C427_B071_9154_41DC_D405D24B5434.png",
 "transparencyActive": true,
 "visible": false,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "IconButton TWITTER"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D8C427_B071_9154_41DC_D405D24B5434_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_A2D8E427_B071_9154_41A3_E844CA43445C",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "horizontalAlign": "center",
 "width": 52,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "rollOverIconURL": "skin/IconButton_A2D8E427_B071_9154_41A3_E844CA43445C_rollover.png",
 "shadow": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 52,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTip": "Website",
 "toolTipShadowVerticalLength": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "click": "this.openLink('https://lilacdesigners.com/', '_blank')",
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_A2D8E427_B071_9154_41A3_E844CA43445C.png",
 "transparencyActive": true,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "IconButton FB"
 },
 "pressedRollOverIconURL": "skin/IconButton_A2D8E427_B071_9154_41A3_E844CA43445C_pressed_rollover.png",
 "cursor": "hand",
 "toolTipPaddingRight": 6
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "buttonToggleFullscreen": "this.IconButton_A2D8B427_B071_9154_41DF_6621A0A53433",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player5165"
 },
 "mouseWheelEnabled": true,
 "gap": 10,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
