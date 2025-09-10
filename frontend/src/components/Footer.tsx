import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} LMS. All rights reserved.</p>
    </footer>
  );
};
export default Footer;