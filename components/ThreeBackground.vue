<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.initThreeJS();
  },
  methods: {
    initThreeJS() {
      const container = this.$refs.threeContainer;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 17.5;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement); // Append renderer to the correct container

      const group = new THREE.Group();
      scene.add(group);

      // Constants
      const particleCount = 500; // Fixed number of particles
      const radius = 10; // Radius of the sphere
      const maxConnections = 20;
      const minDistance = 2.5;
      const fixedVelocity = 0.01; // Fixed velocity magnitude for all particles
      const color = new THREE.Color(0xc0ffee); // Color for both particles and edges

      // Buffers
      const positions = new Float32Array(particleCount * particleCount * 3);
      const colors = new Float32Array(particleCount * particleCount * 3);
      const particlePositions = new Float32Array(particleCount * 3);
      const particlesData = [];

      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      const v = new THREE.Vector3();

      // Particles Setup
      for (let i = 0; i < particleCount; i++) {
        // Random spherical coordinates for particle positions
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = radius * Math.cbrt(Math.random());

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // Random direction with fixed velocity
        const velocity = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        )
          .normalize()
          .multiplyScalar(fixedVelocity);

        particlesData.push({
          velocity,
          numConnections: 0,
        });
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(particlePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );

      const particleMaterial = new THREE.PointsMaterial({
        color, // Set particle color
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      group.add(particles);

      // Lines Setup
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      lineGeometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      group.add(linesMesh);

      // Cursor-Following Particle
      const cursorParticleGeometry = new THREE.BufferGeometry();
      const cursorParticlePosition = new Float32Array(3);
      cursorParticleGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(cursorParticlePosition, 3)
      );

      const cursorParticle = new THREE.Points(
        cursorParticleGeometry,
        particleMaterial
      );
      scene.add(cursorParticle);

      // Mouse position in normalized device coordinates
      const mouse = new THREE.Vector2();
      const cursorPosition = new THREE.Vector3();

      // Event Listener for Mouse Movement
      container.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;
      });

      // Animation Loop
      function animate() {
        vertexpos = 0;
        colorpos = 0;
        numConnected = 0;

        particlesData.forEach((data, _) => (data.numConnections = 0));

        // Update particle positions and edges
        for (let i = 0; i < particleCount; i++) {
          const particleData = particlesData[i];

          v.set(
            particlePositions[i * 3],
            particlePositions[i * 3 + 1],
            particlePositions[i * 3 + 2]
          ).add(particleData.velocity);

          // Check if the particle is outside the sphere
          if (v.length() > radius) {
            // Reflect velocity to keep the particle inside the sphere
            v.normalize().multiplyScalar(radius);
            particleData.velocity.reflect(v.clone().normalize());
          }

          particlePositions[i * 3] = v.x;
          particlePositions[i * 3 + 1] = v.y;
          particlePositions[i * 3 + 2] = v.z;

          if (particleData.numConnections >= maxConnections) continue;

          for (let j = i + 1; j < particleCount; j++) {
            const particleDataB = particlesData[j];
            if (particleDataB.numConnections >= maxConnections) continue;

            const dx = particlePositions[i * 3] - particlePositions[j * 3];
            const dy =
              particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
            const dz =
              particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < minDistance) {
              particleData.numConnections++;
              particleDataB.numConnections++;

              const alpha = 1.0 - dist / minDistance;

              positions[vertexpos++] = particlePositions[i * 3];
              positions[vertexpos++] = particlePositions[i * 3 + 1];
              positions[vertexpos++] = particlePositions[i * 3 + 2];

              positions[vertexpos++] = particlePositions[j * 3];
              positions[vertexpos++] = particlePositions[j * 3 + 1];
              positions[vertexpos++] = particlePositions[j * 3 + 2];

              colors[colorpos++] = color.r * alpha;
              colors[colorpos++] = color.g * alpha;
              colors[colorpos++] = color.b * alpha;

              colors[colorpos++] = color.r * alpha;
              colors[colorpos++] = color.g * alpha;
              colors[colorpos++] = color.b * alpha;

              numConnected++;
            }
          }
        }

        // Update cursor particle position
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        vector.unproject(camera);
        vector.sub(camera.position).normalize();
        const distance = -camera.position.z / vector.z;
        cursorPosition
          .copy(camera.position)
          .add(vector.multiplyScalar(distance));

        cursorParticlePosition[0] = cursorPosition.x;
        cursorParticlePosition[1] = cursorPosition.y;
        cursorParticlePosition[2] = cursorPosition.z;

        cursorParticleGeometry.attributes.position.needsUpdate = true;

        lineGeometry.setDrawRange(0, numConnected * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        particleGeometry.attributes.position.needsUpdate = true;

        group.rotation.y += 0.002;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      animate();

      // Handle Window Resize
      window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    },
  },
};
</script>

<style scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}
</style>
