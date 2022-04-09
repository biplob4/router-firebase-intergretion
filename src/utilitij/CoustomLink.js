import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CoustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
           style={{ color: match && "tomato",boxShadow :  match && "rgba(0, 0, 0, 0.16) 0px 1px 4px",background: match && "rgb(236, 230, 230)",marginTop:"20px"  }}
           to={to}
           {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CoustomLink;