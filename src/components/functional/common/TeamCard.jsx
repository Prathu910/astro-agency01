const TeamCard = ({ img, name, position, socal_link }) => {
  return (
    <div className="courser-item">
      <div className="image-item">
        <img src={img} alt="Member Image" width={412} height={412} />
        <div className="hover-content">
          <h4>{name}</h4>
          <p>{position}</p>
          <ul>
            {socal_link.map(({ id, icon, link }) => {
              return (
                <li key={id}>
                  <a href={link} aria-label="social links">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
