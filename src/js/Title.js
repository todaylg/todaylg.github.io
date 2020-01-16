import * as THREE from 'three';
import vertexShader from '../shaders/titleVS.glsl';
import fragmentShader from '../shaders/titleFS.glsl';
import { isPlatformMobile } from './Utils';
const titleTextureSrc = require('../images/title.png');

export default class Title {
	constructor(scene, width, height) {
		this.uniforms = {
			time: {
				type: 'f',
				value: 0
			},
			texture: {
				type: 't',
				value: null
			}
		};
		this.obj;
		this.isLoaded = false;
		this.scene = scene;
		this.width = width;
		this.height = height;
		this.isMobile = isPlatformMobile();
	}
	loadTexture() {
		const loader = new THREE.TextureLoader();
		loader.load(titleTextureSrc, texture => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			this.uniforms.texture.value = texture;
			this.obj = this.createObj();
			this.isLoaded = true;
		});
	}
	createObj() {
		let mesh = new THREE.Mesh(
			new THREE.PlaneBufferGeometry(64, 16, 16, 4),
			new THREE.RawShaderMaterial({
				uniforms: this.uniforms,
				vertexShader,
				fragmentShader,
				transparent: true
			})
		);
		if(this.isMobile){
			mesh.scale.setScalar(this.width/1024/10);
			mesh.position.y = -3;
		}else{
			mesh.position.y = -2;
			mesh.scale.setScalar(this.width/1024/12);
		}
		this.scene.add(mesh);
		return mesh;
	}
	render(time) {
		if (!this.isLoaded) return;
		this.uniforms.time.value += time;
	}
}
