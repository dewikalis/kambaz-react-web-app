import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

export default function Kambaz() {
    return (
      <div id="wd-kambaz">
             <table>
        <tr>
          <td valign="top">
            <KambazNavigation />
          </td>
          <td valign="top">
        <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
      </Routes>
      </td>
        </tr>
      </table>
      </div>
  );}
  
  