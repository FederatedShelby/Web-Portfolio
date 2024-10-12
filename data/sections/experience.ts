// Data used to populate Experience section contents
export const experienceData: any = Object.freeze({
  // PATH:  components > sections > ExperienceSection.vue
  // USAGE: "Experience" content
  experienceList: [
    {
      id: 1,
      roleTitle: 'Intern',
      employerName: 'Pulzze Systems, Inc',
      startDate: 'March 2018',
      endDate: 'Aug 2018',
      responsibilitiesList: [
        'Iteratively designed and modified company website UX to update information pertaining to company and its products.',
        'Compiled and presented competitor analysis findings in all-member meetings.',
        'Created and documented MVP demos using beta versions of company products.',
      ],
    },
    {
      id: 2,
      roleTitle: 'Product Engineer',
      employerName: 'Pulzze Systems, Inc',
      startDate: 'Aug 2018',
      endDate: 'Dec 2019',
      responsibilitiesList: [
        'Created GUI features to integrate with CLI-based product for visualized implementation of custom protocols in enabling device interactions for IoT at the edge.',
        'Fixed bugs and pushed code deliverables for GUI to reduce product knowledge training and development.'
      ],
    },
    {
      id: 3,
      roleTitle: 'Product Engineer',
      employerName: 'Alchera',
      startDate: 'Jan 2020',
      endDate: 'July 2023',
      responsibilitiesList: [
        'Assumed full front-end development responsibilities to ensure the timely delivery of project milestones for a camera-based service leveraging anomaly detection AI and ArcGIS to alert local emergency services of wildfires across the US.',
        'Led development and maintenance effort for product interfaces with designers, backend developers, and QA engineers to productize facial recognition services.',
        'Key contributor to frontend development for an easy-to-use, elaborate dashboard for tracking and adjusting work shifts for employees and HR members.',
      ],
    },
    {
      id: 4,
      roleTitle: 'MLOps Engineer',
      employerName: 'Alchera',
      startDate: 'Aug 2023',
      endDate: 'May 2024',
      responsibilitiesList: [
        'Transformed the manual model deployment process into a streamlined, automated pipeline leveraging the Google MLOps level 0 template.',
        'Contributed to the design and testing of PoC to upgrade MLOps pipeline to Google MLOps level 1, utilizing tools including Kubernetes (k8s), ArgoCD, Helm, MLflow, and Airflow.',
        'Key contributor to the architecture and development of a data labeling web UI solution, utilizing performant graphics rendering with PixiJS and edge detection filters.',
        'Achieved annual cost savings of $40,000+ via implemention of comprehensive AWS cloud cost optimization strategies over 3+ regions and 60+ instances across multiple AWS accounts.',
      ],
    },
  ],
});
