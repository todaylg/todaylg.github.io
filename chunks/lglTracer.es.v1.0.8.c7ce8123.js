import{W as ft,al as we,A as ct,am as ut,an as pt,ao as na,V as W,C as ne,d as le,P as mt,af as Qe,aq as xt,_ as Ge,O as de,ar as Lt,H as ht,F as De,as as vt}from"./vendor.b603f603.js";/**
 * @license
 * MIT license statement included in lglTracer:
 * GLSL-PathTracer:
 * Copyright 2019-2021 Asif Ali. MIT License
 * ray-tracing-renderer:
 * Copyright 2019 HOVER. MIT License
 * 
 * lglTracer is not open source. you are free to use this library except for projects for commercial purposes.
 * Copyright 2021 lgltracer.com
 */var At=Object.defineProperty,_t=Object.defineProperties,St=Object.getOwnPropertyDescriptors,Ye=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,We=(t,e,a)=>e in t?At(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,He=(t,e)=>{for(var a in e||(e={}))gt.call(e,a)&&We(t,a,e[a]);if(Ye)for(var a of Ye(e))Mt.call(e,a)&&We(t,a,e[a]);return t};function Ne(t,e){const a={};for(const n of e)a[n]=t.getExtension(n);return a}function Ft(t,e){const a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const{name:i}=t.getActiveAttrib(e,r);i&&(a[i]=t.getAttribLocation(e,i))}return a}const Oe=["EXT_color_buffer_float","EXT_float_blend"],It=["OES_texture_float_linear"];function xe(t,{color:e,depth:a}){const n=t.createFramebuffer();function r(){t.bindFramebuffer(t.FRAMEBUFFER,n)}function i(){t.bindFramebuffer(t.FRAMEBUFFER,null)}return function(){r();const s=[];for(let l in e){l=Number(l),l===void 0&&console.error("invalid location");const f=e[l];t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+l,f.target,f.texture,0),s.push(t.COLOR_ATTACHMENT0+l)}t.drawBuffers(s),a&&t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,a.target,a.texture),i()}(),{color:e,bind:r,unbind:i,dispose:function(){t.deleteFramebuffer(n)}}}var Tt={source:"layout(location=0)in vec2 a_position;out vec2 vCoord;void main(){vCoord=a_position;gl_Position=vec4(2.*a_position-1.,0,1);}"};let be;function k(t,e){return{values:`uniform${t}${e}`,array:`uniform${t}${e}v`}}function Pe(t,e){return{matrix:t===e?`uniformMatrix${t}fv`:`uniformMatrix${t}x${e}fv`}}function Gt(t,e){const a=function(s,l){const f={},c=s.getProgramParameter(l,s.ACTIVE_UNIFORMS);for(let d=0;d<c;d++){const{name:o,type:u}=s.getActiveUniform(l,d),L=s.getUniformLocation(l,o);L&&(f[o]={type:u,location:L})}return f}(t,e),n={},r=[];for(let s in a){const{type:l,location:f}=a[s],c={type:l,location:f,v0:0,v1:0,v2:0,v3:0};n[s]=c}const i=new Set;return be=be||function(s){return{[s.FLOAT]:k(1,"f"),[s.FLOAT_VEC2]:k(2,"f"),[s.FLOAT_VEC3]:k(3,"f"),[s.FLOAT_VEC4]:k(4,"f"),[s.INT]:k(1,"i"),[s.INT_VEC2]:k(2,"i"),[s.INT_VEC3]:k(3,"i"),[s.INT_VEC4]:k(4,"i"),[s.SAMPLER_2D]:k(1,"i"),[s.SAMPLER_2D_ARRAY]:k(1,"i"),[s.FLOAT_MAT2]:Pe(2,2),[s.FLOAT_MAT3]:Pe(3,3),[s.FLOAT_MAT4]:Pe(4,4)}}(t),{setUniform:function(s,l,f,c,d){const o=n[s];o?(o.v0=l,o.v1=f,o.v2=c,o.v3=d,r.push(o)):i.has(s)||i.add(s)},upload:function(){for(;r.length>0;){const{type:s,location:l,v0:f,v1:c,v2:d,v3:o}=r.pop(),u=be[s];if(f&&f.length)if(u.matrix){const L=f,p=c||!1;t[u.matrix](l,p,L)}else t[u.array](l,f);else t[u.values](l,f,c,d,o)}}}}function ke(t){let e={};for(let a=0;a<t.length;a++)e[t[a]]=a;return e}function Ze(t,e,a,n){let r=`#version 300 es
precision mediump float;
precision mediump int;
precision lowp isampler2D;
`;return n&&(r+=function(i){let s="";for(const l in i){const f=i[l];f&&(s+=`#define ${l} ${f}
`)}return s}(n)),e===t.FRAGMENT_SHADER&&a.outputs&&(r+=function(i){let s="";const l=ke(i);for(let f in l)s+=`layout(location = ${l[f]}) out vec4 out_${f};
`;return s}(a.outputs)),a.includes&&(r+=function(i,s){let l="";for(let f of i)l+=typeof f=="function"?f(s):f;return l}(a.includes,n)),typeof a.source=="function"?r+=a.source(n):r+=a.source,function(i,s,l){const f=i.createShader(s);if(i.shaderSource(f,l),i.compileShader(f),i.getShaderParameter(f,i.COMPILE_STATUS))return f;const c=l.split(`
`).map((d,o)=>`${o+1}: ${d}`).join(`
`);throw console.log(c),i.getShaderInfoLog(f)}(t,e,r)}function Ke(t,{defines:e,vertex:a}){return Ze(t,t.VERTEX_SHADER,a,e)}function ie(t,e){const{fragment:a,vertex:n}=e,r=n instanceof WebGLShader?n:Ke(t,e),i=a instanceof WebGLShader?a:function(c,{defines:d,fragment:o}){return Ze(c,c.FRAGMENT_SHADER,o,d)}(t,e),s=function(c,d,o,u,L){const p=c.createProgram();if(c.attachShader(p,d),c.attachShader(p,o),u&&c.transformFeedbackVaryings(p,u,L),c.linkProgram(p),c.detachShader(p,d),c.detachShader(p,o),c.getProgramParameter(p,c.LINK_STATUS))return p;throw c.getProgramInfoLog(p)}(t,r,i);return l=He({},function(c,d){const o=Gt(c,d),u={};let L=1;function p(){for(let h in u){const{tex:m,unit:_}=u[h];c.activeTexture(c.TEXTURE0+_),c.bindTexture(m.target,m.texture)}}return{attribLocs:Ft(c,d),bindTextures:p,program:d,setTexture:function(h,m){if(m)if(u[h])u[h].tex=m;else{const _=L++;o.setUniform(h,_),u[h]={unit:_,tex:m}}},setUniform:o.setUniform,textures:u,useProgram:function(h=!0){c.useProgram(d),o.upload(),h&&p()},dispose:function(){for(const h in u){const{tex:m}=u[h];c.deleteTexture(m.texture)}c.deleteProgram(d)}}}(t,s)),f={outputLocs:a.outputs?ke(a.outputs):{}},_t(l,St(f));var l,f}function fe(t,e,a){return Math.min(Math.max(t,e),a)}function D(t,e){let{width:a=null,height:n=null,data:r=null,length:i=1,channels:s=null,storage:l=null,flipY:f=!1,gammaCorrection:c=!1,wrapS:d=t.CLAMP_TO_EDGE,wrapT:o=t.CLAMP_TO_EDGE,minFilter:u=t.NEAREST,magFilter:L=t.NEAREST}=e;a=a||r.width||0,n=n||r.height||0;const p=t.createTexture();let h,m;Array.isArray(r)&&(m=r,r=m[0]),h=m||i>1?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D,t.activeTexture(t.TEXTURE0),t.bindTexture(h,p),t.texParameteri(h,t.TEXTURE_WRAP_S,d),t.texParameteri(h,t.TEXTURE_WRAP_T,o),t.texParameteri(h,t.TEXTURE_MIN_FILTER,u),t.texParameteri(h,t.TEXTURE_MAG_FILTER,L),s||(s=r&&r.length?r.length/(a*n):4),s=fe(s,1,4);const{type:_,format:g,internalFormat:v}=function(A,M,F,N,y){let b,V;const se=N instanceof Uint8Array||N instanceof HTMLImageElement||N instanceof HTMLCanvasElement||N instanceof ImageData||N instanceof ImageBitmap,j=N instanceof Float32Array;return F==="byte"||!F&&se?(V={1:A.R8,2:A.RG8,3:y?A.SRGB8:A.RGB8,4:y?A.SRGB8_ALPHA8:A.RGBA8}[M],b=A.UNSIGNED_BYTE):F==="float"||!F&&j?(V={1:A.R32F,2:A.RG32F,3:A.RGB32F,4:A.RGBA32F}[M],b=A.FLOAT):F==="halfFloat"?(V={1:A.R16F,2:A.RG16F,3:A.RGB16F,4:A.RGBA16F}[M],b=A.HALF_FLOAT):F==="snorm"&&(V={1:A.R8_SNORM,2:A.RG8_SNORM,3:A.RGB8_SNORM,4:A.RGBA8_SNORM}[M],b=A.UNSIGNED_BYTE),{format:Nt(A,M),internalFormat:V,type:b}}(t,s,l,r,c);if(m){t.texStorage3D(h,1,v,a,n,m.length);for(let A=0;A<m.length;A++){const M=m[A].width||a,F=m[A].height||n;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,Array.isArray(f)?f[A]:f),t.texSubImage3D(h,0,0,0,A,M,F,1,g,_,m[A])}}else i>1?t.texStorage3D(h,1,v,a,n,i):(t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,f),t.texStorage2D(h,1,v,a,n),r&&t.texSubImage2D(h,0,0,0,a,n,g,_,r));return t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),{target:h,texture:p}}function Nt(t,e){return{1:t.RED,2:t.RG,3:t.RGB,4:t.RGBA}[e]}class bt extends ft{constructor(){super(),this.materialType=null,this.isRayTracingMaterial=!0}copy(e){super.copy(e),this.materialType=e.materialType,this.isRayTracingMaterial=e.isRayTracingMaterial}}class qe extends bt{constructor(e){super(),this.materialType="Disney",this.workflow="Metalness",this.color=new ne(16777215),this.roughness=.5,this.metalness=0,this.map=null,this.emissive=new ne(0),this.emissiveMap=null,this.normalMap=null,this.normalScale=new le(1,1),this.roughnessMap=null,this.metalnessMap=null,this.specularTint=0,this.sheen=0,this.sheenTint=.5,this.clearcoat=0,this.clearcoatRoughness=0,this.subsurface=0,this.alpha=1,this.ior=1.5,this.transmission=0,this.atDistance=1,this.extinction=new ne(16777215),this.anisotropic=0,this.specularColor=new ne(16777215),this.glossiness=1,this.specularMap=null,this.glossinessMap=null,this.setValues(e)}copy(e){return this.color=new ne().copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.emissive=new ne().copy(e.emissive),this.emissiveMap=e.emissiveMap,this.normalMap=e.normalMap,this.normalScale=new le().copy(e.normalScale),this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.specularTint=e.specularTint,this.sheen=e.sheen,this.sheenTint=e.sheenTint,this.clearcoat=e.clearcoat,this.clearcoatRoughness=e.clearcoatRoughness,this.subsurface=e.subsurface,this.transmission=e.transmission,this.ior=e.ior,this.atDistance=e.atDistance,this.anisotropic=e.anisotropic,this.extinction=new ne().copy(e.extinction),this.alpha=e.alpha,this}clone(){return new this.constructor().copy(this)}fromBasicMaterial(e){return this.name=e.name,e.color&&this.color.copy(e.color),e.map&&(this.map=e.map),this}fromStandardMaterial(e){return this.name=e.name,this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.transmission=e.transmission||0,this.ior=e.ior||1.5,this.clearcoat=e.clearcoat||0,this.clearcoatRoughness=e.clearcoatRoughness||0,this.sheen=e.sheen||0,this.sheenTint=e.sheenTint||.5,this.alpha=e.opacity,this.map=e.map,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,e.isGLTFSpecularGlossinessMaterial&&(this.workflow="Specular",this.specularColor.copy(e.specular),this.glossiness=e.glossiness,this.specularMap=e.specularMap,this.glossinessMap=e.glossinessMap),this}}function Pt(t){const e={};return e.position=t.map(a=>a.position),e.emission=t.map(a=>a.emission),e.p1=t.map(a=>a.p1),e.p2=t.map(a=>a.p2),e.radius=t.map(a=>a.radius),e.area=t.map(a=>a.area),e.type=t.map(a=>a.type),e.visible=t.map(a=>a.visible),e.position=[].concat(...e.position.map(a=>a.toArray())),e.emission=[].concat(...e.emission.map(a=>a.toArray())),e.p1=[].concat(...e.p1.map(a=>a.toArray())),e.p2=[].concat(...e.p2.map(a=>a.toArray())),e.params=function(...a){let n=0;for(let i=0;i<a.length;i++){const s=a[i],l=s.data?s.data.length/s.channels:0;n=Math.max(n,l)}const r=[];for(let i=0;i<n;i++)for(let s=0;s<a.length;s++){const{data:l=[],channels:f}=a[s];for(let c=0;c<f;c++)r.push(l[i*f+c])}return r}({data:e.radius,channels:1},{data:e.area,channels:1},{data:e.type,channels:1},{data:e.visible,channels:1}),e}function _e(t,e){const a=[],n=[];t.traverse(c=>{c.isMesh&&(c.geometry?c.material?(c.material.isMeshStandardMaterial?c.material=new qe().fromStandardMaterial(c.material):c.material.isRayTracingMaterial||(c.material=new qe().fromBasicMaterial(c.material)),a.push(c)):console.warn(c,"must have a material property."):console.warn(c,"must have a geometry property")),c.isLight&&n.push(c)});const r={data:t.environment,intensity:t.envMapIntensity||1},i=r.data&&r.data.isTexture,s=n.length||0;let l=null;s&&(l=function(c){return Pt(c.map(d=>{const o={};switch(o.position=d.position,o.emission=d.color.multiplyScalar(d.intensity),o.radius=d.radius||0,o.area=0,o.visible=Number(d.visible),o.p1=new W,o.p2=new W,d.type){case"RectAreaLight":if(o.type=0,d.width&&d.height){const u=new xt(d.width,d.height),L=new W;d.target&&L.copy(d.target);const p=new W().subVectors(d.position,L),h=new W().copy(p).negate();u.lookAt(h);const m=u.attributes.position.array,_=new W(m[0],m[1],m[2]).add(d.position);new W(m[3],m[4],m[5]).add(d.position);const g=new W(m[6],m[7],m[8]).add(d.position),v=new W(m[9],m[10],m[11]).add(d.position);o.position.copy(g),o.p1=v.sub(g),o.p2=_.sub(g),o.area=new W().crossVectors(o.p1,o.p2).length()}break;case"QuadLight":o.type=1,o.p1=d.v1.sub(d.position),o.p2=d.v2.sub(d.position),o.area=new W().crossVectors(o.p1,o.p2).length();break;case"SphereAreaLight":o.type=2,o.area=4*Math.PI*d.radius*d.radius;break;case"PointLight":o.type=4,o.area=0;break;case"DirectionalLight":o.type=3,d.target&&o.p1.copy(d.target),o.area=0;break;default:console.warn(`Not support light type: ${d.type}`)}return o}))}(n));const f=new Map;for(const c of a){if(!c.visible)continue;const d=c.material;let o=f.get(d);o===void 0&&(o=f.size,f.set(d,o))}return{environment:r,isTextureEnv:i,camera:e,meshes:a,meshLights:l,meshLightsNum:s,materialIndexMap:f,materials:Array.from(f.keys())}}function yt(t,e){const a=new Ge;for(const r of e){const i=t.getAttribute(r);i&&(typeof a.setAttribute!="function"&&(a.setAttribute=a.addAttribute),a.setAttribute(r,i.clone()))}const n=t.getIndex();return n&&a.setIndex(n),a}function Rt(t){const e=t.getAttribute("position");if(!e)return void console.warn("No position attribute");const a=new Uint32Array(e.count);for(let n=0;n<a.length;n++)a[n]=n;return t.setIndex(new de(a,1,!1)),t}function Et(t,e){let a=0,n=0;const r=[];for(const s of t){if(!s.visible)continue;const l=s.geometry.isBufferGeometry?yt(s.geometry,["position","normal","uv"]):new Ge().fromGeometry(s.geometry);l.getIndex()||Rt(l),l.applyMatrix4?l.applyMatrix4(s.matrixWorld):l.applyMatrix(s.matrixWorld),l.getAttribute("normal")?l.normalizeNormals():l.computeVertexNormals(),a+=l.getAttribute("position").count,n+=l.getIndex().count;const f=s.material;let c=e.get(f);r.push({geometry:l,materialIndex:c})}return{geometry:function(s,l,f){const c=new de(new Float32Array(3*l),3,!1),d=new de(new Float32Array(3*l),3,!1),o=new de(new Float32Array(2*l),2,!1),u=new de(new Int32Array(2*l),2,!1),L=new de(new Uint32Array(f),1,!1),p=new Ge;typeof p.setAttribute!="function"&&(p.setAttribute=p.addAttribute),p.setAttribute("position",c),p.setAttribute("normal",d),p.setAttribute("uv",o),p.setAttribute("materialMeshIndex",u),p.setIndex(L);let h=0,m=0,_=1;for(const{geometry:g,materialIndex:v}of s){const A=g.getAttribute("position").count;p.merge(g,h);const M=g.getIndex();for(let F=0;F<M.count;F++)L.setX(m+F,h+M.getX(F));for(let F=0;F<A;F++)u.setXY(h+F,v,_);h+=A,m+=M.count,_++}return p}(r,a,n)}}function q(t,e,a,n,r,i,s){const l=Math.min(s.length/i,a);for(let f=0;f<l;f++)for(let c=0;c<i;c++)t[e](n+f*r+4*c,s[i*f+c],!0)}function Je(t,e){const a={textures:[],indices:{}};for(const n of e)a.indices[n]=je(t,n,a.textures);return a}function je(t,e,a){const n=[];for(const r of t)if(r[e]&&r[e].image){let i=a.length;for(let s=0;s<a.length;s++)if(a[s]===r[e]){i=s;break}i===a.length&&a.push(r[e]),n.push(i)}else n.push(-1);return n}function Z(...t){let e=0;for(let n=0;n<t.length;n++){const r=t[n],i=r.data?r.data.length/r.channels:0;e=Math.max(e,i)}const a=[];for(let n=0;n<e;n++)for(let r=0;r<t.length;r++){const{data:i=[],channels:s}=t[r];for(let l=0;l<s;l++)a.push(i[n*s+l])}return a}function Ut(t,e,a){const n=function(r,i,s){const l=r.getUniformBlockIndex(i,s),f=r.getActiveUniformBlockParameter(i,l,r.UNIFORM_BLOCK_DATA_SIZE),c=function(u,L,p){const h=u.getActiveUniformBlockParameter(L,p,u.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),m=u.getActiveUniforms(L,h,u.UNIFORM_OFFSET),_=u.getActiveUniforms(L,h,u.UNIFORM_ARRAY_STRIDE),g={};for(let v=0;v<h.length;v++){const{name:A,type:M,size:F}=u.getActiveUniform(L,h[v]);g[A]={type:M,size:F,offset:m[v],stride:_[v]}}return g}(r,i,l),d=r.createBuffer();r.bindBuffer(r.UNIFORM_BUFFER,d),r.bufferData(r.UNIFORM_BUFFER,f,r.STATIC_DRAW);const o=new DataView(new ArrayBuffer(f));return{set:function(u,L){if(!c[u])return;const{type:p,size:h,offset:m,stride:_}=c[u];switch(p){case r.FLOAT:q(o,"setFloat32",h,m,_,1,L);break;case r.FLOAT_VEC2:q(o,"setFloat32",h,m,_,2,L);break;case r.FLOAT_VEC3:q(o,"setFloat32",h,m,_,3,L);break;case r.FLOAT_VEC4:q(o,"setFloat32",h,m,_,4,L);break;case r.INT:q(o,"setInt32",h,m,_,1,L);break;case r.INT_VEC2:q(o,"setInt32",h,m,_,2,L);break;case r.INT_VEC3:q(o,"setInt32",h,m,_,3,L);break;case r.INT_VEC4:q(o,"setInt32",h,m,_,4,L);break;case r.BOOL:q(o,"setUint32",h,m,_,1,L);break;default:console.warn("UniformBuffer: Unsupported type")}},bind:function(u){r.bindBuffer(r.UNIFORM_BUFFER,d),r.bufferSubData(r.UNIFORM_BUFFER,0,o),r.bindBufferBase(r.UNIFORM_BUFFER,u,d)},dispose:function(){r.deleteBuffer(d)}}}(t,e,"Materials");return n.set("Materials.colorAndMaterialType[0]",Z({data:[].concat(...a.color.map(r=>r.toArray())),channels:3},{data:a.type,channels:1})),n.set("Materials.roughnessMetalnessNormalScale[0]",Z({data:a.roughness,channels:1},{data:a.metalness,channels:1},{data:[].concat(...a.normalScale.map(r=>r.toArray())),channels:2})),n.set("Materials.alphaSpecularTintSheenSheenTint[0]",Z({data:a.alpha,channels:1},{data:a.specularTint,channels:1},{data:a.sheen,channels:1},{data:a.sheenTint,channels:1})),n.set("Materials.clearcoaRoughnessSubfaceTransmission[0]",Z({data:a.clearcoat,channels:1},{data:a.clearcoatRoughness,channels:1},{data:a.subsurface,channels:1},{data:a.transmission,channels:1})),n.set("Materials.iorAtDistanceAnisotropicWorkflow[0]",Z({data:a.ior,channels:1},{data:a.atDistance,channels:1},{data:a.anisotropic,channels:1},{data:a.workflow,channels:1})),n.set("Materials.specularColorGlossiness[0]",Z({data:[].concat(...a.specularColor.map(r=>r.toArray())),channels:3},{data:a.glossiness,channels:1})),n.set("Materials.extinction[0]",Z({data:[].concat(...a.extinction.map(r=>r.toArray())),channels:3},{data:a.anisotropic,channels:1})),n.set("Materials.diffuseNormalRoughnessMetalnessMapIndex[0]",Z({data:a.diffuseMapIndex,channels:1},{data:a.normalMapIndex,channels:1},{data:a.roughnessMapIndex,channels:1},{data:a.metalnessMapIndex,channels:1})),n.set("Materials.emissiveSpecularGlossinessMapIndex[0]",Z({data:a.emissiveMapIndex,channels:1},{data:a.specularMapIndex,channels:1},{data:a.glossinessMapIndex,channels:1},{data:a.emissiveMapIndex,channels:1})),n.set("Materials.diffuseNormalMapSize[0]",Z({data:a.diffuseMapSize,channels:2},{data:a.normalMapSize,channels:2})),n.set("Materials.pbrMapSize[0]",a.pbrMapSize),n.bind(0),n}function Le(t,e,a=!1,n=3){const r=e.map(f=>f.image),i=e.map(f=>f.flipY),{maxSize:s,relativeSizes:l}=function(f){const c={width:0,height:0};for(const o of f)c.width=Math.max(c.width,o.width),c.height=Math.max(c.height,o.height);const d=[];for(const o of f)d.push(o.width/c.width),d.push(o.height/c.height);return{maxSize:c,relativeSizes:d}}(r);return{texture:D(t,{width:s.width,height:s.height,gammaCorrection:a,data:r,flipY:i,channels:n,minFilter:t.LINEAR,magFilter:t.LINEAR}),relativeSizes:l}}function $e(t,e){const a=function(d,o){const u={};for(const L of o){const p=[];u[L]={indices:je(d,L,p),textures:p}}return u}(e,["map","normalMap","emissiveMap"]),n=Je(e,["roughnessMap","metalnessMap"]),r=Je(e,["specularMap","glossinessMap"]),i={},s={};if(s.color=e.map(d=>d.color),s.roughness=e.map(d=>d.roughness),s.metalness=e.map(d=>d.metalness),s.normalScale=e.map(d=>d.normalScale),s.specularTint=e.map(d=>d.specularTint),s.sheen=e.map(d=>d.sheen),s.sheenTint=e.map(d=>d.sheenTint),s.clearcoat=e.map(d=>d.clearcoat),s.clearcoatRoughness=e.map(d=>d.clearcoatRoughness),s.transmission=e.map(d=>d.transmission),s.subsurface=e.map(d=>d.subsurface),s.ior=e.map(d=>d.ior),s.atDistance=e.map(d=>d.atDistance),s.extinction=e.map(d=>d.extinction),s.alpha=e.map(d=>d.alpha),s.workflow=e.map(d=>d.workflow==="Metalness"?0:1),s.specularColor=e.map(d=>d.specularColor),s.glossiness=e.map(d=>d.glossiness),s.type=e.map(d=>0),a.map.textures.length>0){const{relativeSizes:d,texture:o}=Le(t,a.map.textures,!0,4);i.diffuseMap=o,s.diffuseMapSize=d,s.diffuseMapIndex=a.map.indices}if(a.normalMap.textures.length>0){const{relativeSizes:d,texture:o}=Le(t,a.normalMap.textures,!1);i.normalMap=o,s.normalMapSize=d,s.normalMapIndex=a.normalMap.indices}if(n.textures.length>0){const{relativeSizes:d,texture:o}=Le(t,n.textures,!1);i.pbrMap=o,s.pbrMapSize=d,s.roughnessMapIndex=n.indices.roughnessMap,s.metalnessMapIndex=n.indices.metalnessMap}if(r.textures.length>0){const{relativeSizes:d,texture:o}=Le(t,r.textures,!1,4);i.pbrSGMap=o,s.pbrMapSize=d,s.specularMapIndex=r.indices.specularMap,s.glossinessMapIndex=r.indices.glossinessMap}if(a.emissiveMap.textures.length>0){const{relativeSizes:d,texture:o}=Le(t,a.emissiveMap.textures,!0);i.emissiveMap=o,s.pbrMapSize||(s.pbrMapSize=d),s.emissiveMapIndex=a.emissiveMap.indices}const l={NUM_MATERIALS:e.length,NUM_DIFFUSE_MAPS:a.map.textures.length,NUM_NORMAL_MAPS:a.normalMap.textures.length,NUM_DIFFUSE_NORMAL_MAPS:Math.max(a.map.textures.length,a.normalMap.textures.length),NUM_PBR_MAPS:n.textures.length,NUM_PBR_SG_MAPS:r.textures.length,NUM_EMISSIVE_MAPS:a.emissiveMap.textures.length},f=ie(t,{vertex:{source:"void main() {}"},fragment:{includes:[`uniform Materials {
	vec4 colorAndMaterialType[NUM_MATERIALS];
	vec4 roughnessMetalnessNormalScale[NUM_MATERIALS];
	vec4 alphaSpecularTintSheenSheenTint[NUM_MATERIALS];
	vec4 clearcoaRoughnessSubfaceTransmission[NUM_MATERIALS];
	vec4 iorAtDistanceAnisotropicWorkflow[NUM_MATERIALS];
	vec4 extinction[NUM_MATERIALS];
	vec4 specularColorGlossiness[NUM_MATERIALS];

	#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS) || defined(NUM_PBR_MAPS)
		ivec4 diffuseNormalRoughnessMetalnessMapIndex[NUM_MATERIALS];
	#endif

	#if defined(NUM_EMISSIVE_MAPS) || defined(NUM_PBR_SG_MAPS)
		ivec4 emissiveSpecularGlossinessMapIndex[NUM_MATERIALS];
	#endif

	#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS)
		vec4 diffuseNormalMapSize[NUM_DIFFUSE_NORMAL_MAPS];
	#endif

	#if defined(NUM_PBR_MAPS)
		vec2 pbrMapSize[NUM_PBR_MAPS];
	#else
		#if defined(NUM_PBR_SG_MAPS)
			vec2 pbrMapSize[NUM_PBR_SG_MAPS];
		#else
			#if defined(NUM_EMISSIVE_MAPS)
				vec2 pbrMapSize[NUM_EMISSIVE_MAPS];
			#endif
		#endif
	#endif
} materials;

#ifdef NUM_DIFFUSE_MAPS
	uniform mediump sampler2DArray diffuseMap;
#endif

#ifdef NUM_NORMAL_MAPS
	uniform mediump sampler2DArray normalMap;
#endif

#ifdef NUM_PBR_MAPS
	uniform mediump sampler2DArray pbrMap;
#endif

#ifdef NUM_PBR_SG_MAPS
	uniform mediump sampler2DArray pbrSGMap;
#endif

#ifdef NUM_EMISSIVE_MAPS
	uniform mediump sampler2DArray emissiveMap;
#endif

float getMatType(int materialIndex) {
	return materials.colorAndMaterialType[materialIndex].w;
}

float getMatWorkflow(int materialIndex) {
	return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].w;
}

vec3 getMatEmissive(int materialIndex, vec2 uv) {
	vec3 emissive = vec3(0.0);

	#ifdef NUM_EMISSIVE_MAPS
		int emissiveMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialIndex].x;
		if (emissiveMapIndex >= 0) {
			emissive = texture(emissiveMap, vec3(uv * materials.pbrMapSize[emissiveMapIndex].xy, emissiveMapIndex)).rgb;
		}
	#endif
	
	return emissive;
}

vec3 getMatSpecularColor(int materialIndex, vec2 uv) {
	vec3 specularColor = materials.specularColorGlossiness[materialIndex].rgb;

	#ifdef NUM_PBR_SG_MAPS
		int specularMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialIndex].y;
		if (specularMapIndex >= 0) {
			vec3 texelSpecular = texture(pbrSGMap, vec3(uv * materials.pbrMapSize[specularMapIndex].xy, specularMapIndex)).rgb;
			texelSpecular = pow(texelSpecular, vec3(2.2));
			specularColor *= texelSpecular;
		}
	#endif

	return specularColor;
}

float getMatGlossiness(int materialIndex, vec2 uv) {
	float glossiness = materials.specularColorGlossiness[materialIndex].a;
	#ifdef NUM_PBR_SG_MAPS
		int glossinessMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialIndex].z;
		if (glossinessMapIndex >= 0) {
			float texelGlossiness = texture(pbrSGMap, vec3(uv * materials.pbrMapSize[glossinessMapIndex].xy, glossinessMapIndex)).a;
			glossiness *= texelGlossiness;
		}
	#endif
	return glossiness;
}

float getMatRoughness(int materialIndex, vec2 uv) {
	float workflow = getMatWorkflow(materialIndex);
	float roughness = 0.0;
	if (workflow > 0.1) {
		roughness = 1.0 - getMatGlossiness(materialIndex, uv);
	} else {
		roughness = materials.roughnessMetalnessNormalScale[materialIndex].x;

		#ifdef NUM_PBR_MAPS
			int roughnessMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].z;
			if (roughnessMapIndex >= 0) {
				roughness *= texture(pbrMap, vec3(uv * materials.pbrMapSize[roughnessMapIndex].xy, roughnessMapIndex)).g;
			}
		#endif
	}
	// Remap
	return roughness * roughness;
}

float max3(const vec3 v) {
	return max(v.x, max(v.y, v.z));
}

float computeMetallicFromSpecularColor(const vec3 specularColor) {
	return max3(specularColor);
}

vec3 computeDiffuseColor(const vec3 baseColor, float metallic) {
	return baseColor * (1.0 - metallic);
}

float getMatMetalness(int materialIndex, vec2 uv) {
	float workflow = getMatWorkflow(materialIndex);
	float metalness = 0.0;
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialIndex, uv);
		metalness = computeMetallicFromSpecularColor(specularFactor);
	} else {
		metalness = materials.roughnessMetalnessNormalScale[materialIndex].y;

		#ifdef NUM_PBR_MAPS
			int metalnessMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].w;
			if (metalnessMapIndex >= 0) {
				metalness *= texture(pbrMap, vec3(uv * materials.pbrMapSize[metalnessMapIndex].xy, metalnessMapIndex)).b;
			}
		#endif
	}

	return metalness;
}

vec3 getMatColor(int materialIndex, vec2 uv) {
	// if (enableAlbedo && bounce == 0) return vec3(1.);
	vec3 color = materials.colorAndMaterialType[materialIndex].rgb;
	#ifdef NUM_DIFFUSE_MAPS
		int diffuseMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;
		if (diffuseMapIndex >= 0) {
			color *= texture(diffuseMap, vec3(uv * materials.diffuseNormalMapSize[diffuseMapIndex].xy, diffuseMapIndex)).rgb;
		}
	#endif

	float workflow = getMatWorkflow(materialIndex);
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialIndex, uv);
		color = computeDiffuseColor(color, computeMetallicFromSpecularColor(specularFactor));
	}

	return color;
}

vec3 getMatNormal(int materialIndex, vec2 uv, vec3 normal, vec3 dp1, vec3 dp2, vec2 duv1, vec2 duv2, inout vec3 tangent, inout vec3 bitangent) {
	// http://www.thetenthplanet.de/archives/1180
	// Compute co-tangent and co-bitangent vectors
	vec3 dp2perp = cross(dp2, normal);
	vec3 dp1perp = cross(normal, dp1);
	vec3 dpdu = dp2perp * duv1.x + dp1perp * duv2.x;
	vec3 dpdv = dp2perp * duv1.y + dp1perp * duv2.y;
	float invmax = inversesqrt(max(dot(dpdu, dpdu), dot(dpdv, dpdv)));
	dpdu *= invmax;
	dpdv *= invmax;

	// All world space
	// /3ed-2018/Materials/BSDFs => WorldToLocal/LocalToWorld
	tangent = normalize(dpdu);
	bitangent = normalize(dpdv);

#ifdef NUM_NORMAL_MAPS
	int normalMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].y;
	if (normalMapIndex >= 0) {
		vec3 n = 2.0 * texture(normalMap, vec3(uv * materials.diffuseNormalMapSize[normalMapIndex].zw, normalMapIndex)).rgb - 1.0;
		n.xy *= materials.roughnessMetalnessNormalScale[materialIndex].zw;

		mat3 tbn = mat3(dpdu, dpdv, normal);

		return normalize(tbn * n);
	} else {
		return normal;
	}
#endif

	return normal;
}

// alphaSpecularTintSheenSheenTint
float getMatAlpha(int materialIndex, vec2 uv) {
	float alpha =  materials.alphaSpecularTintSheenSheenTint[materialIndex].x;
	#ifdef NUM_DIFFUSE_MAPS
		int diffuseMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;
		if (diffuseMapIndex >= 0) {
			alpha *= texture(diffuseMap, vec3(uv * materials.diffuseNormalMapSize[diffuseMapIndex].xy, diffuseMapIndex)).a;
		}
	#endif
	return alpha;
}

float getMatSpecularTint(int materialIndex) {
	return materials.alphaSpecularTintSheenSheenTint[materialIndex].y;
}

float getMatSheen(int materialIndex) {
	return materials.alphaSpecularTintSheenSheenTint[materialIndex].z;
}

float getMatSheenTint(int materialIndex) {
	return materials.alphaSpecularTintSheenSheenTint[materialIndex].w;
}

// clearcoaRoughnessSubfaceTransmission
float getMatClearcoat(int materialIndex) {
	return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].x;
}

float getMatClearcoatRoughness(int materialIndex) {
	return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].y;
}

float getMatSubface(int materialIndex) {
	return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].z;
}

float getMatTransmission(int materialIndex) {
	return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].w;
}

// iorAtDistanceAnisotropicWorkflow
float getMatIOR(int materialIndex) {
	return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].x;
}

float getMatAtDistance(int materialIndex) {
	return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].y;
}

float getMatAnisotropic(int materialIndex) {
	return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].z;
}

vec3 getMatExtinction(int materialIndex) {
	return materials.extinction[materialIndex].rgb;
}`],source:"void main() {}"},defines:l}),c=Ut(t,f.program,s);return{defines:l,textures:i,dispose:function(){f.dispose(),c.dispose()}}}class K{constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}normalize(){return this.divideScalar(this.length()||1)}crossVectors(e,a){const n=e.x,r=e.y,i=e.z,s=a.x,l=a.y,f=a.z;return this.x=r*f-i*l,this.y=i*s-n*f,this.z=n*l-r*s,this}fromBufferAttribute(e,a,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}}class oe{constructor(e=new K(1/0,1/0,1/0),a=new K(-1/0,-1/0,-1/0)){this.min=e,this.max=a}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}}function et(t,e,a){const n=t[a];t[a]=t[e],t[e]=n}const B=new K;function tt(t,e){return{primitives:t,bounds:e}}function at(t,e,a){let n=a[e]-t.min[e];return t.max[e]>t.min[e]&&(n/=t.max[e]-t.min[e]),n}function ye(t){return t.getSize(B),2*(B.x*B.z+B.x*B.y+B.z*B.y)}function Re(t,e,a){const n=new oe;for(let f=e;f<a;f++)n.union(t[f].bounds);const r=a-e;if(r===1)return tt(t.slice(e,a),n);{const f=new oe;for(let o=e;o<a;o++)f.expandByPoint(t[o].center);const c=(f.getSize(B),B.x>B.z?B.x>B.y?"x":"y":B.z>B.y?"z":"y");let d=Math.floor((e+a)/2);if(r<=4)(function(o,u,L=0,p=o.length,h=Math.floor((L+p)/2)){for(let m=L;m<=h;m++){let _=m,g=o[m];for(let v=m+1;v<p;v++)u(g,o[v])||(_=v,g=o[v],et(o,m,_))}})(t,(o,u)=>o.center[c]<u.center[c],e,a,d);else{if(f.max[c]===f.min[c])return tt(t.slice(e,a),n);{const o=12,u=[];for(let m=0;m<o;m++)u.push({bounds:new oe,count:0});for(let m=e;m<a;m++){let _=Math.floor(o*at(f,c,t[m].center));_===u.length&&(_=u.length-1),u[_].count++,u[_].bounds.union(t[m].bounds)}const L=[];for(let m=0;m<u.length-1;m++){const _=new oe,g=new oe;let v=0,A=0;for(let M=0;M<=m;M++)_.union(u[M].bounds),v+=u[M].count;for(let M=m+1;M<u.length;M++)g.union(u[M].bounds),A+=u[M].count;L.push(.1+(v*ye(_)+A*ye(g))/ye(n))}let p=L[0],h=0;for(let m=1;m<L.length;m++)L[m]<p&&(p=L[m],h=m);d=function(m,_,g=0,v=m.length){for(;g!==v;){for(;_(m[g]);)if(++g===v)return g;do if(g===--v)return g;while(!_(m[v]));et(m,g,v),g++}return g}(t,m=>{let _=Math.floor(u.length*at(f,c,m.center));return _===u.length&&(_=u.length-1),_<=h},e,a)}}return i=c,s=Re(t,e,d),l=Re(t,d,a),{child0:s,child1:l,bounds:new oe().union(s.bounds).union(l.bounds),splitAxis:i}}var i,s,l}function Xt(t){const e=function(a){const n=[],r=a.getIndex?a.getIndex().array:a.index.array,i=a.getAttribute?a.getAttribute("position"):a.attributes.position,s=a.getAttribute?a.getAttribute("materialMeshIndex"):a.attributes.materialMeshIndex,l=new K,f=new K,c=new K,d=new K,o=new K;for(let u=0;u<r.length;u+=3){const L=r[u],p=r[u+1],h=r[u+2],m=new oe;i.getX?(l.fromBufferAttribute(i,L),f.fromBufferAttribute(i,p),c.fromBufferAttribute(i,h)):(l.x=i.array[L*i.itemSize],l.y=i.array[L*i.itemSize+1],l.z=i.array[L*i.itemSize+2],f.x=i.array[p*i.itemSize],f.y=i.array[p*i.itemSize+1],f.z=i.array[p*i.itemSize+2],c.x=i.array[h*i.itemSize],c.y=i.array[h*i.itemSize+1],c.z=i.array[h*i.itemSize+2]),m.expandByPoint(l),m.expandByPoint(f),m.expandByPoint(c),d.subVectors(c,l),o.subVectors(f,l);const _=new K().crossVectors(o,d).normalize(),g={bounds:m,center:m.getCenter(new K),indices:[L,p,h],faceNormal:_,materialIndex:s.getX?s.getX(L):s.array[L*s.itemSize]};n.push(g)}return n}(t);return Re(e,0,e.length)}function zt(t){let e;if(e={width:t.data.image.width,height:t.data.image.height,data:t.data.image.data,dataFormat:"float"},t.data.type===Lt?e.data?e.data=function(a,n=1){const r=a.length/4,i=new Float32Array(3*r),s=[];for(let l=0;l<255;l++)s[l]=n*Math.pow(2,l-128)/255;for(let l=0;l<r;l++){const f=a[4*l],c=a[4*l+1],d=a[4*l+2],o=s[a[4*l+3]];i[3*l]=f*o,i[3*l+1]=c*o,i[3*l+2]=d*o}return i}(e.data,t.intensity):(e.data=function(a){const n=document.createElement("canvas"),r=n.getContext("2d");return n.width=a.width,n.height=a.height,r.drawImage(a,0,0),r.getImageData(0,0,n.width,n.height).data}(t.data.image),e.dataFormat="byte"):t.data.type==ht?console.error("Please use 'new RGBELoader().setDataType(THREE.FloatType)' to load hdr env map. Half-Float type will loss of precision and have an impression of the effect."):t.data.type!==De&&console.error(`No support environmentLight's data type: ${t.data.type.toString()}`),t.data.type===De&&t.data.format===vt){const a=t.data.image.data,n=a.length/4,r=new Float32Array(3*n);for(let i=0;i<n;i++)r[3*i+0]=a[4*i+0],r[3*i+1]=a[4*i+1],r[3*i+2]=a[4*i+2];e.data=r}return e}function Bt(t){const e=t.data,a={width:t.width+2,height:t.height+1},n=function(i,s,l){const f=new Float32Array(l*i*s);return{set(c,d,o,u){f[l*(d*i+c)+o]=u},get:(c,d,o)=>f[l*(d*i+c)+o],width:i,height:s,channels:l,array:f}}(a.width,a.height,2);for(let i=0;i<t.height;i++){const s=Math.sin(Math.PI*(i+.5)/t.height);for(let f=0;f<t.width;f++){const c=3*(i*t.width+f);let d=.2126*e[c]+.7152*e[c+1]+.0722*e[c+2];d*=s,n.set(f+2,i,0,n.get(f+1,i,0)+d/t.width),n.set(f+1,i,1,d)}const l=n.get(a.width-1,i,0);for(let f=1;f<n.width;f++)n.set(f,i,0,n.get(f,i,0)/l),n.set(f,i,1,n.get(f,i,1)/l);n.set(0,i+1,0,n.get(0,i,0)+l/t.height),n.set(0,i,1,l)}const r=n.get(0,n.height-1,0);for(let i=0;i<n.height;i++)n.set(0,i,0,n.get(0,i,0)/r),n.set(0,i,1,n.get(0,i,1)/r);return a.data=n.array,a}var Vt={source:t=>`
#define PI 3.14159265359
#define TWOPI 6.28318530718
#define INVPI 0.31830988618
#define INVPI2 0.10132118364
#define EPS 0.0001
#define ONE_MINUS_EPS 0.999999
#define INF 1000000.0
#define ROUGHNESS_MIN 0.001
#define DISNEY 0
const vec3 luminance=vec3(0.2126,0.7152,0.0722);float LGL_AV(vec3 color){return dot(color,luminance);}
#define RAY_MAX_DISTANCE 9999.0
struct Ray{vec3 o;vec3 d;vec3 LGL_BN;float LGL_BO;};struct Path{Ray ray;vec3 li;float alpha;vec3 beta;bool LGL_BQ;float LGL_BR;vec3 LGL_BS;};struct Camera{mat4 transform;float aspect;float fov;float focus;float aperture;};
#if defined(NUM_LIGHTS)
struct Lights{vec3 position[NUM_LIGHTS];vec3 emission[NUM_LIGHTS];vec3 p1[NUM_LIGHTS];vec3 p2[NUM_LIGHTS];vec4 params[NUM_LIGHTS];};struct Light{vec3 position;vec3 emission;vec3 p1;vec3 p2;float radius;float area;float type;float visible;};
#endif
struct SurfaceInteraction{bool LGL_BK;bool LGL_BI;float t;vec3 position;vec3 normal;vec3 LGL_BM;vec3 LGL_BL;vec3 tangent;vec3 bitangent;vec3 color;vec3 extinction;vec3 emissive;int LGL_BH;float roughness;float metalness;float LGL_BF;float LGL_BB;float LGL_Ay;float sheen;float LGL_Az;float clearcoat;float LGL_BA;float LGL_BC;float ior;float LGL_BE;float eta;float LGL_BD;vec3 specularColor;float LGL_BG;};struct BsdfSampleRec{vec3 L;vec3 f;float pdf;};struct LightSampleRec{vec3 normal;vec3 emission;vec3 direction;float dist;float pdf;};void LGL_AW(inout Ray ray,vec3 origin,vec3 direction){ray.o=origin;ray.d=direction;ray.LGL_BN=1.0/ray.d;ray.LGL_BO=RAY_MAX_DISTANCE;}void LGL_AW(inout Ray ray,vec3 origin,vec3 direction,float rMax){ray.o=origin;ray.d=direction;ray.LGL_BN=1.0/ray.d;ray.LGL_BO=rMax;}ivec2 LGL_AX(int i,int LGL_BT){ivec2 u;u.y=i>>LGL_BT;u.x=i-(u.y<<LGL_BT);return u;}vec4 LGL_AY(sampler2D s,int i,int LGL_BT){return texelFetch(s,LGL_AX(i,LGL_BT),0);}ivec4 LGL_AY(isampler2D s,int i,int LGL_BT){return texelFetch(s,LGL_AX(i,LGL_BT),0);}uniform Camera camera;uniform vec2 pixelSize;uniform vec2 jitter;uniform float frameCount;in vec2 vCoord;
#if defined(NUM_LIGHTS)
uniform Lights lights;
#endif
uniform int bounces;uniform vec3 backgroundColor;uniform float envMapIntensity;uniform float enviromentVisible;uniform sampler2D noiseTex;uniform float stratifiedSamples[71];uniform float strataSize;float pixelSeed;float LGL_AN(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}uvec4 seed;ivec2 pixel;void LGL_AO(float frame){pixel=ivec2(vCoord/pixelSize);seed=uvec4(pixel,int(frame),pixel.x+pixel.y);}void LGL_AP(inout uvec4 v){v=v*1664525u+1013904223u;v.x+=v.y*v.w;v.y+=v.z*v.x;v.z+=v.x*v.y;v.w+=v.y*v.z;v=v ^(v>>16u);v.x+=v.y*v.w;v.y+=v.z*v.x;v.z+=v.x*v.y;v.w+=v.y*v.z;}float LGL_AQ(){LGL_AP(seed);return float(seed.x)/float(0xffffffffu);}vec2 LGL_AQ2(){LGL_AP(seed);return vec2(seed.xy)/float(0xffffffffu);}void LGL_AS(float frame){vec2 noiseSize=vec2(textureSize(noiseTex,0));pixelSeed=texture(noiseTex,vCoord/(pixelSize*noiseSize)).r;LGL_AO(frame);}int sampleIndex=0;float LGL_AQomSample(){float stratifiedSample=stratifiedSamples[sampleIndex++];float LGL_AQom=fract((stratifiedSample+pixelSeed)*strataSize);return EPS+(1.0-2.0*EPS)*LGL_AQom;}vec2 LGL_AQomSampleVec2(){return vec2(LGL_AQomSample(),LGL_AQomSample());}struct MaterialSamples{vec2 s1;vec2 s2;vec2 s3;vec2 s4;};MaterialSamples getRandomMaterialSamples(){MaterialSamples samples;samples.s1=LGL_AQomSampleVec2();samples.s2=LGL_AQomSampleVec2();samples.s3=LGL_AQomSampleVec2();samples.s4=LGL_AQomSampleVec2();return samples;}vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}uniform Materials{vec4 colorAndMaterialType[NUM_MATERIALS];vec4 roughnessMetalnessNormalScale[NUM_MATERIALS];vec4 alphaSpecularTintSheenSheenTint[NUM_MATERIALS];vec4 clearcoaRoughnessSubfaceTransmission[NUM_MATERIALS];vec4 iorAtDistanceAnisotropicWorkflow[NUM_MATERIALS];vec4 extinction[NUM_MATERIALS];vec4 specularColorGlossiness[NUM_MATERIALS];
#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS) || defined(NUM_PBR_MAPS)
ivec4 diffuseNormalRoughnessMetalnessMapIndex[NUM_MATERIALS];
#endif
#if defined(NUM_EMISSIVE_MAPS) || defined(NUM_PBR_SG_MAPS)
ivec4 emissiveSpecularGlossinessMapIndex[NUM_MATERIALS];
#endif
#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS)
vec4 diffuseNormalMapSize[NUM_DIFFUSE_NORMAL_MAPS];
#endif
#if defined(NUM_PBR_MAPS)
vec2 pbrMapSize[NUM_PBR_MAPS];
#else
#if defined(NUM_PBR_SG_MAPS)
vec2 pbrMapSize[NUM_PBR_SG_MAPS];
#else
#if defined(NUM_EMISSIVE_MAPS)
vec2 pbrMapSize[NUM_EMISSIVE_MAPS];
#endif
#endif
#endif
}materials;
#ifdef NUM_DIFFUSE_MAPS
uniform mediump sampler2DArray diffuseMap;
#endif
#ifdef NUM_NORMAL_MAPS
uniform mediump sampler2DArray normalMap;
#endif
#ifdef NUM_PBR_MAPS
uniform mediump sampler2DArray pbrMap;
#endif
#ifdef NUM_PBR_SG_MAPS
uniform mediump sampler2DArray pbrSGMap;
#endif
#ifdef NUM_EMISSIVE_MAPS
uniform mediump sampler2DArray emissiveMap;
#endif
float LGL_p(int materialIndex){return materials.colorAndMaterialType[materialIndex].w;}float LGL_q(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].w;}vec3 LGL_r(int materialIndex,vec2 uv){vec3 emissive=vec3(0.0);
#ifdef NUM_EMISSIVE_MAPS
int emissiveMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].x;if(emissiveMapIndex>=0){emissive=texture(emissiveMap,vec3(uv*materials.pbrMapSize[emissiveMapIndex].xy,emissiveMapIndex)).rgb;}
#endif
return emissive;}vec3 LGL_s(int materialIndex,vec2 uv){vec3 specularColor=materials.specularColorGlossiness[materialIndex].rgb;
#ifdef NUM_PBR_SG_MAPS
int specularMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].y;if(specularMapIndex>=0){vec3 texelSpecular=texture(pbrSGMap,vec3(uv*materials.pbrMapSize[specularMapIndex].xy,specularMapIndex)).rgb;texelSpecular=pow(texelSpecular,vec3(2.2));specularColor*=texelSpecular;}
#endif
return specularColor;}float LGL_t(int materialIndex,vec2 uv){float glossiness=materials.specularColorGlossiness[materialIndex].a;
#ifdef NUM_PBR_SG_MAPS
int glossinessMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].z;if(glossinessMapIndex>=0){float texelGlossiness=texture(pbrSGMap,vec3(uv*materials.pbrMapSize[glossinessMapIndex].xy,glossinessMapIndex)).a;glossiness*=texelGlossiness;}
#endif
return glossiness;}float LGL_u(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float roughness=0.0;if(LGL_BG>0.1){roughness=1.0-LGL_t(materialIndex,uv);}else{roughness=materials.roughnessMetalnessNormalScale[materialIndex].x;
#ifdef NUM_PBR_MAPS
int roughnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].z;if(roughnessMapIndex>=0){roughness*=texture(pbrMap,vec3(uv*materials.pbrMapSize[roughnessMapIndex].xy,roughnessMapIndex)).g;}
#endif
}return roughness*roughness;}float LGL_v(const vec3 v){return max(v.x,max(v.y,v.z));}float LGL_w(const vec3 specularColor){return LGL_v(specularColor);}vec3 LGL_x(const vec3 baseColor,float metallic){return baseColor*(1.0-metallic);}float LGL_y(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float metalness=0.0;if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);metalness=LGL_w(specularFactor);}else{metalness=materials.roughnessMetalnessNormalScale[materialIndex].y;
#ifdef NUM_PBR_MAPS
int metalnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].w;if(metalnessMapIndex>=0){metalness*=texture(pbrMap,vec3(uv*materials.pbrMapSize[metalnessMapIndex].xy,metalnessMapIndex)).b;}
#endif
}return metalness;}vec3 LGL_z(int materialIndex,vec2 uv){vec3 color=materials.colorAndMaterialType[materialIndex].rgb;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){color*=texture(diffuseMap,vec3(uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy,diffuseMapIndex)).rgb;}
#endif
float LGL_BG=LGL_q(materialIndex);if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);color=LGL_x(color,LGL_w(specularFactor));}return color;}vec3 LGL_AA(int materialIndex,vec2 uv,vec3 normal,vec3 dp1,vec3 dp2,vec2 duv1,vec2 duv2,inout vec3 tangent,inout vec3 bitangent){vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 dpdu=dp2perp*duv1.x+dp1perp*duv2.x;vec3 dpdv=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(dpdu,dpdu),dot(dpdv,dpdv)));dpdu*=invmax;dpdv*=invmax;tangent=normalize(dpdu);bitangent=normalize(dpdv);
#ifdef NUM_NORMAL_MAPS
int normalMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].y;if(normalMapIndex>=0){vec3 n=2.0*texture(normalMap,vec3(uv*materials.diffuseNormalMapSize[normalMapIndex].zw,normalMapIndex)).rgb-1.0;n.xy*=materials.roughnessMetalnessNormalScale[materialIndex].zw;mat3 tbn=mat3(dpdu,dpdv,normal);return normalize(tbn*n);}else{return normal;}
#endif
return normal;}float LGL_AD(int materialIndex,vec2 uv){float alpha=materials.alphaSpecularTintSheenSheenTint[materialIndex].x;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){alpha*=texture(diffuseMap,vec3(uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy,diffuseMapIndex)).a;}
#endif
return alpha;}float LGL_AB(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].y;}float LGL_AC(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].z;}float LGL_ACTint(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].w;}float LGL_AF(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].x;}float LGL_AFRoughness(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].y;}float LGL_AH(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].z;}float LGL_AI(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].w;}float LGL_AJ(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].x;}float LGL_AK(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].y;}float LGL_AL(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].z;}vec3 LGL_AM(int materialIndex){return materials.extinction[materialIndex].rgb;}uniform sampler2D positionBuffer;uniform sampler2D normalBuffer;uniform sampler2D uvBuffer;uniform sampler2D bvhBuffer;struct Triangle{vec3 p0;vec3 p1;vec3 p2;};struct Box{vec3 min;vec3 max;};struct TriangleIntersect{float t;vec3 barycentric;};float LGL_f(float rad,vec3 pos,Ray r){vec3 op=pos-r.o;float eps=0.001;float b=dot(op,r.d);float det=b*b-dot(op,op)+rad*rad;if(det<0.0)return INF;det=sqrt(det);float t1=b-det;if(t1>eps)return t1;float t2=b+det;if(t2>eps)return t2;return INF;}float LGL_g(in vec3 pos,in vec3 u,in vec3 v,in vec4 plane,in Ray r){vec3 n=vec3(plane);float dt=dot(r.d,n);float t=(plane.w-dot(n,r.o))/dt;if(t>EPS){vec3 p=r.o+r.d*t;vec3 vi=p-pos;float a1=dot(u,vi);if(a1>=0.&&a1<=1.){float a2=dot(v,vi);if(a2>=0.&&a2<=1.)return t;}}return INF;}float LGL_h(vec3 v0,vec3 v1,vec3 v2,Ray r,bool isDoubleSided){vec3 edge1=v1-v0;vec3 edge2=v2-v0;vec3 pvec=cross(r.d,edge2);float det=1.0/dot(edge1,pvec);if(!isDoubleSided&&det<0.0)return INF;vec3 tvec=r.o-v0;float u=dot(tvec,pvec)*det;vec3 qvec=cross(tvec,edge1);float v=dot(r.d,qvec)*det;float t=dot(edge2,qvec)*det;return(u<0.0||u>1.0||v<0.0||u+v>1.0||t<=0.0)? INF : t;}float LGL_gClassic(vec3 v1,vec3 v2,vec3 v3,vec3 v4,Ray r,bool isDoubleSided){return min(LGL_h(v1,v3,v2,r,isDoubleSided),LGL_h(v2,v3,v4,r,isDoubleSided));}void LGL_j(inout SurfaceInteraction si,Triangle tri,vec3 barycentric,ivec3 index,vec3 LGL_BM,int materialIndex){si.LGL_BK=true;si.LGL_BM=LGL_BM;si.position=barycentric.x*tri.p0+barycentric.y*tri.p1+barycentric.z*tri.p2;ivec2 i0=LGL_AX(index.x,VERTEX_COLUMNS);ivec2 i1=LGL_AX(index.y,VERTEX_COLUMNS);ivec2 i2=LGL_AX(index.z,VERTEX_COLUMNS);vec3 n0=texelFetch(normalBuffer,i0,0).xyz;vec3 n1=texelFetch(normalBuffer,i1,0).xyz;vec3 n2=texelFetch(normalBuffer,i2,0).xyz;vec3 normal=normalize(barycentric.x*n0+barycentric.y*n1+barycentric.z*n2);vec2 uv0=texelFetch(uvBuffer,i0,0).xy;vec2 uv1=texelFetch(uvBuffer,i1,0).xy;vec2 uv2=texelFetch(uvBuffer,i2,0).xy;
#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS) || defined(NUM_PBR_MAPS)
vec2 uv=fract(barycentric.x*uv0+barycentric.y*uv1+barycentric.z*uv2);
#else
vec2 uv=vec2(0.0);
#endif
si.LGL_BH=int(LGL_p(materialIndex));si.color=LGL_z(materialIndex,uv);si.roughness=LGL_u(materialIndex,uv);si.metalness=LGL_y(materialIndex,uv);si.specularColor=LGL_s(materialIndex,uv);si.LGL_BG=LGL_q(materialIndex);si.emissive=LGL_r(materialIndex,uv);vec3 dp1=tri.p0-tri.p2;vec3 dp2=tri.p1-tri.p2;vec2 duv1=uv0-uv2;vec2 duv2=uv1-uv2;si.normal=LGL_AA(materialIndex,uv,normal,dp1,dp2,duv1,duv2,si.tangent,si.bitangent);si.LGL_Ay=LGL_AB(materialIndex);si.sheen=LGL_AC(materialIndex);si.LGL_Az=LGL_ACTint(materialIndex);si.clearcoat=LGL_AF(materialIndex);si.LGL_BA=LGL_AFRoughness(materialIndex);si.LGL_BB=LGL_AH(materialIndex);si.LGL_BC=LGL_AI(materialIndex);si.LGL_BD=LGL_AD(materialIndex,uv);si.ior=LGL_AJ(materialIndex);si.LGL_BE=LGL_AK(materialIndex);si.LGL_BF=LGL_AL(materialIndex);si.extinction=LGL_AM(materialIndex);}TriangleIntersect LGL_k(Ray r,Triangle tri){vec3 v0=tri.p0;vec3 v1=tri.p1;vec3 v2=tri.p2;TriangleIntersect ti;vec3 e0=v1-v0;vec3 e1=v2-v0;vec3 pv=cross(r.d,e1);float det=dot(e0,pv);vec3 tv=r.o-v0;vec3 qv=cross(tv,e0);vec4 uvt;uvt.x=dot(tv,pv);uvt.y=dot(r.d,qv);uvt.z=dot(e1,qv);uvt.xyz=uvt.xyz/det;uvt.w=1.0-uvt.x-uvt.y;if(uvt.z>=r.LGL_BO){return ti;}if(all(greaterThanEqual(uvt,vec4(0.0)))&&uvt.z<INF){ti.t=uvt.z;ti.barycentric=uvt.wxy;}return ti;}float LGL_l(Ray r,Box b){vec3 tBot=(b.min-r.o)*r.LGL_BN;vec3 tTop=(b.max-r.o)*r.LGL_BN;vec3 tNear=min(tBot,tTop);vec3 tFar=max(tBot,tTop);float t0=max(tNear.x,max(tNear.y,tNear.z));float t1=min(tFar.x,min(tFar.y,tFar.z));return(t0>t1||t0>r.LGL_BO)?-1.0 :(t0>0.0 ? t0 : t1);}bool LGL_m(inout Ray ray,float maxDist){
#if defined(NUM_LIGHTS)
for(int i=0;i<NUM_LIGHTS;i++){vec3 position=lights.position[i];vec3 emission=lights.emission[i];vec3 p1=lights.p1[i];vec3 p2=lights.p2[i];vec4 params=lights.params[i];float radius=params.x;float area=params.y;float type=params.z;float visible=params.w;if(type==0.||type==1.){vec3 normal=normalize(cross(p1,p2));if(dot(normal,ray.d)>0.)continue;vec4 plane=vec4(normal,dot(normal,position));p1*=1.0/dot(p1,p1);p2*=1.0/dot(p2,p2);float d=LGL_g(position,p1,p2,plane,ray);if(d>0.&&d<maxDist)return true;}if(type==1.){float d=LGL_f(radius,position,ray);if(d>0.&&d<maxDist)return true;}}
#endif
int nodesToVisit[STACK_SIZE];nodesToVisit[0]=0;int stack=0;while(stack>=0){int i=nodesToVisit[stack--];vec4 r1=LGL_AY(bvhBuffer,i,BVH_COLUMNS);vec4 r2=LGL_AY(bvhBuffer,i+1,BVH_COLUMNS);int splitAxisOrNumPrimitives=floatBitsToInt(r1.w);if(splitAxisOrNumPrimitives>=0){int splitAxis=splitAxisOrNumPrimitives;Box bbox=Box(r1.xyz,r2.xyz);if(LGL_l(ray,bbox)>0.0){if(ray.d[splitAxis]>0.0){nodesToVisit[++stack]=floatBitsToInt(r2.w);nodesToVisit[++stack]=i+2;}else{nodesToVisit[++stack]=i+2;nodesToVisit[++stack]=floatBitsToInt(r2.w);}}}else{ivec3 index=floatBitsToInt(r1.xyz);Triangle tri=Triangle(LGL_AY(positionBuffer,index.x,VERTEX_COLUMNS).xyz,LGL_AY(positionBuffer,index.y,VERTEX_COLUMNS).xyz,LGL_AY(positionBuffer,index.z,VERTEX_COLUMNS).xyz);TriangleIntersect LGL_BK=LGL_k(ray,tri);if(LGL_BK.t>0.0&&LGL_BK.t<maxDist){return true;}}}return false;}void LGL_n(inout Ray ray,inout SurfaceInteraction si,inout LightSampleRec lightSampleRec,int bounce){si.LGL_BK=false;float t=INF;float d;
#if defined(NUM_LIGHTS)
for(int i=0;i<NUM_LIGHTS;i++){vec4 params=lights.params[i];float radius=params.x;float area=params.y;float type=params.z;float visible=params.w;if(bounce==0&&visible<0.1)continue;vec3 position=lights.position[i];vec3 emission=lights.emission[i];vec3 p1=lights.p1[i];vec3 p2=lights.p2[i];if(type==0.||type==1.){vec3 normal=normalize(cross(p1,p2));if(dot(normal,ray.d)>0.)continue;vec4 plane=vec4(normal,dot(normal,position));p1*=1.0/dot(p1,p1);p2*=1.0/dot(p2,p2);d=LGL_g(position,p1,p2,plane,ray);if(d<0.)d=INF;if(d<t){t=d;float cosTheta=dot(-ray.d,normal);float pdf=(t*t)/(area*cosTheta);lightSampleRec.emission=emission;lightSampleRec.pdf=pdf;si.LGL_BK=true;si.LGL_BI=true;ray.LGL_BO=t;}}if(type==2.){d=LGL_f(radius,position,ray);if(d<0.)d=INF;if(d<t){t=d;float pdf=(t*t)/area;lightSampleRec.emission=emission;lightSampleRec.pdf=pdf;si.LGL_BK=true;si.LGL_BI=true;ray.LGL_BO=t;}}}
#endif
int nodesToVisit[STACK_SIZE];nodesToVisit[0]=0;int stack=0;while(stack>=0){int i=nodesToVisit[stack--];vec4 r1=LGL_AY(bvhBuffer,i,BVH_COLUMNS);vec4 r2=LGL_AY(bvhBuffer,i+1,BVH_COLUMNS);int splitAxisOrNumPrimitives=floatBitsToInt(r1.w);if(splitAxisOrNumPrimitives>=0){int splitAxis=splitAxisOrNumPrimitives;Box bbox=Box(r1.xyz,r2.xyz);if(LGL_l(ray,bbox)>0.0){if(ray.d[splitAxis]>0.0){nodesToVisit[++stack]=floatBitsToInt(r2.w);nodesToVisit[++stack]=i+2;}else{nodesToVisit[++stack]=i+2;nodesToVisit[++stack]=floatBitsToInt(r2.w);}}}else{ivec3 index=floatBitsToInt(r1.xyz);Triangle tri=Triangle(LGL_AY(positionBuffer,index.x,VERTEX_COLUMNS).xyz,LGL_AY(positionBuffer,index.y,VERTEX_COLUMNS).xyz,LGL_AY(positionBuffer,index.z,VERTEX_COLUMNS).xyz);TriangleIntersect LGL_BK=LGL_k(ray,tri);if(LGL_BK.t>0.0){int materialIndex=floatBitsToInt(r2.w);vec3 LGL_BM=r2.xyz;si.t=LGL_BK.t;si.LGL_BI=false;ray.LGL_BO=LGL_BK.t;LGL_j(si,tri,LGL_BK.barycentric,index,LGL_BM,materialIndex);si.LGL_BL=dot(si.LGL_BM,ray.d)<=0.0 ? si.normal :-si.normal;}}}si.roughness=clamp(si.roughness,ROUGHNESS_MIN,1.0);si.metalness=clamp(si.metalness,0.0,1.0);}void LGL_o(inout Ray ray,inout SurfaceInteraction si,inout LightSampleRec lightSampleRec,int depth){if(si.LGL_BK&&!si.LGL_BI&&si.LGL_BD<1.0){float LGL_BJ=LGL_AQ();while(si.LGL_BK&&!si.LGL_BI&&LGL_BJ>si.LGL_BD){LGL_AW(ray,si.position+EPS*ray.d,ray.d);LGL_n(ray,si,lightSampleRec,depth);}}}
#ifndef CONST_COLOR_ENV
uniform sampler2D envMap;uniform sampler2D envMapDistribution;vec2 LGL_Y(vec3 pointOnSphere){float phi=mod(atan(-pointOnSphere.z,-pointOnSphere.x),TWOPI);float theta=acos(pointOnSphere.y);return vec2(phi*0.5*INVPI,theta*INVPI);}vec3 LGL_Z(vec3 d){vec2 uv=LGL_Y(d);return LGL_An(envMap,uv).rgb;}float LGL_a(float u,out int vOffset,out float pdf){ivec2 size=textureSize(envMap,0);int left=0;int right=size.y+1;while(left<right){int mid=(left+right)>>1;float s=texelFetch(envMapDistribution,ivec2(0,mid),0).x;if(s<=u){left=mid+1;}else{right=mid;}}vOffset=left-1;vec2 s0=texelFetch(envMapDistribution,ivec2(0,vOffset),0).xy;vec2 s1=texelFetch(envMapDistribution,ivec2(0,vOffset+1),0).xy;pdf=s0.y;return(float(vOffset)+(u-s0.x)/(s1.x-s0.x))/float(size.y);}float LGL_b(float u,int vOffset,out float pdf){ivec2 size=textureSize(envMap,0);int left=0;int right=size.x+1;while(left<right){int mid=(left+right)>>1;float s=texelFetch(envMapDistribution,ivec2(1+mid,vOffset),0).x;if(s<=u){left=mid+1;}else{right=mid;}}int uOffset=left-1;vec2 s0=texelFetch(envMapDistribution,ivec2(1+uOffset,vOffset),0).xy;vec2 s1=texelFetch(envMapDistribution,ivec2(1+uOffset+1,vOffset),0).xy;pdf=s0.y;return(float(uOffset)+(u-s0.x)/(s1.x-s0.x))/float(size.x);}float LGL_c(vec2 uv){vec2 size=vec2(textureSize(envMap,0));float sinTheta=sin(uv.y*PI);uv*=size;float partialX=texelFetch(envMapDistribution,ivec2(1.0+uv.x,uv.y),0).y;float partialY=texelFetch(envMapDistribution,ivec2(0,uv.y),0).y;return partialX*partialY*INVPI2/(2.0*sinTheta);}vec3 LGL_d(vec2 LGL_AQom,out vec2 uv,out float pdf){vec2 partialPdf;int vOffset;uv.y=LGL_a(LGL_AQom.x,vOffset,partialPdf.y);uv.x=LGL_b(LGL_AQom.y,vOffset,partialPdf.x);float phi=uv.x*TWOPI;float theta=uv.y*PI;float cosTheta=cos(theta);float sinTheta=sin(theta);float cosPhi=cos(phi);float sinPhi=sin(phi);vec3 dir=vec3(-sinTheta*cosPhi,cosTheta,-sinTheta*sinPhi);pdf=partialPdf.x*partialPdf.y*INVPI2/(2.0*sinTheta);return dir;}
#endif
void LGL_AZ(in vec3 N,inout vec3 T,inout vec3 B){if(N.z<-0.999999){T=vec3(0.,-1.,0.);B=vec3(-1.,0.,0.);}else{float a=1.0/(1.+N.z);float b=-N.x*N.y*a;T=vec3(1.0-N.x*N.x*a,b,-N.x);B=vec3(b,1.-N.y*N.y*a,-N.y);}}vec3 LGL_Am(vec3 V,float rgh,float r1,float r2){vec3 Vh=normalize(vec3(rgh*V.x,rgh*V.y,V.z));float lensq=Vh.x*Vh.x+Vh.y*Vh.y;vec3 T1=lensq>0. ? vec3(-Vh.y,Vh.x,0)*inversesqrt(lensq): vec3(1.,0.,0.);vec3 T2=cross(Vh,T1);float r=sqrt(r1);float phi=2.0*PI*r2;float t1=r*cos(phi);float t2=r*sin(phi);float s=0.5*(1.0+Vh.z);t2=(1.0-s)*sqrt(1.0-t1*t1)+s*t2;vec3 Nh=t1*T1+t2*T2+sqrt(max(0.0,1.0-t1*t1-t2*t2))*Vh;return normalize(vec3(rgh*Nh.x,rgh*Nh.y,max(0.0,Nh.z)));}vec2 LGL_Aa(vec2 p){p=2.0*p-1.0;bool greater=abs(p.x)>abs(p.y);float r=greater ? p.x : p.y;float theta=greater ? 0.25*PI*p.y/p.x : PI*(0.5-0.25*p.x/p.y);return r*vec2(cos(theta),sin(theta));}vec3 LGL_Ab(vec2 p){vec2 h=LGL_Aa(p);float z=sqrt(max(0.0,1.0-h.x*h.x-h.y*h.y));return vec3(h,z);}vec3 LGL_Ac(float r1,float r2){float z=1.0-2.0*r1;float r=sqrt(max(0.0,1.0-z*z));float phi=TWOPI*r2;return vec3(r*cos(phi),r*sin(phi),z);}vec3 LGL_Ad(vec3 LGL_BM,vec3 viewDir,mat3 basis,float roughness,vec2 LGL_AQom){float phi=TWOPI*LGL_AQom.y;float alpha=roughness*roughness;float cosTheta=sqrt((1.0-LGL_AQom.x)/(1.0+(alpha*alpha-1.0)*LGL_AQom.x));float sinTheta=sqrt(1.0-cosTheta*cosTheta);vec3 halfVector=basis*sign(dot(LGL_BM,viewDir))*vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);vec3 lightDir=reflect(-viewDir,halfVector);return lightDir;}vec3 LGL_Ae(vec3 LGL_BM,vec3 viewDir,mat3 basis,vec2 LGL_AQom){return basis*sign(dot(LGL_BM,viewDir))*LGL_Ab(LGL_AQom);}float LGL_Af(float f,float g){return(f*f)/(f*f+g*g);}vec3 LGL_Ag(in Ray r,int depth,in LightSampleRec lightSampleRec,in BsdfSampleRec bsdfSampleRec){vec3 Le;if(depth==0){Le=lightSampleRec.emission;}else{Le=LGL_Af(bsdfSampleRec.pdf,lightSampleRec.pdf)*lightSampleRec.emission;}return Le;}
#if defined(NUM_LIGHTS)
void LGL_Ah(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec,vec2 LGL_AQom){float r1=LGL_AQom.x;float r2=LGL_AQom.y;vec3 lightSurfacePos=light.position+LGL_Ac(r1,r2)*light.radius;lightSampleRec.direction=lightSurfacePos-surfacePos;lightSampleRec.dist=length(lightSampleRec.direction);float distSq=lightSampleRec.dist*lightSampleRec.dist;lightSampleRec.direction/=lightSampleRec.dist;lightSampleRec.normal=normalize(lightSurfacePos-light.position);lightSampleRec.emission=light.emission*float(NUM_LIGHTS);lightSampleRec.pdf=distSq/(light.area*abs(dot(lightSampleRec.normal,lightSampleRec.direction)));}void LGL_Aj(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec,vec2 LGL_AQom){float r1=LGL_AQom.x;float r2=LGL_AQom.y;vec3 lightSurfacePos=light.position+light.p1*r1+light.p2*r2;lightSampleRec.direction=lightSurfacePos-surfacePos;lightSampleRec.dist=length(lightSampleRec.direction);float distSq=lightSampleRec.dist*lightSampleRec.dist;lightSampleRec.direction/=lightSampleRec.dist;lightSampleRec.normal=normalize(cross(light.p1,light.p2));lightSampleRec.emission=light.emission*float(NUM_LIGHTS);lightSampleRec.pdf=distSq/(light.area*abs(dot(lightSampleRec.normal,lightSampleRec.direction)));}void LGL_Ak(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec){lightSampleRec.direction=normalize(light.position-light.p1);lightSampleRec.normal=normalize(surfacePos-light.position);if(dot(lightSampleRec.direction,lightSampleRec.normal)>0.0){lightSampleRec.normal=-lightSampleRec.normal;}lightSampleRec.emission=light.emission*float(NUM_LIGHTS);lightSampleRec.dist=INF;lightSampleRec.pdf=1.0;}void samplePointLight(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec){lightSampleRec.direction=light.position-surfacePos;lightSampleRec.dist=length(lightSampleRec.direction);float distSq=lightSampleRec.dist*lightSampleRec.dist;lightSampleRec.direction=normalize(lightSampleRec.direction);lightSampleRec.normal=normalize(surfacePos-light.position);lightSampleRec.emission=light.emission*float(NUM_LIGHTS)/distSq;lightSampleRec.pdf=1.0;}void LGL_Al(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec,vec2 LGL_AQom){int type=int(light.type);if(type==0||type==1){LGL_Aj(light,surfacePos,lightSampleRec,LGL_AQom);}else if(type==2){LGL_Ah(light,surfacePos,lightSampleRec,LGL_AQom);}else if(type==3){LGL_Ak(light,surfacePos,lightSampleRec);}else if(type==4){samplePointLight(light,surfacePos,lightSampleRec);}}
#endif
vec3 LocalToWorld(vec3 X,vec3 Y,vec3 Z,vec3 V){return vec3(X.x*V.x+Y.x*V.y+Z.x*V.z,X.y*V.x+Y.y*V.y+Z.y*V.z,X.z*V.x+Y.z*V.y+Z.z*V.z);}vec3 WorldToLocal(vec3 X,vec3 Y,vec3 Z,vec3 V){return vec3(dot(V,X),dot(V,Y),dot(V,Z));}vec3 LGL_A(float r1,float r2){vec3 dir;float r=sqrt(r1);float phi=TWOPI*r2;dir.x=r*cos(phi);dir.y=r*sin(phi);dir.z=sqrt(max(0.0,1.0-dir.x*dir.x-dir.y*dir.y));return dir;}float LGL_B(float eta){float sqrtR0=(eta-1.)/(eta+1.);return sqrtR0*sqrtR0;}vec3 LGL_C(vec3 baseColor){float luminance=LGL_AV(baseColor);return(luminance>0.0)? baseColor/luminance : vec3(1.);}void LGL_D(SurfaceInteraction si,out vec3 Cspec0,out vec3 Csheen){vec3 tint=LGL_C(si.color);if(si.LGL_BG>0.1){Cspec0=si.specularColor;}else{Cspec0=mix(LGL_B(si.ior)*mix(vec3(1.0),tint,min(si.LGL_Ay,0.99)),si.color,si.metalness);}Csheen=mix(vec3(1.0),tint,si.LGL_Az);}float LGL_E(float u){float m=clamp(1.0-u,0.0,1.0);float m2=m*m;return m2*m2*m;}float LGL_F(float F0,float cosTheta){return mix(F0,1.0,LGL_E(cosTheta));}vec3 LGL_F(vec3 F0,float cosTheta){return mix(F0,vec3(1.),LGL_E(cosTheta));}float LGL_G(float cosThetaI,float eta){float sinThetaTSq=eta*eta*(1.0f-cosThetaI*cosThetaI);if(sinThetaTSq>1.0)return 1.0;float cosThetaT=sqrt(max(1.0-sinThetaTSq,0.0));float rs=(eta*cosThetaT-cosThetaI)/(eta*cosThetaT+cosThetaI);float rp=(eta*cosThetaI-cosThetaT)/(eta*cosThetaI+cosThetaT);return 0.5*(rs*rs+rp*rp);}vec3 LGL_H(vec3 F0,float metalness,float eta,float cosThetaI){vec3 FrSchlick=LGL_F(F0,cosThetaI);float FrDielectric=LGL_G(cosThetaI,eta);return mix(vec3(FrDielectric),FrSchlick,metalness);}float LGL_H(float metalness,float eta,float cosThetaI){float FrSchlick=LGL_E(cosThetaI);float FrDielectric=LGL_G(cosThetaI,eta);return mix(FrDielectric,FrSchlick,metalness);}float LGL_I(float NDotV,float alphaG){float a=alphaG*alphaG;float b=NDotV*NDotV;return 1.0/(NDotV+sqrt(a+b-a*b));}float LGL_J(float NDotH,float alpha){float alpha2=alpha*alpha;float t=1.0+(alpha2-1.0)*NDotH*NDotH;return(alpha2-1.0)/(PI*log(alpha2)*t);}float LGL_K(float NDotH,float a){float a2=a*a;float t=1.0+(a2-1.0)*NDotH*NDotH;return a2/(PI*t*t);}vec3 ImportanceSampleLGL_J(float rgh,float r1,float r2){float a=max(0.001,rgh);float a2=a*a;float phi=r1*TWOPI;float cosTheta=sqrt((1.0-pow(a2,1.0-r1))/(1.0-a2));float sinTheta=clamp(sqrt(1.0-(cosTheta*cosTheta)),0.0,1.0);float sinPhi=sin(phi);float cosPhi=cos(phi);return vec3(sinTheta*cosPhi,sinTheta*sinPhi,cosTheta);}vec3 ImportanceSampleLGL_K(float rgh,float r1,float r2){float a=max(0.001,rgh);float phi=r1*TWOPI;float cosTheta=sqrt((1.0-r2)/(1.0+(a*a-1.0)*r2));float sinTheta=clamp(sqrt(1.0-(cosTheta*cosTheta)),0.0,1.0);float sinPhi=sin(phi);float cosPhi=cos(phi);return vec3(sinTheta*cosPhi,sinTheta*sinPhi,cosTheta);}vec3 LGL_N(SurfaceInteraction si,vec3 Csheen,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z<=0.0)return vec3(0.0);pdf=L.z*INVPI;float LDotH=dot(L,H);float FL=LGL_E(L.z);float FV=LGL_E(V.z);float Fh=LGL_E(LDotH);float Fd90=0.5+2.0*LDotH*LDotH*si.roughness;float Fd=mix(1.0,Fd90,FL)*mix(1.0,Fd90,FV);float Fss90=LDotH*LDotH*si.roughness;float Fss=mix(1.0,Fss90,FL)*mix(1.0,Fss90,FV);float DisneyFakeSS=1.25*(Fss*(1.0/(L.z+V.z)-0.5)+0.5);vec3 Fsheen=Fh*si.sheen*Csheen;return(INVPI*mix(Fd,DisneyFakeSS,si.LGL_BB)*si.color+Fsheen)*(1.0-si.metalness)*(1.0-si.LGL_BC);}vec3 LGL_O(SurfaceInteraction si,vec3 Cspec0,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z<=0.0)return vec3(0.0);float LDotH=dot(L,H);float D=LGL_K(H.z,si.roughness);pdf=D*H.z/(4.0*LDotH);vec3 F=LGL_H(Cspec0,si.metalness,si.eta,LDotH);float G=LGL_I(abs(L.z),si.roughness)*LGL_I(abs(V.z),si.roughness);return F*D*G;}vec3 LGL_P(SurfaceInteraction si,vec3 Cspec0,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z>=0.0)return vec3(0.0);float F=LGL_G(abs(dot(V,H)),si.eta);float D=LGL_K(H.z,si.roughness);float denomSqrt=dot(L,H)+dot(V,H)*si.eta;pdf=D*H.z*abs(dot(L,H))/(denomSqrt*denomSqrt);float G=LGL_I(abs(L.z),si.roughness)*LGL_I(abs(V.z),si.roughness);vec3 specColor=pow(si.color,vec3(0.5));return specColor*(1.0-si.metalness)*si.LGL_BC*(1.0-F)*D*G*abs(dot(V,H))*abs(dot(L,H))*4.0*si.eta*si.eta/(denomSqrt*denomSqrt);}vec3 LGL_Q(SurfaceInteraction si,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z<=0.0)return vec3(0.0);float LDotH=dot(L,H);float F=LGL_F(.04,LDotH);float D=LGL_J(H.z,mix(0.1,0.001,1.-si.LGL_BA));pdf=D*H.z/(4.0*LDotH);float G=LGL_I(L.z,0.25)*LGL_I(V.z,0.25);return vec3(0.25*si.clearcoat*F*D*G);}void LGL_R(SurfaceInteraction si,vec3 Cspec0,float fresnelWeight,out float LGL_S,out float LGL_T,out float LGL_U,out float LGL_V){LGL_S=max(LGL_AV(si.color),si.sheen)*(1.0-si.metalness)*(1.0-si.LGL_BC);LGL_T=LGL_AV(Cspec0);LGL_U=(1.0-fresnelWeight)*(1.0-si.metalness)*si.LGL_BC*LGL_AV(si.color);LGL_V=si.clearcoat*(1.0-si.metalness);float weightSum=LGL_S+LGL_T+LGL_U+LGL_V;LGL_S/=weightSum;LGL_T/=weightSum;LGL_U/=weightSum;LGL_V/=weightSum;}vec3 LGL_W(SurfaceInteraction si,vec3 V,vec3 N,out vec3 L,out float pdf,MaterialSamples LGL_AQomSamples){pdf=0.0;vec3 f=vec3(0.0);vec2 bounceDirSample=LGL_AQomSamples.s3;vec2 diffuseOrSpecular=LGL_AQomSamples.s4;float r1=bounceDirSample.x;float r2=bounceDirSample.y;vec3 Cspec0,Csheen;LGL_D(si,Cspec0,Csheen);vec3 T,B;LGL_AZ(N,T,B);V=WorldToLocal(T,B,N,V);float LGL_S,LGL_T,LGL_U,LGL_V;float fresnelWeight=LGL_H(si.metalness,si.eta,V.z);LGL_R(si,Cspec0,fresnelWeight,LGL_S,LGL_T,LGL_U,LGL_V);float cdf[4];cdf[0]=LGL_S;cdf[1]=cdf[0]+LGL_T;cdf[2]=cdf[1]+LGL_U;cdf[3]=cdf[2]+LGL_V;if(r1<cdf[0]){r1/=cdf[0];L=LGL_A(r1,r2);vec3 H=normalize(L+V);f=LGL_N(si,Csheen,V,L,H,pdf);pdf*=LGL_S;}else if(r1<cdf[1]){r1=(r1-cdf[0])/(cdf[1]-cdf[0]);vec3 H=ImportanceSampleLGL_K(si.roughness,r1,r2);if(dot(V,H)<0.0)H=-H;L=normalize(reflect(-V,H));f=LGL_O(si,Cspec0,V,L,H,pdf);pdf*=LGL_T;}else if(r1<cdf[2]){r1=(r1-cdf[1])/(cdf[2]-cdf[1]);vec3 H=ImportanceSampleLGL_K(si.roughness,r1,r2);if(dot(V,H)<0.0)H=-H;vec3 R=reflect(-V,H);L=normalize(refract(-V,H,si.eta));f=LGL_P(si,Cspec0,V,L,H,pdf);pdf*=LGL_U;}else{r1=(r1-cdf[2])/(1.0-cdf[2]);vec3 H=ImportanceSampleLGL_J(mix(0.1,0.001,1.-si.LGL_BA),r1,r2);if(dot(V,H)<0.0)H=-H;L=normalize(reflect(-V,H));f=LGL_Q(si,V,L,H,pdf);pdf*=LGL_V;}L=LocalToWorld(T,B,N,L);return f*abs(dot(N,L));}vec3 LGL_X(inout SurfaceInteraction si,vec3 V,vec3 L,out float bsdfPdf){bsdfPdf=0.0;vec3 f=vec3(0.0);vec3 N=si.LGL_BL;vec3 T,B;LGL_AZ(N,T,B);V=WorldToLocal(T,B,N,V);L=WorldToLocal(T,B,N,L);vec3 H;if(L.z>0.0){H=normalize(L+V);}else{H=normalize(L+V*si.eta);}if(dot(V,H)<0.0){H=-H;}vec3 Cspec0,Csheen;LGL_D(si,Cspec0,Csheen);float LGL_S,LGL_T,LGL_U,LGL_V;float fresnelWeight=LGL_H(si.metalness,si.eta,abs(dot(L,H)));LGL_R(si,Cspec0,fresnelWeight,LGL_S,LGL_T,LGL_U,LGL_V);float pdf;if(LGL_S>0.0&&L.z>0.0){f+=LGL_N(si,Csheen,V,L,H,pdf);bsdfPdf+=pdf*LGL_S;}if(LGL_T>0.0&&L.z>0.0&&V.z>0.0){f+=LGL_O(si,Cspec0,V,L,H,pdf);bsdfPdf+=pdf*LGL_T;}if(LGL_U>0.0&&L.z<0.0){f+=LGL_P(si,Cspec0,V,L,H,pdf);bsdfPdf+=pdf*LGL_U;}if(LGL_V>0.0&&L.z>0.0&&V.z>0.0){f+=LGL_Q(si,V,L,H,pdf);bsdfPdf+=pdf*LGL_V;}return f*abs(L.z);}vec3 LGL_e(inout SurfaceInteraction si,in Path path,in vec2 s1,in vec2 s2){si.eta=dot(si.normal,si.LGL_BL)>0.0 ?(1.0/si.ior): si.ior;vec3 viewDir=-path.ray.d;vec3 surfacePos=si.position+EPS*si.normal;vec3 Li=vec3(0.0);BsdfSampleRec bsdfSampleRec;vec2 lightDirSample=s1;vec2 envDirSample=s2;vec3 lightDir;vec2 uv;float lightPdf;bool brdfSample=false;
#ifndef CONST_COLOR_ENV
lightDir=LGL_d(envDirSample,uv,lightPdf);LGL_AW(path.ray,surfacePos,lightDir);if(!LGL_m(path.ray,INF-EPS)){vec3 irr=LGL_An(envMap,uv).rgb*envMapIntensity;bsdfSampleRec.f=LGL_X(si,viewDir,lightDir,bsdfSampleRec.pdf);if(bsdfSampleRec.pdf>0.0){float LGL_BR=LGL_Af(lightPdf,bsdfSampleRec.pdf);if(LGL_BR>0.0){Li+=LGL_BR*bsdfSampleRec.f*irr/lightPdf;}}}
#endif
#if defined(NUM_LIGHTS)
LightSampleRec lightSampleRec;Light light;int i=int(lightDirSample.x*float(NUM_LIGHTS));vec3 position=lights.position[i];vec3 emission=lights.emission[i];vec3 p1=lights.p1[i];vec3 p2=lights.p2[i];vec4 params=lights.params[i];float radius=params.x;float area=params.y;float type=params.z;float visible=params.w;light=Light(position,emission,p1,p2,radius,area,type,visible);LGL_Al(light,surfacePos,lightSampleRec,lightDirSample);if(dot(lightSampleRec.direction,lightSampleRec.normal)<0.0){LGL_AW(path.ray,surfacePos,lightSampleRec.direction);if(!LGL_m(path.ray,lightSampleRec.dist-EPS)){bsdfSampleRec.f=LGL_X(si,viewDir,lightSampleRec.direction,bsdfSampleRec.pdf);float LGL_BR=1.0;if(light.area>0.0&&bsdfSampleRec.pdf>0.0){LGL_BR=LGL_Af(lightSampleRec.pdf,bsdfSampleRec.pdf);}if(LGL_BR>0.0){Li+=LGL_BR*bsdfSampleRec.f*lightSampleRec.emission/lightSampleRec.pdf;}}}
#endif
return Li;}layout(location=0)out vec4 out_light;void bounce(inout Path path,int depth,inout SurfaceInteraction si,inout BsdfSampleRec bsdfSampleRec,in LightSampleRec lightSampleRec){if(!si.LGL_BK){if(depth==0&&enviromentVisible==0.){path.alpha=0.0;path.LGL_BQ=true;return;}
#ifdef CONST_COLOR_ENV
path.li+=backgroundColor*path.beta;path.LGL_BQ=true;return;
#else
float LGL_BR=1.0;if(depth>0){float lightPdf=LGL_c(LGL_Y(path.ray.d));LGL_BR=LGL_Af(bsdfSampleRec.pdf,lightPdf);}vec3 irr=LGL_Z(path.ray.d)*envMapIntensity;path.li+=LGL_BR*path.beta*irr;path.LGL_BQ=true;return;
#endif
}if(si.LGL_BI){path.li+=LGL_Ag(path.ray,depth,lightSampleRec,bsdfSampleRec)*path.beta;path.LGL_BQ=true;return;}if(dot(si.normal,si.LGL_BL)>0.0){path.LGL_BS=vec3(0.0);}path.li+=path.beta*si.emissive;path.beta*=exp(-path.LGL_BS*si.t);MaterialSamples LGL_AQomSamples=getRandomMaterialSamples();if(si.LGL_BH==DISNEY){path.li+=LGL_e(si,path,LGL_AQomSamples.s1,LGL_AQomSamples.s2)*path.beta;}bsdfSampleRec.f=LGL_W(si,-path.ray.d,si.LGL_BL,bsdfSampleRec.L,bsdfSampleRec.pdf,LGL_AQomSamples);if(dot(si.LGL_BL,bsdfSampleRec.L)<0.0){path.LGL_BS=-log(si.extinction)/si.LGL_BE;}if(bsdfSampleRec.pdf>0.0){path.beta*=bsdfSampleRec.f/bsdfSampleRec.pdf;}else{path.LGL_BQ=true;return;}if(depth>=2){float q=1.0-LGL_AV(path.beta);if(LGL_AQomSample()<q){path.LGL_BQ=true;return;}path.beta/=1.0-q;}LGL_AW(path.ray,si.position+EPS*bsdfSampleRec.L,bsdfSampleRec.L);}vec4 LGL_Ao(inout Ray ray){SurfaceInteraction si;Path path;BsdfSampleRec bsdfSampleRec;LightSampleRec lightSampleRec;path.ray=ray;path.li=vec3(0);path.alpha=1.0;path.LGL_BQ=false;path.LGL_BR=1.0;path.LGL_BS=vec3(0.0);path.beta=vec3(1.0);for(int i=0;i<bounces;i++){if(path.LGL_BQ){return vec4(path.li,path.alpha);}LGL_n(path.ray,si,lightSampleRec,i);LGL_o(path.ray,si,lightSampleRec,i);bounce(path,i,si,bsdfSampleRec,lightSampleRec);}return vec4(path.li,path.alpha);}void main(){LGL_AS(frameCount);vec2 vCoordAntiAlias=vCoord+jitter;vec3 direction=normalize(vec3(vCoordAntiAlias-0.5,-1.0)*vec3(camera.aspect,1.0,camera.fov));
#ifdef USE_LENS_CAMERA
vec2 lensPoint=camera.aperture*LGL_Aa(vec2(LGL_AN(vCoordAntiAlias)));vec3 focusPoint=-direction*camera.focus/direction.z;vec3 origin=vec3(lensPoint,0.0);direction=normalize(focusPoint-origin);origin=vec3(camera.transform*vec4(origin,1.0));direction=mat3(camera.transform)*direction;
#else
vec3 origin=camera.transform[3].xyz;direction=mat3(camera.transform)*direction;
#endif
Ray cam;LGL_AW(cam,origin,direction);vec4 liAndAlpha=LGL_Ao(cam);if(!(liAndAlpha.x<INF&&liAndAlpha.x>-EPS)){liAndAlpha=vec4(0,0,0,1);}out_light=liAndAlpha;}`};function Ct(t,e){const a=[],n=t**e;for(let l=0;l<n;l++)a[l]=l;let r=a.length;const i=[];function s(){r=0}return{next:function(){r>=a.length&&(function(f){for(let c=f.length-1;c>0;c--){const d=Math.floor(Math.random()*(c+1)),o=f[c];f[c]=f[d],f[d]=o}}(a),s());let l=a[r++];for(let f=0;f<e;f++)i[f]=l%t+Math.random(),l=Math.floor(l/t);return i},restart:s,strataCount:t}}function nt(t,e){const a=[];for(const r of e)a.push(Ct(t,r));const n=[];return{next:function(){let r=0;for(const i of a){const s=i.next();for(const l of s)n[r++]=l}return n},restart:function(){for(const r of a)r.restart()},strataCount:t}}const it="IWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NsYXNzIHR7Y29uc3RydWN0b3IodD0wLGU9MCxpPTApe3RoaXMueD10LHRoaXMueT1lLHRoaXMuej1pfWxlbmd0aCgpe3JldHVybiBNYXRoLnNxcnQodGhpcy54KnRoaXMueCt0aGlzLnkqdGhpcy55K3RoaXMueip0aGlzLnopfWFkZFZlY3RvcnModCxlKXtyZXR1cm4gdGhpcy54PXQueCtlLngsdGhpcy55PXQueStlLnksdGhpcy56PXQueitlLnosdGhpc31zdWJWZWN0b3JzKHQsZSl7cmV0dXJuIHRoaXMueD10LngtZS54LHRoaXMueT10LnktZS55LHRoaXMuej10LnotZS56LHRoaXN9bXVsdGlwbHlTY2FsYXIodCl7cmV0dXJuIHRoaXMueCo9dCx0aGlzLnkqPXQsdGhpcy56Kj10LHRoaXN9ZGl2aWRlKHQpe3JldHVybiB0aGlzLngvPXQueCx0aGlzLnkvPXQueSx0aGlzLnovPXQueix0aGlzfWRpdmlkZVNjYWxhcih0KXtyZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigxL3QpfW1pbih0KXtyZXR1cm4gdGhpcy54PU1hdGgubWluKHRoaXMueCx0LngpLHRoaXMueT1NYXRoLm1pbih0aGlzLnksdC55KSx0aGlzLno9TWF0aC5taW4odGhpcy56LHQueiksdGhpc31tYXgodCl7cmV0dXJuIHRoaXMueD1NYXRoLm1heCh0aGlzLngsdC54KSx0aGlzLnk9TWF0aC5tYXgodGhpcy55LHQueSksdGhpcy56PU1hdGgubWF4KHRoaXMueix0LnopLHRoaXN9ZG90KHQpe3JldHVybiB0aGlzLngqdC54K3RoaXMueSp0LnkrdGhpcy56KnQuen1ub3JtYWxpemUoKXtyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKXx8MSl9Y3Jvc3NWZWN0b3JzKHQsZSl7Y29uc3QgaT10Lngsbj10Lnkscj10Lnoscz1lLngsbz1lLnksaD1lLno7cmV0dXJuIHRoaXMueD1uKmgtcipvLHRoaXMueT1yKnMtaSpoLHRoaXMuej1pKm8tbipzLHRoaXN9ZnJvbUJ1ZmZlckF0dHJpYnV0ZSh0LGUsaSl7cmV0dXJuIHZvaWQgMCE9PWkmJmNvbnNvbGUud2FybigiVEhSRUUuVmVjdG9yMzogb2Zmc2V0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSAuZnJvbUJ1ZmZlckF0dHJpYnV0ZSgpLiIpLHRoaXMueD10LmdldFgoZSksdGhpcy55PXQuZ2V0WShlKSx0aGlzLno9dC5nZXRaKGUpLHRoaXN9fWNsYXNzIGV7Y29uc3RydWN0b3IoZT1uZXcgdCgxLzAsMS8wLDEvMCksaT1uZXcgdCgtMS8wLC0xLzAsLTEvMCkpe3RoaXMubWluPWUsdGhpcy5tYXg9aX1pc0VtcHR5KCl7cmV0dXJuIHRoaXMubWF4Lng8dGhpcy5taW4ueHx8dGhpcy5tYXgueTx0aGlzLm1pbi55fHx0aGlzLm1heC56PHRoaXMubWluLnp9Z2V0Q2VudGVyKHQpe3JldHVybiB0aGlzLmlzRW1wdHkoKT90LnNldCgwLDAsMCk6dC5hZGRWZWN0b3JzKHRoaXMubWluLHRoaXMubWF4KS5tdWx0aXBseVNjYWxhciguNSl9Z2V0U2l6ZSh0KXtyZXR1cm4gdGhpcy5pc0VtcHR5KCk/dC5zZXQoMCwwLDApOnQuc3ViVmVjdG9ycyh0aGlzLm1heCx0aGlzLm1pbil9ZXhwYW5kQnlQb2ludCh0KXtyZXR1cm4gdGhpcy5taW4ubWluKHQpLHRoaXMubWF4Lm1heCh0KSx0aGlzfXVuaW9uKHQpe3JldHVybiB0aGlzLm1pbi5taW4odC5taW4pLHRoaXMubWF4Lm1heCh0Lm1heCksdGhpc319ZnVuY3Rpb24gaSh0LGUsaSl7Y29uc3Qgbj10W2ldO3RbaV09dFtlXSx0W2VdPW59Y29uc3Qgbj1uZXcgdDtmdW5jdGlvbiByKHQsZSl7cmV0dXJue3ByaW1pdGl2ZXM6dCxib3VuZHM6ZX19ZnVuY3Rpb24gcyh0LGUsaSl7bGV0IG49aVtlXS10Lm1pbltlXTtyZXR1cm4gdC5tYXhbZV0+dC5taW5bZV0mJihuLz10Lm1heFtlXS10Lm1pbltlXSksbn1mdW5jdGlvbiBvKHQpe3JldHVybiB0LmdldFNpemUobiksMioobi54Km4ueituLngqbi55K24ueipuLnkpfWZ1bmN0aW9uIGgodCxhLHUpe2NvbnN0IGw9bmV3IGU7Zm9yKGxldCBlPWE7ZTx1O2UrKylsLnVuaW9uKHRbZV0uYm91bmRzKTtjb25zdCBjPXUtYTtpZigxPT09YylyZXR1cm4gcih0LnNsaWNlKGEsdSksbCk7e2NvbnN0IHk9bmV3IGU7Zm9yKGxldCBlPWE7ZTx1O2UrKyl5LmV4cGFuZEJ5UG9pbnQodFtlXS5jZW50ZXIpO2NvbnN0IHo9KHkuZ2V0U2l6ZShuKSxuLng+bi56P24ueD5uLnk/IngiOiJ5IjpuLno+bi55PyJ6IjoieSIpO2xldCBkPU1hdGguZmxvb3IoKGErdSkvMik7aWYoYzw9NCkhZnVuY3Rpb24odCxlLG49MCxyPXQubGVuZ3RoLHM9TWF0aC5mbG9vcigobityKS8yKSl7Zm9yKGxldCBvPW47bzw9cztvKyspe2xldCBuPW8scz10W29dO2ZvcihsZXQgaD1vKzE7aDxyO2grKyllKHMsdFtoXSl8fChuPWgscz10W2hdLGkodCxvLG4pKX19KHQsKCh0LGUpPT50LmNlbnRlclt6XTxlLmNlbnRlclt6XSksYSx1LGQpO2Vsc2V7aWYoeS5tYXhbel09PT15Lm1pblt6XSlyZXR1cm4gcih0LnNsaWNlKGEsdSksbCk7e2NvbnN0IG49MTIscj1bXTtmb3IobGV0IHQ9MDt0PG47dCsrKXIucHVzaCh7Ym91bmRzOm5ldyBlLGNvdW50OjB9KTtmb3IobGV0IGU9YTtlPHU7ZSsrKXtsZXQgaT1NYXRoLmZsb29yKG4qcyh5LHosdFtlXS5jZW50ZXIpKTtpPT09ci5sZW5ndGgmJihpPXIubGVuZ3RoLTEpLHJbaV0uY291bnQrKyxyW2ldLmJvdW5kcy51bmlvbih0W2VdLmJvdW5kcyl9Y29uc3QgaD1bXTtmb3IobGV0IHQ9MDt0PHIubGVuZ3RoLTE7dCsrKXtjb25zdCBpPW5ldyBlLG49bmV3IGU7bGV0IHM9MCxhPTA7Zm9yKGxldCBlPTA7ZTw9dDtlKyspaS51bmlvbihyW2VdLmJvdW5kcykscys9cltlXS5jb3VudDtmb3IobGV0IGU9dCsxO2U8ci5sZW5ndGg7ZSsrKW4udW5pb24ocltlXS5ib3VuZHMpLGErPXJbZV0uY291bnQ7aC5wdXNoKC4xKyhzKm8oaSkrYSpvKG4pKS9vKGwpKX1sZXQgYz1oWzBdLG09MDtmb3IobGV0IHQ9MTt0PGgubGVuZ3RoO3QrKyloW3RdPGMmJihjPWhbdF0sbT10KTtkPWZ1bmN0aW9uKHQsZSxuPTAscj10Lmxlbmd0aCl7Zm9yKDtuIT09cjspe2Zvcig7ZSh0W25dKTspaWYoKytuPT09cilyZXR1cm4gbjtkb3tpZihuPT09LS1yKXJldHVybiBufXdoaWxlKCFlKHRbcl0pKTtpKHQsbixyKSxuKyt9cmV0dXJuIG59KHQsKHQ9PntsZXQgZT1NYXRoLmZsb29yKHIubGVuZ3RoKnMoeSx6LHQuY2VudGVyKSk7cmV0dXJuIGU9PT1yLmxlbmd0aCYmKGU9ci5sZW5ndGgtMSksZTw9bX0pLGEsdSl9fXJldHVybiBtPXoseD1oKHQsYSxkKSxmPWgodCxkLHUpLHtjaGlsZDA6eCxjaGlsZDE6Zixib3VuZHM6KG5ldyBlKS51bmlvbih4LmJvdW5kcykudW5pb24oZi5ib3VuZHMpLHNwbGl0QXhpczptfX12YXIgbSx4LGZ9ZnVuY3Rpb24gYShpKXtjb25zdCBuPWZ1bmN0aW9uKGkpe2NvbnN0IG49W10scj1pLmdldEluZGV4P2kuZ2V0SW5kZXgoKS5hcnJheTppLmluZGV4LmFycmF5LHM9aS5nZXRBdHRyaWJ1dGU/aS5nZXRBdHRyaWJ1dGUoInBvc2l0aW9uIik6aS5hdHRyaWJ1dGVzLnBvc2l0aW9uLG89aS5nZXRBdHRyaWJ1dGU/aS5nZXRBdHRyaWJ1dGUoIm1hdGVyaWFsTWVzaEluZGV4Iik6aS5hdHRyaWJ1dGVzLm1hdGVyaWFsTWVzaEluZGV4LGg9bmV3IHQsYT1uZXcgdCx1PW5ldyB0LGw9bmV3IHQsYz1uZXcgdDtmb3IobGV0IG09MDttPHIubGVuZ3RoO20rPTMpe2NvbnN0IGk9clttXSx4PXJbbSsxXSxmPXJbbSsyXSx5PW5ldyBlO3MuZ2V0WD8oaC5mcm9tQnVmZmVyQXR0cmlidXRlKHMsaSksYS5mcm9tQnVmZmVyQXR0cmlidXRlKHMseCksdS5mcm9tQnVmZmVyQXR0cmlidXRlKHMsZikpOihoLng9cy5hcnJheVtpKnMuaXRlbVNpemVdLGgueT1zLmFycmF5W2kqcy5pdGVtU2l6ZSsxXSxoLno9cy5hcnJheVtpKnMuaXRlbVNpemUrMl0sYS54PXMuYXJyYXlbeCpzLml0ZW1TaXplXSxhLnk9cy5hcnJheVt4KnMuaXRlbVNpemUrMV0sYS56PXMuYXJyYXlbeCpzLml0ZW1TaXplKzJdLHUueD1zLmFycmF5W2Yqcy5pdGVtU2l6ZV0sdS55PXMuYXJyYXlbZipzLml0ZW1TaXplKzFdLHUuej1zLmFycmF5W2Yqcy5pdGVtU2l6ZSsyXSkseS5leHBhbmRCeVBvaW50KGgpLHkuZXhwYW5kQnlQb2ludChhKSx5LmV4cGFuZEJ5UG9pbnQodSksbC5zdWJWZWN0b3JzKHUsaCksYy5zdWJWZWN0b3JzKGEsaCk7Y29uc3Qgej0obmV3IHQpLmNyb3NzVmVjdG9ycyhjLGwpLm5vcm1hbGl6ZSgpLGQ9e2JvdW5kczp5LGNlbnRlcjp5LmdldENlbnRlcihuZXcgdCksaW5kaWNlczpbaSx4LGZdLGZhY2VOb3JtYWw6eixtYXRlcmlhbEluZGV4Om8uZ2V0WD9vLmdldFgoaSk6by5hcnJheVtpKm8uaXRlbVNpemVdfTtuLnB1c2goZCl9cmV0dXJuIG59KGkpO3JldHVybiBoKG4sMCxuLmxlbmd0aCl9c2VsZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oe2RhdGE6dH0pe2NvbnN0e2dlb21ldHJ5OmV9PXQ7dHJ5e2NvbnN0IHQ9ZnVuY3Rpb24odCl7Y29uc3QgZT1bXSxpPVtdLG49e3g6MCx5OjEsejoyfTtsZXQgcj0xO2NvbnN0IHM9KHQsbz0xKT0+e2lmKHI9TWF0aC5tYXgobyxyKSx0LnByaW1pdGl2ZXMpZm9yKGxldCBuPTA7bjx0LnByaW1pdGl2ZXMubGVuZ3RoO24rKyl7Y29uc3Qgcj10LnByaW1pdGl2ZXNbbl07ZS5wdXNoKHIuaW5kaWNlc1swXSxyLmluZGljZXNbMV0sci5pbmRpY2VzWzJdLHQucHJpbWl0aXZlcy5sZW5ndGgsci5mYWNlTm9ybWFsLngsci5mYWNlTm9ybWFsLnksci5mYWNlTm9ybWFsLnosci5tYXRlcmlhbEluZGV4KSxpLnB1c2goITEpfWVsc2V7Y29uc3Qgcj10LmJvdW5kcztlLnB1c2goci5taW4ueCxyLm1pbi55LHIubWluLnosblt0LnNwbGl0QXhpc10sci5tYXgueCxyLm1heC55LHIubWF4LnosbnVsbCk7Y29uc3QgaD1lLmxlbmd0aC0xO2kucHVzaCghMCkscyh0LmNoaWxkMCxvKzEpLGVbaF09ZS5sZW5ndGgvNCxzKHQuY2hpbGQxLG8rMSl9fTtzKHQpO2NvbnN0IG89bmV3IEFycmF5QnVmZmVyKDQqZS5sZW5ndGgpLGg9bmV3IEZsb2F0MzJBcnJheShvKSxhPW5ldyBJbnQzMkFycmF5KG8pO2ZvcihsZXQgdT0wO3U8aS5sZW5ndGg7dSsrKXtsZXQgdD04KnU7aVt1XT8oaFt0XT1lW3RdLGhbdCsxXT1lW3QrMV0saFt0KzJdPWVbdCsyXSxhW3QrM109ZVt0KzNdKTooYVt0XT1lW3RdLGFbdCsxXT1lW3QrMV0sYVt0KzJdPWVbdCsyXSxhW3QrM109LWVbdCszXSksaFt0KzRdPWVbdCs0XSxoW3QrNV09ZVt0KzVdLGhbdCs2XT1lW3QrNl0sYVt0KzddPWVbdCs3XX1yZXR1cm57bWF4RGVwdGg6cixjb3VudDplLmxlbmd0aC80LGJ1ZmZlcjpofX0oYShlKSk7c2VsZi5wb3N0TWVzc2FnZSh7ZXJyb3I6bnVsbCxmbGF0dGVuZWRCdmg6dH0pfWNhdGNoKGkpe3NlbGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmksZmxhdHRlbmVkQnZoOm51bGx9KX19fSgpOwo=",ot=typeof window!="undefined"&&window.Blob&&new Blob([atob(it)],{type:"text/javascript;charset=utf-8"});function wt(){const t=ot&&(window.URL||window.webkitURL).createObjectURL(ot);try{return t?new Worker(t):new Worker("data:application/javascript;base64,"+it,{type:"module"})}finally{t&&(window.URL||window.webkitURL).revokeObjectURL(t)}}class Qt{constructor(){this.worker=new wt,this.building=!1}build(e){if(this.building)throw new Error("BVHWorker is building");this.building=!0;const{worker:a}=this;return new Promise((n,r)=>{a.onmessage=i=>{this.building=!1,a.onmessage=null;const{flattenedBvh:s,error:l}=i.data;l?r(new Error(l)):n(s)},a.postMessage({geometry:e})})}}function Se(t){const e=Math.round(Math.log2(Math.sqrt(t))),a=2**e,n=Math.ceil(t/a);return{columnsLog:e,columns:a,rows:n,size:n*a}}function ge(t,e,a){const n=Se(e.length/a);return D(t,{data:Dt(e,a*n.size),width:n.columns,height:n.rows})}function Dt(t,e){const a=new t.constructor(e);return a.set(t),a}function Yt(t,e=!0){return e&&window.Worker?new Qt().build(t):new Promise(a=>{const n=function(r){const i=[],s=[],l={x:0,y:1,z:2};let f=1;const c=(L,p=1)=>{if(f=Math.max(p,f),L.primitives)for(let h=0;h<L.primitives.length;h++){const m=L.primitives[h];i.push(m.indices[0],m.indices[1],m.indices[2],L.primitives.length,m.faceNormal.x,m.faceNormal.y,m.faceNormal.z,m.materialIndex),s.push(!1)}else{const h=L.bounds;i.push(h.min.x,h.min.y,h.min.z,l[L.splitAxis],h.max.x,h.max.y,h.max.z,null);const m=i.length-1;s.push(!0),c(L.child0,p+1),i[m]=i.length/4,c(L.child1,p+1)}};c(r);const d=new ArrayBuffer(4*i.length),o=new Float32Array(d),u=new Int32Array(d);for(let L=0;L<s.length;L++){let p=8*L;s[L]?(o[p]=i[p],o[p+1]=i[p+1],o[p+2]=i[p+2],u[p+3]=i[p+3]):(u[p]=i[p],u[p+1]=i[p+1],u[p+2]=i[p+2],u[p+3]=-i[p+3]),o[p+4]=i[p+4],o[p+5]=i[p+5],o[p+6]=i[p+6],u[p+7]=i[p+7]}return{maxDepth:f,count:i.length/4,buffer:o}}(Xt(t));a(n)})}async function Wt(t,{bounces:e,decomposedScene:a,fullscreenQuad:n,materialBuffer:r,mergedMesh:i,optionalExtensions:s,envMapIntensity:l,enviromentVisible:f,useWorker:c,loadingCallback:d}){let o;const u=await async function({decomposedScene:v,fullscreenQuad:A,gl:M,materialBuffer:F,mergedMesh:N,optionalExtensions:y,useWorker:b,loadingCallback:V}){const{OES_texture_float_linear:se}=y,{camera:j,meshLightsNum:C,isTextureEnv:ce}=v,{geometry:H,materials:R}=N;V&&V.onProgress&&typeof V.onProgress=="function"&&V.onProgress("Building BVH...");const $=await Yt(H,b),w=H.index.count/3,z=ie(M,{defines:He({OES_texture_float_linear:se,BVH_COLUMNS:Se($.count).columnsLog,INDEX_COLUMNS:Se(w).columnsLog,VERTEX_COLUMNS:Se(H.attributes.position.count).columnsLog,STACK_SIZE:$.maxDepth,USE_LENS_CAMERA:j.isLensCamera,NUM_LIGHTS:C,CONST_COLOR_ENV:!ce},F.defines),fragment:Vt,vertex:A.vertexShader});return z.setTexture("diffuseMap",F.textures.diffuseMap),z.setTexture("normalMap",F.textures.normalMap),z.setTexture("pbrMap",F.textures.pbrMap),z.setTexture("pbrSGMap",F.textures.pbrSGMap),F.textures.emissiveMap&&z.setTexture("emissiveMap",F.textures.emissiveMap),z.setTexture("positionBuffer",ge(M,H.getAttribute("position").array,3)),z.setTexture("normalBuffer",ge(M,H.getAttribute("normal").array,3)),z.setTexture("uvBuffer",ge(M,H.getAttribute("uv").array,2)),z.setTexture("bvhBuffer",ge(M,$.buffer,4)),z}({bounces:e,decomposedScene:a,fullscreenQuad:n,gl:t,materialBuffer:r,mergedMesh:i,optionalExtensions:s,useWorker:c,loadingCallback:d}),L=[];function p(v){L.length=0,v=fe(v,2,8);for(let A=1;A<=v;A++)L.push(2,2,2,2),A>=2&&L.push(1);u.setUniform("bounces",v),o&&(o.strataCount=-1)}function h(v){const{OES_texture_float_linear:A}=s,{environment:M,isTextureEnv:F}=v;if(F){const N=function(y){let b;return y&&y.data&&y.data.isTexture?b=zt(y):console.warn(`No support environment type: ${y.data}`),b}(M);if(N){const y=D(t,{data:N.data,storage:N.dataFormat,minFilter:A?t.LINEAR:t.NEAREST,magFilter:A?t.LINEAR:t.NEAREST,width:N.width,height:N.height});u.setTexture("envMap",y);const b=Bt(N);u.setTexture("envMapDistribution",D(t,{data:b.data,storage:"float",width:b.width,height:b.height})),u.setUniform("envMapIntensity",l)}}else{const N=M.data;N&&N.isColor?u.setUniform("backgroundColor",[N.r,N.g,N.b]):u.setUniform("backgroundColor",[0,0,0])}_(f)}function m(v){const{meshLights:A}=v;A&&(u.setUniform("lights.position[0]",A.position),u.setUniform("lights.emission[0]",A.emission),u.setUniform("lights.p1[0]",A.p1),u.setUniform("lights.p2[0]",A.p2),u.setUniform("lights.params[0]",A.params))}function _(v){u.setUniform("enviromentVisible",Number(v))}function g(){u.setUniform("stratifiedSamples[0]",o.next())}return p(e),h(a),m(a),o=nt(1,L),{bindTextures:function(){u.bindTextures()},draw:function(){u.useProgram(!1),n.draw()},outputLocs:u.outputLocs,textures:u.textures,setSize:function(v,A){u.setUniform("pixelSize",1/v,1/A)},setCamera:function(v){u.setUniform("camera.transform",v.matrixWorld.elements),u.setUniform("camera.aspect",v.aspect),u.setUniform("camera.fov",.5/Math.tan(.5*Math.PI*v.fov/180)),v.isLensCamera&&(u.setUniform("camera.aperture",v.aperture),u.setUniform("camera.focus",v.focus))},setGBuffers:function({position:v}){u.setTexture("gPosition",v)},setNoise:function(v){u.setTexture("noiseTex",D(t,{data:v,wrapS:t.REPEAT,wrapT:t.REPEAT,storage:"halfFloat"}))},setJitter:function(v,A){u.setUniform("jitter",v,A)},setFrameCount:function(v){u.setUniform("frameCount",v)},setStrataCount:function(v){v>1&&v!==o.strataCount?o=nt(v,L):o.restart(),u.setUniform("strataSize",1/v),g()},nextSeed:g,setEnvMapIntensity:function(v){u.setUniform("envMapIntensity",v)},setEnviromentVisible:_,updateBounces:p,updateEnvLight:h,updateMeshLight:m,updateMeshMaterial:function(v){u.setTexture("diffuseMap",v.textures.diffuseMap),u.setTexture("normalMap",v.textures.normalMap),u.setTexture("pbrMap",v.textures.pbrMap),u.setTexture("pbrSGMap",v.textures.pbrSGMap),v.textures.emissiveMap&&u.setTexture("emissiveMap",v.textures.emissiveMap)},dispose:function(){u.dispose()}}}var Ht={source:"in vec3 aPosition;in vec3 aNormal;in vec2 aUv;in ivec2 aMaterialMeshIndex;uniform mat4 projView;out vec3 vPosition;out vec3 vNormal;out vec2 vUv;flat out ivec2 vMaterialMeshIndex;void main(){vPosition=aPosition;vNormal=aNormal;vUv=aUv;vMaterialMeshIndex=aMaterialMeshIndex;gl_Position=projView*vec4(aPosition,1);}"},Ot={source:`
#define PI 3.14159265359
#define TWOPI 6.28318530718
#define INVPI 0.31830988618
#define INVPI2 0.10132118364
#define EPS 0.0001
#define ONE_MINUS_EPS 0.999999
#define INF 1000000.0
#define ROUGHNESS_MIN 0.001
uniform Materials{vec4 colorAndMaterialType[NUM_MATERIALS];vec4 roughnessMetalnessNormalScale[NUM_MATERIALS];vec4 alphaSpecularTintSheenSheenTint[NUM_MATERIALS];vec4 clearcoaRoughnessSubfaceTransmission[NUM_MATERIALS];vec4 iorAtDistanceAnisotropicWorkflow[NUM_MATERIALS];vec4 extinction[NUM_MATERIALS];vec4 specularColorGlossiness[NUM_MATERIALS];
#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS) || defined(NUM_PBR_MAPS)
ivec4 diffuseNormalRoughnessMetalnessMapIndex[NUM_MATERIALS];
#endif
#if defined(NUM_EMISSIVE_MAPS) || defined(NUM_PBR_SG_MAPS)
ivec4 emissiveSpecularGlossinessMapIndex[NUM_MATERIALS];
#endif
#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS)
vec4 diffuseNormalMapSize[NUM_DIFFUSE_NORMAL_MAPS];
#endif
#if defined(NUM_PBR_MAPS)
vec2 pbrMapSize[NUM_PBR_MAPS];
#else
#if defined(NUM_PBR_SG_MAPS)
vec2 pbrMapSize[NUM_PBR_SG_MAPS];
#else
#if defined(NUM_EMISSIVE_MAPS)
vec2 pbrMapSize[NUM_EMISSIVE_MAPS];
#endif
#endif
#endif
}materials;
#ifdef NUM_DIFFUSE_MAPS
uniform mediump sampler2DArray diffuseMap;
#endif
#ifdef NUM_NORMAL_MAPS
uniform mediump sampler2DArray normalMap;
#endif
#ifdef NUM_PBR_MAPS
uniform mediump sampler2DArray pbrMap;
#endif
#ifdef NUM_PBR_SG_MAPS
uniform mediump sampler2DArray pbrSGMap;
#endif
#ifdef NUM_EMISSIVE_MAPS
uniform mediump sampler2DArray emissiveMap;
#endif
float LGL_p(int materialIndex){return materials.colorAndMaterialType[materialIndex].w;}float LGL_q(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].w;}vec3 LGL_r(int materialIndex,vec2 uv){vec3 emissive=vec3(0.0);
#ifdef NUM_EMISSIVE_MAPS
int emissiveMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].x;if(emissiveMapIndex>=0){emissive=texture(emissiveMap,vec3(uv*materials.pbrMapSize[emissiveMapIndex].xy,emissiveMapIndex)).rgb;}
#endif
return emissive;}vec3 LGL_s(int materialIndex,vec2 uv){vec3 specularColor=materials.specularColorGlossiness[materialIndex].rgb;
#ifdef NUM_PBR_SG_MAPS
int specularMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].y;if(specularMapIndex>=0){vec3 texelSpecular=texture(pbrSGMap,vec3(uv*materials.pbrMapSize[specularMapIndex].xy,specularMapIndex)).rgb;texelSpecular=pow(texelSpecular,vec3(2.2));specularColor*=texelSpecular;}
#endif
return specularColor;}float LGL_t(int materialIndex,vec2 uv){float glossiness=materials.specularColorGlossiness[materialIndex].a;
#ifdef NUM_PBR_SG_MAPS
int glossinessMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].z;if(glossinessMapIndex>=0){float texelGlossiness=texture(pbrSGMap,vec3(uv*materials.pbrMapSize[glossinessMapIndex].xy,glossinessMapIndex)).a;glossiness*=texelGlossiness;}
#endif
return glossiness;}float LGL_u(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float roughness=0.0;if(LGL_BG>0.1){roughness=1.0-LGL_t(materialIndex,uv);}else{roughness=materials.roughnessMetalnessNormalScale[materialIndex].x;
#ifdef NUM_PBR_MAPS
int roughnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].z;if(roughnessMapIndex>=0){roughness*=texture(pbrMap,vec3(uv*materials.pbrMapSize[roughnessMapIndex].xy,roughnessMapIndex)).g;}
#endif
}return roughness*roughness;}float LGL_v(const vec3 v){return max(v.x,max(v.y,v.z));}float LGL_w(const vec3 specularColor){return LGL_v(specularColor);}vec3 LGL_x(const vec3 baseColor,float metallic){return baseColor*(1.0-metallic);}float LGL_y(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float metalness=0.0;if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);metalness=LGL_w(specularFactor);}else{metalness=materials.roughnessMetalnessNormalScale[materialIndex].y;
#ifdef NUM_PBR_MAPS
int metalnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].w;if(metalnessMapIndex>=0){metalness*=texture(pbrMap,vec3(uv*materials.pbrMapSize[metalnessMapIndex].xy,metalnessMapIndex)).b;}
#endif
}return metalness;}vec3 LGL_z(int materialIndex,vec2 uv){vec3 color=materials.colorAndMaterialType[materialIndex].rgb;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){color*=texture(diffuseMap,vec3(uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy,diffuseMapIndex)).rgb;}
#endif
float LGL_BG=LGL_q(materialIndex);if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);color=LGL_x(color,LGL_w(specularFactor));}return color;}vec3 LGL_AA(int materialIndex,vec2 uv,vec3 normal,vec3 dp1,vec3 dp2,vec2 duv1,vec2 duv2,inout vec3 tangent,inout vec3 bitangent){vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 dpdu=dp2perp*duv1.x+dp1perp*duv2.x;vec3 dpdv=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(dpdu,dpdu),dot(dpdv,dpdv)));dpdu*=invmax;dpdv*=invmax;tangent=normalize(dpdu);bitangent=normalize(dpdv);
#ifdef NUM_NORMAL_MAPS
int normalMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].y;if(normalMapIndex>=0){vec3 n=2.0*texture(normalMap,vec3(uv*materials.diffuseNormalMapSize[normalMapIndex].zw,normalMapIndex)).rgb-1.0;n.xy*=materials.roughnessMetalnessNormalScale[materialIndex].zw;mat3 tbn=mat3(dpdu,dpdv,normal);return normalize(tbn*n);}else{return normal;}
#endif
return normal;}float LGL_AD(int materialIndex,vec2 uv){float alpha=materials.alphaSpecularTintSheenSheenTint[materialIndex].x;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){alpha*=texture(diffuseMap,vec3(uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy,diffuseMapIndex)).a;}
#endif
return alpha;}float LGL_AB(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].y;}float LGL_AC(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].z;}float LGL_ACTint(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].w;}float LGL_AF(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].x;}float LGL_AFRoughness(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].y;}float LGL_AH(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].z;}float LGL_AI(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].w;}float LGL_AJ(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].x;}float LGL_AK(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].y;}float LGL_AL(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].z;}vec3 LGL_AM(int materialIndex){return materials.extinction[materialIndex].rgb;}layout(location=0)out vec4 out_position;layout(location=1)out vec4 out_normal;layout(location=2)out vec4 out_color;in vec3 vPosition;in vec3 vNormal;in vec2 vUv;flat in ivec2 vMaterialMeshIndex;vec3 LGL_BMs(vec3 pos){vec3 fdx=dFdx(pos);vec3 fdy=dFdy(pos);return cross(fdx,fdy);}void main(){int materialIndex=vMaterialMeshIndex.x;int meshIndex=vMaterialMeshIndex.y;vec2 uv=fract(vUv);vec3 color=LGL_z(materialIndex,uv);float LGL_BH=LGL_p(materialIndex);vec3 normal=normalize(vNormal);vec3 LGL_BM=normalize(LGL_BMs(vPosition));normal*=sign(dot(normal,LGL_BM));
#ifdef NUM_NORMAL_MAPS
vec3 dp1=dFdx(vPosition);vec3 dp2=dFdy(vPosition);vec2 duv1=dFdx(vUv);vec2 duv2=dFdy(vUv);vec3 tangent,bitangent;normal=LGL_AA(materialIndex,uv,normal,dp1,dp2,duv1,duv2,tangent,bitangent);
#endif
out_position=vec4(vPosition,float(meshIndex)+EPS);out_normal=vec4(normal,LGL_BH);out_color=vec4(color,0.);}`};function Me(t,e,a){if(e===void 0)return;const{itemSize:n,array:r}=a;if(t.enableVertexAttribArray(e),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,r,t.STATIC_DRAW),r instanceof Float32Array)t.vertexAttribPointer(e,n,t.FLOAT,!1,0,0);else{if(!(r instanceof Int32Array))throw"Unsupported buffer type";t.vertexAttribIPointer(e,n,t.INT,0,0)}}function kt(t,{materialBuffer:e,mergedMesh:a}){const n=ie(t,{defines:e.defines,vertex:Ht,fragment:Ot});n.setTexture("diffuseMap",e.textures.diffuseMap),n.setTexture("normalMap",e.textures.normalMap);const r=a.geometry,i=r.getIndex().count,s=t.createVertexArray();t.bindVertexArray(s),function(o,u,L){Me(o,u.attribLocs.aPosition,L.getAttribute("position")),Me(o,u.attribLocs.aNormal,L.getAttribute("normal")),Me(o,u.attribLocs.aUv,L.getAttribute("uv")),Me(o,u.attribLocs.aMaterialMeshIndex,L.getAttribute("materialMeshIndex")),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,o.createBuffer()),o.bufferData(o.ELEMENT_ARRAY_BUFFER,L.getIndex().array,o.STATIC_DRAW)}(t,n,r),t.bindVertexArray(null);let l,f=0,c=0,d=new Qe;return{draw:function(){d.copy(l.projectionMatrix),d.elements[8]+=2*f,d.elements[9]+=2*c,d.multiply(l.matrixWorldInverse),n.setUniform("projView",d.elements),t.bindVertexArray(s),n.useProgram(),t.enable(t.DEPTH_TEST),t.drawElements(t.TRIANGLES,i,t.UNSIGNED_INT,0),t.disable(t.DEPTH_TEST)},outputLocs:n.outputLocs,setCamera:function(o){l=o},setJitter:function(o,u){f=o,c=u},dispose:function(){n.dispose()}}}var Zt={source:`vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}layout(location=0)out vec4 out_color;in vec2 vCoord;uniform sampler2D lightTex;uniform vec2 lightScale;uniform int toneMappingFun;vec3 linear(vec3 color){return color;}vec3 LGL_Av(vec3 color){return clamp(color/(vec3(1.0)+color),vec3(0.0),vec3(1.0));}vec3 LGL_Aw(vec3 color){color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 LGL_Ax(vec3 color){return clamp((color*(2.51*color+0.03))/(color*(2.43*color+0.59)+0.14),vec3(0.0),vec3(1.0));}void main(){vec4 upscaledLight=texture(lightTex,lightScale*vCoord);vec3 light=upscaledLight.rgb/upscaledLight.a;if(toneMappingFun==0){light=linear(light);}if(toneMappingFun==1){light=LGL_Ax(light);}if(toneMappingFun==2){light=LGL_Av(light);}if(toneMappingFun==3){light=LGL_Aw(light);}light=pow(light,vec3(1.0/2.2));if(upscaledLight.a==0.){out_color=vec4(light,0.0);}else{out_color=vec4(light,1.0);}}`};const st={[we]:0,[ct]:1,[ut]:2,[pt]:3};function Kt(t,e){const{fullscreenQuad:a,toneMapping:n}=e;let r;const i={gl:t,vertex:a.vertexShader,fragment:Zt},s=ie(t,i);s.setUniform("toneMappingFun",st[n]);const l=new le(1,1);return{draw:function(f,c){let{light:d,lightScale:o}=f;if(o=o||l,s.setTexture("lightTex",d),s.setUniform("lightScale",o.x,o.y),c)return r.bind(),t.clear(t.COLOR_BUFFER_BIT),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),s.useProgram(),a.draw(),r.unbind(),r;s.useProgram(),a.draw()},setToneMapping:function(f){s.setUniform("toneMappingFun",st[f])},setSize:function(f,c){r=xe(t,{color:{0:D(t,{width:f,height:c,storage:"byte",magFilter:t.LINEAR,minFilter:t.LINEAR})}})},dispose:function(){s.dispose()}}}var qt={source:`layout(location=0)out vec4 out_color;uniform sampler2D inputBuffer;uniform vec2 resolution;in vec2 vCoord;
#define FXAA_PC 1
#define FXAA_GLSL_100 1
#define FXAA_QUALITY_PRESET 12
#define FXAA_GREEN_AS_LUMA 1
#ifndef FXAA_PC_CONSOLE
#define FXAA_PC_CONSOLE 0
#endif
#ifndef FXAA_GLSL_120
#define FXAA_GLSL_120 0
#endif
#ifndef FXAA_GLSL_130
#define FXAA_GLSL_130 0
#endif
#ifndef FXAA_HLSL_3
#define FXAA_HLSL_3 0
#endif
#ifndef FXAA_HLSL_4
#define FXAA_HLSL_4 0
#endif
#ifndef FXAA_HLSL_5
#define FXAA_HLSL_5 0
#endif
#ifndef FXAA_GREEN_AS_LUMA
#define FXAA_GREEN_AS_LUMA 0
#endif
#ifndef FXAA_EARLY_EXIT
#define FXAA_EARLY_EXIT 1
#endif
#ifndef FXAA_DISCARD
#define FXAA_DISCARD 0
#endif
#ifndef FXAA_FAST_PIXEL_OFFSET
#ifdef GL_EXT_gpu_shader4
#define FXAA_FAST_PIXEL_OFFSET 1
#endif
#ifdef GL_NV_gpu_shader5
#define FXAA_FAST_PIXEL_OFFSET 1
#endif
#ifdef GL_ARB_gpu_shader5
#define FXAA_FAST_PIXEL_OFFSET 1
#endif
#ifndef FXAA_FAST_PIXEL_OFFSET
#define FXAA_FAST_PIXEL_OFFSET 0
#endif
#endif
#ifndef FXAA_GATHER4_ALPHA
#if (FXAA_HLSL_5 == 1)
#define FXAA_GATHER4_ALPHA 1
#endif
#ifdef GL_ARB_gpu_shader5
#define FXAA_GATHER4_ALPHA 1
#endif
#ifdef GL_NV_gpu_shader5
#define FXAA_GATHER4_ALPHA 1
#endif
#ifndef FXAA_GATHER4_ALPHA
#define FXAA_GATHER4_ALPHA 0
#endif
#endif
/*============================================================================FXAA QUALITY-TUNING KNOBS------------------------------------------------------------------------------NOTE the other tuning knobs are now in the shader function inputs!============================================================================*/
#ifndef FXAA_QUALITY_PRESET
#define FXAA_QUALITY_PRESET 12
#endif
/*============================================================================FXAA QUALITY-PRESETS============================================================================*//*============================================================================FXAA QUALITY-MEDIUM DITHER PRESETS============================================================================*/
#if (FXAA_QUALITY_PRESET == 10)
#define FXAA_QUALITY_PS 3
#define FXAA_QUALITY_P0 1.5
#define FXAA_QUALITY_P1 3.0
#define FXAA_QUALITY_P2 12.0
#endif
#if (FXAA_QUALITY_PRESET == 11)
#define FXAA_QUALITY_PS 4
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 3.0
#define FXAA_QUALITY_P3 12.0
#endif
#if (FXAA_QUALITY_PRESET == 12)
#define FXAA_QUALITY_PS 5
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 4.0
#define FXAA_QUALITY_P4 12.0
#endif
#if (FXAA_QUALITY_PRESET == 13)
#define FXAA_QUALITY_PS 6
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 4.0
#define FXAA_QUALITY_P5 12.0
#endif
#if (FXAA_QUALITY_PRESET == 14)
#define FXAA_QUALITY_PS 7
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 4.0
#define FXAA_QUALITY_P6 12.0
#endif
#if (FXAA_QUALITY_PRESET == 15)
#define FXAA_QUALITY_PS 8
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 2.0
#define FXAA_QUALITY_P6 4.0
#define FXAA_QUALITY_P7 12.0
#endif
/*============================================================================FXAA QUALITY-LOW DITHER PRESETS============================================================================*/
#if (FXAA_QUALITY_PRESET == 20)
#define FXAA_QUALITY_PS 3
#define FXAA_QUALITY_P0 1.5
#define FXAA_QUALITY_P1 2.0
#define FXAA_QUALITY_P2 8.0
#endif
#if (FXAA_QUALITY_PRESET == 21)
#define FXAA_QUALITY_PS 4
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 8.0
#endif
#if (FXAA_QUALITY_PRESET == 22)
#define FXAA_QUALITY_PS 5
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 8.0
#endif
#if (FXAA_QUALITY_PRESET == 23)
#define FXAA_QUALITY_PS 6
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 8.0
#endif
#if (FXAA_QUALITY_PRESET == 24)
#define FXAA_QUALITY_PS 7
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 3.0
#define FXAA_QUALITY_P6 8.0
#endif
#if (FXAA_QUALITY_PRESET == 25)
#define FXAA_QUALITY_PS 8
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 2.0
#define FXAA_QUALITY_P6 4.0
#define FXAA_QUALITY_P7 8.0
#endif
#if (FXAA_QUALITY_PRESET == 26)
#define FXAA_QUALITY_PS 9
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 2.0
#define FXAA_QUALITY_P6 2.0
#define FXAA_QUALITY_P7 4.0
#define FXAA_QUALITY_P8 8.0
#endif
#if (FXAA_QUALITY_PRESET == 27)
#define FXAA_QUALITY_PS 10
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 2.0
#define FXAA_QUALITY_P6 2.0
#define FXAA_QUALITY_P7 2.0
#define FXAA_QUALITY_P8 4.0
#define FXAA_QUALITY_P9 8.0
#endif
#if (FXAA_QUALITY_PRESET == 28)
#define FXAA_QUALITY_PS 11
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 2.0
#define FXAA_QUALITY_P6 2.0
#define FXAA_QUALITY_P7 2.0
#define FXAA_QUALITY_P8 2.0
#define FXAA_QUALITY_P9 4.0
#define FXAA_QUALITY_P10 8.0
#endif
#if (FXAA_QUALITY_PRESET == 29)
#define FXAA_QUALITY_PS 12
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.5
#define FXAA_QUALITY_P2 2.0
#define FXAA_QUALITY_P3 2.0
#define FXAA_QUALITY_P4 2.0
#define FXAA_QUALITY_P5 2.0
#define FXAA_QUALITY_P6 2.0
#define FXAA_QUALITY_P7 2.0
#define FXAA_QUALITY_P8 2.0
#define FXAA_QUALITY_P9 2.0
#define FXAA_QUALITY_P10 4.0
#define FXAA_QUALITY_P11 8.0
#endif
/*============================================================================FXAA QUALITY-EXTREME QUALITY============================================================================*/
#if (FXAA_QUALITY_PRESET == 39)
#define FXAA_QUALITY_PS 12
#define FXAA_QUALITY_P0 1.0
#define FXAA_QUALITY_P1 1.0
#define FXAA_QUALITY_P2 1.0
#define FXAA_QUALITY_P3 1.0
#define FXAA_QUALITY_P4 1.0
#define FXAA_QUALITY_P5 1.5
#define FXAA_QUALITY_P6 2.0
#define FXAA_QUALITY_P7 2.0
#define FXAA_QUALITY_P8 2.0
#define FXAA_QUALITY_P9 2.0
#define FXAA_QUALITY_P10 4.0
#define FXAA_QUALITY_P11 8.0
#endif
/*============================================================================API PORTING============================================================================*/
#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
#define FxaaBool bool
#define FxaaDiscard discard
#define FxaaFloat float
#define FxaaFloat2 vec2
#define FxaaFloat3 vec3
#define FxaaFloat4 vec4
#define FxaaHalf float
#define FxaaHalf2 vec2
#define FxaaHalf3 vec3
#define FxaaHalf4 vec4
#define FxaaInt2 ivec2
#define FxaaSat(x) clamp(x, 0.0, 1.0)
#define FxaaTex sampler2D
#else
#define FxaaBool bool
#define FxaaDiscard clip(-1)
#define FxaaFloat float
#define FxaaFloat2 float2
#define FxaaFloat3 float3
#define FxaaFloat4 float4
#define FxaaHalf half
#define FxaaHalf2 half2
#define FxaaHalf3 half3
#define FxaaHalf4 half4
#define FxaaSat(x) saturate(x)
#endif
#if (FXAA_GLSL_100 == 1)
#define FxaaTexTop(t, p) texture(t, p, 0.0)
#define FxaaTexOff(t, p, o, r) texture(t, p + (o * r), 0.0)
#endif
#if (FXAA_GLSL_120 == 1)
#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
#if (FXAA_FAST_PIXEL_OFFSET == 1)
#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
#else
#define FxaaTexOff(t, p, o, r) textureLod(t, p + (o * r), 0.0)
#endif
#if (FXAA_GATHER4_ALPHA == 1)
#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
#endif
#endif
#if (FXAA_GLSL_130 == 1)
#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
#if (FXAA_GATHER4_ALPHA == 1)
#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
#endif
#endif
#if (FXAA_HLSL_3 == 1)
#define FxaaInt2 float2
#define FxaaTex sampler2D
#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
#endif
#if (FXAA_HLSL_4 == 1)
#define FxaaInt2 int2
struct FxaaTex{SamplerState smpl;texture tex;};
#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
#endif
#if (FXAA_HLSL_5 == 1)
#define FxaaInt2 int2
struct FxaaTex{SamplerState smpl;texture tex;};
#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
#endif
/*============================================================================GREEN AS LUMA OPTION SUPPORT FUNCTION============================================================================*/
#if (FXAA_GREEN_AS_LUMA == 0)
FxaaFloat FxaaLuma(FxaaFloat4 rgba){return rgba.w;}
#else
FxaaFloat FxaaLuma(FxaaFloat4 rgba){return rgba.y;}
#endif
/*============================================================================FXAA3 QUALITY-PC============================================================================*/
#if (FXAA_PC == 1)
FxaaFloat4 FxaaPixelShader(FxaaFloat2 pos,FxaaFloat4 fxaaConsolePosPos,FxaaTex tex,FxaaTex fxaaConsole360TexExpBiasNegOne,FxaaTex fxaaConsole360TexExpBiasNegTwo,FxaaFloat2 fxaaQualityRcpFrame,FxaaFloat4 fxaaConsoleRcpFrameOpt,FxaaFloat4 fxaaConsoleRcpFrameOpt2,FxaaFloat4 fxaaConsole360RcpFrameOpt2,FxaaFloat fxaaQualitySubpix,FxaaFloat fxaaQualityEdgeThreshold,FxaaFloat fxaaQualityEdgeThresholdMin,FxaaFloat fxaaConsoleEdgeSharpness,FxaaFloat fxaaConsoleEdgeThreshold,FxaaFloat fxaaConsoleEdgeThresholdMin,FxaaFloat4 fxaaConsole360ConstDir){FxaaFloat2 posM;posM.x=pos.x;posM.y=pos.y;
#if (FXAA_GATHER4_ALPHA == 1)
#if (FXAA_DISCARD == 0)
FxaaFloat4 rgbyM=FxaaTexTop(tex,posM);
#if (FXAA_GREEN_AS_LUMA == 0)
#define lumaM rgbyM.w
#else
#define lumaM rgbyM.y
#endif
#endif
#if (FXAA_GREEN_AS_LUMA == 0)
FxaaFloat4 luma4A=FxaaTexAlpha4(tex,posM);FxaaFloat4 luma4B=FxaaTexOffAlpha4(tex,posM,FxaaInt2(-1,-1));
#else
FxaaFloat4 luma4A=FxaaTexGreen4(tex,posM);FxaaFloat4 luma4B=FxaaTexOffGreen4(tex,posM,FxaaInt2(-1,-1));
#endif
#if (FXAA_DISCARD == 1)
#define lumaM luma4A.w
#endif
#define lumaE luma4A.z
#define lumaS luma4A.x
#define lumaSE luma4A.y
#define lumaNW luma4B.w
#define lumaN luma4B.z
#define lumaW luma4B.x
#else
FxaaFloat4 rgbyM=FxaaTexTop(tex,posM);
#if (FXAA_GREEN_AS_LUMA == 0)
#define lumaM rgbyM.w
#else
#define lumaM rgbyM.y
#endif
#if (FXAA_GLSL_100 == 1)
FxaaFloat lumaS=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(0.0,1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaE=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(1.0,0.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaN=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(0.0,-1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaW=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(-1.0,0.0),fxaaQualityRcpFrame.xy));
#else
FxaaFloat lumaS=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(0,1),fxaaQualityRcpFrame.xy));FxaaFloat lumaE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,0),fxaaQualityRcpFrame.xy));FxaaFloat lumaN=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(0,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,0),fxaaQualityRcpFrame.xy));
#endif
#endif
FxaaFloat maxSM=max(lumaS,lumaM);FxaaFloat minSM=min(lumaS,lumaM);FxaaFloat maxESM=max(lumaE,maxSM);FxaaFloat minESM=min(lumaE,minSM);FxaaFloat maxWN=max(lumaN,lumaW);FxaaFloat minWN=min(lumaN,lumaW);FxaaFloat rangeMax=max(maxWN,maxESM);FxaaFloat rangeMin=min(minWN,minESM);FxaaFloat rangeMaxScaled=rangeMax*fxaaQualityEdgeThreshold;FxaaFloat range=rangeMax-rangeMin;FxaaFloat rangeMaxClamped=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);FxaaBool earlyExit=range<rangeMaxClamped;if(earlyExit)
#if (FXAA_DISCARD == 1)
FxaaDiscard;
#else
return rgbyM;
#endif
#if (FXAA_GATHER4_ALPHA == 0)
#if (FXAA_GLSL_100 == 1)
FxaaFloat lumaNW=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(-1.0,-1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaSE=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(1.0,1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaNE=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(1.0,-1.0),fxaaQualityRcpFrame.xy));FxaaFloat lumaSW=FxaaLuma(FxaaTexOff(tex,posM,FxaaFloat2(-1.0,1.0),fxaaQualityRcpFrame.xy));
#else
FxaaFloat lumaNW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaSE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,1),fxaaQualityRcpFrame.xy));FxaaFloat lumaNE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaSW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,1),fxaaQualityRcpFrame.xy));
#endif
#else
FxaaFloat lumaNE=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(1,-1),fxaaQualityRcpFrame.xy));FxaaFloat lumaSW=FxaaLuma(FxaaTexOff(tex,posM,FxaaInt2(-1,1),fxaaQualityRcpFrame.xy));
#endif
FxaaFloat lumaNS=lumaN+lumaS;FxaaFloat lumaWE=lumaW+lumaE;FxaaFloat subpixRcpRange=1.0/range;FxaaFloat subpixNSWE=lumaNS+lumaWE;FxaaFloat edgeHorz1=(-2.0*lumaM)+lumaNS;FxaaFloat edgeVert1=(-2.0*lumaM)+lumaWE;FxaaFloat lumaNESE=lumaNE+lumaSE;FxaaFloat lumaNWNE=lumaNW+lumaNE;FxaaFloat edgeHorz2=(-2.0*lumaE)+lumaNESE;FxaaFloat edgeVert2=(-2.0*lumaN)+lumaNWNE;FxaaFloat lumaNWSW=lumaNW+lumaSW;FxaaFloat lumaSWSE=lumaSW+lumaSE;FxaaFloat edgeHorz4=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);FxaaFloat edgeVert4=(abs(edgeVert1)*2.0)+abs(edgeVert2);FxaaFloat edgeHorz3=(-2.0*lumaW)+lumaNWSW;FxaaFloat edgeVert3=(-2.0*lumaS)+lumaSWSE;FxaaFloat edgeHorz=abs(edgeHorz3)+edgeHorz4;FxaaFloat edgeVert=abs(edgeVert3)+edgeVert4;FxaaFloat subpixNWSWNESE=lumaNWSW+lumaNESE;FxaaFloat lengthSign=fxaaQualityRcpFrame.x;FxaaBool horzSpan=edgeHorz>=edgeVert;FxaaFloat subpixA=subpixNSWE*2.0+subpixNWSWNESE;if(!horzSpan)lumaN=lumaW;if(!horzSpan)lumaS=lumaE;if(horzSpan)lengthSign=fxaaQualityRcpFrame.y;FxaaFloat subpixB=(subpixA*(1.0/12.0))-lumaM;FxaaFloat gradientN=lumaN-lumaM;FxaaFloat gradientS=lumaS-lumaM;FxaaFloat lumaNN=lumaN+lumaM;FxaaFloat lumaSS=lumaS+lumaM;FxaaBool pairN=abs(gradientN)>=abs(gradientS);FxaaFloat gradient=max(abs(gradientN),abs(gradientS));if(pairN)lengthSign=-lengthSign;FxaaFloat subpixC=FxaaSat(abs(subpixB)*subpixRcpRange);FxaaFloat2 posB;posB.x=posM.x;posB.y=posM.y;FxaaFloat2 offNP;offNP.x=(!horzSpan)? 0.0 : fxaaQualityRcpFrame.x;offNP.y=(horzSpan)? 0.0 : fxaaQualityRcpFrame.y;if(!horzSpan)posB.x+=lengthSign*0.5;if(horzSpan)posB.y+=lengthSign*0.5;FxaaFloat2 posN;posN.x=posB.x-offNP.x*FXAA_QUALITY_P0;posN.y=posB.y-offNP.y*FXAA_QUALITY_P0;FxaaFloat2 posP;posP.x=posB.x+offNP.x*FXAA_QUALITY_P0;posP.y=posB.y+offNP.y*FXAA_QUALITY_P0;FxaaFloat subpixD=((-2.0)*subpixC)+3.0;FxaaFloat lumaEndN=FxaaLuma(FxaaTexTop(tex,posN));FxaaFloat subpixE=subpixC*subpixC;FxaaFloat lumaEndP=FxaaLuma(FxaaTexTop(tex,posP));if(!pairN)lumaNN=lumaSS;FxaaFloat gradientScaled=gradient*1.0/4.0;FxaaFloat lumaMM=lumaM-lumaNN*0.5;FxaaFloat subpixF=subpixD*subpixE;FxaaBool lumaMLTZero=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;FxaaBool doneN=abs(lumaEndN)>=gradientScaled;FxaaBool doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P1;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P1;FxaaBool doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P1;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P1;if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P2;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P2;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P2;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P2;
#if (FXAA_QUALITY_PS > 3)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P3;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P3;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P3;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P3;
#if (FXAA_QUALITY_PS > 4)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P4;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P4;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P4;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P4;
#if (FXAA_QUALITY_PS > 5)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P5;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P5;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P5;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P5;
#if (FXAA_QUALITY_PS > 6)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P6;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P6;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P6;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P6;
#if (FXAA_QUALITY_PS > 7)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P7;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P7;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P7;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P7;
#if (FXAA_QUALITY_PS > 8)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P8;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P8;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P8;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P8;
#if (FXAA_QUALITY_PS > 9)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P9;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P9;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P9;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P9;
#if (FXAA_QUALITY_PS > 10)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P10;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P10;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P10;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P10;
#if (FXAA_QUALITY_PS > 11)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P11;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P11;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P11;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P11;
#if (FXAA_QUALITY_PS > 12)
if(doneNP){if(!doneN)lumaEndN=FxaaLuma(FxaaTexTop(tex,posN.xy));if(!doneP)lumaEndP=FxaaLuma(FxaaTexTop(tex,posP.xy));if(!doneN)lumaEndN=lumaEndN-lumaNN*0.5;if(!doneP)lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if(!doneN)posN.x-=offNP.x*FXAA_QUALITY_P12;if(!doneN)posN.y-=offNP.y*FXAA_QUALITY_P12;doneNP=(!doneN)||(!doneP);if(!doneP)posP.x+=offNP.x*FXAA_QUALITY_P12;if(!doneP)posP.y+=offNP.y*FXAA_QUALITY_P12;}
#endif
}
#endif
}
#endif
}
#endif
}
#endif
}
#endif
}
#endif
}
#endif
}
#endif
}
#endif
}FxaaFloat dstN=posM.x-posN.x;FxaaFloat dstP=posP.x-posM.x;if(!horzSpan)dstN=posM.y-posN.y;if(!horzSpan)dstP=posP.y-posM.y;FxaaBool goodSpanN=(lumaEndN<0.0)!=lumaMLTZero;FxaaFloat spanLength=(dstP+dstN);FxaaBool goodSpanP=(lumaEndP<0.0)!=lumaMLTZero;FxaaFloat spanLengthRcp=1.0/spanLength;FxaaBool directionN=dstN<dstP;FxaaFloat dst=min(dstN,dstP);FxaaBool goodSpan=directionN ? goodSpanN : goodSpanP;FxaaFloat subpixG=subpixF*subpixF;FxaaFloat pixelOffset=(dst*(-spanLengthRcp))+0.5;FxaaFloat subpixH=subpixG*fxaaQualitySubpix;FxaaFloat pixelOffsetGood=goodSpan ? pixelOffset : 0.0;FxaaFloat pixelOffsetSubpix=max(pixelOffsetGood,subpixH);if(!horzSpan)posM.x+=pixelOffsetSubpix*lengthSign;if(horzSpan)posM.y+=pixelOffsetSubpix*lengthSign;
#if (FXAA_DISCARD == 1)
return FxaaTexTop(tex,posM);
#else
return FxaaFloat4(FxaaTexTop(tex,posM).xyz,lumaM);
#endif
}
#endif
void main(){out_color=FxaaPixelShader(vCoord,vec4(0.0),inputBuffer,inputBuffer,inputBuffer,resolution,vec4(0.0),vec4(0.0),vec4(0.0),0.75,0.166,0.0833,0.0,0.0,0.0,vec4(0.0));out_color.a=texture(inputBuffer,vCoord).a;}`},Jt={source:`vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}layout(location=0)out vec4 out_light;layout(location=1)out vec4 out_momentLengthVariance;in vec2 vCoord;uniform mediump sampler2D lightTex;uniform mediump sampler2D positionTex;uniform mediump sampler2D colorTex;uniform mediump sampler2D previousLightTex;uniform mediump sampler2D previousPositionTex;uniform mediump sampler2D previousColorTex;uniform mediump sampler2D previousMomentLengthVarianceTex;uniform mat4 historyCamera;uniform float colorBlendFactor;uniform float momentBlendFactor;uniform float demodulateAlbedo;vec2 LGL_As(vec3 position){vec4 historyCoord=historyCamera*vec4(position,1.0);return 0.5*historyCoord.xy/historyCoord.w+0.5;}float LGL_At(sampler2D meshIdTex,vec2 vCoord){return floor(texture(meshIdTex,vCoord).w);}float LGL_Au(float histMeshId,float currentMeshId,ivec2 coord,ivec2 size){if(histMeshId!=currentMeshId){return 0.0;}if(any(greaterThanEqual(coord,size))){return 0.0;}return 1.0;}void main(){vec3 currentPosition=LGL_An(positionTex,vCoord).xyz;float currentMeshId=LGL_At(positionTex,vCoord);vec4 accumulatedLight=texture(lightTex,vCoord);vec3 currentLight=accumulatedLight.rgb/accumulatedLight.a;vec2 hCoord=LGL_As(currentPosition);vec2 hSizef=vec2(textureSize(previousLightTex,0));vec2 hSizeInv=1.0/hSizef;ivec2 hSize=ivec2(hSizef);vec2 hTexelf=hCoord*hSizef-0.5;ivec2 hTexel=ivec2(hTexelf);vec2 f=fract(hTexelf);ivec2 texel[]=ivec2[](hTexel+ivec2(0,0),hTexel+ivec2(1,0),hTexel+ivec2(0,1),hTexel+ivec2(1,1));float weights[]=float[]((1.0-f.x)*(1.0-f.y),f.x*(1.0-f.y),(1.0-f.x)*f.y,f.x*f.y);vec4 historyLight=vec4(0.);;vec2 historyMoment=vec2(0.);float historyLength=0.;float sum=0.;float luminance=0.2126*currentLight.x+0.7152*currentLight.y+0.0722*currentLight.z;float N=texelFetch(previousMomentLengthVarianceTex,hTexel,0).b;if(N>0.0&&currentMeshId>0.0){for(int i=0;i<4;i++){vec2 gCoord=(vec2(texel[i])+0.5)*hSizeInv;float histMeshId=LGL_At(previousPositionTex,gCoord);float isValid=LGL_Au(histMeshId,currentMeshId,texel[i],hSize);float weight=isValid*weights[i];historyLight+=weight*texelFetch(previousLightTex,texel[i],0);historyMoment+=weight*texelFetch(previousMomentLengthVarianceTex,texel[i],0).rg;sum+=weight;}if(sum>0.0){historyLight/=sum;historyMoment/=sum;}else{hTexel=ivec2(hTexelf+0.5);for(int x=-1;x<=1;x++){for(int y=-1;y<=1;y++){ivec2 texel=hTexel+ivec2(x,y);vec2 gCoord=(vec2(texel)+0.5)*hSizeInv;float histMeshId=LGL_At(previousPositionTex,gCoord);float isValid=LGL_Au(histMeshId,currentMeshId,texel,hSize);float weight=isValid;historyLight+=weight*texelFetch(previousLightTex,texel,0);historyMoment+=weight*texelFetch(previousMomentLengthVarianceTex,texel,0).rg;sum+=weight;}}historyLight=sum>0.0 ? historyLight/sum : historyLight;historyMoment=sum>0.0 ? historyMoment/sum : historyMoment;}if(sum>0.0){historyLength=N+1.;float color_alpha_min=colorBlendFactor;float moment_alpha_min=momentBlendFactor;float color_alpha=max(1.0/historyLength,color_alpha_min);float moment_alpha=max(1.0/historyLength,moment_alpha_min);out_light=color_alpha*accumulatedLight+historyLight*(1.-color_alpha);float first_moment=moment_alpha*historyMoment.x+(1.0-moment_alpha)*luminance;float second_moment=moment_alpha*historyMoment.y+(1.0-moment_alpha)*luminance*luminance;float variance=second_moment-first_moment*first_moment;out_momentLengthVariance=vec4(first_moment,second_moment,historyLength,variance);return;}}out_light=accumulatedLight;out_momentLengthVariance=vec4(luminance,luminance*luminance,1.,100.);}`},jt={source:`vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}layout(location=0)out vec4 out_color;in vec2 vCoord;uniform sampler2D lightTex;uniform sampler2D LGL_AsDataTex;uniform sampler2D gPosition;uniform sampler2D gNormal;uniform sampler2D gColor;uniform float colorFactor;uniform float normalFactor;uniform float positionFactor;uniform float stepwidth;uniform int level;uniform float useMomentVariance;uniform float demodulateAlbedo;float LGL_Ap(float v){return acos(min(max(v,0.0),1.0));}float LGL_Aq(vec2 uv){return max(texture(LGL_AsDataTex,uv).a,0.);}vec4 LGL_Ar(){vec4 upscaledLight=texture(lightTex,vCoord);float sampleFrame=upscaledLight.a;float sf2=sampleFrame*sampleFrame;vec3 color=upscaledLight.rgb/upscaledLight.a;vec3 normal=texture(gNormal,vCoord).rgb;vec4 positionAndMeshIndex=texture(gPosition,vCoord);vec3 position=positionAndMeshIndex.rgb;float meshIndex=positionAndMeshIndex.w;bool isBG=meshIndex>0.0 ? false : true;if(isBG){return upscaledLight;}vec2 size=vec2(textureSize(lightTex,0));int kernelRadius=9;float dx=1./size.x;float dy=1./size.y;float kernel[9]=float[9](1.0/16.0,1.0/8.0,1.0/16.0,1.0/8.0,1.0/4.0,1.0/8.0,1.0/16.0,1.0/8.0,1.0/16.0);vec2 offset[9]=vec2[9](vec2(-dx,-dy),vec2(0,-dy),vec2(dx,-dy),vec2(-dx,0),vec2(0,0),vec2(dx,0),vec2(-dx,dy),vec2(0,dy),vec2(dx,dy));vec3 colorSum=vec3(0.);float weightSum=0.;float var;float varSum;float varSumWeight;if(useMomentVariance>0.){for(int i=0;i<kernelRadius;i++){vec2 uv=vCoord+offset[i];if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0){continue;}vec4 positionAndMeshIndex=texture(gPosition,uv);float meshIndex=positionAndMeshIndex.w;bool isBG=meshIndex>0.0 ? false : true;if(isBG){continue;}varSum+=kernel[i]*LGL_Aq(uv);varSumWeight+=kernel[i];}if(varSumWeight>0.0){var=max(varSum/varSumWeight,0.0);}else{var=max(LGL_Aq(vCoord),0.0);}}for(int i=0;i<kernelRadius;i++){vec2 uv=vCoord+offset[i]*float(stepwidth);if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0){continue;}vec4 positionAndMeshIndex=texture(gPosition,uv);float meshIndex=positionAndMeshIndex.w;bool isBG=meshIndex>0.0 ? false : true;if(isBG){continue;}vec4 upscaledLight=texture(lightTex,uv);vec3 kernelColor=upscaledLight.rgb/upscaledLight.a;float Dc=distance(color,kernelColor);float Wc;if(useMomentVariance>0.){Wc=min(exp(-Dc/((1.+sqrt(var))*colorFactor+1e-6)),1.0);}else{Wc=min(exp(-Dc/(colorFactor+1e-6)),1.0);}vec3 kernelNormal=texture(gNormal,uv).rgb;float Dn=distance(normal,kernelNormal);float dist2=max(Dn/(stepwidth*stepwidth+1e-6),0.0);float Wn=min(exp(-(dist2)/normalFactor+1e-6),1.0);vec3 kernelPosition=positionAndMeshIndex.rgb;float Dp=distance(position,kernelPosition);float Wp=min(exp(-Dp/(positionFactor+1e-6)),1.0);float weight=Wc*Wn*Wp*kernel[i];weightSum+=weight;colorSum+=kernelColor*weight;}colorSum=colorSum/weightSum;return vec4(colorSum*sampleFrame,sampleFrame);}void main(){vec4 light=LGL_Ar();out_color=light;}`};function $t(t,e){const{fullscreenQuad:a}=e;let n,r;function i(){let o=r;r=n,n=o}const s={gl:t,vertex:a.vertexShader,fragment:jt},l=ie(t,s);let f=.5,c=.02,d=.35;return{draw:function(o){let{light:u,reprojectData:L}=o;for(let p=0;p<3;p++)l.setUniform("level",p),l.setUniform("colorFactor",1/(1<<p)*f),l.setUniform("normalFactor",1/(1<<p)*c),l.setUniform("positionFactor",1/(1<<p)*d),l.setUniform("stepwidth",(1<<p+1)-1),p===0?l.setTexture("lightTex",u):l.setTexture("lightTex",n.color[0]),L?(l.setUniform("useMomentVariance",1),l.setTexture("reprojectDataTex",L)):(l.setUniform("useMomentVariance",0),l.setTexture("reprojectDataTex",null)),r.bind(),t.clear(t.COLOR_BUFFER_BIT),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),l.useProgram(),a.draw(),r.unbind(),i();return n},setGBuffers:function({position:o,normal:u,color:L}){l.setTexture("gPosition",o),l.setTexture("gNormal",u),l.setTexture("gColor",L)},setColorFactor:function(o){f=o},setNormalFactor:function(o){c=o},setPositionFactor:function(o){d=o},setDemodulateAlbedo:function(o){l.setUniform("demodulateAlbedo",o)},getDenoiseFactors:()=>({colorFactor:f,normalFactor:c,positionFactor:d}),setSize:function(o,u){(function(L,p){const h=()=>xe(t,{color:{0:D(t,{width:L,height:p,storage:"float",magFilter:t.NEAREST,minFilter:t.NEAREST})}});n=h(),r=h()})(o,u)},dispose:function(){l.dispose()}}}function ea(t){let e,a,n,r,i,s=-1,l=1,f=!1,c=0,d=0,o=function(p){const h=p.getParameter(p.MAX_RENDERBUFFER_SIZE);return h<=8192?2e5:h===16384?4e5:h>=32768?6e5:void 0}(t);function u(){const p=c/d;f?(e=Math.ceil(c/Math.sqrt(l)),a=Math.ceil(e/p),n=Math.ceil(c/e),r=Math.ceil(d/a),l=n*r):(e=Math.ceil(c/Math.round(c/Math.sqrt(o*p))),a=Math.ceil(e/p),n=Math.ceil(c/e),r=Math.ceil(d/a),l=n*r)}function L(){s=-1,i=NaN}return{nextTile:function(p){s++,i+=p,s%l==0&&(i&&(function(){const g=21-i/l;o+=5e3*Math.sign(g)*Math.sqrt(Math.abs(g)),o=fe(o,8192,c*d)}(),u()),i=0,s=0);const h=s===l-1,m=s%n,_=Math.floor(s/n)%r;return{x:m*e,y:_*a,tileWidth:e,tileHeight:a,isFirstTile:s===0,isLastTile:h}},reset:L,setSize:function(p,h){c=p,d=h,L(),u()},setTileSlicesNumber:function(p){p?(f=!0,l=p):f=!1}}}async function ta({gl:t,optionalExtensions:e,scene:a,camera:n,toneMapping:r,bounces:i,envMapIntensity:s,enviromentVisible:l,movingDownsampling:f,enableDenoise:c,enableTemporalDenoise:d,enableSpatialDenoise:o,useWorker:u,loadingCallback:L}){const p=new mt,h=function(x){let S,I,P,T,X=new le(1,1),Q=function(G){const U=G.getParameter(G.MAX_RENDERBUFFER_SIZE);return U<=8192?8e4:U===16384?15e4:U>=32768?4e5:void 0}(x);function O(){const G=S/I;P=Math.round(fe(Math.sqrt(Q*G),1,S)),T=Math.round(fe(P/G,1,I)),X.set(P/S,T/I)}return{adjustSize:function(G){G&&(Q+=600*(20-G),Q=fe(Q,8192,S*I),O())},setSize:function(G,U){S=G,I=U,O()},scale:X,get width(){return P},get height(){return T}}}(t),m=ea(t),_=_e(a,n),g=Et(_.meshes,_.materialIndexMap),v=$e(t,_.materials),A=function(x){const S=x.createVertexArray();return x.bindVertexArray(S),x.bindBuffer(x.ARRAY_BUFFER,x.createBuffer()),x.bufferData(x.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),x.STATIC_DRAW),x.enableVertexAttribArray(0),x.vertexAttribPointer(0,2,x.FLOAT,!1,0,0),x.bindVertexArray(null),{draw:function(){x.bindVertexArray(S),x.drawArrays(x.TRIANGLES,0,6)},vertexShader:Ke(x,{vertex:Tt})}}(t),M=kt(t,{materialBuffer:v,mergedMesh:g}),F=Kt(t,{fullscreenQuad:A,toneMapping:r}),N=function(x,S){const{fullscreenQuad:I}=S,P=ie(x,{gl:x,vertex:I.vertexShader,fragment:qt});return{draw:function(T){let{light:X}=T;P.setTexture("inputBuffer",X),P.useProgram(),I.draw()},setSize:function(T,X){P.setUniform("resolution",1/T,1/X)},dispose:function(){P.dispose()}}}(t,{fullscreenQuad:A}),y=function(x,S){const{fullscreenQuad:I,maxReprojectedSamples:P}=S,T=ie(x,{defines:{MAX_SAMPLES:P.toFixed(1)},vertex:I.vertexShader,fragment:Jt}),X=new Qe;let Q=.2,O=.2;return{draw:function(G){const{light:U,position:ue,color:pe,previousColor:Ae,previousLight:me,previousPosition:lt,previousMomentLengthVariance:dt}=G;T.setTexture("lightTex",U),T.setTexture("positionTex",ue),T.setTexture("colorTex",pe),T.setTexture("previousLightTex",me),T.setTexture("previousPositionTex",lt),T.setTexture("previousColorTex",Ae),T.setTexture("previousMomentLengthVarianceTex",dt),T.setUniform("colorBlendFactor",Q),T.setUniform("momentBlendFactor",O),T.useProgram(),I.draw()},setJitter:function(G,U){T.setUniform("jitter",G,U)},setPreviousCamera:function(G){X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),T.setUniform("historyCamera",X.elements)},setDenoiseColorBlendFactor:function(G){Q=G},setDenoiseMomentBlendFactor:function(G){O=G},setDemodulateAlbedo:function(G){T.setUniform("demodulateAlbedo",G)},getDenoiseFactors:()=>({colorBlendFactor:Q,momentBlendFactor:O}),dispose:function(){T.dispose()}}}(t,{fullscreenQuad:A,maxReprojectedSamples:20}),b=$t(t,{fullscreenQuad:A,toneMapping:r});let V,se,j=!1,C=0,ce=!0,H=()=>{};const R=await Wt(t,{bounces:i,decomposedScene:_,fullscreenQuad:A,materialBuffer:v,mergedMesh:g,optionalExtensions:e,scene:a,envMapIntensity:s,enviromentVisible:l,useWorker:u,loadingCallback:L}),$=new Image;let w,z,E,J,Y,ee;function Ee(){let x=Y;Y=ee,ee=x}function Ue(){let x=w;w=z,z=x}function he(x=!0){const S=Number(x&&d&&o);y.setDemodulateAlbedo(S),b.setDemodulateAlbedo(S)}$.src="data:image/png;base64,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",$.onload=()=>{R.setNoise($),j=!0},he(!1);let te=0,ae=0;function Fe(x,S){R.setCamera(x),M.setCamera(x),y.setPreviousCamera(S),S.copy(x)}function Ie(x,S,I=!0){R.setSize(x,S),R.setFrameCount(C);const P=I?(Math.random()-.5)/x:0,T=I?(Math.random()-.5)/S:0;c||R.setJitter(P,T),C===0?R.setStrataCount(1):C===4?R.setStrataCount(6):R.nextSeed()}function Xe(x,S){return function(I,P,T=1e-4){for(let X=0;X<I.length;X++)if(Math.abs(I[X]-P[X])>T)return!1;return!0}(x.matrixWorld.elements,S.matrixWorld.elements)&&x.aspect===S.aspect&&x.fov===S.fov}function re(x){x.bind(),t.clear(t.COLOR_BUFFER_BIT),x.unbind()}function ze(x,S,I){x.bind(),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ONE),t.enable(t.BLEND),t.viewport(0,0,S,I),R.draw(),t.disable(t.BLEND),x.unbind()}function ve(x,S){t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),F.draw({light:x,lightScale:S}),J=x}function Te(x){let S=F.draw({light:x},!0);N.draw({light:S.color[0]})}function Be(){w.bind(),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.viewport(0,0,te,ae),M.draw(),w.unbind(),b.setGBuffers({position:w.color[0],normal:w.color[1],color:w.color[2]})}function Ve(){d&&(Y.bind(),t.viewport(0,0,te,ae),y.draw({light:E.color[0],position:w.color[0],color:w.color[2],previousLight:J,previousPosition:z.color[0],previousColor:z.color[2],previousMomentLengthVariance:ee.color[1]}),Y.unbind(),o||(Te(Y.color[0]),J=Y.color[0])),o&&(d?(Te(b.draw({light:Y.color[0],reprojectData:ee.color[1]}).color[0]),J=Y.color[0]):(Te(b.draw({light:E.color[0],reprojectData:null}).color[0]),J=E.color[0]))}function rt(x=!1){const{x:S,y:I,tileWidth:P,tileHeight:T,isFirstTile:X,isLastTile:Q}=m.nextTile(se);X&&(C===0&&(re(E),y.setPreviousCamera(p)),Ie(te,ae,!0),c&&(d||o)&&Be(),R.bindTextures()),function(O,G,U,ue,pe){t.scissor(G,U,ue,pe),t.enable(t.SCISSOR_TEST),ze(O,te,ae),t.disable(t.SCISSOR_TEST)}(E,S,I,P,T),x&&!Q&&ve(E.color[0]),Q&&(c&&(d||o)?(J=E.color[0],Ve(),J=E.color[0]):ve(E.color[0]),Ee(),Ue(),C++,H())}function Ce(){var x,S,I;Ie(h.width,h.height,!1),R.bindTextures(),x=E,S=h.width,I=h.height,x.bind(),t.viewport(0,0,S,I),R.draw(),x.unbind(),ve(E.color[0],h.scale),re(E)}return{draw:function(x){j&&(Xe(x,p)?rt():(Fe(x,p),ce?ce=!1:Ce(),C=0,m.reset()))},fullDraw:function(x){if(j){if(Ue(),Ee(),Xe(x,p))C++;else{if(f)return Fe(x,p),C=0,void Ce();C=0,re(E)}Fe(x,p),Ie(te,ae,!0),c&&(d||o)&&Be(),R.bindTextures(),ze(E,te,ae),c&&(d||o)?Ve():ve(E.color[0]),H()}},setSize:function(x,S){te=x,ae=S,m.setSize(x,S),h.setSize(x,S),function(I,P){E=xe(t,{color:{0:D(t,{width:I,height:P,storage:"float",magFilter:t.LINEAR,minFilter:t.LINEAR})}}),J=E.color[0];const T=()=>xe(t,{color:{0:D(t,{width:I,height:P,storage:"float",magFilter:t.LINEAR,minFilter:t.LINEAR}),1:D(t,{width:I,height:P,storage:"float",channels:4,magFilter:t.LINEAR,minFilter:t.LINEAR})}});Y=T(),ee=T();const X=D(t,{width:I,height:P,storage:"halfFloat"}),Q=D(t,{width:I,height:P,storage:"float"}),O=function(U,ue,pe){const Ae=U.createRenderbuffer(),me=U.RENDERBUFFER;return U.bindRenderbuffer(me,Ae),U.renderbufferStorage(U.RENDERBUFFER,U.DEPTH_COMPONENT24,ue,pe),U.bindRenderbuffer(me,null),{target:me,texture:Ae}}(t,I,P),G=()=>xe(t,{color:{0:D(t,{width:I,height:P,storage:"float"}),1:X,2:Q},depth:O});w=G(),z=G()}(x,S),b.setSize(x,S),F.setSize(x,S),N.setSize(x,S),ce=!0},time:function(x){se=x-V,V=x},reset:function(){C=0,m.reset(),re(E),re(Y),re(ee)},getTotalSamplesRendered:()=>C,setfullSampleCallbackCallBack(x){H=x},setTileSlicesNumber:function(x){m.setTileSlicesNumber(x)},updateBounces:function(x){R.updateBounces(x)},updateEnvLight:function(){const x=_e(a,n);R.updateEnvLight(x)},updateMeshLight:function(){const x=_e(a,n);R.updateMeshLight(x)},setEnvMapIntensity:function(x){R.setEnvMapIntensity(x)},setEnviromentVisible:function(x){R.setEnviromentVisible(x)},setToneMapping:function(x){F.setToneMapping(x)},setMovingDownsampling:function(x){f=x},setDenoiseStatus:function(x){c=x},setTemporalDenoiseStatus:function(x){d=x,he()},setDenoiseColorBlendFactor:function(x){y.setDenoiseColorBlendFactor(x)},setDenoiseMomentBlendFactor:function(x){y.setDenoiseMomentBlendFactor(x)},setSpatialDenoiseStatus:function(x){o=x,he()},setDenoiseColorFactor:function(x){b.setColorFactor(x)},setDenoiseNormalFactor:function(x){b.setNormalFactor(x)},setDenoisePositionFactor:function(x){b.setPositionFactor(x)},getDenoiseFactors:function(){return Object.assign(b.getDenoiseFactors(),y.getDenoiseFactors())},setDemodulateAlbedo:he,updateMeshMaterial:function(){const x=_e(a,n),S=$e(t,x.materials);R.updateMeshMaterial(S)},dispose:function(){R.dispose(),M.dispose(),F.dispose(),N.dispose(),y.dispose(),b.dispose(),w.dispose(),z.dispose(),E.dispose(),Y.dispose(),ee.dispose(),v.dispose()}}}class ia{constructor(e={}){this.canvas=e.canvas||document.createElement("canvas"),this.gl=e.context||this.canvas.getContext("webgl2",{alpha:e.canvasAlpha||!1,depth:!0,stencil:!1,antialias:e.antialias||!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),Ne(this.gl,Oe),this.optionalExtensions=Ne(this.gl,It),this._bounces=2,this._envMapIntensity=1,this._toneMapping=we,this._movingDownsampling=!1,this._enableDenoise=!1,this._enableTemporalDenoise=!0,this._enableSpatialDenoise=!0,this._fullSampleCallback=null,this._enviromentVisible=!0,this.useTileRender=!1,this.renderWhenOffFocus=!0,this.useWorker=e.useWorker||!0,this.tileSlicesNum=0,this.loadingCallback=e.loadingCallback||{onProgress:a=>console.log(a),onComplete:a=>console.log(a)},this._isBuilding=!0,this.needsUpdate=!1,this.size=new le(this.canvas.width,this.canvas.height),this.pixelRatio=1,this.pipeline=null,this.currentTime=NaN,this.isValidTime=1,this.lastFocus=!1,this.domElement=this.canvas}static isSupported(){const e=document.createElement("canvas").getContext("webgl2",{failIfMajorPerformanceCaveat:!0});if(!e)return!1;const a=Ne(e,Oe);for(let n in a)if(!a[n])return!1;return!0}async buildScene(e,a){const{gl:n,optionalExtensions:r,bounces:i,size:s,toneMapping:l,envMapIntensity:f,enviromentVisible:c,movingDownsampling:d,enableDenoise:o,enableTemporalDenoise:u,enableSpatialDenoise:L,useWorker:p,tileSlicesNum:h,loadingCallback:m}=this;this._isBuilding=!0,e.updateMatrixWorld(),this.pipeline=await ta({gl:n,optionalExtensions:r,scene:e,camera:a,toneMapping:l,bounces:i,envMapIntensity:f,enviromentVisible:c,movingDownsampling:d,enableDenoise:o,enableTemporalDenoise:u,enableSpatialDenoise:L,useWorker:p,loadingCallback:m}),this.setSize(s.width,s.height),this.setTileSlicesNumber(h),this._isBuilding=!1,m&&m.onComplete&&typeof m.onComplete=="function"&&m.onComplete("Complete!")}set bounces(e){this._bounces=e,this.pipeline&&this.pipeline.updateBounces(e)}get bounces(){return this._bounces}set envMapIntensity(e){e=Number(e),this._envMapIntensity=e,this.pipeline&&this.pipeline.setEnvMapIntensity(e)}get envMapIntensity(){return this._envMapIntensity}set toneMapping(e){this._toneMapping=e,this.pipeline&&this.pipeline.setToneMapping(e)}get toneMapping(){return this._toneMapping}set enviromentVisible(e){this._enviromentVisible=e,this.pipeline&&this.pipeline.setEnviromentVisible(e)}get enviromentVisible(){return this._enviromentVisible}set movingDownsampling(e){e=!!e,this._movingDownsampling=e,this.pipeline&&this.pipeline.setMovingDownsampling(e)}get movingDownsampling(){return this._movingDownsampling}set enableDenoise(e){e=!!e,this._enableDenoise=e,this.pipeline&&this.pipeline.setDenoiseStatus(e)}get enableDenoise(){return this._enableDenoise}set enableTemporalDenoise(e){e=!!e,this._enableTemporalDenoise=e,this.pipeline&&this.pipeline.setTemporalDenoiseStatus(e)}get enableTemporalDenoise(){return this._enableTemporalDenoise}set enableSpatialDenoise(e){e=!!e,this._enableSpatialDenoise=e,this.pipeline&&this.pipeline.setSpatialDenoiseStatus(e)}get enableSpatialDenoise(){return this._enableSpatialDenoise}set fullSampleCallback(e){e&&typeof e=="function"&&(this._fullSampleCallback=e,this.pipeline&&this.pipeline.setfullSampleCallbackCallBack(e))}get fullSampleCallback(){return this._fullSampleCallback}getContext(){return this.gl}setTileSlicesNumber(e){e=Number(e),this.pipeline&&this.pipeline.setTileSlicesNumber(e)}updateMeshMaterial(){this.pipeline&&this.pipeline.updateMeshMaterial()}updateEnvLight(){this.pipeline&&this.pipeline.updateEnvLight()}updateMeshLight(){this.pipeline&&this.pipeline.updateMeshLight()}setDenoiseColorBlendFactor(e){this.pipeline&&this.pipeline.setDenoiseColorBlendFactor(e)}setDenoiseMomentBlendFactor(e){this.pipeline&&this.pipeline.setDenoiseMomentBlendFactor(e)}setDenoiseColorFactor(e){this.pipeline&&this.pipeline.setDenoiseColorFactor(e)}setDenoiseNormalFactor(e){this.pipeline&&this.pipeline.setDenoiseNormalFactor(e)}setDenoisePositionFactor(e){this.pipeline&&this.pipeline.setDenoisePositionFactor(e)}setDemodulateAlbedo(e){this.pipeline&&this.pipeline.setDemodulateAlbedo(e),this.needsUpdate=!0}getDenoiseFactors(){if(this.pipeline)return this.pipeline.getDenoiseFactors()}setSize(e,a,n=!0){const{size:r,canvas:i,pipeline:s,pixelRatio:l}=this;r.set(e,a),i.width=r.width*l,i.height=r.height*l,n&&(i.style.width=`${r.width}px`,i.style.height=`${r.height}px`),this.pipeline&&s.setSize(r.width*l,r.height*l)}getSize(e){const{size:a}=this;return e||(e=new le),e.copy(a)}setPixelRatio(e){const{size:a}=this;e&&(this.pixelRatio=e,this.setSize(a.width,a.height,!1))}getPixelRatio(){return this.pixelRatio}getTotalSamples(){if(this.pipeline)return this.pipeline.getTotalSamplesRendered()}restartTimer(){this.isValidTime=NaN}render(e,a){if(!this._isBuilding)if(this.pipeline){if(this.needsUpdate&&(this.needsUpdate=!1,this.pipeline.reset()),!this.renderWhenOffFocus){const n=document.hasFocus();if(!n)return void(this.lastFocus=n);n&&!this.lastFocus&&(this.lastFocus=n,this.restartTimer())}this.currentTime=performance.now(),this.pipeline.time(this.isValidTime*this.currentTime),this.isValidTime=1,this.currentTime=NaN,a.updateMatrixWorld(),this.useTileRender?this.pipeline.draw(a):this.pipeline.fullDraw(a)}else console.error("Pipeline not initialized, The scene needs to be built first!")}dispose(){this.pipeline&&this.pipeline.dispose(),this.pipeline=null}}export{ia as C,qe as W};
