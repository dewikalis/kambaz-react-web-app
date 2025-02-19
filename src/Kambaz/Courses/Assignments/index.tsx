import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButton from "../Modules/LessonControlButton";
import { LuNewspaper } from "react-icons/lu";
import AssignmentsControlButtons from "./AssignmentsControlButton";
import AssignmentsControls from "./AssignmentsControl";
import { IoCaretDown } from "react-icons/io5";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom"; 

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div>
      <AssignmentsControls />
      <br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item key={assignment.id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> <IoCaretDown /> ASSIGNMENTS <AssignmentsControlButtons />
              </div>

              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" /> <LuNewspaper className="me-2 fs-3" color="green" />
                  <div className="wd-assignment-text ms-2">
                    <Link
                      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}  
                      className="wd-assignment-link d-block"
                    >
                      {assignment.title}
                    </Link>
                    <span className="d-block">
                      <span style={{ color: '#DC3545' }}>Multiple Modules</span> | <b>Not available until </b> {assignment.available} |
                    </span>
                    <span className="d-block"> <b>Due </b> {assignment.due} | {assignment.points}pts</span>
                  </div>
                  <div className="ms-auto">
                    <LessonControlButton />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
