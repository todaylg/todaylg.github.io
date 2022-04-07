var Pt=Object.defineProperty;var Ue=Object.getOwnPropertySymbols;var Nt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var be=(e,a,t)=>a in e?Pt(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Ee=(e,a)=>{for(var t in a||(a={}))Nt.call(a,t)&&be(e,t,a[t]);if(Ue)for(var t of Ue(a))yt.call(a,t)&&be(e,t,a[t]);return e};import{V as D,aq as Bt,aD as we,x as Rt,R as Ut,w as bt,ar as Et,H as wt,F as Xe,as as Xt,_ as Dt,O as he,af as De,d as Se,P as zt,al as Ct}from"./vendor.b603f603.js";import{k as Vt,G as ze,S as Te,T as Ce,n as K,D as Qt,t as ie,o as $,p as z,q as Ot,r as Yt,v as Ht,w as ne,x as pe,y as kt,z as Wt,A as qt,B as Me}from"./utils.fee463e2.js";import{D as Ve}from"./DisneyMaterial.4be40585.js";const Qe=["EXT_color_buffer_float","EXT_float_blend"],Kt=["OES_texture_float_linear"];var jt={source:"layout(location=0)in vec2 a_position;out vec2 vCoord;void main(){vCoord=a_position;gl_Position=vec4(2.*a_position-1.,0,1);}"};function Zt(e){const a=e.createVertexArray();e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW);const t=0;e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0),e.bindVertexArray(null);const i=Vt(e,{vertex:jt});function o(){e.bindVertexArray(a),e.drawArrays(e.TRIANGLES,0,6)}return{draw:o,vertexShader:i}}const Jt=0,$t=1,ea=2,ta=3,aa=4;function ia(...e){let a=0;for(let i=0;i<e.length;i++){const o=e[i],r=o.data?o.data.length/o.channels:0;a=Math.max(a,r)}const t=[];for(let i=0;i<a;i++)for(let o=0;o<e.length;o++){const{data:r=[],channels:l}=e[o];for(let s=0;s<l;s++)t.push(r[i*l+s])}return t}function na(e){const a={};return a.position=e.map(t=>t.position),a.emission=e.map(t=>t.emission),a.p1=e.map(t=>t.p1),a.p2=e.map(t=>t.p2),a.radius=e.map(t=>t.radius),a.area=e.map(t=>t.area),a.type=e.map(t=>t.type),a.visible=e.map(t=>t.visible),a.position=[].concat(...a.position.map(t=>t.toArray())),a.emission=[].concat(...a.emission.map(t=>t.toArray())),a.p1=[].concat(...a.p1.map(t=>t.toArray())),a.p2=[].concat(...a.p2.map(t=>t.toArray())),a.params=ia({data:a.radius,channels:1},{data:a.area,channels:1},{data:a.type,channels:1},{data:a.visible,channels:1}),a}function oa(e){const a=e.map(t=>{const i={};switch(i.position=t.position,i.emission=t.color.multiplyScalar(t.intensity),i.radius=t.radius||0,i.area=0,i.visible=Number(t.visible),i.p1=new D,i.p2=new D,t.type){case"RectAreaLight":if(i.type=Jt,t.width&&t.height){const o=new Bt(t.width,t.height),r=new D;t.target&&r.copy(t.target);const l=new D().subVectors(t.position,r),s=new D().copy(l).negate();o.lookAt(s);const n=o.attributes.position.array,f=new D(n[0],n[1],n[2]).add(t.position);new D(n[3],n[4],n[5]).add(t.position);const u=new D(n[6],n[7],n[8]).add(t.position),c=new D(n[9],n[10],n[11]).add(t.position);i.position.copy(u),i.p1=c.sub(u),i.p2=f.sub(u),i.area=new D().crossVectors(i.p1,i.p2).length()}break;case"QuadLight":i.type=$t,i.p1=t.v1.sub(t.position),i.p2=t.v2.sub(t.position),i.area=new D().crossVectors(i.p1,i.p2).length();break;case"SphereAreaLight":i.type=ea,i.area=4*Math.PI*t.radius*t.radius;break;case"PointLight":i.type=aa,i.area=0;break;case"DirectionalLight":i.type=ta,t.target&&i.p1.copy(t.target),i.area=0;break;default:console.warn(`Not support light type: ${t.type}`);break}return i});return na(a)}function oe(e,a){const t=[],i=[];e.traverse(u=>{u.isMesh&&(u.geometry?u.material?(u.material.isMeshStandardMaterial?u.material=new Ve().fromStandardMaterial(u.material):u.material.isRayTracingMaterial||(u.material=new Ve().fromBasicMaterial(u.material)),t.push(u)):console.warn(u,"must have a material property."):console.warn(u,"must have a geometry property")),u.isLight&&i.push(u)});const o={data:e.environment,intensity:e.envMapIntensity||1},r=o.data&&o.data.isTexture,l=i.length||0;let s=null;l&&(s=oa(i));const n=new Map;for(const u of t){const c=u.material;let p=n.get(c);p===void 0&&(p=n.size,n.set(c,p))}const f=ze(n).bufferSize;return{environment:o,isTextureEnv:r,camera:a,meshes:t,meshLights:s,meshLightsNum:l,materialIndexMap:n,materials:Array.from(n.keys()),uvTransformBufferDataLength:f}}function Oe(e,a){const t=a.materialIndexMap,{mapNum:i,perMatrixLength:o,perWrappingDataLength:r,uvTransDataLength:l,bufferSize:s}=ze(t);let n=new Float32Array(s);const f=new we,u=i*o,c=i*r;t.forEach((x,L)=>{Te.forEach((v,g)=>{const A=L[`${v}`];let S=f.elements;A&&(A.updateMatrix(),S=A.matrix.elements);for(let F=0;F<o;F++)n[u*x+g*o+F]=S[F];let M=0,_=0;A&&(M=Ce.get(A.wrapS),_=Ce.get(A.wrapT)),n[l+x*c+g*r+0]=M,n[l+x*c+g*r+1]=_,n[l+x*c+g*r+2]=0})});const p=K(e,n,3);function m(){n=null,p.dispose()}return{uvTransformBufferTex:p,uvTransformBufferDataCount:n.length/3,wrappingRootIndex:l/3,dispose:m}}var ra=`uniform sampler2D uvTransformBuffer;
uniform int wrappingIndex;

// given the index from a 1D array, retrieve corresponding position from packed 2D texture
ivec2 unpackTexel(int i, int columnsLog2) {
	ivec2 u;
	u.y = i >> columnsLog2; // equivalent to (i / 2^columnsLog2) \u9664\u4EE5\u884C\u6570\u5F97\u5F53\u524D\u6240\u5728\u884C
	u.x = i - (u.y << columnsLog2); // equivalent to (i % 2^columnsLog2) \u533A\u57DF\u5F97\u5230\u5F53\u524D\u6240\u5728\u5217
	return u;
}

vec4 fetchData(sampler2D s, int i, int columnsLog2) {
	return texelFetch(s, unpackTexel(i, columnsLog2), 0);
}

ivec4 fetchData(isampler2D s, int i, int columnsLog2) {
	return texelFetch(s, unpackTexel(i, columnsLog2), 0);
}

uniform Materials {
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

mat3 getMatUVTransform(int materialIndex, int mapKey) {
	int offset = materialIndex * SUPPORTED_MAPS * 3;
	int mapOffset = mapKey * 3;
	vec3 matRow1 = fetchData(uvTransformBuffer, offset + mapOffset + 0, UVTRANSFORM_COLUMNS).xyz;
	vec3 matRow2 = fetchData(uvTransformBuffer, offset + mapOffset + 1, UVTRANSFORM_COLUMNS).xyz;
	vec3 matRow3 = fetchData(uvTransformBuffer, offset + mapOffset + 2, UVTRANSFORM_COLUMNS).xyz;
	mat3 uvTransform = mat3(matRow1, matRow2, matRow3);
	return uvTransform;
}

vec3 getMatWrapping(int materialIndex, int mapKey) {
	int offset = wrappingIndex + materialIndex * SUPPORTED_MAPS;
	int mapOffset = mapKey;
	vec3 wrappingData = fetchData(uvTransformBuffer, offset + mapOffset, UVTRANSFORM_COLUMNS).xyz;
	return wrappingData;
}

vec2 applayTextureWrapping(vec2 uv, vec3 warpping) {
	if (uv.x <= 0. || uv.x >= 1.) {
		float warpS = warpping.x;
		if (warpS == 0.) {
			// ClampToEdgeWrapping
			uv.x = uv.x <= 0. ? 0. : 1.;
		} else if (warpS == 1.) {
			// RepeatWrapping
			uv.x = uv.x - floor(uv.x);
		}
		// MirroredRepeatWrapping
	}
	if (uv.y <= 0. || uv.y >= 1.) {
		float warpT = warpping.y;
		if (warpT == 0.) {
			uv.y = uv.y <= 0. ? 0. : 1.;
		} else if (warpT == 1.) {
			uv.y = uv.y - floor(uv.y);
		}
	}

	return uv;
}

float getMatType(int materialIndex) {
	return materials.colorAndMaterialType[materialIndex].w;
}

float getMatWorkflow(int materialIndex) {
	return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].w;
}

vec3 getMatEmissive(int materialIndex, vec2 uv) {
	// Todo: emissive Intensity
	vec3 emissive = vec3(0.0);

	#ifdef NUM_EMISSIVE_MAPS
		int emissiveMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialIndex].x;
		if (emissiveMapIndex >= 0) {
			mat3 uvTransform = getMatUVTransform(materialIndex, 6);
			uv = (uvTransform * vec3(uv, 1)).xy;
			vec3 warpping = getMatWrapping(materialIndex, 6);
			uv = applayTextureWrapping(uv, warpping);
			uv = uv * materials.pbrMapSize[emissiveMapIndex].xy;
			emissive = texture(emissiveMap, vec3(uv, emissiveMapIndex)).rgb;
		}
	#endif
	
	return emissive;
}

vec3 getMatSpecularColor(int materialIndex, vec2 uv) {
	vec3 specularColor = materials.specularColorGlossiness[materialIndex].rgb;

	#ifdef NUM_PBR_SG_MAPS
		int specularMapIndex = materials.emissiveSpecularGlossinessMapIndex[materialIndex].y;
		if (specularMapIndex >= 0) {
			mat3 uvTransform = getMatUVTransform(materialIndex, 4);
			uv = (uvTransform * vec3(uv, 1)).xy;
			vec3 warpping = getMatWrapping(materialIndex, 4);
			uv = applayTextureWrapping(uv, warpping);
			uv = uv * materials.pbrMapSize[specularMapIndex].xy;

			vec3 texelSpecular = texture(pbrSGMap, vec3(uv, specularMapIndex)).rgb;
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
			mat3 uvTransform = getMatUVTransform(materialIndex, 5);
			uv = (uvTransform * vec3(uv, 1)).xy;
			vec3 warpping = getMatWrapping(materialIndex, 5);
			uv = applayTextureWrapping(uv, warpping);
			uv = uv * materials.pbrMapSize[glossinessMapIndex].xy;
			// float texelGlossiness = texture(pbrSGMap, vec3(uv, glossinessMapIndex)).a;
			// 4D
			float texelGlossiness = texture(pbrSGMap, vec3(uv, glossinessMapIndex)).x;
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
				uv = uv * materials.pbrMapSize[roughnessMapIndex].xy;
				mat3 uvTransform = getMatUVTransform(materialIndex, 2);
				uv = (uvTransform * vec3(uv, 1)).xy;
				vec3 warpping = getMatWrapping(materialIndex, 2);
				uv = applayTextureWrapping(uv, warpping);
				roughness *= texture(pbrMap, vec3(uv, roughnessMapIndex)).g;
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
				mat3 uvTransform = getMatUVTransform(materialIndex, 3);
				uv = (uvTransform * vec3(uv, 1)).xy;
				vec3 warpping = getMatWrapping(materialIndex, 3);
				uv = applayTextureWrapping(uv, warpping);
				uv = uv * materials.pbrMapSize[metalnessMapIndex].xy;
				metalness *= texture(pbrMap, vec3(uv, metalnessMapIndex)).b;
			}
		#endif
	}

	return metalness;
}

vec4 getMatColorAlpha(int materialIndex, vec2 uv) {
	// if (enableAlbedo && bounce == 0) return vec3(1.);
	vec3 color = materials.colorAndMaterialType[materialIndex].rgb;
	float alphaCutoff = 1.0;
	#ifdef NUM_DIFFUSE_MAPS
		int diffuseMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;
		if (diffuseMapIndex >= 0) {
			mat3 uvTransform = getMatUVTransform(materialIndex, 0);
			uv = (uvTransform * vec3(uv, 1)).xy;
			vec3 warpping = getMatWrapping(materialIndex, 0);
			uv = applayTextureWrapping(uv, warpping);
			
			uv = uv * materials.diffuseNormalMapSize[diffuseMapIndex].xy;
			vec4 diffuse = texture(diffuseMap, vec3(uv, diffuseMapIndex));
			color *= diffuse.rgb;
			alphaCutoff = diffuse.a;
		}
	#endif

	float workflow = getMatWorkflow(materialIndex);
	if (workflow > 0.1) {
		vec3 specularFactor = getMatSpecularColor(materialIndex, uv);
		color = computeDiffuseColor(color, computeMetallicFromSpecularColor(specularFactor));
	}

	return vec4(color, alphaCutoff);
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
	// Todo: /3ed-2018/Materials/BSDFs => WorldToLocal/LocalToWorld
	tangent = normalize(dpdu);
	bitangent = normalize(dpdv);

#ifdef NUM_NORMAL_MAPS
	int normalMapIndex = materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].y;
	if (normalMapIndex >= 0) {
		mat3 uvTransform = getMatUVTransform(materialIndex, 1);
		uv = (uvTransform * vec3(uv, 1)).xy;
		vec3 warpping = getMatWrapping(materialIndex, 1);
		uv = applayTextureWrapping(uv, warpping);

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
}`;function sa(e,a,t){const i=e.getActiveUniformBlockParameter(a,t,e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),o=e.getActiveUniforms(a,i,e.UNIFORM_OFFSET),r=e.getActiveUniforms(a,i,e.UNIFORM_ARRAY_STRIDE),l={};for(let s=0;s<i.length;s++){const{name:n,type:f,size:u}=e.getActiveUniform(a,i[s]);l[n]={type:f,size:u,offset:o[s],stride:r[s]}}return l}function Q(e,a,t,i,o,r,l){const s=Math.min(l.length/r,t);for(let n=0;n<s;n++)for(let f=0;f<r;f++)e[a](i+n*o+f*4,l[r*n+f],!0)}function la(e,a,t){const i=e.getUniformBlockIndex(a,t),o=e.getActiveUniformBlockParameter(a,i,e.UNIFORM_BLOCK_DATA_SIZE),r=sa(e,a,i),l=e.createBuffer();e.bindBuffer(e.UNIFORM_BUFFER,l),e.bufferData(e.UNIFORM_BUFFER,o,e.STATIC_DRAW);const s=new DataView(new ArrayBuffer(o));function n(c,p){if(!r[c])return;const{type:m,size:x,offset:L,stride:v}=r[c];switch(m){case e.FLOAT:Q(s,"setFloat32",x,L,v,1,p);break;case e.FLOAT_VEC2:Q(s,"setFloat32",x,L,v,2,p);break;case e.FLOAT_VEC3:Q(s,"setFloat32",x,L,v,3,p);break;case e.FLOAT_VEC4:Q(s,"setFloat32",x,L,v,4,p);break;case e.INT:Q(s,"setInt32",x,L,v,1,p);break;case e.INT_VEC2:Q(s,"setInt32",x,L,v,2,p);break;case e.INT_VEC3:Q(s,"setInt32",x,L,v,3,p);break;case e.INT_VEC4:Q(s,"setInt32",x,L,v,4,p);break;case e.BOOL:Q(s,"setUint32",x,L,v,1,p);break;default:console.warn("UniformBuffer: Unsupported type")}}function f(c){e.bindBuffer(e.UNIFORM_BUFFER,l),e.bufferSubData(e.UNIFORM_BUFFER,0,s),e.bindBufferBase(e.UNIFORM_BUFFER,c,l)}function u(){e.deleteBuffer(l)}return{set:n,bind:f,dispose:u}}function fa(e,a){const t={};for(const i of a){const o=[];t[i]={indices:He(e,i,o),textures:o}}return t}function Ye(e,a){const t={textures:[],indices:{}};for(const i of a)t.indices[i]=He(e,i,t.textures);return t}function He(e,a,t){const i=[];for(const o of e)if(!(o[a]&&o[a].image))i.push(-1);else{let l=t.length;for(let s=0;s<t.length;s++)if(t[s]===o[a]){l=s;break}l===t.length&&t.push(o[a]),i.push(l)}return i}function ua(e){const a={width:0,height:0};for(const i of e)a.width=Math.max(a.width,i.width),a.height=Math.max(a.height,i.height);const t=[];for(const i of e)t.push(i.width/a.width),t.push(i.height/a.height);return{maxSize:a,relativeSizes:t}}function V(...e){let a=0;for(let i=0;i<e.length;i++){const o=e[i],r=o.data?o.data.length/o.channels:0;a=Math.max(a,r)}const t=[];for(let i=0;i<a;i++)for(let o=0;o<e.length;o++){const{data:r=[],channels:l}=e[o];for(let s=0;s<l;s++)t.push(r[i*l+s])}return t}function da(e,a,t){const i=la(e,a,"Materials");return i.set("Materials.colorAndMaterialType[0]",V({data:[].concat(...t.color.map(o=>o.toArray())),channels:3},{data:t.type,channels:1})),i.set("Materials.roughnessMetalnessNormalScale[0]",V({data:t.roughness,channels:1},{data:t.metalness,channels:1},{data:[].concat(...t.normalScale.map(o=>o.toArray())),channels:2})),i.set("Materials.alphaSpecularTintSheenSheenTint[0]",V({data:t.alpha,channels:1},{data:t.specularTint,channels:1},{data:t.sheen,channels:1},{data:t.sheenTint,channels:1})),i.set("Materials.clearcoaRoughnessSubfaceTransmission[0]",V({data:t.clearcoat,channels:1},{data:t.clearcoatRoughness,channels:1},{data:t.subsurface,channels:1},{data:t.transmission,channels:1})),i.set("Materials.iorAtDistanceAnisotropicWorkflow[0]",V({data:t.ior,channels:1},{data:t.atDistance,channels:1},{data:t.anisotropic,channels:1},{data:t.workflow,channels:1})),i.set("Materials.specularColorGlossiness[0]",V({data:[].concat(...t.specularColor.map(o=>o.toArray())),channels:3},{data:t.glossiness,channels:1})),i.set("Materials.extinction[0]",V({data:[].concat(...t.extinction.map(o=>o.toArray())),channels:3},{data:t.anisotropic,channels:1})),i.set("Materials.diffuseNormalRoughnessMetalnessMapIndex[0]",V({data:t.diffuseMapIndex,channels:1},{data:t.normalMapIndex,channels:1},{data:t.roughnessMapIndex,channels:1},{data:t.metalnessMapIndex,channels:1})),i.set("Materials.emissiveSpecularGlossinessMapIndex[0]",V({data:t.emissiveMapIndex,channels:1},{data:t.specularMapIndex,channels:1},{data:t.glossinessMapIndex,channels:1},{data:t.emissiveMapIndex,channels:1})),i.set("Materials.diffuseNormalMapSize[0]",V({data:t.diffuseMapSize,channels:2},{data:t.normalMapSize,channels:2})),i.set("Materials.pbrMapSize[0]",t.pbrMapSize),i.bind(0),i}function ke(e,a){let t;switch(a){case bt:t=e.CLAMP_TO_EDGE;break;case Ut:t=e.REPEAT;break;case Rt:t=e.GL_MIRRORED_REPEAT;break}return t}function re(e,a,t=!1,i=3){const o=a.map(c=>c.image),r=a.map(c=>c.flipY),l=a.map(c=>ke(e,c.wrapS)),s=a.map(c=>ke(e,c.wrapT)),{maxSize:n,relativeSizes:f}=ua(o);return{texture:z(e,{width:n.width,height:n.height,gammaCorrection:t,data:o,flipY:r,channels:i,minFilter:e.NEAREST,magFilter:e.NEAREST,wrapS:l,wrapT:s}),relativeSizes:f}}function We(e,a){const{materials:t,uvTransformBufferDataLength:i}=a,o=fa(t,["map","normalMap","emissiveMap"]),r=Ye(t,["roughnessMap","metalnessMap"]),l=Ye(t,["specularMap","glossinessMap"]),s={},n={};if(n.color=t.map(m=>m.color),n.roughness=t.map(m=>m.roughness),n.metalness=t.map(m=>m.metalness),n.normalScale=t.map(m=>m.normalScale),n.specularTint=t.map(m=>m.specularTint),n.sheen=t.map(m=>m.sheen),n.sheenTint=t.map(m=>m.sheenTint),n.clearcoat=t.map(m=>m.clearcoat),n.clearcoatRoughness=t.map(m=>m.clearcoatRoughness),n.transmission=t.map(m=>m.transmission),n.subsurface=t.map(m=>m.subsurface),n.ior=t.map(m=>m.ior),n.atDistance=t.map(m=>m.atDistance),n.extinction=t.map(m=>m.extinction),n.alpha=t.map(m=>m.alpha),n.workflow=t.map(m=>m.workflow==="Metalness"?0:1),n.specularColor=t.map(m=>m.specularColor),n.glossiness=t.map(m=>m.glossiness),n.type=t.map(m=>Qt),o.map.textures.length>0){const{relativeSizes:m,texture:x}=re(e,o.map.textures,!0,4);s.diffuseMap=x,n.diffuseMapSize=m,n.diffuseMapIndex=o.map.indices}if(o.normalMap.textures.length>0){const{relativeSizes:m,texture:x}=re(e,o.normalMap.textures,!1);s.normalMap=x,n.normalMapSize=m,n.normalMapIndex=o.normalMap.indices}if(r.textures.length>0){const{relativeSizes:m,texture:x}=re(e,r.textures,!1);s.pbrMap=x,n.pbrMapSize=m,n.roughnessMapIndex=r.indices.roughnessMap,n.metalnessMapIndex=r.indices.metalnessMap}if(l.textures.length>0){const{relativeSizes:m,texture:x}=re(e,l.textures,!1,4);s.pbrSGMap=x,n.pbrMapSize=m,n.specularMapIndex=l.indices.specularMap,n.glossinessMapIndex=l.indices.glossinessMap}if(o.emissiveMap.textures.length>0){const{relativeSizes:m,texture:x}=re(e,o.emissiveMap.textures,!0);s.emissiveMap=x,n.pbrMapSize||(n.pbrMapSize=m),n.emissiveMapIndex=o.emissiveMap.indices}const f={NUM_MATERIALS:t.length,NUM_DIFFUSE_MAPS:o.map.textures.length,NUM_NORMAL_MAPS:o.normalMap.textures.length,NUM_DIFFUSE_NORMAL_MAPS:Math.max(o.map.textures.length,o.normalMap.textures.length),NUM_PBR_MAPS:r.textures.length,NUM_PBR_SG_MAPS:l.textures.length,NUM_EMISSIVE_MAPS:o.emissiveMap.textures.length,UVTRANSFORM_COLUMNS:ie(i/3).columnsLog,SUPPORTED_MAPS:Te.length},u=$(e,{vertex:{source:"void main() {}"},fragment:{includes:[ra],source:"void main() {}"},defines:f}),c=da(e,u.program,n);function p(){u.dispose(),c.dispose()}return{defines:f,textures:s,dispose:p}}function ca(e,a=1){const t=e.length/4,i=new Float32Array(t*3),o=[];for(let r=0;r<255;r++)o[r]=a*Math.pow(2,r-128)/255;for(let r=0;r<t;r++){const l=e[4*r],s=e[4*r+1],n=e[4*r+2],f=e[4*r+3],u=o[f];i[3*r]=l*u,i[3*r+1]=s*u,i[3*r+2]=n*u}return i}function pa(e){const a=document.createElement("canvas"),t=a.getContext("2d");return a.width=e.width,a.height=e.height,t.drawImage(e,0,0),t.getImageData(0,0,a.width,a.height).data}function ma(e){let a;if(a={width:e.data.image.width,height:e.data.image.height,data:e.data.image.data,dataFormat:"float"},e.data.type===Et?a.data?a.data=ca(a.data,e.intensity):(a.data=pa(e.data.image),a.dataFormat="byte"):e.data.type==wt?console.error("Please use 'new RGBELoader().setDataType(THREE.FloatType)' to load hdr env map. Half-Float type will loss of precision and have an impression of the effect."):e.data.type!==Xe&&console.error(`No support environmentLight's data type: ${e.data.type.toString()}`),e.data.type===Xe&&e.data.format===Xt){const t=e.data.image.data,i=t.length/4,o=new Float32Array(i*3);for(let r=0;r<i;r++)o[r*3+0]=t[r*4+0],o[r*3+1]=t[r*4+1],o[r*3+2]=t[r*4+2];a.data=o}return a}function La(e){let a;return e&&e.data&&e.data.isTexture?a=ma(e):console.warn(`No support environment type: ${e.data}`),a}function xa(e,a,t){const i=new Float32Array(t*e*a);return{set(o,r,l,s){i[t*(r*e+o)+l]=s},get(o,r,l){return i[t*(r*e+o)+l]},width:e,height:a,channels:t,array:i}}function va(e){const a=e.data,t={width:e.width+2,height:e.height+1},i=xa(t.width,t.height,2);for(let r=0;r<e.height;r++){const l=Math.sin(Math.PI*(r+.5)/e.height);for(let n=0;n<e.width;n++){const f=3*(r*e.width+n);let u=a[f],c=a[f+1],p=a[f+2],m=.2126*u+.7152*c+.0722*p;m*=l,i.set(n+2,r,0,i.get(n+1,r,0)+m/e.width),i.set(n+1,r,1,m)}const s=i.get(t.width-1,r,0);for(let n=1;n<i.width;n++)i.set(n,r,0,i.get(n,r,0)/s),i.set(n,r,1,i.get(n,r,1)/s);i.set(0,r+1,0,i.get(0,r,0)+s/e.height),i.set(0,r,1,s)}const o=i.get(0,i.height-1,0);for(let r=0;r<i.height;r++)i.set(0,r,0,i.get(0,r,0)/o),i.set(0,r,1,i.get(0,r,1)/o);return t.data=i.array,t}var _a={source:e=>`
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
struct Ray{vec3 o;vec3 d;float LGL_BO;};struct Path{Ray ray;vec3 li;float alpha;vec3 beta;bool LGL_BQ;float LGL_BR;vec3 LGL_BS;};struct Camera{mat4 transform;float aspect;float fov;float focus;float aperture;};
#if defined(NUM_LIGHTS)
struct Lights{vec3 position[NUM_LIGHTS];vec3 emission[NUM_LIGHTS];vec3 p1[NUM_LIGHTS];vec3 p2[NUM_LIGHTS];vec4 params[NUM_LIGHTS];};struct Light{vec3 position;vec3 emission;vec3 p1;vec3 p2;float radius;float area;float type;float visible;};
#endif
struct SurfaceInteraction{bool LGL_BK;bool LGL_BI;float t;vec3 position;vec3 normal;vec3 LGL_BM;vec3 LGL_BL;vec3 tangent;vec3 bitangent;vec3 color;vec3 extinction;vec3 emissive;int LGL_BH;float roughness;float metalness;float LGL_BF;float LGL_BB;float LGL_Ay;float sheen;float LGL_Az;float clearcoat;float LGL_BA;float LGL_BC;float ior;float LGL_BE;float eta;float LGL_BD;vec3 specularColor;float LGL_BG;};struct BsdfSampleRec{vec3 L;vec3 f;float pdf;};struct LightSampleRec{vec3 normal;vec3 emission;vec3 direction;float dist;float pdf;};void LGL_AW(inout Ray ray,vec3 origin,vec3 direction){ray.o=origin;ray.d=direction;ray.LGL_BO=RAY_MAX_DISTANCE;}void LGL_AW(inout Ray ray,vec3 origin,vec3 direction,float rMax){ray.o=origin;ray.d=direction;ray.LGL_BO=rMax;}void LGL_Bc(inout Ray ray,in Ray targetRay){ray.o=targetRay.o;ray.d=targetRay.d;ray.LGL_BO=targetRay.LGL_BO;}uniform Camera camera;uniform vec2 pixelSize;uniform vec2 jitter;uniform float frameCount;in vec2 vCoord;
#if defined(NUM_LIGHTS)
uniform Lights lights;
#endif
uniform int bounces;uniform vec3 backgroundColor;uniform float envMapIntensity;uniform int enviromentVisible;uniform int tlasIndex;uniform sampler2D noiseTex;uniform float stratifiedSamples[71];uniform float strataSize;float pixelSeed;float LGL_AN(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}uvec4 seed;ivec2 pixel;void LGL_AO(float frame){pixel=ivec2(vCoord/pixelSize);seed=uvec4(pixel,int(frame),pixel.x+pixel.y);}void LGL_AP(inout uvec4 v){v=v*1664525u+1013904223u;v.x+=v.y*v.w;v.y+=v.z*v.x;v.z+=v.x*v.y;v.w+=v.y*v.z;v=v ^(v>>16u);v.x+=v.y*v.w;v.y+=v.z*v.x;v.z+=v.x*v.y;v.w+=v.y*v.z;}float LGL_AQ(){LGL_AP(seed);return float(seed.x)/float(0xffffffffu);}vec2 LGL_AQ2(){LGL_AP(seed);return vec2(seed.xy)/float(0xffffffffu);}void LGL_AS(float frame){vec2 noiseSize=vec2(textureSize(noiseTex,0));pixelSeed=texture(noiseTex,vCoord/(pixelSize*noiseSize)).r;LGL_AO(frame);}int sampleIndex=0;float LGL_AQomSample(){float stratifiedSample=stratifiedSamples[sampleIndex++];float LGL_AQom=fract((stratifiedSample+pixelSeed)*strataSize);return EPS+(1.0-2.0*EPS)*LGL_AQom;}vec2 LGL_AQomSampleVec2(){return vec2(LGL_AQomSample(),LGL_AQomSample());}struct MaterialSamples{vec2 s1;vec2 s2;vec2 s3;vec2 s4;};MaterialSamples getRandomMaterialSamples(){MaterialSamples samples;samples.s1=LGL_AQomSampleVec2();samples.s2=LGL_AQomSampleVec2();samples.s3=LGL_AQomSampleVec2();samples.s4=LGL_AQomSampleVec2();return samples;}vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}uniform sampler2D uvTransformBuffer;uniform int wrappingIndex;ivec2 LGL_AX(int i,int LGL_BT){ivec2 u;u.y=i>>LGL_BT;u.x=i-(u.y<<LGL_BT);return u;}vec4 LGL_AY(sampler2D s,int i,int LGL_BT){return texelFetch(s,LGL_AX(i,LGL_BT),0);}ivec4 LGL_AY(isampler2D s,int i,int LGL_BT){return texelFetch(s,LGL_AX(i,LGL_BT),0);}uniform Materials{vec4 colorAndMaterialType[NUM_MATERIALS];vec4 roughnessMetalnessNormalScale[NUM_MATERIALS];vec4 alphaSpecularTintSheenSheenTint[NUM_MATERIALS];vec4 clearcoaRoughnessSubfaceTransmission[NUM_MATERIALS];vec4 iorAtDistanceAnisotropicWorkflow[NUM_MATERIALS];vec4 extinction[NUM_MATERIALS];vec4 specularColorGlossiness[NUM_MATERIALS];
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
mat3 LGL_Bd(int materialIndex,int mapKey){int offset=materialIndex*SUPPORTED_MAPS*3;int mapOffset=mapKey*3;vec3 LGL_BY=LGL_AY(uvTransformBuffer,offset+mapOffset+0,UVTRANSFORM_COLUMNS).xyz;vec3 LGL_BZ=LGL_AY(uvTransformBuffer,offset+mapOffset+1,UVTRANSFORM_COLUMNS).xyz;vec3 LGL_Ba=LGL_AY(uvTransformBuffer,offset+mapOffset+2,UVTRANSFORM_COLUMNS).xyz;mat3 uvTransform=mat3(LGL_BY,LGL_BZ,LGL_Ba);return uvTransform;}vec3 LGL_Be(int materialIndex,int mapKey){int offset=wrappingIndex+materialIndex*SUPPORTED_MAPS;int mapOffset=mapKey;vec3 wrappingData=LGL_AY(uvTransformBuffer,offset+mapOffset,UVTRANSFORM_COLUMNS).xyz;return wrappingData;}vec2 LGL_Bf(vec2 uv,vec3 warpping){if(uv.x<=0.||uv.x>=1.){float warpS=warpping.x;if(warpS==0.){uv.x=uv.x<=0. ? 0. : 1.;}else if(warpS==1.){uv.x=uv.x-floor(uv.x);}}if(uv.y<=0.||uv.y>=1.){float warpT=warpping.y;if(warpT==0.){uv.y=uv.y<=0. ? 0. : 1.;}else if(warpT==1.){uv.y=uv.y-floor(uv.y);}}return uv;}float LGL_p(int materialIndex){return materials.colorAndMaterialType[materialIndex].w;}float LGL_q(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].w;}vec3 LGL_r(int materialIndex,vec2 uv){vec3 emissive=vec3(0.0);
#ifdef NUM_EMISSIVE_MAPS
int emissiveMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].x;if(emissiveMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,6);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,6);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[emissiveMapIndex].xy;emissive=texture(emissiveMap,vec3(uv,emissiveMapIndex)).rgb;}
#endif
return emissive;}vec3 LGL_s(int materialIndex,vec2 uv){vec3 specularColor=materials.specularColorGlossiness[materialIndex].rgb;
#ifdef NUM_PBR_SG_MAPS
int specularMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].y;if(specularMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,4);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,4);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[specularMapIndex].xy;vec3 texelSpecular=texture(pbrSGMap,vec3(uv,specularMapIndex)).rgb;texelSpecular=pow(texelSpecular,vec3(2.2));specularColor*=texelSpecular;}
#endif
return specularColor;}float LGL_t(int materialIndex,vec2 uv){float glossiness=materials.specularColorGlossiness[materialIndex].a;
#ifdef NUM_PBR_SG_MAPS
int glossinessMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].z;if(glossinessMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,5);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,5);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[glossinessMapIndex].xy;float texelGlossiness=texture(pbrSGMap,vec3(uv,glossinessMapIndex)).x;glossiness*=texelGlossiness;}
#endif
return glossiness;}float LGL_u(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float roughness=0.0;if(LGL_BG>0.1){roughness=1.0-LGL_t(materialIndex,uv);}else{roughness=materials.roughnessMetalnessNormalScale[materialIndex].x;
#ifdef NUM_PBR_MAPS
int roughnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].z;if(roughnessMapIndex>=0){uv=uv*materials.pbrMapSize[roughnessMapIndex].xy;mat3 uvTransform=LGL_Bd(materialIndex,2);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,2);uv=LGL_Bf(uv,warpping);roughness*=texture(pbrMap,vec3(uv,roughnessMapIndex)).g;}
#endif
}return roughness*roughness;}float LGL_v(const vec3 v){return max(v.x,max(v.y,v.z));}float LGL_w(const vec3 specularColor){return LGL_v(specularColor);}vec3 LGL_x(const vec3 baseColor,float metallic){return baseColor*(1.0-metallic);}float LGL_y(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float metalness=0.0;if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);metalness=LGL_w(specularFactor);}else{metalness=materials.roughnessMetalnessNormalScale[materialIndex].y;
#ifdef NUM_PBR_MAPS
int metalnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].w;if(metalnessMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,3);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,3);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[metalnessMapIndex].xy;metalness*=texture(pbrMap,vec3(uv,metalnessMapIndex)).b;}
#endif
}return metalness;}vec4 LGL_z(int materialIndex,vec2 uv){vec3 color=materials.colorAndMaterialType[materialIndex].rgb;float LGL_BD=1.0;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,0);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,0);uv=LGL_Bf(uv,warpping);uv=uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy;vec4 diffuse=texture(diffuseMap,vec3(uv,diffuseMapIndex));color*=diffuse.rgb;LGL_BD=diffuse.a;}
#endif
float LGL_BG=LGL_q(materialIndex);if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);color=LGL_x(color,LGL_w(specularFactor));}return vec4(color,LGL_BD);}vec3 LGL_AA(int materialIndex,vec2 uv,vec3 normal,vec3 dp1,vec3 dp2,vec2 duv1,vec2 duv2,inout vec3 tangent,inout vec3 bitangent){vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 dpdu=dp2perp*duv1.x+dp1perp*duv2.x;vec3 dpdv=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(dpdu,dpdu),dot(dpdv,dpdv)));dpdu*=invmax;dpdv*=invmax;tangent=normalize(dpdu);bitangent=normalize(dpdv);
#ifdef NUM_NORMAL_MAPS
int normalMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].y;if(normalMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,1);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,1);uv=LGL_Bf(uv,warpping);vec3 n=2.0*texture(normalMap,vec3(uv*materials.diffuseNormalMapSize[normalMapIndex].zw,normalMapIndex)).rgb-1.0;n.xy*=materials.roughnessMetalnessNormalScale[materialIndex].zw;mat3 tbn=mat3(dpdu,dpdv,normal);return normalize(tbn*n);}else{return normal;}
#endif
return normal;}float LGL_AD(int materialIndex,vec2 uv){float alpha=materials.alphaSpecularTintSheenSheenTint[materialIndex].x;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){alpha*=texture(diffuseMap,vec3(uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy,diffuseMapIndex)).a;}
#endif
return alpha;}float LGL_AB(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].y;}float LGL_AC(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].z;}float LGL_ACTint(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].w;}float LGL_AF(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].x;}float LGL_AFRoughness(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].y;}float LGL_AH(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].z;}float LGL_AI(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].w;}float LGL_AJ(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].x;}float LGL_AK(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].y;}float LGL_AL(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].z;}vec3 LGL_AM(int materialIndex){return materials.extinction[materialIndex].rgb;}uniform sampler2D positionBuffer;uniform sampler2D normalBuffer;uniform sampler2D transformBuffer;uniform sampler2D bvhBuffer;struct Triangle{vec3 p0;vec3 p1;vec3 p2;};struct Box{vec3 min;vec3 max;};struct TriangleIntersect{float t;vec3 barycentric;};float LGL_f(float rad,vec3 pos,Ray r){vec3 op=pos-r.o;float eps=0.001;float b=dot(op,r.d);float det=b*b-dot(op,op)+rad*rad;if(det<0.0)return INF;det=sqrt(det);float t1=b-det;if(t1>eps)return t1;float t2=b+det;if(t2>eps)return t2;return INF;}float LGL_g(in vec3 pos,in vec3 u,in vec3 v,in vec4 plane,in Ray r){vec3 n=vec3(plane);float dt=dot(r.d,n);float t=(plane.w-dot(n,r.o))/dt;if(t>EPS){vec3 p=r.o+r.d*t;vec3 vi=p-pos;float a1=dot(u,vi);if(a1>=0.&&a1<=1.){float a2=dot(v,vi);if(a2>=0.&&a2<=1.)return t;}}return INF;}float LGL_h(vec3 v0,vec3 v1,vec3 v2,Ray r,bool isDoubleSided){vec3 edge1=v1-v0;vec3 edge2=v2-v0;vec3 pvec=cross(r.d,edge2);float det=1.0/dot(edge1,pvec);if(!isDoubleSided&&det<0.0)return INF;vec3 tvec=r.o-v0;float u=dot(tvec,pvec)*det;vec3 qvec=cross(tvec,edge1);float v=dot(r.d,qvec)*det;float t=dot(edge2,qvec)*det;return(u<0.0||u>1.0||v<0.0||u+v>1.0||t<=0.0)? INF : t;}float LGL_gClassic(vec3 v1,vec3 v2,vec3 v3,vec3 v4,Ray r,bool isDoubleSided){return min(LGL_h(v1,v3,v2,r,isDoubleSided),LGL_h(v2,v3,v4,r,isDoubleSided));}void LGL_j(inout SurfaceInteraction si,Triangle tri,vec3 barycentric,ivec3 index,vec3 u,vec3 LGL_BM,int materialIndex){si.LGL_BK=true;si.LGL_BM=LGL_BM;si.position=barycentric.x*tri.p0+barycentric.y*tri.p1+barycentric.z*tri.p2;ivec2 i0=LGL_AX(index.x,VERTEX_COLUMNS);ivec2 i1=LGL_AX(index.y,VERTEX_COLUMNS);ivec2 i2=LGL_AX(index.z,VERTEX_COLUMNS);vec4 nu0=texelFetch(normalBuffer,i0,0).xyzw;vec4 nu1=texelFetch(normalBuffer,i1,0).xyzw;vec4 nu2=texelFetch(normalBuffer,i2,0).xyzw;vec3 n0=nu0.xyz;vec3 n1=nu1.xyz;vec3 n2=nu2.xyz;vec3 normal=normalize(barycentric.x*n0+barycentric.y*n1+barycentric.z*n2);vec2 uv0=vec2(u.x,nu0.w);vec2 uv1=vec2(u.y,nu1.w);vec2 uv2=vec2(u.z,nu2.w);
#if defined(NUM_DIFFUSE_MAPS) || defined(NUM_NORMAL_MAPS) || defined(NUM_PBR_MAPS)
vec2 uv=barycentric.x*uv0+barycentric.y*uv1+barycentric.z*uv2;
#else
vec2 uv=vec2(0.0);
#endif
si.LGL_BH=int(LGL_p(materialIndex));vec4 colorAlpha=LGL_z(materialIndex,uv);si.color=colorAlpha.rgb;si.LGL_BD=colorAlpha.a;si.roughness=LGL_u(materialIndex,uv);si.metalness=LGL_y(materialIndex,uv);si.specularColor=LGL_s(materialIndex,uv);si.LGL_BG=LGL_q(materialIndex);si.emissive=LGL_r(materialIndex,uv);vec3 dp1=tri.p0-tri.p2;vec3 dp2=tri.p1-tri.p2;vec2 duv1=uv0-uv2;vec2 duv2=uv1-uv2;si.normal=LGL_AA(materialIndex,uv,normal,dp1,dp2,duv1,duv2,si.tangent,si.bitangent);si.LGL_Ay=LGL_AB(materialIndex);si.sheen=LGL_AC(materialIndex);si.LGL_Az=LGL_ACTint(materialIndex);si.clearcoat=LGL_AF(materialIndex);si.LGL_BA=LGL_AFRoughness(materialIndex);si.LGL_BB=LGL_AH(materialIndex);si.LGL_BC=LGL_AI(materialIndex);si.ior=LGL_AJ(materialIndex);si.LGL_BE=LGL_AK(materialIndex);si.LGL_BF=LGL_AL(materialIndex);si.extinction=LGL_AM(materialIndex);}TriangleIntersect LGL_k(Ray r,Triangle tri){vec3 v0=tri.p0;vec3 v1=tri.p1;vec3 v2=tri.p2;TriangleIntersect ti;vec3 e0=v1-v0;vec3 e1=v2-v0;vec3 pv=cross(r.d,e1);float det=dot(e0,pv);vec3 tv=r.o-v0;vec3 qv=cross(tv,e0);vec4 uvt;uvt.x=dot(tv,pv);uvt.y=dot(r.d,qv);uvt.z=dot(e1,qv);uvt.xyz=uvt.xyz/det;uvt.w=1.0-uvt.x-uvt.y;if(uvt.z>=r.LGL_BO){return ti;}if(all(greaterThanEqual(uvt,vec4(0.0)))&&uvt.z<INF){ti.t=uvt.z;ti.barycentric=uvt.wxy;}return ti;}float LGL_l(Ray r,Box b){vec3 LGL_BN=1.0/r.d;vec3 tBot=(b.min-r.o)*LGL_BN;vec3 tTop=(b.max-r.o)*LGL_BN;vec3 tNear=min(tBot,tTop);vec3 tFar=max(tBot,tTop);float t0=max(tNear.x,max(tNear.y,tNear.z));float t1=min(tFar.x,min(tFar.y,tFar.z));return(t0>t1||t0>r.LGL_BO)?-1.0 :(t0>0.0 ? t0 : t1);}bool LGL_m(inout Ray ray,float maxDist){
#if defined(NUM_LIGHTS)
for(int i=0;i<NUM_LIGHTS;i++){vec3 position=lights.position[i];vec3 emission=lights.emission[i];vec3 p1=lights.p1[i];vec3 p2=lights.p2[i];vec4 params=lights.params[i];float radius=params.x;float area=params.y;float type=params.z;float visible=params.w;if(type==0.||type==1.){vec3 normal=normalize(cross(p1,p2));if(dot(normal,ray.d)>0.)continue;vec4 plane=vec4(normal,dot(normal,position));p1*=1.0/dot(p1,p1);p2*=1.0/dot(p2,p2);float d=LGL_g(position,p1,p2,plane,ray);if(d>0.&&d<maxDist)return true;}if(type==1.){float d=LGL_f(radius,position,ray);if(d>0.&&d<maxDist)return true;}}
#endif
int nodesToVisit[MAX_DEPTH];nodesToVisit[0]=tlasIndex;int LGL_BU=0;bool LGL_BV=false;mat4 LGL_BW;mat4 LGL_BWInverse;Ray LGL_BX;LGL_Bc(LGL_BX,ray);int stack=0;while(stack>=0){int i=nodesToVisit[stack--];if(LGL_BV&&i==-1){LGL_BV=false;LGL_Bc(LGL_BX,ray);continue;}vec4 r1=LGL_AY(bvhBuffer,i,BVH_COLUMNS);vec4 r2=LGL_AY(bvhBuffer,i+1,BVH_COLUMNS);int splitAxisOrNumPrimitives=floatBitsToInt(r1.w);if(splitAxisOrNumPrimitives>0){int splitAxis=splitAxisOrNumPrimitives-1;Box bbox=Box(r1.xyz,r2.xyz);if(LGL_l(LGL_BX,bbox)>0.0){if(LGL_BX.d[splitAxis]>0.0){nodesToVisit[++stack]=floatBitsToInt(r2.w);nodesToVisit[++stack]=i+2;}else{nodesToVisit[++stack]=i+2;nodesToVisit[++stack]=floatBitsToInt(r2.w);}}}else if(splitAxisOrNumPrimitives<0){ivec3 index=floatBitsToInt(r1.xyz);Triangle tri=Triangle(LGL_AY(positionBuffer,index.x,VERTEX_COLUMNS).xyz,LGL_AY(positionBuffer,index.y,VERTEX_COLUMNS).xyz,LGL_AY(positionBuffer,index.z,VERTEX_COLUMNS).xyz);TriangleIntersect LGL_BK=LGL_k(LGL_BX,tri);if(LGL_BK.t>0.0&&LGL_BK.t<maxDist){return true;}}else{int visible=floatBitsToInt(r2.x);if(visible==0){continue;}int instanceID=floatBitsToInt(r1.z);vec4 LGL_BY=LGL_AY(transformBuffer,instanceID*4+0,TRANSFORM_COLUMNS).xyzw;vec4 LGL_BZ=LGL_AY(transformBuffer,instanceID*4+1,TRANSFORM_COLUMNS).xyzw;vec4 LGL_Ba=LGL_AY(transformBuffer,instanceID*4+2,TRANSFORM_COLUMNS).xyzw;vec4 LGL_Bb=LGL_AY(transformBuffer,instanceID*4+3,TRANSFORM_COLUMNS).xyzw;LGL_BW=mat4(LGL_BY,LGL_BZ,LGL_Ba,LGL_Bb);LGL_BWInverse=inverse(LGL_BW);LGL_BX.o=vec3(LGL_BWInverse*vec4(ray.o,1.0));LGL_BX.d=vec3(LGL_BWInverse*vec4(ray.d,0.0));nodesToVisit[++stack]=-1;nodesToVisit[++stack]=floatBitsToInt(r1.x);LGL_BV=true;LGL_BU=floatBitsToInt(r1.y);continue;}}return false;}void LGL_n(inout Ray ray,inout SurfaceInteraction si,inout LightSampleRec lightSampleRec,int bounce){si.LGL_BK=false;float t=INF;float d;
#if defined(NUM_LIGHTS)
for(int i=0;i<NUM_LIGHTS;i++){vec4 params=lights.params[i];float radius=params.x;float area=params.y;float type=params.z;float visible=params.w;if(bounce==0&&visible<0.1)continue;vec3 position=lights.position[i];vec3 emission=lights.emission[i];vec3 p1=lights.p1[i];vec3 p2=lights.p2[i];if(type==0.||type==1.){vec3 normal=normalize(cross(p1,p2));if(dot(normal,ray.d)>0.)continue;vec4 plane=vec4(normal,dot(normal,position));p1*=1.0/dot(p1,p1);p2*=1.0/dot(p2,p2);d=LGL_g(position,p1,p2,plane,ray);if(d<0.)d=INF;if(d<t){t=d;float cosTheta=dot(-ray.d,normal);float pdf=(t*t)/(area*cosTheta);lightSampleRec.emission=emission;lightSampleRec.pdf=pdf;si.LGL_BK=true;si.LGL_BI=true;ray.LGL_BO=t;}}if(type==2.){d=LGL_f(radius,position,ray);if(d<0.)d=INF;if(d<t){t=d;float pdf=(t*t)/area;lightSampleRec.emission=emission;lightSampleRec.pdf=pdf;si.LGL_BK=true;si.LGL_BI=true;ray.LGL_BO=t;}}}
#endif
int nodesToVisit[MAX_DEPTH];nodesToVisit[0]=tlasIndex;int LGL_BU=0;bool LGL_BV=false;mat4 LGL_BW;mat4 LGL_BWInverse;Ray LGL_BX;LGL_Bc(LGL_BX,ray);int stack=0;while(stack>=0){int i=nodesToVisit[stack--];if(LGL_BV&&i==-1){LGL_BV=false;LGL_Bc(LGL_BX,ray);continue;}vec4 r1=LGL_AY(bvhBuffer,i,BVH_COLUMNS);vec4 r2=LGL_AY(bvhBuffer,i+1,BVH_COLUMNS);int splitAxisOrNumPrimitives=floatBitsToInt(r1.w);if(splitAxisOrNumPrimitives>0){int splitAxis=splitAxisOrNumPrimitives-1;Box bbox=Box(r1.xyz,r2.xyz);if(LGL_l(LGL_BX,bbox)>0.0){if(LGL_BX.d[splitAxis]>0.0){nodesToVisit[++stack]=floatBitsToInt(r2.w);nodesToVisit[++stack]=i+2;}else{nodesToVisit[++stack]=i+2;nodesToVisit[++stack]=floatBitsToInt(r2.w);}}}else if(splitAxisOrNumPrimitives<0){ivec3 index=floatBitsToInt(r1.xyz);vec4 pu0=LGL_AY(positionBuffer,index.x,VERTEX_COLUMNS).xyzw;vec4 pu1=LGL_AY(positionBuffer,index.y,VERTEX_COLUMNS).xyzw;vec4 pu2=LGL_AY(positionBuffer,index.z,VERTEX_COLUMNS).xyzw;Triangle tri=Triangle(pu0.xyz,pu1.xyz,pu2.xyz);TriangleIntersect LGL_BK=LGL_k(LGL_BX,tri);if(LGL_BK.t>0.0){vec3 LGL_BM=r2.xyz;si.t=LGL_BK.t;si.LGL_BI=false;LGL_BX.LGL_BO=LGL_BK.t;ray.LGL_BO=LGL_BK.t;vec3 u=vec3(pu0.w,pu1.w,pu2.w);LGL_j(si,tri,LGL_BK.barycentric,index,u,LGL_BM,LGL_BU);si.position=vec3(LGL_BW*vec4(si.position,1.0));mat3 inverseNormalMat=transpose(mat3(LGL_BWInverse));si.normal=normalize(inverseNormalMat*si.normal);si.LGL_BL=dot(normalize(inverseNormalMat*si.LGL_BM),ray.d)<=0.0 ? si.normal :-si.normal;}}else{int visible=floatBitsToInt(r2.x);if(visible==0){continue;}int instanceID=floatBitsToInt(r1.z);vec4 LGL_BY=LGL_AY(transformBuffer,instanceID*4+0,TRANSFORM_COLUMNS).xyzw;vec4 LGL_BZ=LGL_AY(transformBuffer,instanceID*4+1,TRANSFORM_COLUMNS).xyzw;vec4 LGL_Ba=LGL_AY(transformBuffer,instanceID*4+2,TRANSFORM_COLUMNS).xyzw;vec4 LGL_Bb=LGL_AY(transformBuffer,instanceID*4+3,TRANSFORM_COLUMNS).xyzw;LGL_BW=mat4(LGL_BY,LGL_BZ,LGL_Ba,LGL_Bb);LGL_BWInverse=inverse(LGL_BW);LGL_BX.o=vec3(LGL_BWInverse*vec4(ray.o,1.0));LGL_BX.d=vec3(LGL_BWInverse*vec4(ray.d,0.0));nodesToVisit[++stack]=-1;nodesToVisit[++stack]=floatBitsToInt(r1.x);LGL_BV=true;LGL_BU=floatBitsToInt(r1.y);continue;}}si.roughness=clamp(si.roughness,ROUGHNESS_MIN,1.0);si.metalness=clamp(si.metalness,0.0,1.0);}void LGL_o(inout Ray ray,inout SurfaceInteraction si,inout LightSampleRec lightSampleRec,int depth){if(si.LGL_BK&&!si.LGL_BI&&si.LGL_BD<1.0){float alphaMaxDepth=0.;float LGL_BJ=LGL_AQ();while(si.LGL_BK&&!si.LGL_BI&&LGL_BJ>si.LGL_BD&&alphaMaxDepth<2.){LGL_AW(ray,si.position+EPS*ray.d,ray.d);LGL_n(ray,si,lightSampleRec,depth);alphaMaxDepth++;}}}
#ifndef CONST_COLOR_ENV
uniform sampler2D envMap;uniform sampler2D envMapDistribution;vec2 LGL_Y(vec3 pointOnSphere){float phi=mod(atan(-pointOnSphere.z,-pointOnSphere.x),TWOPI);float theta=acos(pointOnSphere.y);return vec2(phi*0.5*INVPI,theta*INVPI);}vec3 LGL_Z(vec3 d){vec2 uv=LGL_Y(d);return LGL_An(envMap,uv).rgb;}float LGL_a(float u,out int vOffset,out float pdf){ivec2 size=textureSize(envMap,0);int left=0;int right=size.y+1;while(left<right){int mid=(left+right)>>1;float s=texelFetch(envMapDistribution,ivec2(0,mid),0).x;if(s<=u){left=mid+1;}else{right=mid;}}vOffset=left-1;vec2 s0=texelFetch(envMapDistribution,ivec2(0,vOffset),0).xy;vec2 s1=texelFetch(envMapDistribution,ivec2(0,vOffset+1),0).xy;pdf=s0.y;return(float(vOffset)+(u-s0.x)/(s1.x-s0.x))/float(size.y);}float LGL_b(float u,int vOffset,out float pdf){ivec2 size=textureSize(envMap,0);int left=0;int right=size.x+1;while(left<right){int mid=(left+right)>>1;float s=texelFetch(envMapDistribution,ivec2(1+mid,vOffset),0).x;if(s<=u){left=mid+1;}else{right=mid;}}int uOffset=left-1;vec2 s0=texelFetch(envMapDistribution,ivec2(1+uOffset,vOffset),0).xy;vec2 s1=texelFetch(envMapDistribution,ivec2(1+uOffset+1,vOffset),0).xy;pdf=s0.y;return(float(uOffset)+(u-s0.x)/(s1.x-s0.x))/float(size.x);}float LGL_c(vec2 uv){vec2 size=vec2(textureSize(envMap,0));float sinTheta=sin(uv.y*PI);uv*=size;float partialX=texelFetch(envMapDistribution,ivec2(1.0+uv.x,uv.y),0).y;float partialY=texelFetch(envMapDistribution,ivec2(0,uv.y),0).y;return partialX*partialY*INVPI2/(2.0*sinTheta);}vec3 LGL_d(vec2 LGL_AQom,out vec2 uv,out float pdf){vec2 partialPdf;int vOffset;uv.y=LGL_a(LGL_AQom.x,vOffset,partialPdf.y);uv.x=LGL_b(LGL_AQom.y,vOffset,partialPdf.x);float phi=uv.x*TWOPI;float theta=uv.y*PI;float cosTheta=cos(theta);float sinTheta=sin(theta);float cosPhi=cos(phi);float sinPhi=sin(phi);vec3 dir=vec3(-sinTheta*cosPhi,cosTheta,-sinTheta*sinPhi);pdf=partialPdf.x*partialPdf.y*INVPI2/(2.0*sinTheta);return dir;}
#endif
void LGL_AZ(in vec3 N,inout vec3 T,inout vec3 B){if(N.z<-0.999999){T=vec3(0.,-1.,0.);B=vec3(-1.,0.,0.);}else{float a=1.0/(1.+N.z);float b=-N.x*N.y*a;T=vec3(1.0-N.x*N.x*a,b,-N.x);B=vec3(b,1.-N.y*N.y*a,-N.y);}}vec3 LGL_Am(vec3 V,float rgh,float r1,float r2){vec3 Vh=normalize(vec3(rgh*V.x,rgh*V.y,V.z));float lensq=Vh.x*Vh.x+Vh.y*Vh.y;vec3 T1=lensq>0. ? vec3(-Vh.y,Vh.x,0)*inversesqrt(lensq): vec3(1.,0.,0.);vec3 T2=cross(Vh,T1);float r=sqrt(r1);float phi=2.0*PI*r2;float t1=r*cos(phi);float t2=r*sin(phi);float s=0.5*(1.0+Vh.z);t2=(1.0-s)*sqrt(1.0-t1*t1)+s*t2;vec3 Nh=t1*T1+t2*T2+sqrt(max(0.0,1.0-t1*t1-t2*t2))*Vh;return normalize(vec3(rgh*Nh.x,rgh*Nh.y,max(0.0,Nh.z)));}vec2 LGL_Aa(vec2 p){p=2.0*p-1.0;bool greater=abs(p.x)>abs(p.y);float r=greater ? p.x : p.y;float theta=greater ? 0.25*PI*p.y/p.x : PI*(0.5-0.25*p.x/p.y);return r*vec2(cos(theta),sin(theta));}vec3 LGL_Ab(vec2 p){vec2 h=LGL_Aa(p);float z=sqrt(max(0.0,1.0-h.x*h.x-h.y*h.y));return vec3(h,z);}vec3 LGL_Ac(float r1,float r2){float z=1.0-2.0*r1;float r=sqrt(max(0.0,1.0-z*z));float phi=TWOPI*r2;return vec3(r*cos(phi),r*sin(phi),z);}vec3 LGL_Ad(vec3 LGL_BM,vec3 viewDir,mat3 basis,float roughness,vec2 LGL_AQom){float phi=TWOPI*LGL_AQom.y;float alpha=roughness*roughness;float cosTheta=sqrt((1.0-LGL_AQom.x)/(1.0+(alpha*alpha-1.0)*LGL_AQom.x));float sinTheta=sqrt(1.0-cosTheta*cosTheta);vec3 halfVector=basis*sign(dot(LGL_BM,viewDir))*vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);vec3 lightDir=reflect(-viewDir,halfVector);return lightDir;}vec3 LGL_Ae(vec3 LGL_BM,vec3 viewDir,mat3 basis,vec2 LGL_AQom){return basis*sign(dot(LGL_BM,viewDir))*LGL_Ab(LGL_AQom);}float LGL_Af(float f,float g){return(f*f)/(f*f+g*g);}vec3 LGL_Ag(in Ray r,int depth,in LightSampleRec lightSampleRec,in BsdfSampleRec bsdfSampleRec){vec3 Le;if(depth==0){Le=lightSampleRec.emission;}else{Le=LGL_Af(bsdfSampleRec.pdf,lightSampleRec.pdf)*lightSampleRec.emission;}return Le;}
#if defined(NUM_LIGHTS)
void LGL_Ah(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec,vec2 LGL_AQom){float r1=LGL_AQom.x;float r2=LGL_AQom.y;vec3 lightSurfacePos=light.position+LGL_Ac(r1,r2)*light.radius;lightSampleRec.direction=lightSurfacePos-surfacePos;lightSampleRec.dist=length(lightSampleRec.direction);float distSq=lightSampleRec.dist*lightSampleRec.dist;lightSampleRec.direction/=lightSampleRec.dist;lightSampleRec.normal=normalize(lightSurfacePos-light.position);lightSampleRec.emission=light.emission*float(NUM_LIGHTS);lightSampleRec.pdf=distSq/(light.area*abs(dot(lightSampleRec.normal,lightSampleRec.direction)));}void LGL_Aj(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec,vec2 LGL_AQom){float r1=LGL_AQom.x;float r2=LGL_AQom.y;vec3 lightSurfacePos=light.position+light.p1*r1+light.p2*r2;lightSampleRec.direction=lightSurfacePos-surfacePos;lightSampleRec.dist=length(lightSampleRec.direction);float distSq=lightSampleRec.dist*lightSampleRec.dist;lightSampleRec.direction/=lightSampleRec.dist;lightSampleRec.normal=normalize(cross(light.p1,light.p2));lightSampleRec.emission=light.emission*float(NUM_LIGHTS);lightSampleRec.pdf=distSq/(light.area*abs(dot(lightSampleRec.normal,lightSampleRec.direction)));}void LGL_Ak(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec){lightSampleRec.direction=normalize(light.position-light.p1);lightSampleRec.normal=normalize(surfacePos-light.position);if(dot(lightSampleRec.direction,lightSampleRec.normal)>0.0){lightSampleRec.normal=-lightSampleRec.normal;}lightSampleRec.emission=light.emission*float(NUM_LIGHTS);lightSampleRec.dist=INF;lightSampleRec.pdf=1.0;}void samplePointLight(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec){lightSampleRec.direction=light.position-surfacePos;lightSampleRec.dist=length(lightSampleRec.direction);float distSq=lightSampleRec.dist*lightSampleRec.dist;lightSampleRec.direction=normalize(lightSampleRec.direction);lightSampleRec.normal=normalize(surfacePos-light.position);lightSampleRec.emission=light.emission*float(NUM_LIGHTS)/distSq;lightSampleRec.pdf=1.0;}void LGL_Al(in Light light,in vec3 surfacePos,inout LightSampleRec lightSampleRec,vec2 LGL_AQom){int type=int(light.type);if(type==0||type==1){LGL_Aj(light,surfacePos,lightSampleRec,LGL_AQom);}else if(type==2){LGL_Ah(light,surfacePos,lightSampleRec,LGL_AQom);}else if(type==3){LGL_Ak(light,surfacePos,lightSampleRec);}else if(type==4){samplePointLight(light,surfacePos,lightSampleRec);}}
#endif
vec3 LocalToWorld(vec3 X,vec3 Y,vec3 Z,vec3 V){return vec3(X.x*V.x+Y.x*V.y+Z.x*V.z,X.y*V.x+Y.y*V.y+Z.y*V.z,X.z*V.x+Y.z*V.y+Z.z*V.z);}vec3 WorldToLocal(vec3 X,vec3 Y,vec3 Z,vec3 V){return vec3(dot(V,X),dot(V,Y),dot(V,Z));}vec3 LGL_A(float r1,float r2){vec3 dir;float r=sqrt(r1);float phi=TWOPI*r2;dir.x=r*cos(phi);dir.y=r*sin(phi);dir.z=sqrt(max(0.0,1.0-dir.x*dir.x-dir.y*dir.y));return dir;}float LGL_B(float eta){float sqrtR0=(eta-1.)/(eta+1.);return sqrtR0*sqrtR0;}vec3 LGL_C(vec3 baseColor){float luminance=LGL_AV(baseColor);return(luminance>0.0)? baseColor/luminance : vec3(1.);}void LGL_D(SurfaceInteraction si,out vec3 Cspec0,out vec3 Csheen){vec3 tint=LGL_C(si.color);if(si.LGL_BG>0.1){Cspec0=si.specularColor;}else{Cspec0=mix(LGL_B(si.ior)*mix(vec3(1.0),tint,min(si.LGL_Ay,0.99)),si.color,si.metalness);}Csheen=mix(vec3(1.0),tint,si.LGL_Az);}float LGL_E(float u){float m=clamp(1.0-u,0.0,1.0);float m2=m*m;return m2*m2*m;}float LGL_F(float F0,float cosTheta){return mix(F0,1.0,LGL_E(cosTheta));}vec3 LGL_F(vec3 F0,float cosTheta){return mix(F0,vec3(1.),LGL_E(cosTheta));}float LGL_G(float cosThetaI,float eta){float sinThetaTSq=eta*eta*(1.0f-cosThetaI*cosThetaI);if(sinThetaTSq>1.0)return 1.0;float cosThetaT=sqrt(max(1.0-sinThetaTSq,0.0));float rs=(eta*cosThetaT-cosThetaI)/(eta*cosThetaT+cosThetaI);float rp=(eta*cosThetaI-cosThetaT)/(eta*cosThetaI+cosThetaT);return 0.5*(rs*rs+rp*rp);}vec3 LGL_H(vec3 F0,float metalness,float eta,float cosThetaI){vec3 FrSchlick=LGL_F(F0,cosThetaI);float FrDielectric=LGL_G(cosThetaI,eta);return mix(vec3(FrDielectric),FrSchlick,metalness);}float LGL_H(float metalness,float eta,float cosThetaI){float FrSchlick=LGL_E(cosThetaI);float FrDielectric=LGL_G(cosThetaI,eta);return mix(FrDielectric,FrSchlick,metalness);}float LGL_I(float NDotV,float alphaG){float a=alphaG*alphaG;float b=NDotV*NDotV;return 1.0/(NDotV+sqrt(a+b-a*b));}float LGL_J(float NDotH,float alpha){float alpha2=alpha*alpha;float t=1.0+(alpha2-1.0)*NDotH*NDotH;return(alpha2-1.0)/(PI*log(alpha2)*t);}float LGL_K(float NDotH,float a){float a2=a*a;float t=1.0+(a2-1.0)*NDotH*NDotH;return a2/(PI*t*t);}vec3 ImportanceSampleLGL_J(float rgh,float r1,float r2){float a=max(0.001,rgh);float a2=a*a;float phi=r1*TWOPI;float cosTheta=sqrt((1.0-pow(a2,1.0-r1))/(1.0-a2));float sinTheta=clamp(sqrt(1.0-(cosTheta*cosTheta)),0.0,1.0);float sinPhi=sin(phi);float cosPhi=cos(phi);return vec3(sinTheta*cosPhi,sinTheta*sinPhi,cosTheta);}vec3 ImportanceSampleLGL_K(float rgh,float r1,float r2){float a=max(0.001,rgh);float phi=r1*TWOPI;float cosTheta=sqrt((1.0-r2)/(1.0+(a*a-1.0)*r2));float sinTheta=clamp(sqrt(1.0-(cosTheta*cosTheta)),0.0,1.0);float sinPhi=sin(phi);float cosPhi=cos(phi);return vec3(sinTheta*cosPhi,sinTheta*sinPhi,cosTheta);}vec3 LGL_N(SurfaceInteraction si,vec3 Csheen,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z<=0.0)return vec3(0.0);pdf=L.z*INVPI;float LDotH=dot(L,H);float FL=LGL_E(L.z);float FV=LGL_E(V.z);float Fh=LGL_E(LDotH);float Fd90=0.5+2.0*LDotH*LDotH*si.roughness;float Fd=mix(1.0,Fd90,FL)*mix(1.0,Fd90,FV);float Fss90=LDotH*LDotH*si.roughness;float Fss=mix(1.0,Fss90,FL)*mix(1.0,Fss90,FV);float DisneyFakeSS=1.25*(Fss*(1.0/(L.z+V.z)-0.5)+0.5);vec3 Fsheen=Fh*si.sheen*Csheen;return(INVPI*mix(Fd,DisneyFakeSS,si.LGL_BB)*si.color+Fsheen)*(1.0-si.metalness)*(1.0-si.LGL_BC);}vec3 LGL_O(SurfaceInteraction si,vec3 Cspec0,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z<=0.0)return vec3(0.0);float LDotH=dot(L,H);float D=LGL_K(H.z,si.roughness);pdf=D*H.z/(4.0*LDotH);vec3 F=LGL_H(Cspec0,si.metalness,si.eta,LDotH);float G=LGL_I(abs(L.z),si.roughness)*LGL_I(abs(V.z),si.roughness);return F*D*G;}vec3 LGL_P(SurfaceInteraction si,vec3 Cspec0,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z>=0.0)return vec3(0.0);float F=LGL_G(abs(dot(V,H)),si.eta);float D=LGL_K(H.z,si.roughness);float denomSqrt=dot(L,H)+dot(V,H)*si.eta;pdf=D*H.z*abs(dot(L,H))/(denomSqrt*denomSqrt);float G=LGL_I(abs(L.z),si.roughness)*LGL_I(abs(V.z),si.roughness);vec3 specColor=pow(si.color,vec3(0.5));return specColor*(1.0-si.metalness)*si.LGL_BC*(1.0-F)*D*G*abs(dot(V,H))*abs(dot(L,H))*4.0*si.eta*si.eta/(denomSqrt*denomSqrt);}vec3 LGL_Q(SurfaceInteraction si,vec3 V,vec3 L,vec3 H,out float pdf){pdf=0.0;if(L.z<=0.0)return vec3(0.0);float LDotH=dot(L,H);float F=LGL_F(.04,LDotH);float D=LGL_J(H.z,mix(0.1,0.001,1.-si.LGL_BA));pdf=D*H.z/(4.0*LDotH);float G=LGL_I(L.z,0.25)*LGL_I(V.z,0.25);return vec3(0.25*si.clearcoat*F*D*G);}void LGL_R(SurfaceInteraction si,vec3 Cspec0,float fresnelWeight,out float LGL_S,out float LGL_T,out float LGL_U,out float LGL_V){LGL_S=max(LGL_AV(si.color),si.sheen)*(1.0-si.metalness)*(1.0-si.LGL_BC);LGL_T=LGL_AV(mix(Cspec0,vec3(1.0),fresnelWeight));LGL_U=(1.0-fresnelWeight)*(1.0-si.metalness)*si.LGL_BC*LGL_AV(si.color);LGL_V=si.clearcoat*(1.0-si.metalness);float weightSum=LGL_S+LGL_T+LGL_U+LGL_V;LGL_S/=weightSum;LGL_T/=weightSum;LGL_U/=weightSum;LGL_V/=weightSum;}vec3 LGL_W(SurfaceInteraction si,vec3 V,vec3 N,out vec3 L,out float pdf,MaterialSamples LGL_AQomSamples){pdf=0.0;vec3 f=vec3(0.0);vec2 bounceDirSample=LGL_AQomSamples.s3;vec2 diffuseOrSpecular=LGL_AQomSamples.s4;float r1=bounceDirSample.x;float r2=bounceDirSample.y;vec3 Cspec0,Csheen;LGL_D(si,Cspec0,Csheen);vec3 T,B;LGL_AZ(N,T,B);V=WorldToLocal(T,B,N,V);float LGL_S,LGL_T,LGL_U,LGL_V;float fresnelWeight=LGL_H(si.metalness,si.eta,V.z);LGL_R(si,Cspec0,fresnelWeight,LGL_S,LGL_T,LGL_U,LGL_V);float cdf[4];cdf[0]=LGL_S;cdf[1]=cdf[0]+LGL_T;cdf[2]=cdf[1]+LGL_U;cdf[3]=cdf[2]+LGL_V;if(r1<cdf[0]){r1/=cdf[0];L=LGL_A(r1,r2);vec3 H=normalize(L+V);f=LGL_N(si,Csheen,V,L,H,pdf);pdf*=LGL_S;}else if(r1<cdf[1]){r1=(r1-cdf[0])/(cdf[1]-cdf[0]);vec3 H=ImportanceSampleLGL_K(si.roughness,r1,r2);if(dot(V,H)<0.0)H=-H;L=normalize(reflect(-V,H));f=LGL_O(si,Cspec0,V,L,H,pdf);pdf*=LGL_T;}else if(r1<cdf[2]){r1=(r1-cdf[1])/(cdf[2]-cdf[1]);vec3 H=ImportanceSampleLGL_K(si.roughness,r1,r2);if(dot(V,H)<0.0)H=-H;vec3 R=reflect(-V,H);L=normalize(refract(-V,H,si.eta));f=LGL_P(si,Cspec0,V,L,H,pdf);pdf*=LGL_U;}else{r1=(r1-cdf[2])/(1.0-cdf[2]);vec3 H=ImportanceSampleLGL_J(mix(0.1,0.001,1.-si.LGL_BA),r1,r2);if(dot(V,H)<0.0)H=-H;L=normalize(reflect(-V,H));f=LGL_Q(si,V,L,H,pdf);pdf*=LGL_V;}L=LocalToWorld(T,B,N,L);return f*abs(dot(N,L));}vec3 LGL_X(inout SurfaceInteraction si,vec3 V,vec3 L,out float bsdfPdf){bsdfPdf=0.0;vec3 f=vec3(0.0);vec3 N=si.LGL_BL;vec3 T,B;LGL_AZ(N,T,B);V=WorldToLocal(T,B,N,V);L=WorldToLocal(T,B,N,L);vec3 H;if(L.z>0.0){H=normalize(L+V);}else{H=normalize(L+V*si.eta);}if(dot(V,H)<0.0){H=-H;}vec3 Cspec0,Csheen;LGL_D(si,Cspec0,Csheen);float LGL_S,LGL_T,LGL_U,LGL_V;float fresnelWeight=LGL_H(si.metalness,si.eta,abs(dot(L,H)));LGL_R(si,Cspec0,fresnelWeight,LGL_S,LGL_T,LGL_U,LGL_V);float pdf;if(LGL_S>0.0&&L.z>0.0){f+=LGL_N(si,Csheen,V,L,H,pdf);bsdfPdf+=pdf*LGL_S;}if(LGL_T>0.0&&L.z>0.0&&V.z>0.0){f+=LGL_O(si,Cspec0,V,L,H,pdf);bsdfPdf+=pdf*LGL_T;}if(LGL_U>0.0&&L.z<0.0){f+=LGL_P(si,Cspec0,V,L,H,pdf);bsdfPdf+=pdf*LGL_U;}if(LGL_V>0.0&&L.z>0.0&&V.z>0.0){f+=LGL_Q(si,V,L,H,pdf);bsdfPdf+=pdf*LGL_V;}return f*abs(L.z);}vec3 LGL_e(inout SurfaceInteraction si,in Path path,in vec2 s1,in vec2 s2){si.eta=dot(si.normal,si.LGL_BL)>0.0 ?(1.0/si.ior): si.ior;vec3 viewDir=-path.ray.d;vec3 surfacePos=si.position+EPS*si.normal;vec3 Li=vec3(0.0);BsdfSampleRec bsdfSampleRec;vec2 lightDirSample=s1;vec2 envDirSample=s2;vec3 lightDir;vec2 uv;float lightPdf;bool brdfSample=false;
#ifndef CONST_COLOR_ENV
lightDir=LGL_d(envDirSample,uv,lightPdf);LGL_AW(path.ray,surfacePos,lightDir);if(!LGL_m(path.ray,INF-EPS)){vec3 irr=LGL_An(envMap,uv).rgb*envMapIntensity;bsdfSampleRec.f=LGL_X(si,viewDir,lightDir,bsdfSampleRec.pdf);if(bsdfSampleRec.pdf>0.0){float LGL_BR=LGL_Af(lightPdf,bsdfSampleRec.pdf);if(LGL_BR>0.0){Li+=LGL_BR*bsdfSampleRec.f*irr/lightPdf;}}}
#endif
#if defined(NUM_LIGHTS)
LightSampleRec lightSampleRec;Light light;int i=int(lightDirSample.x*float(NUM_LIGHTS));vec3 position=lights.position[i];vec3 emission=lights.emission[i];vec3 p1=lights.p1[i];vec3 p2=lights.p2[i];vec4 params=lights.params[i];float radius=params.x;float area=params.y;float type=params.z;float visible=params.w;light=Light(position,emission,p1,p2,radius,area,type,visible);LGL_Al(light,surfacePos,lightSampleRec,lightDirSample);if(dot(lightSampleRec.direction,lightSampleRec.normal)<0.0){LGL_AW(path.ray,surfacePos,lightSampleRec.direction);if(!LGL_m(path.ray,lightSampleRec.dist-EPS)){bsdfSampleRec.f=LGL_X(si,viewDir,lightSampleRec.direction,bsdfSampleRec.pdf);float LGL_BR=1.0;if(light.area>0.0&&bsdfSampleRec.pdf>0.0){LGL_BR=LGL_Af(lightSampleRec.pdf,bsdfSampleRec.pdf);}if(LGL_BR>0.0){Li+=LGL_BR*bsdfSampleRec.f*lightSampleRec.emission/lightSampleRec.pdf;}}}
#endif
return Li;}layout(location=0)out vec4 out_light;void bounce(inout Path path,int depth,inout SurfaceInteraction si,inout BsdfSampleRec bsdfSampleRec,in LightSampleRec lightSampleRec){if(!si.LGL_BK){if(depth==0&&enviromentVisible==0){path.alpha=0.0;path.LGL_BQ=true;return;}
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
Ray cam;LGL_AW(cam,origin,direction);vec4 liAndAlpha=LGL_Ao(cam);if(!(liAndAlpha.x<INF&&liAndAlpha.x>-EPS)){liAndAlpha=vec4(0,0,0,1);}out_light=liAndAlpha;}`};function Aa(e,a){const t=[],i=e**a;for(let n=0;n<i;n++)t[n]=n;let o=t.length;const r=[];function l(){o=0}function s(){o>=t.length&&(Ot(t),l());let n=t[o++];for(let f=0;f<a;f++)r[f]=n%e+Math.random(),n=Math.floor(n/e);return r}return{next:s,restart:l,strataCount:e}}function qe(e,a){const t=[];for(const l of a)t.push(Aa(e,l));const i=[];function o(){let l=0;for(const s of t){const n=s.next();for(const f of n)i[l++]=f}return i}function r(){for(const l of t)l.restart()}return{next:o,restart:r,strataCount:e}}let se=[],le=0,me=[];function Ke(e,a){const t=[],i=[];let o=1;const r={x:1,y:2,z:3},l=(s,n=1)=>{if(o=Math.max(n,o),s.primitives)for(let f=0;f<s.primitives.length;f++){const u=s.primitives[f];if(u.indices!==void 0){const c=me[u.meshID];t.push(u.indices[0]+c,u.indices[1]+c,u.indices[2]+c,s.primitives.length,u.faceNormal.x,u.faceNormal.y,u.faceNormal.z,u.meshID)}else t.push(se[u.meshID],u.materialID,u.meshID,0,u.visible,.1,.1,0);i.push(!1)}else{const f=s.bounds;t.push(f.min.x,f.min.y,f.min.z,r[s.splitAxis],f.max.x,f.max.y,f.max.z,null);const u=t.length-1;i.push(!0),l(s.child0,n+1),t[u]=t.length/4+a,l(s.child1,n+1)}};return l(e),{maxDepth:o,count:t.length/4,flatData:t,isBounds:i}}function ha(){se=[],le=0,me=[]}function je(e,a){return Ke(e,le)}function Sa(e,a,t){const i=[];se=[],me=[];let o=0,r=0,l=0,s=1;for(let n=0;n<e.length;n++){const f=e[n],u=a[n].geometry;me.push(r);const c=Ke(f,o);s=Math.max(c.maxDepth,s),se.push(o),o+=c.count,i.push(c),r+=u.getAttribute("position").count,l+=c.flatData.length}return{totalBLASDataNum:l,totalBLASCount:o,flatBVHInfos:i,maxDepth:s}}function Ta(e,a){const t=e.totalBLASDataNum,i=e.flatBVHInfos,o=a,r=o.flatData.length,l=t+r,s=new ArrayBuffer(4*l),n=new Float32Array(s),f=new Int32Array(s);for(let m=0;m<i.length;m++){const x=i[m],L=se[m]*4,{flatData:v,isBounds:g}=x;for(let A=0;A<g.length;A++){let S=8*A,M=S+L;g[A]?(n[M]=v[S],n[M+1]=v[S+1],n[M+2]=v[S+2],f[M+3]=v[S+3]):(f[M]=v[S],f[M+1]=v[S+1],f[M+2]=v[S+2],f[M+3]=-v[S+3]),n[M+4]=v[S+4],n[M+5]=v[S+5],n[M+6]=v[S+6],f[M+7]=v[S+7]}}const{flatData:u,isBounds:c}=o,p=le*4;for(let m=0;m<c.length;m++){let x=8*m,L=x+p;c[m]?(n[L]=u[x],n[L+1]=u[x+1],n[L+2]=u[x+2],f[L+3]=u[x+3]):(f[L]=u[x],f[L+1]=u[x+1],f[L+2]=u[x+2],f[L+3]=u[x+3]),n[L+4]=u[x+4],n[L+5]=u[x+5],n[L+6]=u[x+6],f[L+7]=u[x+7]}return{bvhBufferDataNum:l,buffer:n,intViewBuffer:f}}function Ma(e,a,t,i){const o=Sa(e,t);le=o.totalBLASCount;const r=je(a),{bvhBufferDataNum:l,buffer:s,intViewBuffer:n}=Ta(o,r);return{maxDepth:o.maxDepth+r.maxDepth,count:l/4,buffer:s,intViewBuffer:n,tlasRootIndex:le}}let ee,Le;function Fa(e){const a=e.getAttribute("position");if(!a){console.warn("No position attribute");return}const t=new Uint32Array(a.count);for(let i=0;i<t.length;i++)t[i]=i;return e.setIndex(new he(t,1,!1)),e}function Ia(e){let a=0,t=0;for(let o=0;o<e.length;o++){const r=e[o];r.geometry.isBufferGeometry||(r.geometry=new Dt().fromGeometry(r.geometry));const l=r.geometry;l.getIndex()||Fa(l),l.getAttribute("normal")?l.normalizeNormals():l.computeVertexNormals(),a+=l.getAttribute("position").count,t+=l.getIndex().count}const i=Yt(e);return console.log("vertexTotalCount",a),console.log("indexCount",t),{vertexTotalCount:a,indexCount:t,blasBVHs:i}}function Ze(e,a){return Ht(e,a)}function Je(e){const a=new Float32Array(e.length*16);for(let t=0;t<e.length;t++){const i=e[t];i.updateMatrixWorld(!0);const o=i.matrixWorld.elements,r=16;for(let l=0;l<r;l++)a[t*r+l]=o[l]}return a}function ga(){ee=null,Le=null,ha()}function Ga(e,a){const t=Ze(e,a),i=je(t),o=Je(e),{flatData:r,isBounds:l}=i,{buffer:s,intViewBuffer:n}=ee,f=Le*4;for(let u=0;u<l.length;u++){let c=8*u,p=c+f;l[u]?(s[p]=r[c],s[p+1]=r[c+1],s[p+2]=r[c+2],n[p+3]=r[c+3]):(n[p]=r[c],n[p+1]=r[c+1],n[p+2]=r[c+2],n[p+3]=r[c+3]),s[p+4]=r[c+4],s[p+5]=r[c+5],s[p+6]=r[c+6],n[p+7]=r[c+7]}return{bvhBufferInfo:ee,transformBufferData:o}}function Pa(e,a){var u;let t=e;const{vertexTotalCount:i,blasBVHs:o}=Ia(e),r=Ze(t,a);ee=Ma(o,r,e),Le=ee.tlasRootIndex;const l=new Float32Array(i*4),s=new Float32Array(i*4);let n=0;for(let c=0;c<e.length;c++){const m=e[c].geometry,x=m.getAttribute("position").array,L=m.getAttribute("normal").array,v=(u=m.getAttribute("uv"))==null?void 0:u.array,g=m.getAttribute("position").count;for(let A=0;A<g;A++)l[n+A*4+0]=x[A*3+0],l[n+A*4+1]=x[A*3+1],l[n+A*4+2]=x[A*3+2],l[n+A*4+3]=v?v[A*2+0]:0,s[n+A*4+0]=L[A*3+0],s[n+A*4+1]=L[A*3+1],s[n+A*4+2]=L[A*3+2],s[n+A*4+3]=v?v[A*2+1]:0;n+=g*4}const f=Je(e);return{vertexTotalCount:i,bvhBufferInfo:ee,positionBufferData:l,normalBufferData:s,transformBufferData:f,tlasRootIndex:Le}}function Na(e,a){return new Promise(t=>{const i=Pa(e,a);t(i)})}async function ya({decomposedScene:e,fullscreenQuad:a,gl:t,materialBuffer:i,uvTransformBuffer:o,optionalExtensions:r,useWorker:l,loadingCallback:s}){s&&s.onProgress&&typeof s.onProgress=="function"&&s.onProgress("Building BVH...");const{OES_texture_float_linear:n}=r,{camera:f,meshLightsNum:u,isTextureEnv:c,meshes:p,materialIndexMap:m}=e,{uvTransformBufferTex:x,uvTransformBufferDataCount:L,wrappingRootIndex:v}=o,{vertexTotalCount:g,bvhBufferInfo:A,positionBufferData:S,normalBufferData:M,transformBufferData:_,tlasRootIndex:F}=await Na(p,m),G=A,I=$(t,{defines:Ee({OES_texture_float_linear:n,BVH_COLUMNS:ie(G.count).columnsLog,VERTEX_COLUMNS:ie(g).columnsLog,TRANSFORM_COLUMNS:ie(_.length/4).columnsLog,UVTRANSFORM_COLUMNS:ie(L).columnsLog,SUPPORTED_MAPS:Te.length,MAX_DEPTH:G.maxDepth,USE_LENS_CAMERA:f.isLensCamera,NUM_LIGHTS:u,CONST_COLOR_ENV:!c},i.defines),fragment:_a,vertex:a.vertexShader});return I.setTexture("diffuseMap",i.textures.diffuseMap),I.setTexture("normalMap",i.textures.normalMap),I.setTexture("pbrMap",i.textures.pbrMap),I.setTexture("pbrSGMap",i.textures.pbrSGMap),i.textures.emissiveMap&&I.setTexture("emissiveMap",i.textures.emissiveMap),I.setTexture("positionBuffer",K(t,S,4)),I.setTexture("normalBuffer",K(t,M,4)),I.setTexture("bvhBuffer",K(t,G.buffer,4)),I.setUniform("tlasIndex",F),I.setTexture("transformBuffer",K(t,_,4)),I.setUniform("wrappingIndex",v),I.setTexture("uvTransformBuffer",x),I}async function Ba(e,{bounces:a,decomposedScene:t,fullscreenQuad:i,materialBuffer:o,uvTransformBuffer:r,optionalExtensions:l,envMapIntensity:s,enviromentVisible:n,useWorker:f,loadingCallback:u}){let c;const p=await ya({bounces:a,decomposedScene:t,fullscreenQuad:i,gl:e,materialBuffer:o,uvTransformBuffer:r,optionalExtensions:l,useWorker:f,loadingCallback:u}),m=[];v(a),g(t),A(t);function x(h,P){p.setTexture("diffuseMap",h.textures.diffuseMap),p.setTexture("normalMap",h.textures.normalMap),p.setTexture("pbrMap",h.textures.pbrMap),p.setTexture("pbrSGMap",h.textures.pbrSGMap),h.textures.emissiveMap&&p.setTexture("emissiveMap",h.textures.emissiveMap);const{uvTransformBufferTex:b,wrappingRootIndex:R}=P;p.setUniform("wrappingIndex",R),p.setTexture("uvTransformBuffer",b)}function L(h){const{meshes:P,materialIndexMap:b}=h,{bvhBufferInfo:R,transformBufferData:B}=Ga(P,b),E=R.buffer;p.setTexture("transformBuffer",K(e,B,4)),p.setTexture("bvhBuffer",K(e,E,4))}function v(h){m.length=0,h=ne(h,2,8);for(let P=1;P<=h;P++)m.push(2,2,2,2),P>=2&&m.push(1);p.setUniform("bounces",h),c&&(c.strataCount=-1)}function g(h){const{OES_texture_float_linear:P}=l,{environment:b,isTextureEnv:R}=h;if(R){const B=La(b);if(B){const E=z(e,{data:B.data,storage:B.dataFormat,minFilter:P?e.LINEAR:e.NEAREST,magFilter:P?e.LINEAR:e.NEAREST,width:B.width,height:B.height});p.setTexture("envMap",E);const C=va(B);p.setTexture("envMapDistribution",z(e,{data:C.data,storage:"float",width:C.width,height:C.height})),p.setUniform("envMapIntensity",s)}}else{const B=b.data;B&&B.isColor?p.setUniform("backgroundColor",[B.r,B.g,B.b]):p.setUniform("backgroundColor",[0,0,0])}M(n)}function A(h){const{meshLights:P}=h;P&&(p.setUniform("lights.position[0]",P.position),p.setUniform("lights.emission[0]",P.emission),p.setUniform("lights.p1[0]",P.p1),p.setUniform("lights.p2[0]",P.p2),p.setUniform("lights.params[0]",P.params))}function S(h){p.setUniform("envMapIntensity",h)}function M(h){p.setUniform("enviromentVisible",Number(h))}function _(h){p.setTexture("noiseTex",z(e,{data:h,wrapS:e.REPEAT,wrapT:e.REPEAT,storage:"halfFloat"}))}function F(h){p.setUniform("frameCount",h)}function G(){p.setUniform("stratifiedSamples[0]",c.next())}function I(h,P){p.setUniform("jitter",h,P)}function U(h){h>1&&h!==c.strataCount?c=qe(h,m):c.restart(),p.setUniform("strataSize",1/h),G()}function j(h,P){p.setUniform("pixelSize",1/h,1/P)}function fe(h){p.setUniform("camera.transform",h.matrixWorld.elements),p.setUniform("camera.aspect",h.aspect),p.setUniform("camera.fov",.5/Math.tan(.5*Math.PI*h.fov/180)),h.isLensCamera&&(p.setUniform("camera.aperture",h.aperture),p.setUniform("camera.focus",h.focus))}function te({position:h}){p.setTexture("gPosition",h)}function ae(){p.bindTextures()}function N(){p.useProgram(!1),i.draw()}c=qe(1,m);function Z(){ga(),p.dispose()}return{bindTextures:ae,draw:N,outputLocs:p.outputLocs,textures:p.textures,setSize:j,setCamera:fe,setGBuffers:te,setNoise:_,setJitter:I,setFrameCount:F,setStrataCount:U,nextSeed:G,setEnvMapIntensity:S,setEnviromentVisible:M,updateBounces:v,updateEnvLight:g,updateMeshLight:A,updateMeshTransform:L,updateMeshMaterial:x,dispose:Z}}var Ra={source:"in vec3 aPosition;in vec3 aNormal;in vec2 aUv;uniform mat4 projView;uniform mat4 modelMat;uniform mat3 normalMat;out vec3 vPosition;out vec3 vNormal;out vec2 vUv;void main(){vec4 mPosition=modelMat*vec4(aPosition,1.);vPosition=mPosition.xyz;vNormal=normalize(normalMat*aNormal);vUv=aUv;gl_Position=projView*mPosition;}"},Ua={source:`
#define PI 3.14159265359
#define TWOPI 6.28318530718
#define INVPI 0.31830988618
#define INVPI2 0.10132118364
#define EPS 0.0001
#define ONE_MINUS_EPS 0.999999
#define INF 1000000.0
#define ROUGHNESS_MIN 0.001
uniform sampler2D uvTransformBuffer;uniform int wrappingIndex;ivec2 LGL_AX(int i,int LGL_BT){ivec2 u;u.y=i>>LGL_BT;u.x=i-(u.y<<LGL_BT);return u;}vec4 LGL_AY(sampler2D s,int i,int LGL_BT){return texelFetch(s,LGL_AX(i,LGL_BT),0);}ivec4 LGL_AY(isampler2D s,int i,int LGL_BT){return texelFetch(s,LGL_AX(i,LGL_BT),0);}uniform Materials{vec4 colorAndMaterialType[NUM_MATERIALS];vec4 roughnessMetalnessNormalScale[NUM_MATERIALS];vec4 alphaSpecularTintSheenSheenTint[NUM_MATERIALS];vec4 clearcoaRoughnessSubfaceTransmission[NUM_MATERIALS];vec4 iorAtDistanceAnisotropicWorkflow[NUM_MATERIALS];vec4 extinction[NUM_MATERIALS];vec4 specularColorGlossiness[NUM_MATERIALS];
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
mat3 LGL_Bd(int materialIndex,int mapKey){int offset=materialIndex*SUPPORTED_MAPS*3;int mapOffset=mapKey*3;vec3 LGL_BY=LGL_AY(uvTransformBuffer,offset+mapOffset+0,UVTRANSFORM_COLUMNS).xyz;vec3 LGL_BZ=LGL_AY(uvTransformBuffer,offset+mapOffset+1,UVTRANSFORM_COLUMNS).xyz;vec3 LGL_Ba=LGL_AY(uvTransformBuffer,offset+mapOffset+2,UVTRANSFORM_COLUMNS).xyz;mat3 uvTransform=mat3(LGL_BY,LGL_BZ,LGL_Ba);return uvTransform;}vec3 LGL_Be(int materialIndex,int mapKey){int offset=wrappingIndex+materialIndex*SUPPORTED_MAPS;int mapOffset=mapKey;vec3 wrappingData=LGL_AY(uvTransformBuffer,offset+mapOffset,UVTRANSFORM_COLUMNS).xyz;return wrappingData;}vec2 LGL_Bf(vec2 uv,vec3 warpping){if(uv.x<=0.||uv.x>=1.){float warpS=warpping.x;if(warpS==0.){uv.x=uv.x<=0. ? 0. : 1.;}else if(warpS==1.){uv.x=uv.x-floor(uv.x);}}if(uv.y<=0.||uv.y>=1.){float warpT=warpping.y;if(warpT==0.){uv.y=uv.y<=0. ? 0. : 1.;}else if(warpT==1.){uv.y=uv.y-floor(uv.y);}}return uv;}float LGL_p(int materialIndex){return materials.colorAndMaterialType[materialIndex].w;}float LGL_q(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].w;}vec3 LGL_r(int materialIndex,vec2 uv){vec3 emissive=vec3(0.0);
#ifdef NUM_EMISSIVE_MAPS
int emissiveMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].x;if(emissiveMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,6);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,6);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[emissiveMapIndex].xy;emissive=texture(emissiveMap,vec3(uv,emissiveMapIndex)).rgb;}
#endif
return emissive;}vec3 LGL_s(int materialIndex,vec2 uv){vec3 specularColor=materials.specularColorGlossiness[materialIndex].rgb;
#ifdef NUM_PBR_SG_MAPS
int specularMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].y;if(specularMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,4);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,4);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[specularMapIndex].xy;vec3 texelSpecular=texture(pbrSGMap,vec3(uv,specularMapIndex)).rgb;texelSpecular=pow(texelSpecular,vec3(2.2));specularColor*=texelSpecular;}
#endif
return specularColor;}float LGL_t(int materialIndex,vec2 uv){float glossiness=materials.specularColorGlossiness[materialIndex].a;
#ifdef NUM_PBR_SG_MAPS
int glossinessMapIndex=materials.emissiveSpecularGlossinessMapIndex[materialIndex].z;if(glossinessMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,5);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,5);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[glossinessMapIndex].xy;float texelGlossiness=texture(pbrSGMap,vec3(uv,glossinessMapIndex)).x;glossiness*=texelGlossiness;}
#endif
return glossiness;}float LGL_u(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float roughness=0.0;if(LGL_BG>0.1){roughness=1.0-LGL_t(materialIndex,uv);}else{roughness=materials.roughnessMetalnessNormalScale[materialIndex].x;
#ifdef NUM_PBR_MAPS
int roughnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].z;if(roughnessMapIndex>=0){uv=uv*materials.pbrMapSize[roughnessMapIndex].xy;mat3 uvTransform=LGL_Bd(materialIndex,2);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,2);uv=LGL_Bf(uv,warpping);roughness*=texture(pbrMap,vec3(uv,roughnessMapIndex)).g;}
#endif
}return roughness*roughness;}float LGL_v(const vec3 v){return max(v.x,max(v.y,v.z));}float LGL_w(const vec3 specularColor){return LGL_v(specularColor);}vec3 LGL_x(const vec3 baseColor,float metallic){return baseColor*(1.0-metallic);}float LGL_y(int materialIndex,vec2 uv){float LGL_BG=LGL_q(materialIndex);float metalness=0.0;if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);metalness=LGL_w(specularFactor);}else{metalness=materials.roughnessMetalnessNormalScale[materialIndex].y;
#ifdef NUM_PBR_MAPS
int metalnessMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].w;if(metalnessMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,3);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,3);uv=LGL_Bf(uv,warpping);uv=uv*materials.pbrMapSize[metalnessMapIndex].xy;metalness*=texture(pbrMap,vec3(uv,metalnessMapIndex)).b;}
#endif
}return metalness;}vec4 LGL_z(int materialIndex,vec2 uv){vec3 color=materials.colorAndMaterialType[materialIndex].rgb;float LGL_BD=1.0;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,0);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,0);uv=LGL_Bf(uv,warpping);uv=uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy;vec4 diffuse=texture(diffuseMap,vec3(uv,diffuseMapIndex));color*=diffuse.rgb;LGL_BD=diffuse.a;}
#endif
float LGL_BG=LGL_q(materialIndex);if(LGL_BG>0.1){vec3 specularFactor=LGL_s(materialIndex,uv);color=LGL_x(color,LGL_w(specularFactor));}return vec4(color,LGL_BD);}vec3 LGL_AA(int materialIndex,vec2 uv,vec3 normal,vec3 dp1,vec3 dp2,vec2 duv1,vec2 duv2,inout vec3 tangent,inout vec3 bitangent){vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 dpdu=dp2perp*duv1.x+dp1perp*duv2.x;vec3 dpdv=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(dpdu,dpdu),dot(dpdv,dpdv)));dpdu*=invmax;dpdv*=invmax;tangent=normalize(dpdu);bitangent=normalize(dpdv);
#ifdef NUM_NORMAL_MAPS
int normalMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].y;if(normalMapIndex>=0){mat3 uvTransform=LGL_Bd(materialIndex,1);uv=(uvTransform*vec3(uv,1)).xy;vec3 warpping=LGL_Be(materialIndex,1);uv=LGL_Bf(uv,warpping);vec3 n=2.0*texture(normalMap,vec3(uv*materials.diffuseNormalMapSize[normalMapIndex].zw,normalMapIndex)).rgb-1.0;n.xy*=materials.roughnessMetalnessNormalScale[materialIndex].zw;mat3 tbn=mat3(dpdu,dpdv,normal);return normalize(tbn*n);}else{return normal;}
#endif
return normal;}float LGL_AD(int materialIndex,vec2 uv){float alpha=materials.alphaSpecularTintSheenSheenTint[materialIndex].x;
#ifdef NUM_DIFFUSE_MAPS
int diffuseMapIndex=materials.diffuseNormalRoughnessMetalnessMapIndex[materialIndex].x;if(diffuseMapIndex>=0){alpha*=texture(diffuseMap,vec3(uv*materials.diffuseNormalMapSize[diffuseMapIndex].xy,diffuseMapIndex)).a;}
#endif
return alpha;}float LGL_AB(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].y;}float LGL_AC(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].z;}float LGL_ACTint(int materialIndex){return materials.alphaSpecularTintSheenSheenTint[materialIndex].w;}float LGL_AF(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].x;}float LGL_AFRoughness(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].y;}float LGL_AH(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].z;}float LGL_AI(int materialIndex){return materials.clearcoaRoughnessSubfaceTransmission[materialIndex].w;}float LGL_AJ(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].x;}float LGL_AK(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].y;}float LGL_AL(int materialIndex){return materials.iorAtDistanceAnisotropicWorkflow[materialIndex].z;}vec3 LGL_AM(int materialIndex){return materials.extinction[materialIndex].rgb;}layout(location=0)out vec4 out_position;layout(location=1)out vec4 out_normal;layout(location=2)out vec4 out_color;in vec3 vPosition;in vec3 vNormal;in vec2 vUv;uniform int meshIndex;uniform int materialIndex;vec3 LGL_BMs(vec3 pos){vec3 fdx=dFdx(pos);vec3 fdy=dFdy(pos);return cross(fdx,fdy);}void main(){vec2 uv=vUv;vec4 color=LGL_z(materialIndex,uv);float LGL_BH=LGL_p(materialIndex);vec3 normal=normalize(vNormal);vec3 LGL_BM=normalize(LGL_BMs(vPosition));normal*=sign(dot(normal,LGL_BM));
#ifdef NUM_NORMAL_MAPS
vec3 dp1=dFdx(vPosition);vec3 dp2=dFdy(vPosition);vec2 duv1=dFdx(vUv);vec2 duv2=dFdy(vUv);vec3 tangent,bitangent;normal=LGL_AA(materialIndex,uv,normal,dp1,dp2,duv1,duv2,tangent,bitangent);
#endif
out_position=vec4(vPosition,float(meshIndex)+EPS);out_normal=vec4(normal,LGL_BH);out_color=color;}`};function Fe(e,a,t){if(a===void 0)return;const{itemSize:i,array:o}=t;if(e.enableVertexAttribArray(a),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW),o instanceof Float32Array)e.vertexAttribPointer(a,i,e.FLOAT,!1,0,0);else if(o instanceof Int32Array)e.vertexAttribIPointer(a,i,e.INT,0,0);else throw"Unsupported buffer type"}function ba(e,a,t){const i=t.getAttribute("position").count,o=new he(new Float32Array(3*i),3,!1),r=new he(new Float32Array(2*i),2,!1);Fe(e,a.attribLocs.aPosition,t.getAttribute("position")),Fe(e,a.attribLocs.aNormal,t.getAttribute("normal")||o),Fe(e,a.attribLocs.aUv,t.getAttribute("uv")||r),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint32Array(t.getIndex().array),e.STATIC_DRAW)}function Ea(e,{materialBuffer:a,uvTransformBuffer:t,decomposedScene:i}){const{meshes:o,materialIndexMap:r}=i,{uvTransformBufferTex:l,wrappingRootIndex:s}=t,n=$(e,{defines:a.defines,vertex:Ra,fragment:Ua});n.setTexture("diffuseMap",a.textures.diffuseMap),n.setTexture("normalMap",a.textures.normalMap),n.setUniform("wrappingIndex",s),n.setTexture("uvTransformBuffer",l);const f=[];for(let _=0;_<o.length;_++){const G=o[_].geometry,I=e.createVertexArray();e.bindVertexArray(I),ba(e,n,G),e.bindVertexArray(null),f.push(I)}let u=0,c=0;function p(_,F){u=_,c=F}let m;function x(_){m=_}let L=new De,v=new we;function g(){L.copy(m.projectionMatrix),L.elements[8]+=2*u,L.elements[9]+=2*c,L.multiply(m.matrixWorldInverse),n.setUniform("projView",L.elements)}function A(){g(),e.enable(e.DEPTH_TEST),e.disable(e.CULL_FACE);for(let _=0;_<o.length;_++){const F=o[_];if(!F.visible)continue;const I=F.geometry.getIndex().count;n.setUniform("modelMat",F.matrixWorld.elements),v.getNormalMatrix(F.matrixWorld),n.setUniform("normalMat",v.elements),n.setUniform("meshIndex",_);const U=r.get(F.material);n.setUniform("materialIndex",U);const j=f[_];e.bindVertexArray(j),n.useProgram(),e.drawElements(e.TRIANGLES,I,e.UNSIGNED_INT,0)}e.enable(e.CULL_FACE),e.disable(e.DEPTH_TEST)}function S(_,F){n.setTexture("diffuseMap",_.textures.diffuseMap),n.setTexture("normalMap",_.textures.normalMap);const{uvTransformBufferTex:G,wrappingRootIndex:I}=F;n.setUniform("wrappingIndex",I),n.setTexture("uvTransformBuffer",G)}function M(){n.dispose()}return{draw:A,outputLocs:n.outputLocs,setCamera:x,setJitter:p,updateMeshMaterial:S,dispose:M}}var wa={source:`layout(location=0)out vec4 out_color;uniform sampler2D inputBuffer;uniform vec2 resolution;in vec2 vCoord;
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
void main(){out_color=FxaaPixelShader(vCoord,vec4(0.0),inputBuffer,inputBuffer,inputBuffer,resolution,vec4(0.0),vec4(0.0),vec4(0.0),0.75,0.166,0.0833,0.0,0.0,0.0,vec4(0.0));out_color.a=texture(inputBuffer,vCoord).a;}`};function Xa(e,a){const{fullscreenQuad:t}=a,i={gl:e,vertex:t.vertexShader,fragment:wa};function o(n,f){r.setUniform("resolution",1/n,1/f)}const r=$(e,i);function l(n){let{light:f}=n;r.setTexture("inputBuffer",f),r.useProgram(),t.draw()}function s(){r.dispose()}return{draw:l,setSize:o,dispose:s}}var Da={source:`vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}layout(location=0)out vec4 out_light;layout(location=1)out vec4 out_momentLengthVariance;in vec2 vCoord;uniform mediump sampler2D lightTex;uniform mediump sampler2D positionTex;uniform mediump sampler2D colorTex;uniform mediump sampler2D previousLightTex;uniform mediump sampler2D previousPositionTex;uniform mediump sampler2D previousColorTex;uniform mediump sampler2D previousMomentLengthVarianceTex;uniform mat4 historyCamera;uniform float colorBlendFactor;uniform float momentBlendFactor;uniform float demodulateAlbedo;vec2 LGL_As(vec3 position){vec4 historyCoord=historyCamera*vec4(position,1.0);return 0.5*historyCoord.xy/historyCoord.w+0.5;}float LGL_At(sampler2D meshIdTex,vec2 vCoord){return texture(meshIdTex,vCoord).w;}float LGL_Au(float histMeshId,float currentMeshId,ivec2 coord,ivec2 size){if(histMeshId!=currentMeshId){return 0.0;}if(any(greaterThanEqual(coord,size))){return 0.0;}return 1.0;}void main(){vec3 currentPosition=LGL_An(positionTex,vCoord).xyz;float currentMeshId=LGL_At(positionTex,vCoord);vec4 accumulatedLight=texture(lightTex,vCoord);vec3 currentLight=accumulatedLight.rgb/accumulatedLight.a;vec2 hCoord=LGL_As(currentPosition);vec2 hSizef=vec2(textureSize(previousLightTex,0));vec2 hSizeInv=1.0/hSizef;ivec2 hSize=ivec2(hSizef);vec2 hTexelf=hCoord*hSizef-0.5;ivec2 hTexel=ivec2(hTexelf);vec2 f=fract(hTexelf);ivec2 texel[]=ivec2[](hTexel+ivec2(0,0),hTexel+ivec2(1,0),hTexel+ivec2(0,1),hTexel+ivec2(1,1));float weights[]=float[]((1.0-f.x)*(1.0-f.y),f.x*(1.0-f.y),(1.0-f.x)*f.y,f.x*f.y);vec4 historyLight=vec4(0.);;vec2 historyMoment=vec2(0.);float historyLength=0.;float sum=0.;float luminance=0.2126*currentLight.x+0.7152*currentLight.y+0.0722*currentLight.z;float N=texelFetch(previousMomentLengthVarianceTex,hTexel,0).b;if(N>0.0&&currentMeshId>0.0){for(int i=0;i<4;i++){vec2 gCoord=(vec2(texel[i])+0.5)*hSizeInv;float histMeshId=LGL_At(previousPositionTex,gCoord);float isValid=LGL_Au(histMeshId,currentMeshId,texel[i],hSize);float weight=isValid*weights[i];historyLight+=weight*texelFetch(previousLightTex,texel[i],0);historyMoment+=weight*texelFetch(previousMomentLengthVarianceTex,texel[i],0).rg;sum+=weight;}if(sum>0.0){historyLight/=sum;historyMoment/=sum;}else{hTexel=ivec2(hTexelf+0.5);for(int x=-1;x<=1;x++){for(int y=-1;y<=1;y++){ivec2 texel=hTexel+ivec2(x,y);vec2 gCoord=(vec2(texel)+0.5)*hSizeInv;float histMeshId=LGL_At(previousPositionTex,gCoord);float isValid=LGL_Au(histMeshId,currentMeshId,texel,hSize);float weight=isValid;historyLight+=weight*texelFetch(previousLightTex,texel,0);historyMoment+=weight*texelFetch(previousMomentLengthVarianceTex,texel,0).rg;sum+=weight;}}historyLight=sum>0.0 ? historyLight/sum : historyLight;historyMoment=sum>0.0 ? historyMoment/sum : historyMoment;}if(sum>0.0){historyLength=N+1.;float color_alpha_min=colorBlendFactor;float moment_alpha_min=momentBlendFactor;float color_alpha=max(1.0/historyLength,color_alpha_min);float moment_alpha=max(1.0/historyLength,moment_alpha_min);out_light=color_alpha*accumulatedLight+historyLight*(1.-color_alpha);float first_moment=moment_alpha*historyMoment.x+(1.0-moment_alpha)*luminance;float second_moment=moment_alpha*historyMoment.y+(1.0-moment_alpha)*luminance*luminance;float variance=second_moment-first_moment*first_moment;out_momentLengthVariance=vec4(first_moment,second_moment,historyLength,variance);return;}}out_light=accumulatedLight;out_momentLengthVariance=vec4(luminance,luminance*luminance,1.,100.);}`};function za(e,a){const{fullscreenQuad:t,maxReprojectedSamples:i}=a,o=$(e,{defines:{MAX_SAMPLES:i.toFixed(1)},vertex:t.vertexShader,fragment:Da}),r=new De;let l=.2,s=.2;function n(L){r.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),o.setUniform("historyCamera",r.elements)}function f(L,v){o.setUniform("jitter",L,v)}function u(L){l=L}function c(L){s=L}function p(L){o.setUniform("demodulateAlbedo",L)}function m(L){const{light:v,position:g,color:A,previousColor:S,previousLight:M,previousPosition:_,previousMomentLengthVariance:F}=L;o.setTexture("lightTex",v),o.setTexture("positionTex",g),o.setTexture("colorTex",A),o.setTexture("previousLightTex",M),o.setTexture("previousPositionTex",_),o.setTexture("previousColorTex",S),o.setTexture("previousMomentLengthVarianceTex",F),o.setUniform("colorBlendFactor",l),o.setUniform("momentBlendFactor",s),o.useProgram(),t.draw()}function x(){o.dispose()}return{draw:m,setJitter:f,setPreviousCamera:n,setDenoiseColorBlendFactor:u,setDenoiseMomentBlendFactor:c,setDemodulateAlbedo:p,getDenoiseFactors(){return{colorBlendFactor:l,momentBlendFactor:s}},dispose:x}}var Ca={source:`vec4 LGL_An(sampler2D map,vec2 uv){
#ifdef OES_texture_float_linear
return texture(map,uv);
#else
vec2 size=vec2(textureSize(map,0));vec2 texelSize=1.0/size;uv=uv*size-0.5;vec2 f=fract(uv);uv=floor(uv)+0.5;vec4 s1=texture(map,(uv+vec2(0,0))*texelSize);vec4 s2=texture(map,(uv+vec2(1,0))*texelSize);vec4 s3=texture(map,(uv+vec2(0,1))*texelSize);vec4 s4=texture(map,(uv+vec2(1,1))*texelSize);return mix(mix(s1,s2,f.x),mix(s3,s4,f.x),f.y);
#endif
}layout(location=0)out vec4 out_color;in vec2 vCoord;uniform sampler2D lightTex;uniform sampler2D LGL_AsDataTex;uniform sampler2D gPosition;uniform sampler2D gNormal;uniform sampler2D gColor;uniform float colorFactor;uniform float normalFactor;uniform float positionFactor;uniform float stepwidth;uniform int level;uniform float useMomentVariance;uniform float demodulateAlbedo;float LGL_Ap(float v){return acos(min(max(v,0.0),1.0));}float LGL_Aq(vec2 uv){return max(texture(LGL_AsDataTex,uv).a,0.);}vec4 LGL_Ar(){vec4 upscaledLight=texture(lightTex,vCoord);float sampleFrame=upscaledLight.a;float sf2=sampleFrame*sampleFrame;vec3 color=upscaledLight.rgb/upscaledLight.a;vec3 normal=texture(gNormal,vCoord).rgb;vec4 positionAndMeshIndex=texture(gPosition,vCoord);vec3 position=positionAndMeshIndex.rgb;float meshIndex=positionAndMeshIndex.w;bool isBG=meshIndex>0.0 ? false : true;if(isBG){return upscaledLight;}vec2 size=vec2(textureSize(lightTex,0));int kernelRadius=9;float dx=1./size.x;float dy=1./size.y;float kernel[9]=float[9](1.0/16.0,1.0/8.0,1.0/16.0,1.0/8.0,1.0/4.0,1.0/8.0,1.0/16.0,1.0/8.0,1.0/16.0);vec2 offset[9]=vec2[9](vec2(-dx,-dy),vec2(0,-dy),vec2(dx,-dy),vec2(-dx,0),vec2(0,0),vec2(dx,0),vec2(-dx,dy),vec2(0,dy),vec2(dx,dy));vec3 colorSum=vec3(0.);float weightSum=0.;float var;float varSum;float varSumWeight;if(useMomentVariance>0.){for(int i=0;i<kernelRadius;i++){vec2 uv=vCoord+offset[i];if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0){continue;}vec4 positionAndMeshIndex=texture(gPosition,uv);float meshIndex=positionAndMeshIndex.w;bool isBG=meshIndex>0.0 ? false : true;if(isBG){continue;}varSum+=kernel[i]*LGL_Aq(uv);varSumWeight+=kernel[i];}if(varSumWeight>0.0){var=max(varSum/varSumWeight,0.0);}else{var=max(LGL_Aq(vCoord),0.0);}}for(int i=0;i<kernelRadius;i++){vec2 uv=vCoord+offset[i]*float(stepwidth);if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0){continue;}vec4 positionAndMeshIndex=texture(gPosition,uv);float meshIndex=positionAndMeshIndex.w;bool isBG=meshIndex>0.0 ? false : true;if(isBG){continue;}vec4 upscaledLight=texture(lightTex,uv);vec3 kernelColor=upscaledLight.rgb/upscaledLight.a;float Dc=distance(color,kernelColor);float Wc;if(useMomentVariance>0.){Wc=min(exp(-Dc/((1.+sqrt(var))*colorFactor+1e-6)),1.0);}else{Wc=min(exp(-Dc/(colorFactor+1e-6)),1.0);}vec3 kernelNormal=texture(gNormal,uv).rgb;float Dn=distance(normal,kernelNormal);float dist2=max(Dn/(stepwidth*stepwidth+1e-6),0.0);float Wn=min(exp(-(dist2)/normalFactor+1e-6),1.0);vec3 kernelPosition=positionAndMeshIndex.rgb;float Dp=distance(position,kernelPosition);float Wp=min(exp(-Dp/(positionFactor+1e-6)),1.0);float weight=Wc*Wn*Wp*kernel[i];weightSum+=weight;colorSum+=kernelColor*weight;}colorSum=colorSum/weightSum;return vec4(colorSum*sampleFrame,sampleFrame);}void main(){vec4 light=LGL_Ar();out_color=light;}`};function Va(e,a){const{fullscreenQuad:t}=a;let i,o;function r(_,F){const G=()=>pe(e,{color:{0:z(e,{width:_,height:F,storage:"float",magFilter:e.NEAREST,minFilter:e.NEAREST})}});i=G(),o=G()}function l(){let _=o;o=i,i=_}function s(_,F){r(_,F)}const n={gl:e,vertex:t.vertexShader,fragment:Ca},f=$(e,n),u=3;let c=.5,p=.02,m=.35;function x({position:_,normal:F,color:G}){f.setTexture("gPosition",_),f.setTexture("gNormal",F),f.setTexture("gColor",G)}function L(_){c=_}function v(_){p=_}function g(_){m=_}function A(_){f.setUniform("demodulateAlbedo",_)}function S(_){let{light:F,reprojectData:G}=_;for(let I=0;I<u;I++)f.setUniform("level",I),f.setUniform("colorFactor",1/(1<<I)*c),f.setUniform("normalFactor",1/(1<<I)*p),f.setUniform("positionFactor",1/(1<<I)*m),f.setUniform("stepwidth",(1<<I+1)-1),I===0?f.setTexture("lightTex",F):f.setTexture("lightTex",i.color[0]),G?(f.setUniform("useMomentVariance",1),f.setTexture("reprojectDataTex",G)):(f.setUniform("useMomentVariance",0),f.setTexture("reprojectDataTex",null)),o.bind(),e.clear(e.COLOR_BUFFER_BIT),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),f.useProgram(),t.draw(),o.unbind(),l();return i}function M(){f.dispose()}return{draw:S,setGBuffers:x,setColorFactor:L,setNormalFactor:v,setPositionFactor:g,setDemodulateAlbedo:A,getDenoiseFactors(){return{colorFactor:c,normalFactor:p,positionFactor:m}},setSize:s,dispose:M}}function Qa(e){const a=e.getParameter(e.MAX_RENDERBUFFER_SIZE);if(a<=8192)return 2e5;if(a===16384)return 4e5;if(a>=32768)return 6e5}function Oa(e){const a=21;let t=-1,i=1,o=!1,r,l,s,n,f=0,u=0,c,p=Qa(e);function m(){const S=c/i,M=a-S;p+=5e3*Math.sign(M)*Math.sqrt(Math.abs(M)),p=ne(p,8192,f*u)}function x(){const S=f/u;o?(r=Math.ceil(f/Math.sqrt(i)),l=Math.ceil(r/S),s=Math.ceil(f/r),n=Math.ceil(u/l),i=s*n):(r=Math.ceil(f/Math.round(f/Math.sqrt(p*S))),l=Math.ceil(r/S),s=Math.ceil(f/r),n=Math.ceil(u/l),i=s*n)}function L(S,M){f=S,u=M,v(),x()}function v(){t=-1,c=NaN}function g(S){t++,c+=S,t%i==0&&(c&&(m(),x()),c=0,t=0);const M=t===i-1,_=t%s,F=Math.floor(t/s)%n;return{x:_*r,y:F*l,tileWidth:r,tileHeight:l,isFirstTile:t===0,isLastTile:M}}function A(S){S?(o=!0,i=S):o=!1}return{nextTile:g,reset:v,setSize:L,setTileSlicesNumber:A}}var Ya="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAAAAADfkvJBAAAbsklEQVR4nA3UhQIIvBoA0E830810M91MN9PNdDPd/ulmupluppvpZrqZbqabe89DHCiDv5GzaossZGYBp2PFIFqKdmMXIKW85edCB/RT11SD3JMQidRlL7n2ufRH1jVkFUNVc3NaZ7DP0T7/112kM1Qc3RDG0K/4uN7CPC7OmtFRZK3Jy3fhSSySKIZXopTsnIhN69JjLHJYYnfpZu44hnV+UkhG/lPd/D+fIVwWtdhhupVPJmtsLFIhjHA7UUqY4fPIQ2qdKxviqH2sugJ2nC+1ZdV0vEF3RGNcMd4KdvIXaJnujdPrKj4ifkeX2f04avjEbqO0ogI/rD7zhmy6GKG/2w32IetIX5vE9DbrS+CNy4sbmgXoiaug48lV4bVKZgluwPujd+Ioa+KjuntypepEEvl/YYCYTq6w4aaReGMShwLkC4nvq7jFKJmLpoepHJTag/h2aMklShou+tyip5wm67P2/CnvH7K6zuq+KGvy2rkkrR4mc4dpUNTEFHDId9TXQiST3RxHO0lHNgNFIA/Ub1kC0pOlNBf77EtyZ0ejxvikzySL8C8hNWyyc1GvcBCusv/otvBO3YSj+KvvRlKgoNaF/GEB64prsx8qFRwVJcRmMk8l5E5swfHMPuhlr9DmtrLeqs7KOrCMQSpeGW/zH5F2dc0AXZhcp9IthLZyuxpHrkNnp0JfnsY+55XkAtgSOvsWzps8uoJ5GtpAXRWZ5TK9cEM1WVRWC81ZUstPZHHkC7GDjZfl7BJ+VcXkI8RfVIMW0Jq95oxE0R+MDQnMX97DPhYjEXzHM0LvUNyODhdDCvJdNmXlfFp0RsbBNclTj8hpXofsCgVYsAnwPRTNTiTLxZkQW43BmK6wHk7Y0iSdXIfyK8/aQULdx1/hJc0JkRE/UgNDc/dGZWanTCs2WQ0W6Xh7PZGuDMXEaLtIRMZcZAM4ieOwO661Qf4xVyhLOOA2mLe0JyvIDrBhUA42ioUiMmrHJ9te6jwtbQ6xWrKf/ED3qKJ0qvzO2of57KkcyMBvNZndbLTX/iWNaWTezm9E8cleKOSEXK1B3LDfeGk4yx/b7L5+uAvp6UVC/UYAhvPLvSwTWm+qqO5saYjh79LadBJaAR90ct9S/GGZ7Q1zhKyTOUJ9MzT85IldVjLLduUOqovEaASJbXeZ37oFv0w/sOGhvMzpVrL/2MeQx8+ldfQU/QBXIqn8NtHAHjCzaTJk+CDS0e6Wk8N7GEDgoR4rG5M/Zig/LD6hEr6VHmxzmijoKu/oZ+p84oEeiwegquE7pBZPYXEoyLeQ66wRicLXmOzWoib6mq6KUoWxuriq62OQh647TUmn0RuuIjtPfuEkcMQtwJ/IaJabRRe9fRX2Q8Z1L2UNlMclpfMFdKYr+XkVEeb6vChZuOBfhNl+l/hly9L0/mzYIxPhBq4oimlnB273mkgwnr+S7Vnp8Fff8/3VC7IJCtqZ9AxZRnujo3wjmQ9n7WtayxwgvUhUNtJ0UjlEU9vPFhePxDLfkl6z43hhdQSW+xbyKooJEEwqTOkL1VHWc1vReFaVxbcnTGM2Uq1XNXRPos0bdtI8VBKXcZdCV1dNpLcL3DE7Cqfmi2w5JGhGFqATTUhzy7sG2+a0II4ZtupikC488mt9abdTvpYXVALXBU6wNzYLXUTPQwTxH/nNttjKDA7pQT47mopOQmxzW/f3GVhXWoguEUl5EHcUoKm8LdpiMoZV9JONpzZa7wa7hG4XzxvquHj2s5lsIrFbtrbew3+SKbiK6Ry+whAyXrTBC0kgDfwZHNOMNRnwOjHVVICdOGVo6LuFsn6GTKN6u4IeZqtN7B6vzlegD7ioW8i/u430kbtO2pABrgTPwb+xchSZ7jK/V6KxPEWK+K+oBXFmeuikt+HzrIU66KQsI9bRaGqQfKqSkMNumbnN4/ljkFsPxqnDElSF32L17D8UhxbUI8xnuwk/0znwXXcGGmD4QpPo5n6kTod70Zb2oI8Y6pFJKiuLoab7bXBEj+CXFTOH4A4kV/1JNjNRLrexaEX5Ht0xQ1RRskzmhCd+rmnFi9hLeqHe7svy7Lq+/+Mq6am+A/X8e+iptvqcbIjzqCOfbW6SpKQ22gPt8HgTFUMPd9kWgKd2O45Pr0EuOlK8waXFfriga7sXrLlKZZbrgeaPnmsrurd+n2H8hugjc+i1OCpJj2vYPyQ27+lT6/f4JM0c6sJIHwm/8AJS4tXuuo6g9qOCjvOZIrI9ZpaaauQAjwb9eTG0RMYPr2y5AHv8YhZLHvZl+DdQqrI5Z1L4QawT/FOLoQCOLR+EyTIrjcqb6YtiA4mg0/L27reYYg7JpvSVOM7G+p2uIb1iJ0hE+/DvvLW+qqfL034nLU5GQh02j8aHi/aDLS2b4ncYk/OcE+V+hhNqmF2rs1j4a1qziXYgaaDWQRetSbOwC60J8VhFSIf62k2osy7FXqpdrDAdZbuQxf5ZOCGLy6Reago9xBydmN9HBdUqX9VtUYdIKZOGbGAFxEDXjLxDmeVXsd5WIOmlhN0kqe2r84o1upy+z9KLRjY/ui5qGkhNiqoL5iXN6hPbeyGa+ckKwRM6l51Ao+EG/yKruXNsrWvHkuDPKKctS4bYRnq7eIQX+at4s8lD2ovy+D/xlXUWuf2jsNiNQx9xDRwjLAgJUSd5AvfTD80U0Qk91fP8DTkBfaXx1Qhv7FMXifZRMw0MlxtxVFVNzoOTrnjoK9ObCZy5HOwjbWgTib1kFo3BJa9t7oojdJK5RpGcifO66LQ2xuIHBvxcnMcLdEoUWc0QjVhs0k3f4dnoXvREODRB5KWJ2UFTX60WcXERxFQ7uo9mDz1YVbzQddDBHQ3QxD0MPfBnsdX+p9+xg+Sybmtum4hKoJW+CG0NGSQxP/TC0AulZ1tozfATr9Ld/QfURp1kg2FqaOQ2QBZ9JNyCoeQfO0eS+SOCa0lLshW6hnulWqHi/qrMTj6Z03gzB/LMzuaXmZXJSUm7nSKACjQDVzafbiNTqUayYpjDNpqhqIzf4SfRU/KF6S+vo0MhAS/v36BoolU4JbKQO3S3nmAL88puH0GoN6tF3vg2rCzscLVcUbmKzHS/dFroBdGk8bP4Hx8DRotKtJdMa4YZKhvR2OgbnULv+lzYUfjhFusD6KaLR8aHFSSPjYmT2MP6tU1L76u4uqJYrqawEqqpW+Onm4G6KIw2CU0Z29/EIc9gKVwjH3wxNV5v8fmxVunIGB94PxYBV+I3RRM4IO8x7Ab6ZXi3aoEeoUXmtzqHVrGCsrUYpOvIFXSMgX4YQp1Qmp6xf/Ae8gR1U19NUzEdSOjApK9nPuoItqt5HE7TXPIm3sff2fm+SbioN9GcPLltyTLKeeGBjGr668sYsfuymdjM8uHjYqL5BLn4SFqRdjbnZJKgyFHIA51lEjEebtEMfqN7LlORlgreiM3B26G2g82iqssbZBQq6k+rGn5J+MMvsVRus95vMpFR9K9K4errLmJFSMO/iepoBu6CfptR4QzqxpOYH6ERP4xmqS4uKzz3V2RS0SnMNwnYKvdW5Bd16FdS0kWlDeQ2VIMEJtgeVJ7GZIdDYQldWQ6UVK2mM1l000/MRyn5GpGZDkRbQ1RUCs/HLcMDV4hV1/OkEZFpRX+f5zfSHGQR7W2obdeiMnK3qQarTK7wEiq5vTqWXayqhyF4By5l6+HDPKK4AZtVRnoHjVBv8Syd1VocyY2UP9g8c15PpXBNVIET8MnVd8/oNlaGcnZJBZoQ7uAe4SjJAWNdX3AkNrQTQ+ClmMxO23i4nXseStC+4agkPDYeChdcOzLRJ2f/2S+ukJqsW/tvKoN4bP5/sOpHxuN5qC3p5VbaizIefWBKkKWkCc+DO5paPAHAP7wQj+VFRVp/zhPy3Ufw+8I4VsE1QVPtS1ZLf6eJ5Qr3Se3GxfURld71EhvEHJXVbLdJzUL/2nk6nX1mGcxdXUpvIg2gt7rADrkoYq0ogKbYXyK1pOwljuEO0rykAh5k2pMp6hR7rVO7h3IY2Y6gOYpsBqhWfp/sQcbbZa6m7uge0dx8pUgjd9GY5CyUldNEXX3L5JRLaHP2G5UhDtfnn8Qk3sak8Y1dUR5BatyTnyTR2PWwnCVCZe09NdwLG8tpvl3nJCd8dfzPNFMp1Wb4YuuihKIPWkP2k5I0o4OVJB96wDby2Oy2TAwv9VAxh8dFJ9EvU1S390Pdekx8d0jrxgik35GaLDoeZR7ZhH4IqyzO+/WiNzkkGNrOm8MvN4dmom9kbtuCzgy14K097SrhJuoeDEMJ7CI5Tjwn+3AmfjkUQpXUTR+DzdDPKVRgh23w1c0MUoI1EYchky6st4hefmS4bhZhr5vJ9/QYfUpbywukv9iib4S8msMqOE6iqH86px6L3oubJike6fJBB1ODDTZb6V+fAvapLL6DTGQ+2hm2k1svL8litoeKxZaRIXq2/U3HsDb6ghQBJqP4OB29iP4Lv/FaVZlctV9QM5tC1UGRbCWRBSfQs/UOFAGtlhX8VJJMLTD7VQY6HRU23ehdXAYlJHN5FlkRvXQHdDzx2I8Lx1A3sxTd8MXdOjVKH4BCOp2pIx6zrHwar6qO6uYB3FaXXdYNycNXCUNlY9TFLwq5SFuemg60UdhieVa8hml4v/2sHOsDNV1JGM5zmx/U2qKhk/lq+7jXaCuuYxaTPba1OuMHhY16GiuJVonzKBUtjEDVtwPxJP+cXUaRfD/1w5zS0Ulr9DXcQPnIK39Xdgkn+WJahGzGkI1cda/xFhfNn6KP1R7c2Y4JZSBnWK26kkJhs51E/tGk8m5oInvSjOI5risjuorqlI8X0oZh+JmKQeuhn7KLjKmvmd6iCVnIKtMH5KOM6zGu5nP5hmixMLo8Ge0P6jWyD0ukR7F0lqIPEMc/gv0OIsqZvCSug8eZ964gnYXr+LsqPmojHrG0apiIzg6TtkyHc7BHIDzTXuL/yQ38Dhsnm5OPfCorYK/LFTKPOU4xr+m/6WzydVCmPWwM5+UuN9e1Ce/8TRbfdJVzbCrWQJTUO+R8V5Ouh6m6T2jpqllYDfew5Ylcb1teraRxUFb8xxp6zFWH+eqtbIhzomc+DRunqvv3doVoKfOEJGoRKilzmAt4B69k+0FyN0m2ED5ss6NkNLTbn1LDAmHU/QDBj5oU8j9cxLxi2dUd+z5E8RfNT9NUHvApzRU/Bv1R0MEPlER9Nzuhpb/lhmsLxUJfP8EkYWdUCbyW3QzlbTco4AfhKEDNUfeY7pLt8U/a063mUaGD+4wtofwtmo0L2WWqlSxHErH0aDltYsbwqHqNq2CnuJ3qdKjJh/hlYYrsKLKwwTy2eOnzyrIMB1A0rmhiNc3Iz9tkvJt44ZqhJQ70F+jhW8CIgNQuO49/Q8bcJ5NxWlaVj6Yx/VVIZWeY2uK+zuw3hSEhIu2hE5NLfiC9p//I7vq6i6+fioJwF2Uyf2lzHoGt521FPlUJrH+AioQzvJtcJnaGEwHewSXxGFExyX7y81hVsQGng6shr9lG74TM5KdX/LyLIevpKyin6sz/Qj/0MjTQh2g594Yct6NVPL5QNUC3QlX/RR3hOXE9th5Nhf2hBswWfdVZVJsvMQNoGnOVfvNx6Qudgo9Ra/hMVJV8wdF1XQwFSYqwzgxjkVQ9kS+cZjHEhzAK6qMKYlZIjg+ZGqIvykCWBy4T0dlkBykCq33WsIAOAoJaQjH/V5w1uekes5plQOPRfBuTFmGvWRueVX9VW2V7GcccoE90CTSW7cXzaU+9hdflUeUTkk001/PDCAnbTRXb2h4jPeCZ2O0Gh1JuOu2M97PnZjBd6QrJDuqBL60+kuH4BK+Fo8uzLjmaoO4Z4DvsCpZM9DJtlWKvUEnVmTVVj/SOUFmOxBHCZV7CJJETIKA8rIuZKavxzKaxvQSlxD/exg9g130ifoH20pBJPKAz2F+bwyVUq2Qrd98mshdVNhVTtjJXSFx4wzegSfhAKECfcY1u4Wamu3pPqogO+Fu4bifDU1MZRfepxAh8EeLYn0i4Ey6NWwYD4Yhp6hfK8uiGimFPubcsYXiI/nO58QmN5V4+zm1kpdl3AtoeFLF0MT0Wbqk5KJ37rmqFTWYR+4vLsGN4BM3uGoYUJgLv5irINGiw+upKhA3qOIxkiQjVGfR+uo7dRAv4B1WLbqApcD472903Hz2T6/0jmR6G0xWmEWz2g3U7uYZF1FNgKX7PK5p85lXoGMBAMzzA17Kb+EnZmFfk/eghNI4W9r1pGjGZ14YvbIHcHQbYy/Cbb0FTcW61x83ySGRGjc0SOC/qqKE+p28MfV0hfJhNV0P4VdGQdICcYrKPz/Lb306IfSKl+66z83LiKPokGeuq4pI5oqFMzY6FSQC50RXxgifnnckXEUfkZS9kFNJCn0b38Q4aWXRRt2Rl/pLMkll4fdwuPNaRXW11xT1lBdE2KfBblwAdDz/dNhIJtSZZzFtdWq+BqHZPKB8ukbZwCkf0Ne19X1hMFAvsLZIWFyPGnTe36TC9Ej8U5Tkk8J/0Ai9JpnCJ7iLz+VWzFqqEdyaXGqSWk8I4vYovWonifKW2Iok7p8boFaozGsinis86MpknWoeJoazD4OW5UEXvcxNoUvdDdDdP5Ag7V2xypbHy/eGcjY56yF2qGQwUz1xSaE2jit++h9mpYZpqYwuYyrAGT+QlXDsjVSrUXcwiiaCxfsYOm2lmszyrh4tY/LbrY9+GQqK8+SdSyYO2qsmqbvEi+old7nrCaL1Ed7Gx8B05gJ82C1FGFds3FM9tDvUJa9E4vNJVZTLzy89i2dg4sLQmFMGZ8TkH61lUf4Q94D1xRPTYMZst/IK9vjhskJdJeTdKfXNMdOfvVR5eDS3STUlGczIYHEvdhxZ2LR1ud/NYpqYIMqEs7P6yTbIpz8eru61QjH4mg1AybF17mgESqAN4PRnl8uvTsBpT9SlsJ4tgBKtjIZXua36TRmirSIo+iqX8FIol7pKx5CNEox1EdpGC3WWR5C4/Qf+wm3Rc9Z+fhdraPGi8KsWdT0Y7idMylzVwldSXGf1MeGZSiFGe+1tin67kr6ixag26TYYaSi771i5ueEjr+U4+neqPY6H37KaEFzBGFqfpuZIXUEsyIJST01xd2walDwvtGd0Xr7al/ALSXKbRNHSh1/xe9cHVDs+1hv7ul6xPX5ppZAjlZm446vuIsuiiW+rf8Yhmil+Bc0N3Ej3UxAXcTzWdZxEhaN3HRJaX5VMyyR3jLXxZDTnkbrsM3cA1eD52UGL2imx3xA7FB2wN+c9Opo3UG3rZDeIn9Wz2kCfTRVwEesH2oCn0MRHFzZWZcHm4y8GmVp/4BBzd7pXZbBd+3Kehjfw/N0duh2e4hTmuouCuvjrbo4uZaX5DqOyT+PxsJXTBMIOfstFd2/BF/8fnyximG1rFk/Bb6AWOywqHHSYhPhjy0zjuOWSndcUAMwVVtGtDZrFT1FCF+Bboxaz+wYujXVBNPSRt3TBel3xHhVk/9xASyFLqjEhr+/FFxMh7YiKktkftn5CDNDW7xTd7kcU1MJRWMm9Vb55YbVIl5D36BxqFk6osFmqjl8GTjLp7qCnHWMPa24NoufkdWuo7+j/zxUx0N+hbaBqQW6VGia52kcsnkb1p1/I5vgo26CIertrZgMfT8jqxrkeJfAMtwmAWX95Uo/g814vXll5BStHMzzG50EN8RE4g1WgWNNwtUpG10jl8S1zZvvfT7Urzi5eCKOEtweoMJWKejoFKoTY0TliqpCCU+WsqI7ywhpzipVFyeKKikfE+o63t11qguWAP/Wau6OEQE52l5dkq3BGeqwimFMnktyn4J4uoS3aNakAj8XbqStjpC/nXpL354q/zo3SxATjjuEtpr7H5uiodjVHoivbLhvoxnCDdMdZn/RMz0x/k0UIz3lv/EdN0K3pYdrO72VeeH24La2aqJ7wjWeFLhjlus/jC89FaKC05oN6biWqpgGjYshGQTpdTP8ggEQ9mkuTmgqglsFkrE4UBUNreIbnEMHcE9xRN8P2wlZTjr0xKv1HOEvn531ApJFLt1WdXRk/UKSyjmdxIkke903Ftc7EEC1PVDiaNfToRT/c2j0km6I6mKqcW44GqobuOOyp4goU26hWewpfxE/QZaoo2+L50vx5N8rmG/IefiDeJeuqDiAUFwjqeWX3VU11fdoFn04N9PVhNJoSdZoDMztbZ42YhfaMvueW4Irkmp+sS+hlJLmL5y6aI2KYvhGr6kG1kopid1vuiNlY4aXO5KhJmmTo8AWmF8/qUugcq5rLxb7gCiunu2jnQhZ2C2CGD6gw71CMzw13kQ0xEVogsZdVtHHjLD4j7LiIvxpxswLwYRguoCG6H7isSi/qwwQ0Rp8U4/IeuNq/oSDsDfto8dJx9ExJJyVqwX3S9Hi2TazjLCsNtu1984NXMdnbPLbaTdCv1Xpf02+UTqMZe8QWquBlDKoeEtp3e6+qTa7gV+SnG+VIhOeWop/0g56o0EFf+QC1wOdwRPyJH1U/AvgPJYffZMqEtzo4jhfoiKdOyrT7uqqA1NIvricqK3ei1gBW8DwE5zM8Jl3CCUC8MRpH0EbscEoihOptLBntDP+/CH5RWLkfvQhn1TCahR/w201XcYEvUGZbJbnajXRWyh/Xgt/TqkIBOcEXkPBsZHtiaaKlMbWbDSdGf7ab3aSl51fe3qf3nMM3e9vF5W5/BwQT/21ZQ611W2YGPtb8hHbuuiBP+nG6Op6HVqJUlEMUexs1YH5qbTBILRCY2nORVUeh0V1X/hwrwJuy5u2KWupx0Bj1NXtBsuKkezra58+Ez9NGN1R3x0VRindg7mRGZMA8XNOd4jXCIL+IfXYMAN3RSbVUT+oTFdmfMOl1R72SvPQtpwl95zZUxn+g9MtnVMOvDbXVcRnOd+Hr6iDcWH0g6/xRvD99FYtwJR/YlbD05AmFUneyl71x3W17k8xNRMrnJR1djaUGxlsThY6ARjgBPUSc7kkeH/GQIKilgG+8KRCv8mVLcW+Z300I7NBzNJ0XZZhSR1OPSLmHdMOJF8Wf5HzD9K5zFFXG/sFIewu1RPFSOrULH1JTwUR1UMdUvNQAv5jHwTb3KxuWt8StXkuz3mfklNIcc0z3DPyhn9opkrClsVI/xqRBbwytYQq7gQTYNXi4bmGPyjk+CYuiHfj8fp3vDMZ+QZSRvzW6Yq7OilGQHFMfx3GyZXBa2DMa7S2YeuWeHyMy6p3lo29LNtDR3rq5Ljf+RI2guPkcHy9rkF2mJEvvqNI+4jRUs50FfgWy+u5uDaynIAq15dF4tPIB9KIp8L7PDUv1NVoWWJht6iQrIdfgcLu05vsbHBkGc5mECeyC2spv8F4rG++C80ICkoNXwOlIwXEOJzSyX23UIU0h/mklVoY9lfNdVL/E36VD20u4QbVxm6GeKyfGkEvrFUqPR/H9s/XjiBWp1EAAAAABJRU5ErkJggg==";function Ha(e){const a=e.getParameter(e.MAX_RENDERBUFFER_SIZE);if(a<=8192)return 8e4;if(a===16384)return 15e4;if(a>=32768)return 4e5}function ka(e){const a=20;let t,i,o,r,l=new Se(1,1),s=Ha(e);function n(){const c=t/i;o=Math.round(ne(Math.sqrt(s*c),1,t)),r=Math.round(ne(o/c,1,i)),l.set(o/t,r/i)}function f(c,p){t=c,i=p,n()}function u(c){if(!c)return;const p=600,m=a-c;s+=p*m,s=ne(s,8192,t*i),n()}return{adjustSize:u,setSize:f,scale:l,get width(){return o},get height(){return r}}}async function Wa({gl:e,optionalExtensions:a,scene:t,camera:i,toneMapping:o,bounces:r,envMapIntensity:l,enviromentVisible:s,movingDownsampling:n,enableDenoise:f,enableTemporalDenoise:u,enableSpatialDenoise:c,useWorker:p,loadingCallback:m}){const x=20,L=4,v=6,g=new zt,A=ka(e),S=Oa(e),M=oe(t,i),_=We(e,M),F=Oe(e,M),G=Zt(e);let I=!1,U=0,j,fe,te=!0,ae=()=>{};const N=await Ba(e,{bounces:r,decomposedScene:M,fullscreenQuad:G,materialBuffer:_,uvTransformBuffer:F,optionalExtensions:a,scene:t,envMapIntensity:l,enviromentVisible:s,useWorker:p,loadingCallback:m}),Z=Ea(e,{materialBuffer:_,uvTransformBuffer:F,decomposedScene:M}),h=kt(e,{fullscreenQuad:G,toneMapping:o}),P=Xa(e,{fullscreenQuad:G}),b=za(e,{fullscreenQuad:G,maxReprojectedSamples:x}),R=Va(e,{fullscreenQuad:G,toneMapping:o}),B=new Image;B.src=Ya,B.onload=()=>{N.setNoise(B),I=!0};let E,C,y,O,X,H;function $e(d,T){y=(()=>pe(e,{color:{0:z(e,{width:d,height:T,storage:"float",magFilter:e.LINEAR,minFilter:e.LINEAR})}}))(),O=y.color[0];const Y=()=>pe(e,{color:{0:z(e,{width:d,height:T,storage:"float",magFilter:e.LINEAR,minFilter:e.LINEAR}),1:z(e,{width:d,height:T,storage:"float",channels:4,magFilter:e.LINEAR,minFilter:e.LINEAR})}});X=Y(),H=Y();const q=z(e,{width:d,height:T,storage:"halfFloat"}),Ae=z(e,{width:d,height:T,storage:"float"}),ce=qt(e,d,T),Re=()=>pe(e,{color:{0:z(e,{width:d,height:T,storage:"float"}),1:q,2:Ae},depth:ce});E=Re(),C=Re()}function Ie(){let d=X;X=H,H=d}function ge(){let d=E;E=C,C=d}function et(d){S.setTileSlicesNumber(d)}function tt(){const d=oe(t,i),T=We(e,d),w=Oe(e,d);N.updateMeshMaterial(T,w),Z.updateMeshMaterial(T,w)}function at(){const d=oe(t,i);N.updateMeshTransform(d)}function it(d){N.updateBounces(d)}function nt(){const d=oe(t,i);N.updateEnvLight(d)}function ot(){const d=oe(t,i);N.updateMeshLight(d)}function rt(d){N.setEnvMapIntensity(d)}function st(d){N.setEnviromentVisible(d)}function lt(d){h.setToneMapping(d)}function ft(d){n=d}function ut(d){f=d}function dt(d){u=d,ue()}function ct(d){b.setDenoiseColorBlendFactor(d)}function pt(d){b.setDenoiseMomentBlendFactor(d)}function mt(d){c=d,ue()}function Lt(d){R.setColorFactor(d)}function xt(d){R.setNormalFactor(d)}function vt(d){R.setPositionFactor(d)}ue(!1);function ue(d=!0){const T=Number(d&&u&&c);b.setDemodulateAlbedo(T),R.setDemodulateAlbedo(T)}function _t(){return Object.assign(R.getDenoiseFactors(),b.getDenoiseFactors())}let k=0,W=0;function At(d,T){k=d,W=T,S.setSize(d,T),A.setSize(d,T),$e(d,T),R.setSize(d,T),h.setSize(d,T),P.setSize(d,T),te=!0}function xe(d,T){N.setCamera(d),Z.setCamera(d),b.setPreviousCamera(T),T.copy(d)}function ve(d,T,w=!0){N.setSize(d,T),N.setFrameCount(U);const Y=w?(Math.random()-.5)/d:0,q=w?(Math.random()-.5)/T:0;f||N.setJitter(Y,q),U===0?N.setStrataCount(1):U===L?N.setStrataCount(v):N.nextSeed()}function ht(d){fe=d-j,j=d}function Ge(d,T){return Wt(d.matrixWorld.elements,T.matrixWorld.elements)&&d.aspect===T.aspect&&d.fov===T.fov}function J(d){d.bind(),e.clear(e.COLOR_BUFFER_BIT),d.unbind()}function Pe(d,T,w){d.bind(),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND),e.viewport(0,0,T,w),N.draw(),e.disable(e.BLEND),d.unbind()}function St(d,T,w){d.bind(),e.viewport(0,0,T,w),N.draw(),d.unbind()}function de(d,T){e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),h.draw({light:d,lightScale:T}),O=d}function _e(d){let T=h.draw({light:d},!0);P.draw({light:T.color[0]})}function Ne(){E.bind(),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,k,W),Z.draw(),E.unbind(),R.setGBuffers({position:E.color[0],normal:E.color[1],color:E.color[2]})}function Tt(d,T,w,Y,q){e.scissor(T,w,Y,q),e.enable(e.SCISSOR_TEST),Pe(d,k,W),e.disable(e.SCISSOR_TEST)}function Mt(){U=0,S.reset(),J(y),J(X),J(H)}function ye(){if(u&&(X.bind(),e.viewport(0,0,k,W),b.draw({light:y.color[0],position:E.color[0],color:E.color[2],previousLight:O,previousPosition:C.color[0],previousColor:C.color[2],previousMomentLengthVariance:H.color[1]}),X.unbind(),c||(_e(X.color[0]),O=X.color[0])),c)if(u){const d=R.draw({light:X.color[0],reprojectData:H.color[1]});_e(d.color[0]),O=X.color[0]}else{const d=R.draw({light:y.color[0],reprojectData:null});_e(d.color[0]),O=y.color[0]}}function Ft(d=!1){const{x:T,y:w,tileWidth:Y,tileHeight:q,isFirstTile:Ae,isLastTile:ce}=S.nextTile(fe);Ae&&(U===0&&(J(y),b.setPreviousCamera(g)),ve(k,W,!0),f&&(u||c)&&Ne(),N.bindTextures()),Tt(y,T,w,Y,q),d&&!ce&&de(y.color[0]),ce&&(f&&(u||c)?(O=y.color[0],ye(),O=y.color[0]):de(y.color[0]),Ie(),ge(),U++,ae())}function Be(){ve(A.width,A.height,!1),N.bindTextures(),St(y,A.width,A.height),de(y.color[0],A.scale),J(y)}function It(d){!I||(Ge(d,g)?Ft():(xe(d,g),te?te=!1:Be(),U=0,S.reset()))}function gt(d){if(!!I){if(ge(),Ie(),Ge(d,g))U++;else{if(n){xe(d,g),U=0,Be();return}U=0,J(y)}xe(d,g),ve(k,W,!0),f&&(u||c)&&Ne(),N.bindTextures(),Pe(y,k,W),f&&(u||c)?ye():de(y.color[0]),ae()}}function Gt(){N.dispose(),Z.dispose(),h.dispose(),P.dispose(),b.dispose(),R.dispose(),E.dispose(),C.dispose(),y.dispose(),X.dispose(),H.dispose(),_.dispose(),F.dispose()}return{draw:It,fullDraw:gt,setSize:At,time:ht,reset:Mt,getTotalSamplesRendered(){return U},setfullSampleCallbackCallBack(d){ae=d},setTileSlicesNumber:et,updateBounces:it,updateEnvLight:nt,updateMeshLight:ot,setEnvMapIntensity:rt,setEnviromentVisible:st,setToneMapping:lt,setMovingDownsampling:ft,setDenoiseStatus:ut,setTemporalDenoiseStatus:dt,setDenoiseColorBlendFactor:ct,setDenoiseMomentBlendFactor:pt,setSpatialDenoiseStatus:mt,setDenoiseColorFactor:Lt,setDenoiseNormalFactor:xt,setDenoisePositionFactor:vt,getDenoiseFactors:_t,setDemodulateAlbedo:ue,updateMeshTransform:at,updateMeshMaterial:tt,dispose:Gt}}class Ja{constructor(a={}){this.canvas=a.canvas||document.createElement("canvas"),this.gl=a.context||this.canvas.getContext("webgl2",{alpha:a.canvasAlpha||!1,depth:!0,stencil:!1,antialias:a.antialias||!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),Me(this.gl,Qe),this.optionalExtensions=Me(this.gl,Kt),this._bounces=2,this._envMapIntensity=1,this._toneMapping=Ct,this._movingDownsampling=!1,this._enableDenoise=!1,this._enableTemporalDenoise=!0,this._enableSpatialDenoise=!0,this._fullSampleCallback=null,this._enviromentVisible=!0,this.useTileRender=!1,this.renderWhenOffFocus=!0,this.useWorker=a.useWorker||!0,this.tileSlicesNum=0,this.loadingCallback=a.loadingCallback||{onProgress:t=>console.log(t),onComplete:t=>console.log(t)},this._isBuilding=!0,this.needsUpdate=!1,this.size=new Se(this.canvas.width,this.canvas.height),this.pixelRatio=1,this.pipeline=null,this.currentTime=NaN,this.isValidTime=1,this.lastFocus=!1,this.domElement=this.canvas}static isSupported(){const a=document.createElement("canvas").getContext("webgl2",{failIfMajorPerformanceCaveat:!0});if(!a)return!1;const t=Me(a,Qe);for(let i in t)if(!t[i])return!1;return!0}async buildScene(a,t){const{gl:i,optionalExtensions:o,bounces:r,size:l,toneMapping:s,envMapIntensity:n,enviromentVisible:f,movingDownsampling:u,enableDenoise:c,enableTemporalDenoise:p,enableSpatialDenoise:m,useWorker:x,tileSlicesNum:L,loadingCallback:v}=this;this._isBuilding=!0,a.updateMatrixWorld(),this.pipeline=await Wa({gl:i,optionalExtensions:o,scene:a,camera:t,toneMapping:s,bounces:r,envMapIntensity:n,enviromentVisible:f,movingDownsampling:u,enableDenoise:c,enableTemporalDenoise:p,enableSpatialDenoise:m,useWorker:x,loadingCallback:v}),this.setSize(l.width,l.height),L&&this.setTileSlicesNumber(L),this._isBuilding=!1,v&&v.onComplete&&typeof v.onComplete=="function"&&v.onComplete("Complete!")}set bounces(a){this._bounces=a,this.pipeline&&this.pipeline.updateBounces(a)}get bounces(){return this._bounces}set envMapIntensity(a){a=Number(a),this._envMapIntensity=a,this.pipeline&&this.pipeline.setEnvMapIntensity(a)}get envMapIntensity(){return this._envMapIntensity}set toneMapping(a){this._toneMapping=a,this.pipeline&&this.pipeline.setToneMapping(a)}get toneMapping(){return this._toneMapping}set enviromentVisible(a){this._enviromentVisible=a,this.pipeline&&this.pipeline.setEnviromentVisible(a)}get enviromentVisible(){return this._enviromentVisible}set movingDownsampling(a){a=!!a,this._movingDownsampling=a,this.pipeline&&this.pipeline.setMovingDownsampling(a)}get movingDownsampling(){return this._movingDownsampling}set enableDenoise(a){a=!!a,this._enableDenoise=a,this.pipeline&&this.pipeline.setDenoiseStatus(a)}get enableDenoise(){return this._enableDenoise}set enableTemporalDenoise(a){a=!!a,this._enableTemporalDenoise=a,this.pipeline&&this.pipeline.setTemporalDenoiseStatus(a)}get enableTemporalDenoise(){return this._enableTemporalDenoise}set enableSpatialDenoise(a){a=!!a,this._enableSpatialDenoise=a,this.pipeline&&this.pipeline.setSpatialDenoiseStatus(a)}get enableSpatialDenoise(){return this._enableSpatialDenoise}set fullSampleCallback(a){a&&typeof a=="function"&&(this._fullSampleCallback=a,this.pipeline&&this.pipeline.setfullSampleCallbackCallBack(a))}get fullSampleCallback(){return this._fullSampleCallback}setTileSlicesNumber(a){a=Number(a),this.pipeline&&this.pipeline.setTileSlicesNumber(a)}getContext(){return this.gl}updateMeshMaterial(){this.pipeline&&this.pipeline.updateMeshMaterial()}updateMeshTransform(){this.pipeline&&this.pipeline.updateMeshTransform()}updateEnvLight(){this.pipeline&&this.pipeline.updateEnvLight()}updateMeshLight(){this.pipeline&&this.pipeline.updateMeshLight()}setDenoiseColorBlendFactor(a){this.pipeline&&this.pipeline.setDenoiseColorBlendFactor(a)}setDenoiseMomentBlendFactor(a){this.pipeline&&this.pipeline.setDenoiseMomentBlendFactor(a)}setDenoiseColorFactor(a){this.pipeline&&this.pipeline.setDenoiseColorFactor(a)}setDenoiseNormalFactor(a){this.pipeline&&this.pipeline.setDenoiseNormalFactor(a)}setDenoisePositionFactor(a){this.pipeline&&this.pipeline.setDenoisePositionFactor(a)}setDemodulateAlbedo(a){this.pipeline&&this.pipeline.setDemodulateAlbedo(a),this.needsUpdate=!0}getDenoiseFactors(){if(this.pipeline)return this.pipeline.getDenoiseFactors()}setSize(a,t,i=!0){const{size:o,canvas:r,pipeline:l,pixelRatio:s}=this;o.set(a,t),r.width=o.width*s,r.height=o.height*s,i&&(r.style.width=`${o.width}px`,r.style.height=`${o.height}px`),this.pipeline&&l.setSize(o.width*s,o.height*s)}getSize(a){const{size:t}=this;return a||(a=new Se),a.copy(t)}setPixelRatio(a){const{size:t}=this;!a||(this.pixelRatio=a,this.setSize(t.width,t.height,!1))}getPixelRatio(){return this.pixelRatio}getTotalSamples(){if(this.pipeline)return this.pipeline.getTotalSamplesRendered()}restartTimer(){this.isValidTime=NaN}render(a,t){if(!this._isBuilding){if(!this.pipeline){console.error("Pipeline not initialized, The scene needs to be built first!");return}if(this.needsUpdate&&(this.needsUpdate=!1,this.pipeline.reset()),!this.renderWhenOffFocus){const i=document.hasFocus();if(i)i&&!this.lastFocus&&(this.lastFocus=i,this.restartTimer());else{this.lastFocus=i;return}}this.currentTime=performance.now(),this.pipeline.time(this.isValidTime*this.currentTime),this.isValidTime=1,this.currentTime=NaN,t.updateMatrixWorld(),this.useTileRender?this.pipeline.draw(t):this.pipeline.fullDraw(t)}}dispose(){this.pipeline&&this.pipeline.dispose(),this.pipeline=null}}export{Ja as L};
