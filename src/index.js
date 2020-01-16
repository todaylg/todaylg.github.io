import * as THREE from 'three';
import Sakura from './js/Sakura';
import Megumi from './js/Megumi';
import Title from './js/Title';
// Post-Processing
import { EffectComposer } from './libs/threejs/postprocessing/EffectComposer';
import { RenderPass } from './libs/threejs/postprocessing/RenderPass';
import { ShaderPass } from './libs/threejs/postprocessing/ShaderPass';
import { UnrealBloomPass } from './libs/threejs/postprocessing/UnrealBloomPass';
import { VignetteShader } from './libs/threejs/shaders/VignetteShader';
// Utils
import TWEEN from './libs/threejs/libs/tween.module.min';
import { getEleWidth, getEleHeight } from './js/Utils';

export default class MainScene {
	constructor(container, callback) {
		this.container = container;
		this.width = getEleWidth(container);
		this.height = getEleHeight(container);
		this.clock = new THREE.Clock();

		// Camera
		const camera = (this.camera = new THREE.PerspectiveCamera(
			45,
			document.body.clientWidth / window.innerHeight,
			1,
			500
		));
		camera.position.set(0, 0, 10);

		// Renderer
		const renderer = (this.renderer = new THREE.WebGLRenderer({
			antialias: false
		}));
		renderer.domElement.id = 'canvasWebGL';
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(this.width, this.height);
		renderer.gammaFactor = 2.2;
		renderer.setClearColor(0xffffff, 1.0);
		container.appendChild(renderer.domElement);
		// Scene
		this.initScene(callback);
	}
	initScene(callback) {
		const scene = (this.scene = new THREE.Scene());
		this.sakura = new Sakura(scene);
		this.megumi = new Megumi(scene);
		this.title = new Title(scene, this.width, this.height);
		Promise.all([this.megumi.loadTexture(), this.title.loadTexture()]).then(() => {
			typeof callback === 'function' && callback();
			this.initPostProcessing();
			this.initEntryAnime();
			this.animete();
			// Events
			this.initEvents();
		});
	}
	initPostProcessing() {
		this.composer = new EffectComposer(this.renderer);
		this.composer.addPass(new RenderPass(this.scene, this.camera));
		// Strength, Radius, Threshold
		let bloomPass = (this.bloomPass = new UnrealBloomPass(new THREE.Vector2(this.width, this.height)));
		bloomPass.strength = 5;
		bloomPass.radius = 0.5;
		bloomPass.threshold = 0.995;
		this.composer.addPass(bloomPass);
		// Offset、Darkness
		let vignettePass = (this.vignettePass = new ShaderPass(VignetteShader));
		vignettePass.uniforms['offset'].value = 1000;
		vignettePass.uniforms['darkness'].value = 20;
		this.composer.addPass(vignettePass);
	}
	initEntryAnime() {
		new TWEEN.Tween(this.bloomPass)
			.to({ strength: 0.4 }, 1500)
			.delay(800)
			.easing(TWEEN.Easing.Exponential.InOut)
			.start();
		new TWEEN.Tween(this.vignettePass.uniforms.darkness)
			.to({ value: 1 }, 1500)
			.easing(TWEEN.Easing.Exponential.InOut)
			.start();
		new TWEEN.Tween(this.vignettePass.uniforms.offset)
			.to({ value: 1.2 }, 1500)
			.easing(TWEEN.Easing.Exponential.InOut)
			.onComplete(() => {
				this.enableTitleShowing = true;
			})
			.start();
	}
	initEvents() {
		window.addEventListener('resize', this.onWindowResize.bind(this), false);
	}
	onWindowResize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		if (this.megumi) this.megumi.onResize();
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(this.width, this.height);
		if (this.composer) this.composer.setSize(this.width, this.height);
	}
	animete() {
		const time = this.clock.getDelta();
		this.sakura.render(time);
		if(this.enableTitleShowing) this.title.render(time/1.2);
		TWEEN.update();
		this.composer.render();
		requestAnimationFrame(this.animete.bind(this));
	}
}

window.onload = () => {
	let containerEle = document.querySelector('#container');
	new MainScene(containerEle, () => {
		document.body.classList.remove("isLoading");
	});
};
