import{an as we,C as b,i as u,ao as Pe,T as Le,ac as ae,w as O,m as _e,t as Ge,v as Ne,W as Ee,A as ue,S as ve,l as Ce,P as xe,O as Fe,x as Ae,y as Ue,z as Oe,D as De,R as Ie,F as ke,p as Be,e as qe,g as $e,u as je,E as He}from"./utils.57a85e8a.js";import{T as We}from"./TransformControls.2bc887dd.js";import{L as ze}from"./LGLTracerRenderer.a594f4d1.js";import{D as se}from"./DisneyMaterial.74d66ad2.js";import{x as Ve}from"./simple-dropzone.module.7aef6fe2.js";class h extends we{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const s=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),l=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor = texelSpecular.rgb;","#endif"].join(`
`),t=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor = texelGlossiness.x;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new b().setHex(0)},glossiness:{value:0},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(c){for(const y in o)c.uniforms[y]=o[y];c.fragmentShader=c.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",s).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",l).replace("#include <metalnessmap_fragment>",t).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(c){o.specular.value=c}},specularMap:{get:function(){return o.specularMap.value},set:function(c){o.specularMap.value=c,c?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(c){o.glossiness.value=c}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(c){o.glossinessMap.value=c,c?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}async function Xe(a){let e=[];const s=[],i=new Le,l=["/models/4dShoe/50/uploads_COLOR.PNG","/models/4dShoe/50/uploads_NORMAL.PNG","/models/4dShoe/50/uploads_SPECULAR.PNG","/models/4dShoe/50/uploads_GLOSS.PNG","/models/4dShoe/47/uploads_SPECULAR.PNG","/models/4dShoe/47/uploads_GLOSS.PNG","/models/4dShoe/8/uploads_COLOR.PNG","/models/4dShoe/8/uploads_NORMAL.PNG","/models/4dShoe/8/uploads_SPECULAR.PNG","/models/4dShoe/8/uploads_GLOSS.PNG","/models/4dShoe/38/uploads_NORMAL.PNG","/models/4dShoe/6/uploads_COLOR.PNG","/models/4dShoe/6/uploads_NORMAL.PNG","/models/4dShoe/6/uploads_SPECULAR.PNG","/models/4dShoe/6/uploads_GLOSS.PNG","/models/4dShoe/10/uploads_COLOR.PNG","/models/4dShoe/10/uploads_NORMAL.PNG","/models/4dShoe/10/uploads_SPECULAR.PNG","/models/4dShoe/10/uploads_GLOSS.PNG","/models/4dShoe/28/uploads_NORMAL.PNG","/models/4dShoe/20/uploads_NORMAL.PNG","/models/4dShoe/34/uploads_COLOR.PNG","/models/4dShoe/34/uploads_NORMAL.PNG","/models/4dShoe/34/uploads_SPECULAR.PNG","/models/4dShoe/34/uploads_GLOSS.PNG","/models/4dShoe/12/uploads_COLOR.PNG","/models/4dShoe/12/uploads_NORMAL.PNG","/models/4dShoe/12/uploads_SPECULAR.PNG","/models/4dShoe/12/uploads_GLOSS.PNG","/models/4dShoe/1/uploads_COLOR.PNG","/models/4dShoe/1/uploads_NORMAL.PNG","/models/4dShoe/9/uploads_COLOR.PNG","/models/4dShoe/9/uploads_NORMAL.PNG","/models/4dShoe/9/uploads_SPECULAR.PNG","/models/4dShoe/9/uploads_GLOSS.PNG"],t=l.length;let r=0;return l.forEach(o=>{s.push(new Promise(c=>{i.load(o,y=>{r++,typeof a=="function"&&a(r/t),c(y)})}))}),await Promise.all(s).then(o=>{e=o}),e}function Ye(a){a.forEach(e=>{e.wrapS=ae,e.wrapT=ae})}function p(a,e,s,i,l){[a.map,a.normalMap,a.specularMap,a.glossinessMap].forEach(r=>{!r||(s&&(r.offset=s),e&&(r.repeat=e),i&&(r.rotation=i),l&&(r.center=l))})}function Je(a){a.forEach(e=>{e.normalScale=new u(1.2),e.map&&(e.map.encoding=O,e.color=new b(1,1,1)),e.specularMap&&(e.specularMap.encoding=O,e.specular=new b(1,1,1)),e.glossinessMap&&(e.glossiness=1),e.emissiveMap&&(e.emissiveMap.encoding=O)})}async function Ke(a){const e=await Xe(a);Ye(e);const s=new h({map:e[0],normalMap:e[1],specularMap:e[2],glossinessMap:e[3]});s.transparent=!0,p(s,new u(.0092,.0092));const i=new h({color:new b(.21960784494876864,0,.3490196168422699),specularMap:e[4],glossinessMap:e[5]});p(i,new u(.011049,.011049));const l=new h({map:e[6],normalMap:e[7],specularMap:e[8]});p(l,new u(.010204,.010204));const t=new h({normalMap:e[10],color:new b(.556,.556,.556),glossiness:.75,specular:new b(.04,.04,.04)});p(t,new u(.019,.019));const r=new h({map:e[11],normalMap:e[12],specularMap:e[13],glossinessMap:e[14]});p(r,new u(.019,.019));const o=new h({map:e[15],normalMap:e[16],specularMap:e[17],glossinessMap:e[18]});p(o,new u(.010941481,.0149168856));const c=new Pe({normalMap:e[19],color:new b(.843137,.847058,.6980392).convertSRGBToLinear(),roughness:0,metalness:1});p(c,new u(.333,.333));const y=new h({normalMap:e[20],color:new b(.556862,.556862,.556862).convertSRGBToLinear(),glossiness:.75,specular:new b(.04,.04,.04)});p(y,new u(.0555,.0555));const _=new h({map:e[21],normalMap:e[22],specularMap:e[23],glossinessMap:e[24]});p(_,new u(.009714324958622456,.02148031443357468));const Z=new h({map:e[25],normalMap:e[26],specularMap:e[27],glossinessMap:e[28]});p(Z,new u(.009728403761982918,.019845079630613327));const $=new h({map:e[29],normalMap:e[30]});$.transparent=!0,p($,new u(.35714125633239746,.27777722477912903));const j=new h({map:e[31],normalMap:e[32],specularMap:e[33],glossinessMap:e[34]});p(j,new u(.01564708352088929,.01406516321003437));const ee=[{material:s,meshName:["50_001"]},{material:i,meshName:["47_001","32_001"]},{material:l,meshName:["8_001","2_001"]},{material:t,meshName:["38_001"]},{material:r,meshName:["6_001"]},{material:o,meshName:["10_001"]},{material:c,meshName:["28_001"]},{material:y,meshName:["20_001"]},{material:_,meshName:["34_001"]},{material:Z,meshName:["12_001"]},{material:$,meshName:["1_001"]},{material:j,meshName:["22_001","13_001","16_001"]},{material:j,meshName:["9_001"]}];return Je(ee.map(be=>be.material)),ee}const Qe=[],Ze=qe.LightBooth,ea=$e.Shoe4D;let D=null,w=!1;const L=document.querySelector("#container"),q=document.querySelector(".loadingText"),aa=document.querySelector(".switchButton"),me=document.querySelector(".curPipelineText");let f="RayTracing",I=!1,k=!1,B=!1,x=!1,v=!1,pe=null,fe=null,H=new Map,X=!1;const Y=1,n=new ze({antialias:!0});let g={bounces:2,envIntensity:Y,toneMapping:ue,offFocusRender:!0,useTileRender:!0,tileSlicesNum:4,movingDownsampling:!0};function sa(){let a=Ue("lgl_editor_renderer_setting");a&&(g=a)}sa();n.bounces=g.bounces;n.envMapIntensity=g.envIntensity;n.toneMapping=g.toneMapping;n.renderWhenOffFocus=g.offFocusRender;n.useTileRender=g.useTileRender;n.movingDownsampling=g.movingDownsampling;n.tileSlicesNum=g.tileSlicesNum;n.enableTemporalDenoise=!1;n.enableDenoise=!1;document.body.appendChild(n.domElement);n.fullSampleCallback=()=>{X&&(X=!1,Re())};const J=!0;let te=!1,N=null,S=null;const{initStats:ta,initGUI:na,initCameraDebugInfo:ia,initNewGUI:la}=_e();n.loadingCallback={onProgress:a=>{console.log(a)},onComplete:a=>{if(q.innerText=a,w=!1,P(!1),!te){ra();const{gui:e,params:s,settingFolder:i,denoiseFolder:l}=na(J,n);l.close(),N=e,s.saveSetting=()=>{Object.keys(g).map(t=>{switch(t){case"toneMapping":g[t]=Ge[`${s[t]}ToneMapping`];break;default:g[t]=s[t];break}}),Ne("lgl_editor_renderer_setting",g)},i.add(s,"saveSetting"),N.close()}te=!0,console.log(a)}};const A=ta(J),W=ia(J);let ne=null,U=null;function ra(){n.setDenoiseColorFactor(.05),n.setDenoisePositionFactor(.01)}const T=new Ee({canvas:n.domElement,context:n.gl,logarithmicDepthBuffer:!0,premultipliedAlpha:!0});T.toneMapping=ue;T.toneMappingExposure=Y;T.outputEncoding=O;T.setPixelRatio(1);T.setClearAlpha(0);S=la();S.add({envIntensity:Y},"envIntensity",0,5,.5).onChange(a=>{T.toneMappingExposure=a});let G=S.addFolder("Material");S.hide();let M={};const d=new ve;Ce(Qe,d);const R=new xe(45,window.innerWidth/window.innerHeight,.001,1e3),E=new Fe(R,n.domElement);E.screenSpacePanning=!0;const m=new We(R,n.domElement),z=new u;let ie=new Ae;function ge(a){D&&d.remove(D);const e=a.scene;d.add(e),D=e,je(R,E,d)}function he(a){a.mapping=He,d.environment=a,d.background=a}function C(a){v=!0,a.needUpdateRayTracingMaterial=!0}function le(a,e,s,i){Object.keys(e).map(l=>{switch(l){case"color":case"specular":a.addColor(e,l).onChange(t=>{i[`${l}`].set(t),C(s)});break;case"ior":a.add(e,l,1,1.8,.01).onChange(t=>{i[`${l}`]=t,C(s)});break;case"visible":a.add(e,l).onChange(t=>{s.visible=t,x=!0});break;default:a.add(e,l,0,1,.01).onChange(t=>{i[`${l}`]=t,C(s)});break}})}function oa(a){let e=a.material;S.removeFolder(G),G=S.addFolder(`Material: ${e.name}`),G.open(),M={};let s={};M.color=e.color.getHex(),e.isMeshStandardMaterial&&(M.roughness=e.roughness,M.metalness=e.metalness,s.transmission=e.transmission||0,s.ior=e.ior||1.5,s.clearcoat=e.clearcoat||0,s.clearcoatRoughness=e.clearcoatRoughness||0,s.sheen=e.sheen||0,s.sheenTint=e.sheenTint||.5,e.isGLTFSpecularGlossinessMaterial&&(delete M.roughness,delete M.metalness,M.glossiness=e.glossiness,M.specular=e.specular.getHex())),M.opacity=e.opacity,M.visible=a.visible,le(G,M,a,e);let i={},l=G.addFolder(`Texture uvTransform: ${!!e.map}`);if(e.map){const r=e.map;i.offsetX=r.offset.x,i.offsetY=r.offset.y,i.repeatX=r.repeat.x,i.repeatY=r.repeat.y,i.rotation=r.rotation,i.centerX=r.center.x,i.centerY=r.center.y,Object.keys(i).map(o=>{let c,y;switch((o.slice(-1)=="X"||o.slice(-1)=="Y")&&(c=o.slice(-1).toLowerCase(),y=o.slice(0,-1)),o){case"rotation":l.add(i,o,0,Math.PI,.01).onChange(_=>{r.rotation=_,C(a)});break;default:l.add(i,o,0,1,.01).onChange(_=>{r[`${y}`][`${c}`]=_,C(a)});break}}),l.open()}else l.close();let t=G.addFolder(`isMeshPhysicalMaterial: ${!!e.isMeshPhysicalMaterial}`);e.isMeshPhysicalMaterial?(t.open(),le(t,s,a,e)):t.close(),S.show()}function ca(){const a=document.querySelector("#bubble"),e=document.querySelector("#editorBubble");document.querySelector("#bubble-close").onclick=()=>{a.style.display="none"},localStorage.getItem("editorLoadBubble4D")||(a.style.display="block",document.querySelector("#bubble-confirm").onclick=()=>{a.style.display="none",localStorage.setItem("editorLoadBubble4D",!0)}),document.querySelector("#editorBubble-close").onclick=()=>{e.style.display="none"},localStorage.getItem("editorUseBubble4D")||(e.style.display="block",document.querySelector("#editorBubble-confirm").onclick=()=>{e.style.display="none",localStorage.setItem("editorUseBubble4D",!0)})}function re(a){const e=document.querySelector("#bubble");e.style.display="block",document.querySelector(".bubble-text").innerText=a}function V(a){a?L.classList.contains("isDroping")||L.classList.add("isDroping"):L.classList.contains("isDroping")&&L.classList.remove("isDroping")}function P(a){a?L.classList.contains("isLoading")||L.classList.add("isLoading"):L.classList.contains("isLoading")&&L.classList.remove("isLoading")}function da(){const a=n.domElement;a.addEventListener("dragenter",s=>{V(!0)}),a.addEventListener("dragleave",s=>{V(!1)});const e=new Ve(a,a);e.on("drop",({files:s})=>{if(V(!1),w){re("previous assets no loading complete!");return}w=!0,q.innerText="Building...",P(!0);const i=Array.from(s);i.find(([t,r])=>r.name.match(/\.(gltf|glb)$/))?Oe(s).then(t=>{m.detach(),d.remove(m),ge(t),ye(),I=!1,k=!1,B=!1,x=!1,v=!1,f==="RayTracing"?(F("RayTracing"),n.buildScene(d,R).then(()=>{w=!1,I=!0,P(!1)})):(F("RealTime"),S.hide(),k=!0,w=!1,P(!1))}):i.find(([r,o])=>o.name.match(/\.(hdr)$/))?De(s).then(r=>{he(r),f==="RayTracing"?(n.updateEnvLight(),n.needsUpdate=!0):B=!0,w=!1,P(!1)}):(w=!1,P(!1),re("Incorrect resource type(support gltf/glb folder or hdr file)!"))}),e.on("droperror",()=>{console.log("Drop Error")}),ca(),aa.addEventListener("click",s=>{de(),me.innerText=f}),n.domElement.addEventListener("dblclick",s=>{if(f!=="RealTime")return;z.x=s.clientX/window.innerWidth*2-1,z.y=-(s.clientY/window.innerHeight)*2+1,ie.setFromCamera(z,R);const i=ie.intersectObjects(D.children);if(i.length){const l=i[0].object;m.attach(l),d.add(m),oa(l)}else d.remove(m),S.hide()}),m.addEventListener("dragging-changed",s=>{f==="RealTime"&&(E.enabled=!s.value,x=!0)}),window.addEventListener("keydown",s=>{if(s.keyCode==81){de();return}if(f==="RealTime")switch(s.keyCode){case 87:m.setMode("translate");break;case 69:m.setMode("rotate");break;case 82:m.setMode("scale");break;case 32:m.enabled=!m.enabled;break}})}function Me(){if(n.domElement.parentElement){const a=n.domElement.parentElement.clientWidth,e=n.domElement.parentElement.clientHeight;n.setSize(a,e),T&&T.setSize(a,e),R.aspect=a/e,R.updateProjectionMatrix()}}window.addEventListener("resize",Me);Me();async function ua(){const a=new Ie().setDataType(ke),e=await new Promise(t=>{a.load(Ze,t)});he(e);const s=await Be(ea),i=s.scene;i.rotation.y=-Math.PI/1.8,ge(s);const l=await Ke(t=>{q.innerText=`Loading...
		\u6750\u8D28\u8D44\u6E90\u603B\u5927\u5C0F:35Mb ${Number(t*100).toFixed(1)}%`});d.traverse(t=>{t.isMesh&&l.forEach(r=>{const o=r.meshName,c=r.material;if(~o.indexOf(t.name)){c&&(t.material=c);return}})})}function Se(){w=!0,q.innerText="Building...",P(!0),F("RayTracing"),setTimeout(()=>{n.buildScene(d,R).then(()=>{I=!0,K()})},100)}function Te(){P(!1),k=!0,Q()}function ye(){H=new Map,d.traverse(a=>{if(a.isMesh&&a.material){let e=H.get(a.material);e===void 0?(a.material.isMeshStandardMaterial?(a.realTimeMaterial=a.material,a.rayTracingMaterial=new se().fromStandardMaterial(a.material)):a.material.isRayTracingMaterial||(a.realTimeMaterial=a.material,a.rayTracingMaterial=new se().fromBasicMaterial(a.material)),H.set(a.material,a.rayTracingMaterial)):(a.realTimeMaterial=a.material,a.rayTracingMaterial=e)}})}function oe(){d.traverse(a=>{a.isMesh&&a.needUpdateRayTracingMaterial&&(a.rayTracingMaterial.fromStandardMaterial(a.realTimeMaterial),a.needUpdateRayTracingMaterial=!1)})}function F(a){d.traverse(e=>{e.isMesh&&(a==="RealTime"?e.material.isRayTracingMaterial&&e.realTimeMaterial&&(e.material=e.realTimeMaterial):!e.material.isRayTracingMaterial&&e.rayTracingMaterial&&(e.material=e.rayTracingMaterial))})}function ce(a){a==="RayTracing"?(N&&N.show(),S&&S.hide()):N&&N.hide()}function de(){f==="RealTime"?Re():X=!0}function Re(){cancelAnimationFrame(fe),cancelAnimationFrame(pe),f==="RealTime"?(d.remove(m),m.enabled=!1,F("RayTracing"),I?(B&&(n.updateEnvLight(),n.needsUpdate=!0,B=!1),x&&(n.updateMeshTransform(),n.needsUpdate=!0,x=!1),v&&(oe(),n.updateMeshMaterial(),n.needsUpdate=!0,v=!1),K()):(v&&oe(),Se()),ce("RayTracing"),f="RayTracing"):(T.resetState(),F("RealTime"),k?Q():Te(),m.enabled=!0,ce("RealTime"),f="RealTime"),E.enabled=!0}function K(a){pe=requestAnimationFrame(K),E.update(),A&&A.begin(),n.render(d,R),A&&A.end(),W&&W.dataBegin&&(U=n.getTotalSamples(),ne!=U&&(W.innerText=`Samples: ${U}`,ne=U))}function Q(){fe=requestAnimationFrame(Q),E.update(),T&&T.render(d,R)}async function ma(){await ua(),ye(),f==="RealTime"?Te():Se(),da(),me.innerText=f}ma();
