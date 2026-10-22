function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <p className="service-category">{service.categoryLabel}</p>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p className="service-detail">{service.detail}</p>
    </article>
  );
}

export default ServiceCard;
