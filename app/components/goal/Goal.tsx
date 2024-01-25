import "./Goal.scss";

const Goal = () => {
  return (
    <div className="goal-wrapper">
      <div className="container">
        <div className="goal">
          <div className="g-left">
            <img src="/goal2.jpg" alt="education image" />
          </div>
          <div className="g-right">
            <h2>Our goal is to help people</h2>
            <p>
              Bridge in the Gap is a nonprofit organization with a profound
              commitment to transforming lives through education. We firmly
              believe that education is not only a fundamental right but also a
              powerful catalyst for positive social change. Our mission is to
              break down educational barriers, foster a love for learning among
              children and adults, and invest in education as a means to inspire
              lasting and positive transformations in society.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
