import{l as h,O as C,m as w,R as M,b as E,u as L,e as S,g as b}from"./utils.fee463e2.js";import{A as P,S as v,P as D,F as T,C as F}from"./vendor.b603f603.js";import{C as y,W as I}from"./lglTracer.es.v1.0.8.c7ce8123.js";const z=[],A=S.Konzerthaus,R=b.DragonDraco,e=new y;e.bounces=5;e.renderWhenOffFocus=!0;e.toneMapping=P;e.envMapIntensity=2;e.enableDenoise=!1;e.enableTemporalDenoise=!1;e.useTileRender=!0;e.movingDownsampling=!0;document.body.appendChild(e.domElement);const i=new v;h(z,i);const a=new D(45,window.innerWidth/window.innerHeight,.001,1e3),l=new C(a,e.domElement);l.screenSpacePanning=!0;const o=document.querySelector("#container");function j(n){n?o.classList.contains("isLoading")||o.classList.add("isLoading"):o.classList.contains("isLoading")&&o.classList.remove("isLoading")}const c=!0,{initStats:x,initGUI:G,initCameraDebugInfo:W}=w();e.loadingCallback={onProgress:n=>{console.log(n)},onComplete:n=>{console.log(n),j(!1),k(),G(c,e)}};const d=x(c),m=W(c);let g=null,s=null;function k(){e.setDenoiseColorFactor(.5),e.setDenoisePositionFactor(.06)}function O(n){n.traverse(t=>{t.isMesh&&t.material&&t.material.isMeshStandardMaterial&&(t.material=new I().fromStandardMaterial(t.material),t.material.transmission=1,t.material.roughness=.316,t.material.extinction=new F(15114316))})}async function q(){const n=new M().setDataType(T),t=await new Promise(p=>{n.load(A,p)});i.environment=t;const r=(await E(R)).scene;O(r),r.rotation.y=Math.PI/1.5,i.add(r),L(a,l,i),a.position.z-=5,e.buildScene(i,a).then(()=>{u()})}function f(){if(e.domElement.parentElement){const n=e.domElement.parentElement.clientWidth,t=e.domElement.parentElement.clientHeight;e.setSize(n,t),a.aspect=n/t,a.updateProjectionMatrix()}}window.addEventListener("resize",f);f();function u(n){l.update(),d.begin(),e.render(i,a),d.end(),m&&m.dataBegin&&(s=e.getTotalSamples(),g!=s&&(m.innerText=`Samples: ${s}`,g=s)),requestAnimationFrame(u)}q();
