(function() {
	var CANVAS_SIZE = 512;
	var FAIRY_CANVAS_PROPERTIES = {
			cx: CANVAS_SIZE,
			cy: CANVAS_SIZE
	}
	function THREE_CONST(v) {
		if(typeof THREE!=="undefined")
			return THREE[v];
		else
			return 0;
	}

	View.Game.cbFairyPieceStyle = function(modifier) {
		return $.extend(true,{
			"1": {
				"default": {
					"2d": {
						clipy: 0,
					},
				},
			},
			"-1": {
				"default": {
					"2d": {
						clipy: 100,
					},
				},
			},
			"default": {
				"3d": {
					display: this.cbDisplayPieceFn(this.cbFairyPieceStyle3D),
				},
				"2d": {
					file: this.mViewOptions.fullPath + "/res/fairy/wikipedia-fairy-sprites.png",
					clipwidth: 100,
					clipheight: 100,
				},
			},
			"fr-pawn": {
				"2d": {
					clipx: 0,
				},
			},
			"fr-knight": {
				"2d": {
					clipx: 100,
				},
			},
			"fr-bishop": {
				"2d": {
					clipx: 200,
				},
			},
			"fr-rook": {
				"2d": {
					clipx: 300,
				},
			},
			"fr-queen": {
				"2d": {
					clipx: 400,
				},
			},
			"fr-king": {
				"2d": {
					clipx: 500,
				},
			},
			"fr-cannon": {
				"2d": {
					clipx: 600,
				},
			},
			"fr-cannon2": {
				"2d": {
					clipx: 600,
				},
			},
			"fr-elephant": {
				"2d": {
					clipx: 700,
				},
			},
			"fr-dragon": {
				"2d": {
					clipx: 800,
				},
			},
			"fr-lighthouse": {
				"2d": {
					clipx: 900,
				},
			},
			"fr-admiral": {
				"2d": {
					clipx: 1000,
				},
			},
			"fr-eagle": {
				"2d": {
					clipx: 1100,
				},
			},
			"fr-lion": {
				"2d": {
					clipx: 1200,
				},
			},
			"fr-camel": {
				"2d": {
					clipx: 1300,
				},
			},
			"fr-amazon": {
				"2d": {
					clipx: 1400,
				},
			},
			"fr-crowned-rook": {
				"2d": {
					clipx: 1500,
				},
			},
			"fr-marshall": {
				"2d": {
					clipx: 1600,
				},
			},
			"fr-cardinal": {
				"2d": {
					clipx: 1700,
				},
			},
			"fr-unicorn": {
				"2d": {
					clipx: 1800,
				},
			},
		},modifier);
	}
	
	View.Game.cbFairyPieceStyle3D = $.extend(true,{},View.Game.cbUniformPieceStyle3D,{
		
		"default": {
			mesh: {
				normalScale: 1,
				rotateZ: 180,
			},
			//'useUniforms' : true,
			materials:{
				mat0:{						
					channels:{ 
						diffuse:{
							size: FAIRY_CANVAS_PROPERTIES, 
						},
						normal: { 
							size: FAIRY_CANVAS_PROPERTIES,
						},
					},
				},
			},	
		},

		"1":{
			'default': {
				materials:{
					mat0:{						
						params : {
							specular: 0x020202,
							shininess : 150 , 
						},
					},
				},
			}
		},
		"-1":{
			'default': {
				materials:{
					mat0:{						
						params : {
							specular: 0x040404,
							shininess : 100 , 
						},
					},
				},
				paintTextureImageClip: function(spec,ctx,material,channel,channelData,imgKey,image,clip,resources) {
					var cx=ctx.canvas.width;
					var cy=ctx.canvas.height;
					if(channel=="diffuse") {
						ctx.globalCompositeOperation = 'normal';
						ctx.drawImage(image,clip.x,clip.y,clip.cx,clip.cy,0,0,cx,cy);
						ctx.globalCompositeOperation = 'multiply';
						ctx.drawImage(image,clip.x,clip.y,clip.cx,clip.cy,0,0,cx,cy);
						ctx.drawImage(image,clip.x,clip.y,clip.cx,clip.cy,0,0,cx,cy);
						ctx.globalCompositeOperation = 'hue';
						ctx.fillStyle='rgba(0,0,0,0.7)';
						ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
					} else
						ctx.drawImage(image,clip.x,clip.y,clip.cx,clip.cy,0,0,cx,cy);
				},
			},
		},

		
		"fr-pawn": {
			mesh: { 
				jsFile:"/res/fairy/pawn/pawn.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/pawn/pawn-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/pawn/pawn-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-knight": {
			mesh: { 
				jsFile:"/res/fairy/knight/knight.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/knight/knight-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/knight/knight-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-bishop": {
			mesh: { 
				jsFile:"/res/fairy/bishop/bishop.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/bishop/bishop-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/bishop/bishop-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-rook": {
			mesh: { 
				jsFile:"/res/fairy/rook/rook.js" 		
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/rook/rook-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/rook/rook-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-queen": {
			mesh: { 
				jsFile:"/res/fairy/queen/queen.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/queen/queen-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/queen/queen-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-king": {
			mesh: { 
				jsFile:"/res/fairy/king/king.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/king/king-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/king/king-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-cannon": {
			mesh: { 
				jsFile:"/res/fairy/cannon/cannon.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/cannon/cannon-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/cannon/cannon-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-cannon2": {
			mesh: { 
				jsFile:"/res/fairy/cannon2/cannon2.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/cannon2/cannon2-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/cannon2/cannon2-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-dragon": {
			mesh: { 
				jsFile:"/res/fairy/dragon/dragon.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/dragon/dragon-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/dragon/dragon-normalmap.jpg", 
							}
						}
					}
				}
			},
		},

		"fr-lighthouse": {
			mesh: { 
				jsFile:"/res/fairy/lighthouse/lighthouse.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/lighthouse/lighthouse-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/lighthouse/lighthouse-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-elephant": {
			mesh: { 
				jsFile:"/res/fairy/elephant/elephant.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/elephant/elephant-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/elephant/elephant-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-admiral": {
			mesh: { 
				jsFile:"/res/fairy/admiral/admiral.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/admiral/admiral-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/admiral/admiral-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-eagle": {
			mesh: { 
				jsFile:"/res/fairy/eagle/eagle.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/eagle/eagle-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/eagle/eagle-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-lion": {
			mesh: { 
				jsFile:"/res/fairy/lion/lion.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/lion/lion-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/lion/lion-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-camel": {
			mesh: { 
				jsFile:"/res/fairy/camel/camel.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/camel/camel-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/camel/camel-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-marshall": {
			mesh: { 
				jsFile:"/res/fairy/marshall/marshall.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/marshall/marshall-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/marshall/marshall-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-crowned-rook": {
			mesh: { 
				jsFile:"/res/fairy/crowned-rook/crowned-rook.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/crowned-rook/crowned-rook-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/crowned-rook/crowned-rook-normalmap.jpg", 
							}
						}
					}
				}
			},
		},

		"fr-amazon": {
			mesh: { 
				jsFile:"/res/fairy/amazon/amazon.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/amazon/amazon-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/amazon/amazon-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-cardinal": {
			mesh: { 
				jsFile:"/res/fairy/cardinal/cardinal.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/cardinal/cardinal-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/cardinal/cardinal-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
		
		"fr-unicorn": {
			mesh: { 
				jsFile:"/res/fairy/unicorn/unicorn.js" 
			},
			materials: {
				mat0: {
					channels: {
						diffuse: {
							texturesImg: {
								diffImg : "/res/fairy/unicorn/unicorn-diffusemap.jpg",
							}
						},
						normal: {
							texturesImg: {
								normalImg: "/res/fairy/unicorn/unicorn-normalmap.jpg", 
							}
						}
					}
				}
			},
		},
	});
	
})();