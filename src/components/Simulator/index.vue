<template>
  <div class="scene" ref="scene">
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      geometry: null,
      material: null,
      mesh: null,
    };
  },
  methods: {
    init() {
      const el=this.$refs.scene;
      this.camera = new THREE.PerspectiveCamera(
        70,
        el.clientWidth / el.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      this.scene = new THREE.Scene();

      this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      this.material = new THREE.MeshNormalMaterial();

      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.mesh);

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(el.clientWidth , el.clientHeight);
      el.appendChild(this.renderer.domElement);
      this.animate()
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;

      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted(){
    this.init();
  }
};
</script>

<style scoped>
.scene{
  width: 100%;
  height: 100%;
}
</style>