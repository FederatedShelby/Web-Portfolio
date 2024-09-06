<template>
  <div ref="threeContainer" class="three-container">
    <!-- foreground image -->
    <img src="forest.jpg" class="foreground" />
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  data() {
    return {
      // Three.js base components for rendering
      scene: null,
      camera: null,
      renderer: null,
      // Three.js class used for blinking effect
      clock: null,
      // Data variables for fireflies
      fireflyCount: 200,
      fireflyPositions: null,
      fireflyVelocities: null,
      fireflies: null,
    };
  },
  mounted() {
    this.initThreeJS();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer) this.renderer.dispose();
  },
  methods: {
    vertexShader() {
      return `
        attribute float phase;
        varying float vPhase;

        void main() {
          vPhase = phase;
          vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `;
    },
    fragmentShader() {
      return `
        uniform float time;
        uniform vec3 color;
        varying float vPhase;

        void main() {
          float blink = abs(sin(time + vPhase));
          gl_FragColor = vec4(color, blink);
        }
      `;
    },
    initThreeJS() {
      // Define DOM element container to render on
      const container = this.$refs.threeContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Set up scene, camera, renderer
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
      this.camera.position.z = 300;
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(width, height);
      this.renderer.setClearColor(0x000000, 0); // Transparent background

      // Append renderer to DOM element by ref
      container.appendChild(this.renderer.domElement);

      // Define parameters for firefly
      const fireflyGeometry = new THREE.SphereGeometry(1, 16, 16);
      const fireflyMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0xd3eb7e) },
        },
        vertexShader: this.vertexShader(),
        fragmentShader: this.fragmentShader(),
        transparent: true,
        depthTest: false,
      });

      // Instanced attributes for position and opacity
      this.fireflyPositions = new Float32Array(this.fireflyCount * 3);
      this.fireflyVelocities = new Float32Array(this.fireflyCount * 3);
      const fireflyBlinkOffsets = new Float32Array(this.fireflyCount);

      for (let i = 0; i < this.fireflyCount; i++) {
        // Set random positions for each firefly
        this.fireflyPositions[i * 3] = (Math.random() * 2 - 1) * 200;
        this.fireflyPositions[i * 3 + 1] = (Math.random() * 2 - 1) * 200;
        this.fireflyPositions[i * 3 + 2] = (Math.random() * 2 - 1) * 200;

        // Set random velocities for each firefly
        this.fireflyVelocities[i * 3] = (Math.random() * 2 - 1) * 0.2;
        this.fireflyVelocities[i * 3 + 1] = (Math.random() * 2 - 1) * 0.2;
        this.fireflyVelocities[i * 3 + 2] = (Math.random() * 2 - 1) * 0.2;

        // Set random offset "phase" to make each firefly blink at different times
        fireflyBlinkOffsets[i] = Math.random() * Math.PI * 2;
      }

      this.fireflies = new THREE.InstancedMesh(
        fireflyGeometry,
        fireflyMaterial,
        this.fireflyCount
      );

      const dummy = new THREE.Object3D();

      for (let i = 0; i < this.fireflyCount; i++) {
        dummy.position.set(
          this.fireflyPositions[i * 3],
          this.fireflyPositions[i * 3 + 1],
          this.fireflyPositions[i * 3 + 2]
        );
        dummy.updateMatrix();
        this.fireflies.setMatrixAt(i, dummy.matrix);
      }
      this.fireflies.instanceMatrix.needsUpdate = true;

      // Store phases as an attribute
      this.fireflies.geometry.setAttribute(
        'phase',
        new THREE.InstancedBufferAttribute(fireflyBlinkOffsets, 1)
      );

      // Add the fireflies to the scene
      this.scene.add(this.fireflies);

      // Clock to manage time
      this.clock = new THREE.Clock();

      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);
      // Integrate firefly blinking effect
      this.fireflies.material.uniforms.time.value = this.clock.getElapsedTime();

      // Integrate random firefly movement
      this.fireflies.rotation.y += 0.002;
      const dummy = new THREE.Object3D();
      // Update positions based on velocities
      for (let i = 0; i < this.fireflyCount; i++) {
        // Get the current position and velocity
        const positionX = (this.fireflyPositions[i * 3] +=
          this.fireflyVelocities[i * 3]);
        const positionY = (this.fireflyPositions[i * 3 + 1] +=
          this.fireflyVelocities[i * 3 + 1]);
        const positionZ = (this.fireflyPositions[i * 3 + 2] +=
          this.fireflyVelocities[i * 3 + 2]);

        // Update position in the dummy object
        dummy.position.set(positionX, positionY, positionZ);
        dummy.updateMatrix();

        // Set the matrix for each firefly to update its position
        this.fireflies.setMatrixAt(i, dummy.matrix);

        const boundary = 100;
        if (Math.abs(positionX) > boundary) this.fireflyVelocities[i * 3] *= -1; // Reverse X velocity if boundary is crossed
        if (Math.abs(positionY) > boundary)
          this.fireflyVelocities[i * 3 + 1] *= -1; // Reverse Y velocity if boundary is crossed
        if (Math.abs(positionZ) > boundary)
          this.fireflyVelocities[i * 3 + 2] *= -1; // Reverse Z velocity if boundary is crossed
      }

      this.fireflies.instanceMatrix.needsUpdate = true;

      // render animation
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      // Define DOM element container to render on
      const container = this.$refs.threeContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_ThreeBackground.sass'
</style>
