import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { IoCaretDown } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControl";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const isFaculty = currentUser.role === "FACULTY";  // Adding the isFaculty check

  const handleDelete = (assignmentId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmDelete) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div>
      <AssignmentsControls />
      <br /><br /><br /><br />

      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> <IoCaretDown /> ASSIGNMENTS
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item key={assignment._id} className="wd-module p-0 mb-0 fs-6">
              <ListGroup className="wd-lessons rounded-0 mb-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center mb-0">
                  <BsGripVertical className="me-2 fs-3" /> <LuNewspaper className="me-2 fs-3" color="green" />
                  <div className="wd-assignment-text ms-2">
                    {/* Conditionally render the assignment title */}
                    {isFaculty ? (
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}  // Fixed template string syntax
                        className="wd-assignment-link d-block"
                      >
                        {assignment.title}
                      </Link>
                    ) : (
                      <strong>{assignment.title}</strong>  // Display title as plain text for students
                    )}
                    <span className="d-block">
                      <span style={{ color: '#DC3545' }}>Multiple Modules</span> | <b>Available From </b> {assignment.available} | <b>Available Until </b> {assignment.until} 
                    </span>
                    <span className="d-block"> <b>Due </b> {assignment.due} | {assignment.points}pts</span>
                  </div>
                   {/* Conditionally render the trash icon only for faculty */}
      {isFaculty && (
        <FaTrash
          className="text-danger me-2 mb-1"
          cursor={"pointer"}
          onClick={() => handleDelete(assignment._id)}
        />
      )}
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
