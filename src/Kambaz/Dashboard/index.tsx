import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Course2.png" width={200} />
            <div>
              <h5> ARTD1235 Design Degree Project </h5>
              <p className="wd-dashboard-course-title">
                Design Capstone  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Course3.png" width={200} />
            <div>
              <h5> ARTD1236 Indentity & Branding </h5>
              <p className="wd-dashboard-course-title">
                Brand Design  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Course4.png" width={200} />
            <div>
              <h5> PSYC1237 Cross Cultural Psychology </h5>
              <p className="wd-dashboard-course-title">
              Cross Cultural Psychology  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Course5.png" width={200} />
            <div>
              <h5> JAP1238 Elementary Japanese  </h5>
              <p className="wd-dashboard-course-title">
              Japanese 1 </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Course6.png" width={200} />
            <div>
              <h5> PHIL1239 Philosophy  </h5>
              <p className="wd-dashboard-course-title">
             Philosophy of Emotion </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Course7.png" width={200} />
            <div>
              <h5> STRAT1240 Strategy & Action  </h5>
              <p className="wd-dashboard-course-title">
              Strategy & Action  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
